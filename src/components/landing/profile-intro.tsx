import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';

export function ProfileIntro() {
  return (
    <section id="profile" className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl font-bold md:text-3xl">
          Executive Coach | Certified Coach Trainer & Mentor Coach | DDI Certified Facilitator | SHRM-SCP
        </h2>
        <p className="mt-2 text-base text-foreground/80">Profile · Digital creator</p>
        <div className="mt-6 flex justify-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:example@example.com" aria-label="Email">
              <Mail className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="tel:+84123456789" aria-label="Zalo/WhatsApp">
              <Phone className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
