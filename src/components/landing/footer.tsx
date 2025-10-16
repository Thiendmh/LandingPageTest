import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone, Star } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
           <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
            <Star className="size-6" />
            <span>Minh Hạnh</span>
          </Link>
          <div className="flex items-center gap-2">
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
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Minh Hạnh. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
                <Button variant="link" className="text-muted-foreground">VI</Button>
                <span className="text-muted-foreground">/</span>
                <Button variant="link" className="text-muted-foreground">EN</Button>
            </div>
        </div>
      </div>
    </footer>
  );
}
