import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    role: 'Country Learning & Development Manager',
    company: 'Hanesbrands Inc.',
    period: '2018 - 2023',
    description: 'Dẫn dắt chiến lược và hoạt động phát triển, đào tạo cho toàn bộ nhân viên tại Việt Nam, tập trung vào xây dựng năng lực lãnh đạo và văn hóa học hỏi.',
  },
  {
    role: 'FPS PE Manager - Ford Production System',
    company: 'Ford Motor Company',
    period: '2012 - 2018',
    description: 'Quản lý và triển khai hệ thống sản xuất của Ford, tối ưu hóa quy trình và nâng cao hiệu suất tại nhà máy.',
  },
  {
    role: 'Former HR at Ford',
    company: 'Ford Motor Company',
    period: '2007 - 2012',
    description: 'Tham gia vào các mảng khác nhau của Nhân sự, từ tuyển dụng, đào tạo đến quan hệ lao động, góp phần xây dựng nền tảng nhân sự vững chắc.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Kinh nghiệm nổi bật</h2>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
          <div className="relative flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="relative flex items-center justify-between md:justify-normal">
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}></div>
                <div className="z-10 flex size-4 items-center justify-center rounded-full bg-primary ring-8 ring-muted"></div>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'order-3 text-left' : 'order-1 text-left md:text-right'}`}>
                  <Card>
                    <CardHeader>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
