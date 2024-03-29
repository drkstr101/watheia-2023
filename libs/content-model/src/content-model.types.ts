// Types
//////

/**
 * A key type representing all valid model names. We are specifying these
 * up front here so that it can be used to validate the `models` and `types`
 * dictionaries exported by this library.
 **/
// export type ModelName =
//   | 'Button'
//   | 'Card'
//   | 'CardsSection'
//   | 'Config'
//   | 'Footer'
//   | 'Header'
//   | 'HeroSection'
//   | 'Image'
//   | 'Link'
//   | 'Page'
//   | 'Theme';

// Atoms
// The lowest level UI elements on a page.
////

/**
 * Button model props
 */
export interface ButtonProps {
  type: 'Button';
  __metadata: { type: 'object'; id: string };
  label: string;
  url: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'clear';
  color:
    | 'default'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
}

export interface ImageProps {
  type: 'Image';
  __metadata: { type: 'object'; id: string };
  src: string;
  altText: string;
}

export interface LinkProps {
  type: 'Link';
  __metadata: { type: 'object'; id: string };
  label: string;
  href: string;
  /** @deprecated Use proper context styles instead */
  underline?: 'alway' | 'hover' | 'none';
  color?: 'neutral' | 'primary' | 'secondary' | 'accent';
}

// Molecules
// A complex block UI element. May compose multiple other blocks atoms or
// molecules together and usually expands to take up the available width, but
// can be configured to display in-line as well.
////

export interface CardProps {
  type: 'Card';
  __metadata: { id: string; type: 'object' };
  text?: string;
  image?: ImageProps;
  actions?: ButtonProps[];
}

// Sections
// Sections are a specific kind of molecule. They are the top-level elements contained
// by a page, and who's labels may affect navigation or the rendering of a ToC for the page
////

export interface HeroSectionProps {
  type: 'HeroSection';
  __metadata: { type: 'object'; id: string };
  title?: string;
  subtitle?: string;
  text?: string;
  actions?: ButtonProps[];
  image?: ImageProps;
}

// type ISectionProps = HeroSectionProps;

// Pages
// Pages are the entrypoint to the UI... TODO

export interface PageProps {
  type: 'Page';
  slug: string;
  __metadata: { type: 'page'; id: string };
  title: string;
  subtitle?: string;
  text?: string;
  sections?: HeroSectionProps[];
}

// export type IPageProps = PageProps;

// Data
// Global static data not represented by any specific UI element.
////

export interface ThemeProps {
  type: 'Theme';
  __metadata: { type: 'data'; id: string };
  // TODO configure color palettes
}

export interface HeaderProps {
  type: 'Header';
  __metadata: { type: 'object'; id: string };
  navLinks?: LinkProps[];
}

export interface FooterProps {
  type: 'Footer';
  __metadata: { type: 'object'; id: string };
  navLinks?: LinkProps[];
  copyrightText: string;
}
