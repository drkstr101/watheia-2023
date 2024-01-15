import model, { ModelName } from './content-model';

const modelsUnderTest: ModelName[] = [
  'BackgroundImage',
  'Badge',
  'Button',
  'CarouselSection',
  'CheckboxFormControl',
  'Config',
  'DividerSection',
  'EmailFormControl',
  'FeaturedItem',
  'FeaturedItemsSection',
  'FeaturedPeopleSection',
  'FeaturedPostsSection',
  'Footer',
  'FooterLinksGroup',
  'FormBlock',
  'GenericSection',
  'Header',
  'ImageBlock',
  'ImageGallerySection',
  'Link',
  'MetaTag',
  'PagedPostsSection',
  'PageLayout',
  'Person',
  'PostFeedLayout',
  'PostFeedSection',
  'PostLayout',
  'PricingPlan',
  'PricingSection',
  'RecentPostsSection',
  'SelectFormControl',
  'Seo',
  'Social',
  'SubmitButtonFormControl',
  'SubNav',
  'TextareaFormControl',
  'TextFormControl',
  'ThemeStyle',
  'ThemeStyleButton',
  'ThemeStyleHeading',
  'ThemeStyleLink',
  'TitleBlock',
  'VideoBlock',
];

describe('@watheia/content-model', () => {
  it.each(modelsUnderTest)('provides a model named %s', (name) => {
    expect(model).toHaveProperty(name);
    expect(model[name].name).toEqual(name);
  });
});
