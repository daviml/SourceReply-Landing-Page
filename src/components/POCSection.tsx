import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const POCSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 relative bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card-glow p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/50 mb-6">
                                    <Shield className="w-4 h-4 text-neon-purple" />
                                    <span className="text-sm text-muted-foreground">{t('poc.badge')}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    {t('poc.title')}{" "}
                                    <span className="gradient-text">{t('poc.title_highlight')}</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    {t('poc.description')}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {(t('poc.benefits') as unknown as string[]).map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-neon-cyan" />
                                            <span className="text-foreground">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                                    <a href="#contato">
                                        {t('poc.cta')}
                                    </a>
                                </Button>
                            </div>

                            {/* Graphic/Illustration */}
                            <div className="hidden md:block w-72 h-72 relative">
                                <div className="absolute inset-0 border-2 border-border/50 rounded-full animate-spin-slow" />
                                <div className="absolute inset-4 border-2 border-neon-cyan/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                                <div className="absolute inset-8 border-2 border-neon-purple/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-purple">
                                        <span className="text-2xl font-bold">POC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default POCSection;
