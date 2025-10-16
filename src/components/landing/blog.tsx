import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "5 sai lầm khi xây dựng văn hóa doanh nghiệp",
    description: "Khám phá những cạm bẫy phổ biến và cách để xây dựng một nền tảng văn hóa thực sự vững chắc.",
    image: PlaceHolderImages.find(p => p.id === 'blog1'),
    link: "#",
  },
  {
    title: "Nghệ thuật lắng nghe trong quản lý",
    description: "Tại sao lắng nghe lại là kỹ năng quan trọng nhất của một nhà lãnh đạo? Cùng tìm hiểu các cấp độ lắng nghe.",
    image: PlaceHolderImages.find(p => p.id === 'blog2'),
    link: "#",
  },
  {
    title: "Làm sao để 'grow' chính mình trước khi 'grow' người khác?",
    description: "Hành trình phát triển bản thân là nền tảng cho mọi thành công trong vai trò lãnh đạo. Bắt đầu từ đâu?",
    image: PlaceHolderImages.find(p => p.id === 'blog3'),
    link: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Blog & Chia sẻ</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden">
              {post.image && (
                <Image
                  src={post.image.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={post.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <p className="flex-grow text-foreground/80">{post.description}</p>
                <Button variant="link" asChild className="mt-4 self-start p-0">
                  <Link href={post.link}>Đọc thêm &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
