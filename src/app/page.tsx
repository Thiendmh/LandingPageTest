import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProfileIntro } from '@/components/landing/profile-intro';
import { Solutions } from '@/components/landing/solutions';
import type { SolutionCardProps } from '@/components/landing/solutions';
import { Experience } from '@/components/landing/experience';
import { Education } from '@/components/landing/education';
import { About } from '@/components/landing/about';
import { CaseHighlights } from '@/components/landing/case-highlights';
import { Testimonials } from '@/components/landing/testimonials';
import { PrivateNote } from '@/components/landing/private-note';
import { Faq } from '@/components/landing/faq';
import { Blog } from '@/components/landing/blog';
import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from '@/components/landing/footer';
import { AnimatedSection } from '@/components/landing/animated-section';
import { BrainCircuit, Target, Handshake, Users, ClipboardCheck, Building, GraduationCap, Briefcase, BotMessageSquare } from 'lucide-react';

const leadershipSolutions: SolutionCardProps[] = [
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    title: 'Coaching 1:1 cho lãnh đạo',
    description: 'Khai mở tiềm năng lãnh đạo, vượt qua thách thức và tối ưu hóa hiệu suất.',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'Gắn kết đội ngũ lãnh đạo',
    description: 'Xây dựng đội ngũ lãnh đạo đồng lòng, hợp tác hiệu quả vì mục tiêu chung.',
  },
  {
    icon: <Target className="size-8 text-primary" />,
    title: 'Phát triển đội ngũ kế cận',
    description: 'Nuôi dưỡng và phát triển nhân tài, chuẩn bị năng lực cho vai trò lãnh đạo tương lai.',
  },
  {
    icon: <Handshake className="size-8 text-primary" />,
    title: 'Coaching hội nhập cho lãnh đạo mới',
    description: 'Hỗ trợ lãnh đạo mới hòa nhập nhanh, tạo tác động tích cực ngay từ đầu.',
  },
  {
    icon: <BotMessageSquare className="size-8 text-primary" />,
    title: 'Dàn xếp và giải quyết mâu thuẫn',
    description: 'Biến xung đột thành cơ hội phát triển đội ngũ thông qua đối thoại xây dựng.',
  },
];

const hrLDSolutions: SolutionCardProps[] = [
  {
    icon: <Building className="size-8 text-primary" />,
    title: 'Xây dựng văn hóa Coaching',
    description: 'Đồng hành cùng tổ chức kiến tạo một môi trường học hỏi và phát triển liên tục.',
  },
  {
    icon: <Briefcase className="size-8 text-primary" />,
    title: 'Đối tác chiến lược L&D',
    description: 'Hợp tác với đội ngũ nhân sự để thiết kế và thực thi các chương trình phát triển hiệu quả.',
  },
  {
    icon: <GraduationCap className="size-8 text-primary" />,
    title: 'Nâng cao năng lực đội ngũ đào tạo',
    description: 'Chuyển giao và nâng cao năng lực cho đội ngũ giảng viên, coach và người điều phối nội bộ.',
  },
  {
    icon: <Handshake className="size-8 text-primary" />,
    title: 'Gia tăng sự gắn kết nhân viên',
    description: 'Cùng xây dựng các giải pháp sáng tạo để tạo động lực và giữ chân nhân tài.',
  },
  {
    icon: <ClipboardCheck className="size-8 text-primary" />,
    title: 'Xây dựng khung năng lực nhân sự',
    description: 'Đóng vai trò đối tác, giúp định hình lộ trình phát triển sự nghiệp cho đội ngũ nhân sự.',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <ProfileIntro />
        </AnimatedSection>
        <AnimatedSection>
          <Solutions id="solutions-leader" title="Giải pháp cho Lãnh đạo & Đội nhóm" solutions={leadershipSolutions} />
        </AnimatedSection>
        <AnimatedSection>
          <Solutions id="solutions-hr" title="Giải pháp cho HR & L&D" solutions={hrLDSolutions} />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Education />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <CaseHighlights />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <PrivateNote />
        </AnimatedSection>
        <AnimatedSection>
          <Faq />
        </AnimatedSection>
        <AnimatedSection>
          <Blog />
        </AnimatedSection>
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
