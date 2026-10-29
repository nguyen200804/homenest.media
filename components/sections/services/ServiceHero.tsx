import type { ReactNode } from 'react';
import styles from './ServiceHero.module.css';
import { ButtonGradientSpin } from '@/components/ui/Buttons';

export type ServiceHeroProps = {
    heading: ReactNode;
    description: ReactNode;
    ctaText: string;
    ctaLink?: string;
};

export default function ServiceHero({
    heading,
    description,
    ctaText,
    ctaLink = "https://zalo.me/+84708070888",
}: ServiceHeroProps) {
    return (
        <section className={styles.serviceHero}>
            <div className="container">
                <div className={styles.serviceHeroWrapper}>
                    <div className={styles.serviceHeroHeader}>
                        <h1 className={styles.serviceHeroHeading}>{heading}</h1>
                    </div>
                    <div className={styles.serviceHeroContent}>
                        <div className={styles.serviceHeroDescription}>{description}</div>
                        <div className={styles.serviceHeroAction}>
                            <ButtonGradientSpin text={ctaText} link={ctaLink} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
