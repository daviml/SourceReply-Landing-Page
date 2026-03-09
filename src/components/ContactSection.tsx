import { Button } from "@/components/ui/button";
import { Mail, Briefcase, User, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const ContactSection = () => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Real implementation would send to backend
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contato" className="py-24 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-neon-cyan uppercase tracking-wider mb-4 block">
                        {t('contact.badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {t('contact.title')}{" "}
                        <span className="gradient-text">{t('contact.title_highlight')}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('contact.description')}
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-primary rounded-3xl opacity-20 blur-xl" />

                        <div className="relative glass-card p-8 md:p-10 rounded-2xl border-2 border-primary/30">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircleIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Sucesso!</h3>
                                    <p className="text-muted-foreground">{t('contact.form.success')}</p>
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Enviar outra mensagem
                                    </Button>
                                </div>
                            ) : (
                                <form
                                    action="https://formspree.io/f/mojkjnwa"
                                    method="POST"
                                    onSubmit={(e) => {
                                        // We let Formspree handle it, but we can also use AJAX if we want to stay on page
                                        // For simplicity and Vercel compatibility, a direct POST is very reliable
                                        // If using React/Vite, we can intercept to show the 'submitted' state
                                        const form = e.currentTarget as HTMLFormElement;
                                        e.preventDefault();
                                        const data = new FormData(form);
                                        fetch(form.action, {
                                            method: form.method,
                                            body: data,
                                            headers: {
                                                'Accept': 'application/json'
                                            }
                                        }).then(response => {
                                            if (response.ok) {
                                                setSubmitted(true);
                                                form.reset();
                                            } else {
                                                alert("Erro ao enviar. Por favor, tente novamente.");
                                            }
                                        });
                                    }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground ml-1">
                                            {t('contact.form.name')}
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                required
                                                name="name"
                                                className="w-full h-12 bg-background border border-border/50 rounded-lg pl-11 pr-4 text-foreground focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground ml-1">
                                                {t('contact.form.role')}
                                            </label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                <input
                                                    required
                                                    name="job_title"
                                                    className="w-full h-12 bg-background border border-border/50 rounded-lg pl-11 pr-4 text-foreground focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                                    placeholder="CTO / Tech Lead"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground ml-1">
                                                {t('contact.form.company')}
                                            </label>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                <input
                                                    required
                                                    name="company"
                                                    className="w-full h-12 bg-background border border-border/50 rounded-lg pl-11 pr-4 text-foreground focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground ml-1">
                                            {t('contact.form.email')}
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                className="w-full h-12 bg-background border border-border/50 rounded-lg pl-11 pr-4 text-foreground focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                                placeholder="john@acmecorp.com"
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" variant="hero" size="xl" className="w-full mt-4">
                                        {t('contact.form.submit')}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper SVG inside file
function CheckCircleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

export default ContactSection;
