import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
    { id: 1, src: "/images/slides/1_Source-Reply.png", alt: "Source Reply Intro" },
    { id: 2, src: "/images/slides/2_Impacto-Imediato-na-Operacao.png", alt: "Impacto Imediato" },
    { id: 3, src: "/images/slides/3_A-Dor-da-Operacao-N2.png", alt: "A Dor da Operação" },
    { id: 4, src: "/images/slides/4_O-Source-Reply.png", alt: "O Produto" },
    { id: 5, src: "/images/slides/5_A-Tecnologia-RAG.png", alt: "Tecnologia RAG" },
    { id: 6, src: "/images/slides/6_Motor-de-Inferencia-e-Stack-Nativo.png", alt: "Stack Tecnológico" },
    { id: 7, src: "/images/slides/7_O-Valor-ROI.png", alt: "Valor e ROI" },
    { id: 8, src: "/images/slides/8_De-Triagem-para-Oraculo-Corporativo.png", alt: "Visão Oráculo" },
    { id: 9, src: "/images/slides/9_Source-Reply-em-Acao.png", alt: "Produto em Ação" },
];

const PresentationCarousel = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 bg-muted/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
                        Deep Dive
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Apresentação <span className="gradient-text">Executiva</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Explore os detalhes técnicos, operacionais e de ROI da nossa infraestrutura de IA Local.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {slides.map((slide) => (
                                <CarouselItem key={slide.id}>
                                    <div className="aspect-video relative rounded-2xl overflow-hidden border border-border/50 shadow-glow-mixed group">
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-12 border-primary/20 hover:bg-primary/10" />
                        <CarouselNext className="-right-4 md:-right-12 border-primary/20 hover:bg-primary/10" />
                    </Carousel>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground italic">
                            * Use as setas para navegar pelos slides da apresentação técnica.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresentationCarousel;
