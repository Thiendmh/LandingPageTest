import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const testimonials = [
  {
    quote: "Chương trình coaching của Hạnh giúp tôi thay đổi tư duy lãnh đạo. Tôi học được cách lắng nghe và trao quyền, giúp hiệu suất cả team tăng vượt bậc.",
    name: "Nguyễn Văn An",
    title: "CEO, Tech Startup",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "Hạnh không chỉ là một nhà tư vấn, mà là một đối tác L&D thực thụ. Chị giúp chúng tôi xây dựng một văn hóa học hỏi bền vững từ gốc rễ.",
    name: "Trần Thị Bích",
    title: "Trưởng phòng Nhân sự, Tập đoàn FMCG",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    quote: "Buổi coaching 5:00 sáng là một trải nghiệm độc đáo. Nó cho tôi không gian tĩnh lặng để nhìn lại bản thân và xác định những ưu tiên quan trọng nhất.",
    name: "Lê Minh Cường",
    title: "Giám đốc Marketing",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Người trong cuộc nói gì?</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 max-w-xs md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <p className="flex-grow text-foreground/80">"{testimonial.quote}"</p>
                      <div className="mt-4 flex items-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                          data-ai-hint="person avatar"
                        />
                        <div className="ml-4 text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
