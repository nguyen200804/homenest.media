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
} from "./icons";

/** Ghép nhiều class name từ CSS Module (bỏ qua class không tồn tại). */
const cx = (...names: Array<string | false | undefined>) =>
    names
        .filter((n): n is string => Boolean(n))
        .map((n) => styles[n])
        .filter(Boolean)
        .join(" ");

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
        text: "homenest.com.vn",
        href: "https://homenest.com.vn",
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
    { alt: "HomeNest.com.vn", href: "https://homenest.com.vn", src: "/images/logo/logo_homenest.png", modifier: undefined },
    { alt: "HomeNest.software", href: "https://homenest.software", src: "/images/logo/logo_homenest_software.png", modifier: "software" },
    { alt: "HomeNest.media", href: "https://homenest.media", src: "/images/logo/logo_homenest_media.png", modifier: "media" },
    { alt: "HomeNest.tech", href: "https://homenest.tech", src: "/images/logo/logo_homenest_tech.png", modifier: "tech" },
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
        <footer className={cx("footer")}>
            <SocialGradientDefs />

            {/* ===== Nội dung chính của footer ===== */}
            <div className={cx("hn-footer__container")}>
                <span className={cx("hn-footer__spot", "hn-footer__spot1")} />
                <span className={cx("hn-footer__spot", "hn-footer__spot2")} />
                <span className={cx("hn-footer__spot", "hn-footer__spot3")} />

                <div className={cx("hn-footer__inner")}>
                    <div className={cx("hn-footer__top")}>
                        <div className={cx("hn-footer__grid")}>
                            {/* Cột 1 - Giới thiệu */}
                            <section className={cx("hn-footer__col", "hn-footer__about")}>
                                <Link href="/" className={cx("hn-footer__logo")}>
                                    <Image
                                        className={cx("hn-footer__logo-img")}
                                        src="/images/logo/logo_homenest_media.png"
                                        alt="HomeNest Tech"
                                        width={200}
                                        height={60}
                                    />
                                </Link>

                                <p className={cx("hn-footer__desc")}>
                                    Với chúng tôi, không có giới hạn cho sự sáng tạo và khả năng
                                    phát triển. Hãy để chúng tôi giúp bạn thăng hoa trong môi
                                    trường kỹ thuật số.
                                </p>
                            </section>

                            {/* Cột 2 - Liên hệ */}
                            <section className={cx("hn-footer__col", "hn-footer__contact")}>
                                <h4 className={cx("hn-footer__heading")}>
                                    <span className={cx("hn-footer__text-gradient")}>LIÊN HỆ</span>
                                </h4>

                                <ul className={cx("hn-footer__contact-list")}>
                                    {CONTACTS.map((item) => (
                                        <li
                                            key={item.key}
                                            className={cx(
                                                "hn-footer__contact-item",
                                                `hn-footer__contact-item--${item.key}`,
                                            )}
                                        >
                                            <span className={cx("hn-footer__label")}>{item.label}</span>
                                            <a
                                                className={cx("hn-footer__value", item.linked && "linked")}
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
                                className={cx("hn-footer__col", "hn-footer__services")}
                                aria-label="Dịch vụ"
                            >
                                <h4 className={cx("hn-footer__heading")}>
                                    <span className={cx("hn-footer__text-gradient")}>DỊCH VỤ</span>
                                </h4>

                                <ul className={cx("hn-footer__services-list")}>
                                    {SERVICES.map((item) => (
                                        <li key={item.href} className={cx("hn-footer__services-item")}>
                                            <Link className={cx("hn-footer__services-link")} href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Cột 4 - Mạng xã hội + Địa chỉ */}
                            <section className={cx("hn-footer__col", "hn-footer__social")}>
                                <h4 className={cx("hn-footer__heading")}>
                                    <span className={cx("hn-footer__text-gradient")}>
                                        THEO DÕI CHÚNG TÔI TẠI
                                    </span>
                                </h4>

                                <ul className={cx("hn-footer__social-list")} aria-label="Mạng xã hội">
                                    {SOCIALS.map(({ label, href, Icon }) => (
                                        <li key={label} className={cx("hn-footer__social-item")}>
                                            <a
                                                className={cx("hn-footer__social-link")}
                                                href={href}
                                                aria-label={label}
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <hr className={cx("hn-footer__line")} />

                                {ADDRESSES.map((addr) => (
                                    <div key={addr.label} className={cx("hn-footer__address")}>
                                        <span className={cx("hn-footer__label")}>{addr.label}</span>
                                        <p className={cx("hn-footer__address-text")}>{addr.text}</p>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>

                    {/* Dãy logo thương hiệu */}
                    <div className={cx("hn-footer__brands")}>
                        <ul className={cx("hn-footer__brands-list")}>
                            {BRANDS.map((brand) => (
                                <li
                                    key={brand.alt}
                                    className={cx(
                                        "hn-footer__brand-item",
                                        brand.modifier && `hn-footer__brand-item--${brand.modifier}`,
                                    )}
                                >
                                    <a className={cx("hn-footer__brand-link")} href={brand.href}>
                                        <Image
                                            className={cx("hn-footer__brand-logo")}
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

                    <div className={cx("hn-footer__bottom")}>
                        <p className={cx("hn-footer__copyright")}>
                            Copyright © 2023 QuestX. All Rights Reserved. Design by HomeNest
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Thanh icon liên hệ nhanh (giữa bên phải) ===== */}
            <ul className={cx("hn__all-icons", "all-icons")}>
                {QUICK_LINKS.map((item) => {
                    const { label, href, Icon, external } = item;
                    const extraClass = "className" in item ? item.className : undefined;
                    return (
                        <li key={label}>
                            {external ? (
                                <a
                                    className={extraClass ? cx(extraClass) : undefined}
                                    href={href}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                >
                                    <Icon />
                                    <span>{label}</span>
                                </a>
                            ) : href.startsWith("/") ? (
                                <Link className={extraClass ? cx(extraClass) : undefined} href={href}>
                                    <Icon />
                                    <span>{label}</span>
                                </Link>
                            ) : (
                                <a className={extraClass ? cx(extraClass) : undefined} href={href}>
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