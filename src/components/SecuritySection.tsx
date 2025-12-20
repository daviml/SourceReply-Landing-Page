import { Shield, Server, Lock, Eye, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Processamento 100% Local",
    description: "Todo o processamento de IA acontece na sua máquina. Nada é enviado para servidores externos.",
  },
  {
    icon: Lock,
    title: "Código Nunca Sai da Rede",
    description: "Seus arquivos de código-fonte permanecem onde devem estar: na sua infraestrutura.",
  },
  {
    icon: Eye,
    title: "Compliance Garantido",
    description: "Total aderência à LGPD e normas de segurança corporativa. Sem letras miúdas.",
  },
];

const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
              Segurança Enterprise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sua Inteligência.{" "}
              <span className="gradient-text">Seus Dados.</span>{" "}
              Sua Infraestrutura.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Diferente de SaaS tradicionais, o SourceReply é um{" "}
              <span className="text-foreground font-medium">Desktop App</span>.
              Seus segredos industriais e dados de clientes nunca saem da sua rede local.
              Compliance total com LGPD e normas de segurança corporativa.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              {/* Shield Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center animate-pulse-slow">
                    <Shield className="w-16 h-16 text-neon-purple" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-purple/30 animate-spin" style={{ animationDuration: '20s' }} />
                </div>
              </div>

              {/* Security Checklist */}
              <div className="space-y-4">
                {[
                  "Zero telemetria ou coleta de dados",
                  "Modelos de IA otimizados para CPU",
                  "Sem dependência de internet",
                  "Auditoria completa disponível",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/30">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-neon-cyan" />
                  <span className="font-medium">LGPD & ISO 27001 Ready</span>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-neon-purple/5 blur-3xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
