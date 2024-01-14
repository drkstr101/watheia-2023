import '@watheia/studio-ui/style.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - Watheia Labs',
    default: 'Watheia Labs - We make technology easy for you.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
