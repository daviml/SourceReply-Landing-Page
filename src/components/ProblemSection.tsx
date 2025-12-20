import { Clock, DollarSign, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "O Gargalo do N1",
    description: "Chamados acumulam e demoram dias para serem classificados. Sua equipe de suporte está sobrecarregada e os clientes insatisfeitos.",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    borderColor: "border-neon-purple/30",
  },
  {
    icon: DollarSign,
    title: "Custo Alto",
    description: "Desenvolvedores Sênior parando de codar para responder dúvidas simples. Cada interrupção custa tempo e dinheiro à sua operação.",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan/30",
  },
  {
    icon: ShieldAlert,
    title: "Risco de Dados",
    description: "Medo de jogar código proprietário no ChatGPT ou ferramentas online. Seus segredos industriais não podem vazar para terceiros.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
            O Problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sua equipe de suporte está{" "}
            <span className="gradient-text">queimando dinheiro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enquanto você lê isso, chamados estão acumulando e desenvolvedores estão sendo interrompidos.
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
