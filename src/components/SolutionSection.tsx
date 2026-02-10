import { FolderCode, FileSpreadsheet, Brain, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: FolderCode,
      title: t('solution.steps.1.title'),
      description: t('solution.steps.1.description'),
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30",
    },
    {
      number: "02",
      icon: FileSpreadsheet,
      title: t('solution.steps.2.title'),
      description: t('solution.steps.2.description'),
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30",
    },
    {
      number: "03",
      icon: Brain,
      title: t('solution.steps.3.title'),
      description: t('solution.steps.3.description'),
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 md:py-32 relative bg-muted/20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-neon-cyan uppercase tracking-wider mb-4 block">
            {t('solution.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('solution.title')}{" "}
            <span className="gradient-text">{t('solution.title_highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('solution.description')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-neon-purple via-neon-cyan to-green-400 -translate-y-1/2" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-foreground shadow-glow-purple">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.bgColor} ${step.borderColor} border flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (Mobile & Tablet) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
