import { Button } from '@/components/ui/button';
import { CheckCircle2, Download } from 'lucide-react';
import Link from 'next/link';

const trustBadges = ['Ford', 'Hanesbrands', 'CFVG', 'FTU'];

export function Hero() {
  return (
    <section id="hero" className="py-20 text-center md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Phát triển bản thân để dẫn dắt đội ngũ.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Đồng hành cùng lãnh đạo và đội ngũ nhân sự kiến tạo sự thay đổi bền vững, từ nội lực con người đến sức mạnh của cả tổ chức.
        </p>
        <ul className="mx-auto mt-8 grid max-w-lg grid-cols-1 justify-center gap-4 text-left sm:grid-cols-3 sm:max-w-none md:gap-8">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-primary" />
            <span>Bền vững từ bên trong</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-primary" />
            <span>Kết quả đo lường được</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-primary" />
            <span>Thực chiến, dễ áp dụng</span>
          </li>
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" id="click_CTA_Hero">
          <Button size="lg" asChild>
            <Link href="#contact">Đặt lịch hẹn tư vấn</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/mini-guide.pdf" download>
              <Download className="mr-2 size-4" />
              Tải Mini-Guide gắn kết đội ngũ
            </a>
          </Button>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Được tin tưởng bởi</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <span key={badge} className="font-headline text-xl font-semibold text-foreground/70">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
