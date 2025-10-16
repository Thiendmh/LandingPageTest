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
import { Separator } from '@/components/ui/separator';
import { BrainCircuit, Target, Handshake, Users, ClipboardCheck, Building, GraduationCap, Briefcase, BotMessageSquare } from 'lucide-react';

const leadershipSolutions: SolutionCardProps[] = [
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    title: '1:1 Executive Coaching',
    description: 'Chương trình coaching cá nhân hóa giúp lãnh đạo khai phá tiềm năng, vượt qua thách thức và tối ưu hóa hiệu suất.',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'Leadership Team Alignment',
    description: 'Xây dựng đội ngũ lãnh đạo gắn kết, đồng lòng hướng tới mục tiêu chung và nâng cao năng lực hợp tác chiến lược.',
  },
  {
    icon: <Target className="size-8 text-primary" />,
    title: 'High-Potential Development',
    description: 'Nuôi dưỡng và phát triển đội ngũ kế cận tài năng, chuẩn bị cho họ những kỹ năng cần thiết cho vai trò lãnh đạo tương lai.',
  },
  {
    icon: <Handshake className="size-8 text-primary" />,
    title: 'Onboarding Coaching for Leaders',
    description: 'Hỗ trợ các nhà lãnh đạo mới hội nhập nhanh chóng, xây dựng uy tín và tạo ra tác động tích cực ngay từ những ngày đầu.',
  },
  {
    icon: <BotMessageSquare className="size-8 text-primary" />,
    title: 'Conflict Resolution',
    description: 'Cung cấp kỹ năng và công cụ để giải quyết mâu thuẫn một cách xây dựng, biến xung đột thành cơ hội phát triển.',
  },
];

const hrLDSolutions: SolutionCardProps[] = [
  {
    icon: <Building className="size-8 text-primary" />,
    title: 'Building Coaching Culture',
    description: 'Tư vấn và triển khai lộ trình xây dựng văn hóa coaching trong tổ chức, thúc đẩy sự học hỏi và phát triển liên tục.',
  },
  {
    icon: <Briefcase className="size-8 text-primary" />,
    title: 'L&D Strategy Partnering',
    description: 'Đồng hành cùng HR L&D với vai trò đối tác chiến lược, thiết kế và thực thi các chương trình phát triển nhân sự hiệu quả.',
  },
  {
    icon: <GraduationCap className="size-8 text-primary" />,
    title: 'Train-the-Trainer / Facilitator',
    description: 'Đào tạo và cấp chứng chỉ cho đội ngũ giảng viên, người điều phối nội bộ, nâng cao năng lực triển khai chương trình.',
  },
  {
    icon: <Handshake className="size-8 text-primary" />,
    title: 'Team Engagement Programs',
    description: 'Thiết kế các giải pháp sáng tạo và thực tiễn để tăng cường sự gắn kết, tạo động lực và giữ chân nhân tài.',
  },
  {
    icon: <ClipboardCheck className="size-8 text-primary" />,
    title: 'HR Competency Framework',
    description: 'Xây dựng và áp dụng khung năng lực cho đội ngũ HR, giúp định hình con đường phát triển sự nghiệp rõ ràng và hiệu quả.',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProfileIntro />
        <Solutions id="solutions-leader" title="Giải pháp cho Lãnh đạo, Đội nhóm & Tổ chức" solutions={leadershipSolutions} />
        <Solutions id="solutions-hr" title="Giải pháp cho HR L&D" solutions={hrLDSolutions} />
        <Experience />
        <Education />
        <About />
        <CaseHighlights />
        <Testimonials />
        <PrivateNote />
        <Faq />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
