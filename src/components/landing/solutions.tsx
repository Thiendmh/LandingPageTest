import type { ReactElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface SolutionCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

interface SolutionsProps {
  id: string;
  title: string;
  solutions: SolutionCardProps[];
}

export function Solutions({ id, title, solutions }: SolutionsProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {solution.icon}
                <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
