import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="sm"
                className={`px-2 h-8 font-medium ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </Button>
            <span className="text-muted-foreground/30">|</span>
            <Button
                variant="ghost"
                size="sm"
                className={`px-2 h-8 font-medium ${language === 'pt' ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setLanguage('pt')}
            >
                PT
            </Button>
        </div>
    );
};
