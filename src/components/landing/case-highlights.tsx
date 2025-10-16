import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, HeartHandshake } from "lucide-react";

const highlights = [
  {
    icon: <TrendingUp className="size-10 text-primary" />,
    title: "Tăng 25% Hiệu suất",
    description: "Tăng 25% chỉ số hiệu suất của đội ngũ quản lý cấp trung trong 6 tháng tại một công ty công nghệ thông qua chương trình coaching 1:1.",
  },
  {
    icon: <Users className="size-10 text-primary" />,
    title: "Cải thiện 40% Gắn kết",
    description: "Cải thiện 40% chỉ số gắn kết của đội ngũ sau 1 năm triển khai văn hóa coaching và các hoạt động team building chiến lược.",
  },
  {
    icon: <HeartHandshake className="size-10 text-primary" />,
    title: "Giảm 50% Tỷ lệ nghỉ việc",
    description: "Giảm 50% tỷ lệ nghỉ việc ở nhóm nhân sự tài năng (high-potential) sau khi áp dụng chương trình phát triển và giữ chân nhân tài.",
  },
];

export function CaseHighlights() {
  return (
    <section id="case-highlights" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Case Highlights</h2>
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
