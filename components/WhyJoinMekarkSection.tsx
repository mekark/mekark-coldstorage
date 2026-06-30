import {
  Factory,
  GraduationCap,
  TrendingUp,
  Cpu,
  Handshake,
  Globe,
  type LucideIcon,
} from "lucide-react";

const cards: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Factory,
    title: "Work on Landmark Industrial Projects",
    description:
      "Be part of large-scale factory, warehouse, and industrial building projects that shape India's manufacturing landscape.",
  },
  {
    icon: GraduationCap,
    title: "Learn from Industry Experts",
    description:
      "Collaborate with experienced engineers, project managers, and technical professionals who support your career growth.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Opportunities",
    description:
      "We encourage continuous learning, skill development, and internal growth to help you build a rewarding career.",
  },
  {
    icon: Cpu,
    title: "Innovation & Advanced Technology",
    description:
      "Work with modern engineering practices, advanced in-house manufacturing, and the latest construction technologies.",
  },
  {
    icon: Handshake,
    title: "Collaborative & Supportive Culture",
    description:
      "Join a team that values teamwork, integrity, innovation, and mutual respect while working towards common goals.",
  },
  {
    icon: Globe,
    title: "Make a Lasting Impact",
    description:
      "Every project you contribute to helps businesses expand and strengthens India's industrial infrastructure.",
  },
];

export default function WhyJoinMekarkSection() {
  return (
    <section className="relative box-border w-full border-y border-[#f3f4f6] bg-[#fafafa] pb-16 pt-[81px] text-center text-[36px] text-[#111827] md:min-h-[527px] md:pb-20">
      <div className="mx-auto flex w-full flex-col items-center px-4 md:px-8 lg:px-[80px]">
        <div className="relative isolate flex items-start justify-center pb-3">
          <h2 className="relative z-0 shrink-0 text-[30px] font-bold leading-8 sm:text-[36px]">
            <span className="leading-8">Why join </span>
            <span className="leading-8 text-[#e31b23]">Mekark?</span>
          </h2>
          <span className="absolute bottom-0 left-1/2 z-[1] h-[3px] w-14 -translate-x-1/2 shrink-0 bg-[#e31b23]" />
        </div>

        <div className="mt-12 flex w-full max-w-[1340px] flex-wrap items-stretch justify-center gap-[22.3px] text-[13.96px]">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="box-border flex w-full max-w-[194.8px] flex-col items-center gap-[10.3px] rounded-[11px] border border-[#f3f4f6] border-solid bg-white px-[22.3px] pb-[42px] pt-[29.8px] shadow-[0px_3.7px_14.89px_rgba(0,0,0,0.03)] sm:w-[calc(50%-11.15px)] lg:w-[194.8px]"
              >
                <div className="flex h-[44.7px] w-[44.7px] items-center justify-center rounded-[10px] bg-[rgba(227,27,35,0.08)]">
                  <Icon
                    className="h-[22px] w-[22px] text-[#e31b23]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="flex w-full flex-col items-center self-stretch pt-[7.2px]">
                  <div className="relative font-semibold leading-[17.45px] text-[#111827]">
                    {card.title}
                  </div>
                </div>
                <div className="flex w-full flex-1 flex-col items-center self-stretch text-[12.1px] text-[#6b7280]">
                  <div className="relative leading-[19.66px]">{card.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
