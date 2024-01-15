import { BackgroundImage } from './models/BackgroundImage';
import { Badge } from './models/Badge';
import { Button } from './models/Button';
import { CarouselSection } from './models/CarouselSection';
import { CheckboxFormControl } from './models/CheckboxFormControl';
import { Config } from './models/Config';
import { DividerSection } from './models/DividerSection';
import { EmailFormControl } from './models/EmailFormControl';
import { FeaturedItem } from './models/FeaturedItem';
import { FeaturedItemsSection } from './models/FeaturedItemsSection';
import { FeaturedPeopleSection } from './models/FeaturedPeopleSection';
import { FeaturedPostsSection } from './models/FeaturedPostsSection';
import { Footer } from './models/Footer';
import { FormBlock } from './models/FormBlock';
import { GenericSection } from './models/GenericSection';
import { Header } from './models/Header';
import { ImageBlock } from './models/ImageBlock';
import { ImageGallerySection } from './models/ImageGallerySection';
import { Link } from './models/Link';
import { PageLayout } from './models/PageLayout';
import { PagedPostsSection } from './models/PagedPostsSection';
import { Person } from './models/Person';
import { PostFeedLayout } from './models/PostFeedLayout';
import { PostFeedSection } from './models/PostFeedSection';
import { PostLayout } from './models/PostLayout';
import { PricingPlan } from './models/PricingPlan';
import { PricingSection } from './models/PricingSection';
import { RecentPostsSection } from './models/RecentPostsSection';
import { SelectFormControl } from './models/SelectFormControl';
import { Social } from './models/Social';
import { SubNav } from './models/SubNav';
import { SubmitButtonFormControl } from './models/SubmitButtonFormControl';
import { TextFormControl } from './models/TextFormControl';
import { TextareaFormControl } from './models/TextareaFormControl';
import { ThemeStyle } from './models/ThemeStyle';
import { ThemeStyleButton } from './models/ThemeStyleButton';
import { ThemeStyleHeading } from './models/ThemeStyleHeading';
import { ThemeStyleLink } from './models/ThemeStyleLink';
import { TitleBlock } from './models/TitleBlock';
import { VideoBlock } from './models/VideoBlock';

import { FooterLinksGroup } from './models/FooterLinksGroup';
import { MetaTag } from './models/MetaTag';
import { Seo } from './models/Seo';

const model = {
  BackgroundImage,
  Badge,
  Button,
  CarouselSection,
  CheckboxFormControl,
  Config,
  DividerSection,
  EmailFormControl,
  FeaturedItem,
  FeaturedItemsSection,
  FeaturedPeopleSection,
  FeaturedPostsSection,
  Footer,
  FormBlock,
  GenericSection,
  Header,
  ImageBlock,
  ImageGallerySection,
  Link,
  PageLayout,
  PagedPostsSection,
  Person,
  PostFeedLayout,
  PostFeedSection,
  PostLayout,
  PricingPlan,
  PricingSection,
  RecentPostsSection,
  SelectFormControl,
  Social,
  SubNav,
  SubmitButtonFormControl,
  TextFormControl,
  TextareaFormControl,
  ThemeStyle,
  ThemeStyleButton,
  ThemeStyleHeading,
  ThemeStyleLink,
  TitleBlock,
  VideoBlock,
  MetaTag,
  FooterLinksGroup,
  Seo,
} as const;

export type CabbageModel = typeof model;
export type ModelName = keyof CabbageModel;

export default model;
