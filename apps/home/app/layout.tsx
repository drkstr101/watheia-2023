import { type Metadata } from 'next';

import { RootLayout } from '@watheia/studio-ui';

// import global styles
import '@watheia/studio-ui';

export const metadata: Metadata = {
  title: {
    template: '%s - Watheia Labs',
    default: 'Watheia Labs - Award winning developer studio based in the tri-cities Washington',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
