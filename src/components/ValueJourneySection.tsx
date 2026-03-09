import { ArrowRight, Bot, FastForward } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueJourneySection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-neon-purple uppercase tracking-wider mb-4 block">
                        {t('value_journey.badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {t('value_journey.title')}{" "}
                        <span className="gradient-text">{t('value_journey.title_highlight')}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('value_journey.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative max-w-5xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-neon-purple/50 via-border to-neon-cyan/50 -translate-y-1/2 border-dashed border-b border-border/50" />

                    {/* Step 1 */}
                    <div className="relative group">
                        <div className="glass-card-glow p-8 md:p-10 h-full relative z-10 pt-24 md:pt-28">
                            <div className="absolute top-8 left-8">
                                <div className="w-12 h-12 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center shadow-glow-purple">
                                    <FastForward className="w-6 h-6 text-neon-purple" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-neon-purple mb-2 block">
                                    {t('value_journey.steps.1.subtitle')}
                                </span>
                                <h3 className="text-2xl font-bold mb-4">{t('value_journey.steps.1.title')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t('value_journey.steps.1.description')}
                                </p>
                            </div>
                        </div>
                        {/* Arrow logic for mobile */}
                        <div className="md:hidden flex justify-center py-4">
                            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                        <div className="glass-card-glow p-8 md:p-10 h-full relative z-10 pt-24 md:pt-28">
                            <div className="absolute top-8 left-8">
                                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center shadow-glow-cyan">
                                    <Bot className="w-6 h-6 text-neon-cyan" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-neon-cyan mb-2 block">
                                    {t('value_journey.steps.2.subtitle')}
                                </span>
                                <h3 className="text-2xl font-bold mb-4">{t('value_journey.steps.2.title')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t('value_journey.steps.2.description')}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueJourneySection;
