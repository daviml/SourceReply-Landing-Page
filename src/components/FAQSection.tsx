import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de uma super placa de vídeo?",
    answer: "Não. Otimizamos modelos leves que rodam em qualquer CPU moderna (i5/Ryzen 5 ou superior). O SourceReply foi projetado para funcionar em hardware comum de escritório, sem necessidade de GPUs dedicadas ou máquinas especiais.",
  },
  {
    question: "Meus dados vão para o Google/OpenAI?",
    answer: "Não. O processamento é 100% local ou via sua própria chave de API, você escolhe. Nenhum dado, código ou chamado sai da sua rede. Temos compromisso total com a privacidade da sua empresa.",
  },
  {
    question: "Qual o tamanho máximo de código que posso indexar?",
    answer: "O SourceReply suporta repositórios de até 50GB. Para projetos maiores, oferecemos otimizações personalizadas. A indexação é incremental, então após a primeira vez, apenas as mudanças são processadas.",
  },
  {
    question: "Funciona com qualquer linguagem de programação?",
    answer: "Sim! O SourceReply suporta todas as linguagens mais populares: JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby e muitas outras. O modelo de IA foi treinado para entender a lógica de código independente da sintaxe.",
  },
  {
    question: "Como funciona a integração com sistemas de tickets?",
    answer: "Você pode importar chamados via planilha (CSV/Excel) ou integrar diretamente via API com sistemas como Jira, Zendesk, Freshdesk e outros. A configuração leva menos de 10 minutos.",
  },
  {
    question: "Posso usar minha própria API key de IA?",
    answer: "Sim! Oferecemos a opção de usar sua própria chave de API (OpenAI, Anthropic, etc.) se você preferir. Nesse caso, os dados são enviados diretamente para o provedor da sua escolha, mantendo você no controle total.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tire suas{" "}
            <span className="gradient-text">dúvidas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As respostas para as perguntas mais comuns sobre o SourceReply.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border border-border/50 rounded-xl data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
