import { ContactSection } from '@home/components/ContactSection';
import { Container } from '@home/components/Container';
import { FadeIn } from '@home/components/FadeIn';
import { MDXComponents } from '@home/components/MDXComponents';
import { PageLinks } from '@home/components/PageLinks';
import { formatDate } from '@home/lib/formatDate';
import { loadArticles, type Article, type MDXEntry } from '@home/lib/mdx';

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>;
  children: React.ReactNode;
}) {
  const allArticles = await loadArticles();
  const moreArticles = allArticles.filter(({ metadata }) => metadata !== article).slice(0, 2);

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time dateTime={article.date} className="order-first text-sm text-neutral-950">
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </>
  );
}
