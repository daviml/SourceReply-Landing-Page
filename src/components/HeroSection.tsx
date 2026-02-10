import { Button } from "@/components/ui/button";
import { Download, Play, Shield, Zap, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
          </div>

          {/* Headline */}
          <h1 className="fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            {t('hero.headline_prefix')}{" "}
            <span className="gradient-text">{t('hero.headline_highlight')}</span>{" "}
            {t('hero.headline_suffix')}
          </h1>

          {/* Subheadline */}
          <p className="fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline_1')}{" "}
            <span className="text-foreground font-medium">{t('hero.subheadline_highlight')}</span>.
            {t('hero.subheadline_2')}{" "}
            <span className="text-neon-cyan font-medium">{t('hero.subheadline_privacy')}</span>
          </p>

          {/* CTA Buttons */}
          <div className="fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
              <Download className="w-5 h-5" />
              {t('hero.cta_download')}
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto gap-2">
              <Play className="w-5 h-5" />
              {t('hero.cta_demo')}
            </Button>
          </div>

          {/* Social Proof */}
          <div className="fade-up-delay-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs text-muted-foreground font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Shield className="w-4 h-4 text-neon-purple" />
              {t('hero.social_proof')}
            </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glass-card p-2 rounded-2xl shadow-glow-mixed">
            <div className="bg-card rounded-xl overflow-hidden border border-border/30">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                    {t('hero.visual.version')}
                  </div>
                </div>
              </div>

              {/* App Content Preview */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-card to-background">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sidebar */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-neon-purple" />
                        <span className="text-sm font-medium">{t('hero.visual.project_local')}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">./src/api/core</div>
                    </div>
                    <div className="p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
                      <div className="text-sm font-medium text-neon-purple">{t('hero.visual.tickets_count')}</div>
                      <div className="text-xs text-muted-foreground">{t('hero.visual.tickets_waiting')}</div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-sm font-medium mb-1">{t('hero.visual.ticket_title')}</div>
                          <div className="text-xs text-muted-foreground">{t('hero.visual.ticket_desc')}</div>
                        </div>
                        <span className="px-2 py-1 rounded text-xs bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                          {t('hero.visual.analyzing')}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-primary rounded-full w-3/4 animate-pulse" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-green-400">{t('hero.visual.diagnosis_done')}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t('hero.visual.cause_identified')} <span className="text-foreground">auth/tokenService.ts:127</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
