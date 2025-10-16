import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Coaching 1:1 và coaching đội nhóm khác nhau thế nào?",
    answer: "Coaching 1:1 tập trung vào mục tiêu cá nhân của nhà lãnh đạo. Team coaching giúp cả đội nhóm cải thiện sự phối hợp và cùng đạt mục tiêu chung.",
  },
  {
    question: "Chương trình coaching thường kéo dài bao lâu?",
    answer: "Một lộ trình coaching tiêu chuẩn kéo dài từ 3-6 tháng, với các buổi gặp định kỳ để đảm bảo sự tiến bộ và đồng hành liên tục.",
  },
  {
    question: "Làm sao để đo lường hiệu quả coaching?",
    answer: "Chúng ta sẽ cùng xác định các mục tiêu và chỉ số đo lường (KPIs) ngay từ đầu. Hiệu quả được đánh giá dựa trên sự tiến bộ so với mục tiêu và phản hồi 360 độ.",
  },
  {
    question: "Phong cách coaching của Hạnh là gì?",
    answer: "Ấm áp, thẳng thắn và tập trung vào kết quả. Hạnh tạo ra một không gian an toàn để bạn khám phá, đồng thời đưa ra những câu hỏi thách thức để bạn bứt phá.",
  },
  {
    question: "Buổi tư vấn đầu tiên có mất phí không?",
    answer: "Buổi trò chuyện đầu tiên (30-60 phút) hoàn toàn miễn phí, giúp chúng ta tìm hiểu và xem liệu có phù hợp để đồng hành cùng nhau không.",
  },
  {
    question: "Thông tin của tôi có được bảo mật không?",
    answer: "Tuyệt đối. Mọi thông tin bạn chia sẻ trong các phiên coach đều được cam kết bảo mật hoàn toàn.",
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
