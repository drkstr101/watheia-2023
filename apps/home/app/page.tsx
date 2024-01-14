import { HomeView } from '@watheia/studio-ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
};

export default async function Index() {
  return <HomeView />;
}
