import { AlertTriangle, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: AlertTriangle,
      title: t('problem.cards.bottleneck.title'),
      description: t('problem.cards.bottleneck.description'),
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
    {
      icon: Clock,
      title: t('problem.cards.cost.title'),
      description: t('problem.cards.cost.description'),
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30",
    },
    {
      icon: Users,
      title: t('problem.cards.risk.title'),
      description: t('problem.cards.risk.description'),
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
            {t('problem.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('problem.title')}{" "}
            <span className="gradient-text">{t('problem.title_highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('problem.description')}
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`glass-card-glow p-8 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${problem.bgColor} ${problem.borderColor} border flex items-center justify-center mb-6`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
