import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const benefits = [
  "Chamados Ilimitados",
  "Análise de Código Ilimitada (Local)",
  "Atualizações do Modelo de IA",
  "Suporte Prioritário",
  "Integração com sistemas de tickets",
  "Relatórios e métricas detalhadas",
];

const PricingSection = () => {
  return (
    <section id="preco" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-neon-cyan uppercase tracking-wider mb-4 block">
            Preço Transparente
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Um plano.{" "}
            <span className="gradient-text">Tudo incluso.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem surpresas, sem taxas ocultas. Pague apenas pelo que você usa.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-primary rounded-3xl opacity-20 blur-xl" />
            
            <div className="relative glass-card p-8 md:p-10 rounded-2xl border-2 border-primary/30">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-primary rounded-full text-sm font-semibold text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Mais Popular
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold mb-2">Professional License</h3>
                <p className="text-muted-foreground">Para equipes que precisam de agilidade</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">R$ 197</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">por assento</p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full">
                Começar Teste Grátis (Sem Cartão)
              </Button>

              {/* Guarantee */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                14 dias grátis • Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
