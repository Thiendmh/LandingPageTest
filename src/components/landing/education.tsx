import { Badge } from "@/components/ui/badge";

const education = [
  "CFVG – French Vietnamese School of Management",
  "Foreign Trade University",
  "Học Viện Quản Lý PACE",
];

const certifications = [
  { name: "ICF PCC", provider: "International Coaching Federation" },
  { name: "ICF Team Coaching (ACTC)", provider: "International Coaching Federation" },
  { name: "DDI Certified Facilitator", provider: "DDI" },
  { name: "SHRM-SCP", provider: "SHRM" },
  { name: "Certified Coach Trainer & Mentor Coach", provider: "Center for Executive Coaching APAC" },
  { name: "Coaching Supervision", provider: "The Goldvarg Consulting Group" },
  { name: "Team Coaching", provider: "Team Coaching Studio" },
  { name: "Action Learning Coach", provider: "WIAL Vietnam" },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Học vấn & Chứng chỉ</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-center font-headline text-2xl font-semibold">Học vấn</h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item} className="rounded-lg border bg-card p-4 text-center text-card-foreground shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-center font-headline text-2xl font-semibold">Chứng chỉ chuyên môn</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert) => (
                <Badge key={cert.name} variant="secondary" className="px-3 py-1 text-sm">
                  {cert.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
