import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Về Minh Hạnh</h2>
        <Card className="mx-auto mt-12 max-w-4xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="https://picsum.photos/seed/profile/400/500"
                alt="Chân dung Minh Hạnh"
                width={400}
                height={500}
                className="h-full w-full object-cover md:w-64"
                data-ai-hint="professional headshot"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-8">
              <p className="text-lg leading-relaxed text-card-foreground/90">
                Với hơn 15 năm kinh nghiệm trong ngành nhân sự và phát triển tổ chức tại các tập đoàn đa quốc gia như Ford, Hanesbrands, Hạnh kết hợp sự thấu hiểu môi trường doanh nghiệp với phương pháp coaching thực chiến.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-card-foreground/90">
                Hạnh tin rằng sự phát triển bền vững bắt nguồn từ việc khai phá nội lực của mỗi cá nhân. Phong cách của chị ấm áp, thẳng thắn và tập trung vào kết quả, giúp các nhà lãnh đạo và đội ngũ tạo ra tác động tích cực và lâu dài.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
