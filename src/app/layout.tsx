import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Coach Minh Hạnh - Executive Coach & HR L&D Partner',
  description: 'Đồng hành cùng lãnh đạo và đội ngũ nhân sự kiến tạo sự thay đổi bền vững, từ nội lực con người đến sức mạnh của cả tổ chức.',
  keywords: 'executive coach, hr, l&d, leadership development, team coaching, Minh Hạnh, khai vấn lãnh đạo, văn hóa coaching',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
