import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, HeartHandshake } from "lucide-react";

const highlights = [
  {
    icon: <TrendingUp className="size-10 text-primary" />,
    title: "Tăng 25% hiệu suất quản lý",
    description: "Sau 6 tháng coaching 1:1, đội ngũ quản lý cấp trung tại một công ty công nghệ đã cải thiện 25% chỉ số hiệu suất công việc.",
  },
  {
    icon: <Users className="size-10 text-primary" />,
    title: "Cải thiện 40% chỉ số gắn kết",
    description: "Triển khai văn hóa coaching giúp tăng 40% điểm gắn kết đội ngũ, theo khảo sát nhân viên thường niên.",
  },
  {
    icon: <HeartHandshake className="size-10 text-primary" />,
    title: "Giảm 50% tỉ lệ nghỉ việc",
    description: "Giảm một nửa tỉ lệ nghỉ việc ở nhóm nhân sự tài năng sau khi áp dụng chương trình phát triển và giữ chân nhân tài.",
  },
];

export function CaseHighlights() {
  return (
    <section id="case-highlights" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Kết quả thực tế</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="text-center">
              <CardHeader className="items-center">
                {highlight.icon}
                <CardTitle className="font-headline text-2xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
