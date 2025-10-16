import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Buổi coaching 5:00 sáng có gì đặc biệt?",
    answer: "Đây là 'giờ vàng' khi tâm trí minh mẫn nhất, không bị xao nhãng bởi công việc hàng ngày. Bắt đầu ngày mới với sự tập trung sâu sắc giúp tạo ra những thay đổi và nhận thức đột phá.",
  },
  {
    question: "Chương trình coaching thường kéo dài bao lâu?",
    answer: "Một chương trình coaching tiêu chuẩn thường kéo dài từ 3 đến 6 tháng, với các buổi gặp mặt định kỳ (hàng tuần hoặc 2 tuần/lần) để đảm bảo sự tiến bộ và hỗ trợ liên tục.",
  },
  {
    question: "Làm thế nào để đo lường hiệu quả coaching?",
    answer: "Trước khi bắt đầu, chúng ta sẽ cùng nhau xác định các mục tiêu cụ thể và các chỉ số đo lường (KPIs). Hiệu quả được đánh giá dựa trên sự tiến bộ so với các mục tiêu này, cùng với phản hồi 360 độ và tự đánh giá.",
  },
  {
    question: "Bạn có cung cấp coaching cho đội nhóm không?",
    answer: "Có, tôi cung cấp các chương trình Team Coaching và workshop để giúp các đội nhóm cải thiện sự gắn kết, giao tiếp hiệu quả và cùng nhau đạt được các mục tiêu chung của tổ chức.",
  },
];


export function Faq() {
  return (
    <section id="faq" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Câu hỏi thường gặp</h2>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
