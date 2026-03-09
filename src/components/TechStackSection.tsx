import { Cpu, Network, KeyRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TechStackSection = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Cpu,
            title: t('tech_stack.features.engine.title'),
            description: t('tech_stack.features.engine.description'),
        },
        {
            icon: Network,
            title: t('tech_stack.features.integration.title'),
            description: t('tech_stack.features.integration.description'),
        },
        {
            icon: KeyRound,
            title: t('tech_stack.features.model.title'),
            description: t('tech_stack.features.model.description'),
        },
    ];

    return (
        <section id="arquitetura" className="py-24 md:py-32 relative bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text */}
                    <div>
                        <span className="text-sm font-medium text-neon-cyan uppercase tracking-wider mb-4 block">
                            {t('tech_stack.badge')}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {t('tech_stack.title')}{" "}
                            <span className="gradient-text">{t('tech_stack.title_highlight')}</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {t('tech_stack.description')}
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center">
                                            <feature.icon className="w-5 h-5 text-neon-cyan" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Visual Graphic */}
                    <div className="relative lg:pl-12 hidden md:block">
                        <div className="relative glass-card p-2 rounded-2xl border border-primary/20 shadow-glow-mixed">
                            <div className="bg-background rounded-xl p-6 border border-border/50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

                                {/* Code Block Mockup */}
                                <div className="font-mono text-sm space-y-2 relative z-10">
                                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/50">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        <span className="text-xs text-muted-foreground ml-2">source-reply-engine.config.ts</span>
                                    </div>
                                    <p><span className="text-neon-purple">import</span> {'{'} EnterpriseRAG, LocalLLM {'}'} <span className="text-neon-purple">from</span> <span className="text-green-400">'@sourcereply/core'</span>;</p>
                                    <p className="mt-4"><span className="text-neon-purple">const</span> <span className="text-neon-cyan">config</span> = {'{'}</p>
                                    <p className="pl-4">engine: <span className="text-green-400">'ONNX_OPTIMIZED'</span>,</p>
                                    <p className="pl-4">mode: <span className="text-green-400">'100_PERCENT_OFFLINE'</span>,</p>
                                    <p className="pl-4">hardwareAcceleration: <span className="text-neon-purple">true</span>,</p>
                                    <p className="pl-4">maxRepositorySizeGB: <span className="text-neon-purple">500</span>,</p>
                                    <p className="pl-4">integrations: [<span className="text-green-400">'Jira'</span>, <span className="text-green-400">'GitHub_Enterprise'</span>],</p>
                                    <p className="pl-4">telemetry: <span className="text-neon-purple">false</span> <span className="text-muted-foreground">// Mandatory for air-gapped compliance</span></p>
                                    <p>{'};'}</p>
                                    <p className="mt-4 text-neon-cyan animate-pulse">System Initialized. Awaiting connections...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
