import './globals.css';
import { Inter, Lexend_Deca } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend_Deca({ subsets: ['latin'] });

export const metadata = {
  title: 'Ronan Salvador',
  description: 'Projeto de estudos do Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
