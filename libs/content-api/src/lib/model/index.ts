import { Button } from './Button';
import { Card } from './Card';
import { CardsSection } from './CardsSection';
import { Config } from './Config';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { Image } from './Image';
import { Link } from './Link';
import { Page } from './Page';
import { ThemeStyle } from './ThemeStyle';

const model = {
  Button,
  Card,
  CardsSection,
  Config,
  Footer,
  Header,
  HeroSection,
  Image,
  Link,
  Page,
  ThemeStyle,
} as const;

export type ContentModel = typeof model;

export default model;
