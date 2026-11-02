import { TextGradient } from '@/components/ui/Text'
import styles from '../../../styles/sections/services/ServiceBrands.module.css'
import Image from 'next/image'
import { PARTNER } from '@/constants/partner'
import type { Partner } from '@/types/partner.types'

const PARTNER_LOGO_HEIGHT = 248
const PARTNER_LOGO_UNIT_WIDTH = 248
/** Số lần lặp danh sách logo để marquee chạy liền mạch. */
const DUPLICATE_PARTNER = 2

const getPartnerName = (urlImage: string) =>
    (urlImage.split('/').pop() ?? '').replace(/\.\w+$/, '').replace(/-/g, ' ')

const HALF_INDEX = Math.ceil(PARTNER.length / 2)
const PARTNER_RTL: Partner[] = PARTNER.slice(0, HALF_INDEX)
const PARTNER_LTR: Partner[] = PARTNER.slice(HALF_INDEX)

const renderPartnerLists = (partners: Partner[]) =>
    Array.from({ length: DUPLICATE_PARTNER }).map((_, copyIndex) => {
        /** Bản sao: ẩn khỏi screen reader. */
        const isClone = copyIndex > 0

        return (
            <ul
                key={copyIndex}
                className={styles.serviceBrandsList}
                aria-hidden={isClone || undefined}
            >
                {partners.map((partner, index) => (
                    <li key={`${partner.urlImage}-${index}`} className={styles.serviceBrandsItem}>
                        <Image
                            className={styles.serviceBrandsLogo}
                            src={partner.urlImage}
                            alt={isClone ? '' : getPartnerName(partner.urlImage)}
                            width={partner.width * PARTNER_LOGO_UNIT_WIDTH}
                            height={PARTNER_LOGO_HEIGHT}
                        />
                    </li>
                ))}
            </ul>
        )
    })

export default function ServiceBrands() {
    return (
        <section className={styles.serviceBrandsSection}>
            <div className={styles.serviceBrandsWrapper}>
                <div className={styles.serviceBrandsColMedia}>
                    <Image className={styles.serviceBrandsImage} src="/images/dau-trau_gradient.webp" width={657} height={868} alt="Đầu trâu" />
                </div>
                <div className={styles.serviceBrandsColContent}>
                    <header className={styles.serviceBrandsHeader}>
                        <h2 className={styles.serviceBrandsTitle}>
                            <TextGradient text="Thương hiệu đồng hành" /> cùng HomeNest.media
                        </h2>
                    </header>
                    <div className={styles.serviceBrandsMarquee}>
                        <div className={styles.serviceBrandsMarqueeRtl}>
                            {/* Marquee partner thương hiệu di chuyển từ phải sang trái */}
                            {renderPartnerLists(PARTNER_RTL)}
                        </div>
                        <div className={styles.serviceBrandsMarqueeLtr}>
                            {/* Marquee partner thương hiệu di chuyển từ trái sang phải */}
                            {renderPartnerLists(PARTNER_LTR)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}   