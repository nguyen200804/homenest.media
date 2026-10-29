import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import ScrollTopButton from "./ScrollTopButton";
import {
    FacebookIcon,
    HomeIcon,
    InstagramIcon,
    LinkedInIcon,
    PhoneIcon,
    SocialGradientDefs,
    TikTokIcon,
    TikTokSocialIcon,
    WhatsAppIcon,
    YouTubeIcon,
} from "@/components/ui/icons";
import { TextGradient } from "@/components/ui/Text";
import { cn } from "@/utils/cn";

/* ------------------------------ Dữ liệu ------------------------------ */

const CONTACTS = [
    {
        key: "hotline",
        label: "Hotline",
        text: "0898 - 994 - 298",
        href: "tel:0898994298",
        linked: false,
        external: false,
    },
    {
        key: "email",
        label: "Email",
        text: "info@questx.com.vn",
        href: "mailto:info@questx.com.vn",
        linked: true,
        external: false,
    },
    {
        key: "website",
        label: "Website",
        text: "HomeNest.media",
        href: "https://HomeNest.media",
        linked: true,
        external: true,
    },
] as const;

const SERVICES = [
    { label: "Digital Marketing", href: "/dich-vu-homenest/digital-marketing/" },
    { label: "Branding", href: "/dich-vu-homenest/branding/" },
    { label: "Quảng cáo", href: "/dich-vu-homenest/quang-cao/" },
    { label: "Event", href: "/dich-vu-homenest/event/" },
];

// TODO: thay "#" bằng link mạng xã hội thật
const SOCIALS = [
    { label: "Facebook", href: "#", Icon: FacebookIcon },
    { label: "Instagram", href: "#", Icon: InstagramIcon },
    { label: "YouTube", href: "#", Icon: YouTubeIcon },
    { label: "TikTok", href: "#", Icon: TikTokSocialIcon },
    { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

const ADDRESSES = [
    {
        label: "Trụ sở chính",
        text: "Tòa SAV5 - The Sun Avenue, 28 Mai Chí Thọ, Phường Bình Trưng, Tp. Hồ Chí Minh, Việt Nam.",
    },
    {
        label: "Chi nhánh",
        text: "Tòa SAV4 - The Sun Avenue, 28 Mai Chí Thọ, Phường Bình Trưng, Tp. Hồ Chí Minh, Việt Nam.",
    },
];

const BRANDS = [
    { alt: "HomeNest.com.vn", href: "https://homenest.com.vn", src: "/images/logo/logo_homenest.com.vn.png", modifier: "com.vn" },
    { alt: "HomeNest.software", href: "https://homenest.software", src: "/images/logo/logo_homenest.software.png", modifier: "software" },
    { alt: "HomeNest.media", href: "https://HomeNest.media", src: "/images/logo/logo_HomeNest.media.png", modifier: "media" },
    { alt: "HomeNest.tech", href: "https://homenest.tech", src: "/images/logo/logo_homenest.tech.png", modifier: "tech" },
];

const QUICK_LINKS = [
    { label: "Trang chủ", href: "/", Icon: HomeIcon, external: false },
    { label: "Hotline", href: "tel:0898994298", Icon: PhoneIcon, external: false, className: "icon-phone" },
    { label: "TikTok", href: "https://www.tiktok.com/@homenest.software", Icon: TikTokIcon, external: true },
    { label: "WhatsApp", href: "https://wa.me/+840898994298", Icon: WhatsAppIcon, external: true },
] as const;

/* ----------------------------- Component ----------------------------- */

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <SocialGradientDefs />

            {/* ===== Nội dung chính của footer ===== */}
            <div className={styles["hn-footer__container"]}>
                <span className={cn(styles["hn-footer__spot"], styles["hn-footer__spot1"])} />
                <span className={cn(styles["hn-footer__spot"], styles["hn-footer__spot2"])} />
                <span className={cn(styles["hn-footer__spot"], styles["hn-footer__spot3"])} />

                <div className={cn("container", styles["hn-footer__inner"])}>
                    <div className={styles["hn-footer__top"]}>
                        <div className={styles["hn-footer__grid"]}>
                            {/* Cột 1 - Giới thiệu */}
                            <section className={cn(styles["hn-footer__col"], styles["hn-footer__about"])}>
                                <Link href="/" className={styles["hn-footer__logo"]}>
                                    <Image
                                        className={styles["hn-footer__logo-img"]}
                                        src="/images/logo/logo_HomeNest.media.png"
                                        alt="HomeNest Tech"
                                        width={200}
                                        height={60}
                                    />
                                </Link>

                                <p className={styles["hn-footer__desc"]}>
                                    Với chúng tôi, không có giới hạn cho sự sáng tạo và khả năng
                                    phát triển. Hãy để chúng tôi giúp bạn thăng hoa trong môi
                                    trường kỹ thuật số.
                                </p>
                            </section>

                            {/* Cột 2 - Liên hệ */}
                            <section className={cn(styles["hn-footer__col"], styles["hn-footer__contact"])}>
                                <h4 className={styles["hn-footer__heading"]}>
                                    <TextGradient text="LIÊN HỆ" angle={90} />
                                </h4>

                                <ul className={styles["hn-footer__contact-list"]}>
                                    {CONTACTS.map((item) => (
                                        <li
                                            key={item.key}
                                            className={cn(
                                                styles["hn-footer__contact-item"],
                                                styles[`hn-footer__contact-item--${item.key}`],
                                            )}
                                        >
                                            <span className={styles["hn-footer__label"]}>{item.label}</span>
                                            <a
                                                className={cn(
                                                    styles["hn-footer__value"],
                                                    item.linked && styles["linked"],
                                                )}
                                                href={item.href}
                                                {...(item.external && {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                })}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Cột 3 - Dịch vụ */}
                            <nav
                                className={cn(styles["hn-footer__col"], styles["hn-footer__services"])}
                                aria-label="Dịch vụ"
                            >
                                <h4 className={styles["hn-footer__heading"]}>
                                    <TextGradient text="DỊCH VỤ" angle={90} />
                                </h4>

                                <ul className={styles["hn-footer__services-list"]}>
                                    {SERVICES.map((item) => (
                                        <li key={item.href} className={styles["hn-footer__services-item"]}>
                                            <Link className={styles["hn-footer__services-link"]} href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Cột 4 - Mạng xã hội + Địa chỉ */}
                            <section className={cn(styles["hn-footer__col"], styles["hn-footer__social"])}>
                                <h4 className={styles["hn-footer__heading"]}>
                                    <TextGradient text="THEO DÕI CHÚNG TÔI TẠI" angle={90} />
                                </h4>

                                <ul className={styles["hn-footer__social-list"]} aria-label="Mạng xã hội">
                                    {SOCIALS.map(({ label, href, Icon }) => (
                                        <li key={label} className={styles["hn-footer__social-item"]}>
                                            <a
                                                className={styles["hn-footer__social-link"]}
                                                href={href}
                                                aria-label={label}
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <hr className={styles["hn-footer__line"]} />

                                {ADDRESSES.map((addr) => (
                                    <div key={addr.label} className={styles["hn-footer__address"]}>
                                        <span className={styles["hn-footer__label"]}>{addr.label}</span>
                                        <p className={styles["hn-footer__address-text"]}>{addr.text}</p>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>

                    {/* Dãy logo thương hiệu */}
                    <div className={styles["hn-footer__brands"]}>
                        <ul className={styles["hn-footer__brands-list"]}>
                            {BRANDS.map((brand) => (
                                <li
                                    key={brand.alt}
                                    className={cn(
                                        styles["hn-footer__brand-item"],
                                        brand.modifier && styles[`hn-footer__brand-item--${brand.modifier}`],
                                    )}
                                >
                                    <a className={styles["hn-footer__brand-link"]} href={brand.href}>
                                        <Image
                                            className={styles["hn-footer__brand-logo"]}
                                            src={brand.src}
                                            alt={brand.alt}
                                            width={160}
                                            height={48}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles["hn-footer__bottom"]}>
                        <p className={styles["hn-footer__copyright"]}>
                            Copyright © 2023 QuestX. All Rights Reserved. Design by HomeNest Software
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Thanh icon liên hệ nhanh (giữa bên phải) ===== */}
            <ul className={cn(styles["hn__all-icons"], styles["all-icons"])}>
                {QUICK_LINKS.map((item) => {
                    const { label, href, Icon, external } = item;
                    const extraClass = "className" in item ? styles[item.className] : undefined;
                    return (
                        <li key={label}>
                            {external ? (
                                <a
                                    className={extraClass}
                                    href={href}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                >
                                    <Icon />
                                    <span>{label}</span>
                                </a>
                            ) : href.startsWith("/") ? (
                                <Link className={extraClass} href={href}>
                                    <Icon />
                                    <span>{label}</span>
                                </Link>
                            ) : (
                                <a className={extraClass} href={href}>
                                    <Icon />
                                    <span>{label}</span>
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* ===== Nút cuộn lên đầu trang (Client Component) ===== */}
            <ScrollTopButton />
        </footer>
    );
}