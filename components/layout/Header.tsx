"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { NAV_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

import styles from "../../styles/layout/Header.module.css";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(styles.chevron, className)}
      viewBox="0 0 10 10"
      width="8"
      height="8"
      aria-hidden="true"
    >
      <path d="M1 3.2 5 7l4-3.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="HomeNest.media - Trang chủ">
      <Image src="/images/logo/logo_HomeNest.media.png" alt="HomeNest.media - Trang chủ" width={250} height={66} />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [openSubKey, setOpenSubKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenKey(null);
    setOpenSubKey(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={cn(styles.header, scrolled && styles.isScrolled)} id="site-header">
      <div className={styles.inner}>
        {/* Top info bar */}
        <div className={styles.topbar}>
          <div className={styles.topbarInner}>
            <a className={styles.topbarItem} href="tel:0898994298" id="topbar-hotline">
              <span className={styles.topbarLabel}>Hotline</span> 0898994298
            </a>
            <a className={styles.topbarItem} href="mailto:info@HomeNest.media" id="topbar-email">
              <span className={styles.topbarLabel}>Email</span> info@HomeNest.media
            </a>
            <span className={cn(styles.topbarItem, styles.hideMd)} id="topbar-address">
              <span className={styles.topbarLabel}>Địa chỉ:</span> SAV4 The Sun Avenue, 28 Mai Chí Thọ, P Bình Trưng, Tp HCM
            </span>
            <span className={cn(styles.topbarItem, styles.topbarBrand)}>HomeNest.media</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className={styles.navwrap}>
          <div className={styles.nav}>
            <Logo />

            <nav
              className={cn(styles.menu, mobileOpen && styles.isOpen)}
              id="main-navigation"
              aria-label="Điều hướng chính"
            >
              <ul className={styles.menuList}>
                {NAV_ITEMS.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isOpen = openKey === item.label;
                  return (
                    <li
                      key={item.label}
                      className={cn(styles.menuItem, hasChildren && styles.hasChildren, isOpen && styles.isOpen)}
                    >
                      <div className={styles.menuRow}>
                        <Link
                          href={item.href}
                          className={cn(styles.menuLink, isActive(item.href) && styles.isActive)}
                          onClick={closeAll}
                        >
                          {item.label}
                          {hasChildren && <ChevronIcon className={styles.chevronUp} />}
                        </Link>
                        {hasChildren && (
                          <button
                            type="button"
                            className={styles.menuToggle}
                            aria-label={`Mở menu ${item.label}`}
                            aria-expanded={isOpen}
                            onClick={() => {
                              setOpenKey(isOpen ? null : item.label);
                              setOpenSubKey(null);
                            }}
                          >
                            <ChevronIcon />
                          </button>
                        )}
                      </div>

                      {hasChildren && (
                        <ul className={styles.dropdown}>
                          {item.children!.map((child, childIndex) => {
                            const hasSub = !!child.children?.length;
                            const subKey = `${item.label}/${child.label}`;
                            const subOpen = openSubKey === subKey;
                            return (
                              <li
                                key={child.label}
                                className={cn(styles.dropdownItem, hasSub && styles.hasChildren, subOpen && styles.isOpen)}
                                style={{ "--i": childIndex } as CSSProperties}
                              >
                                <div className={styles.dropdownRow}>
                                  <Link href={child.href} className={styles.dropdownLink} onClick={closeAll}>
                                    <span className={styles.dropdownDot} aria-hidden="true" />
                                    {child.label}
                                  </Link>
                                  {hasSub && (
                                    <button
                                      type="button"
                                      className={styles.dropdownToggle}
                                      aria-label={`Mở menu ${child.label}`}
                                      aria-expanded={subOpen}
                                      onClick={() => setOpenSubKey(subOpen ? null : subKey)}
                                    >
                                      <ChevronIcon />
                                    </button>
                                  )}
                                </div>

                                {hasSub && (
                                  <ul className={styles.subdropdown}>
                                    {child.children!.map((sub, subIndex) => (
                                      <li key={sub.label} style={{ "--i": subIndex } as CSSProperties}>
                                        <Link href={sub.href} className={styles.subdropdownLink} onClick={closeAll}>
                                          <span className={styles.subdropdownMarker} aria-hidden="true" />
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <div className={styles.actions}>
              <button type="button" className={styles.actionsLang} id="btn-language" aria-label="Chọn ngôn ngữ">
                VI
                <span className={styles.actionsFlag} aria-hidden="true" />
              </button>
              <button type="button" className={styles.actionsBtn} id="btn-search" aria-label="Tìm kiếm">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              <button type="button" className={styles.actionsBtn} id="btn-apps" aria-label="Danh mục khác">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <rect x="13.5" y="3.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <rect x="3.5" y="13.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <rect x="13.5" y="13.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </button>
              <button
                type="button"
                className={cn(styles.burger, mobileOpen && styles.isOpen)}
                id="btn-burger"
                aria-label="Mở menu"
                aria-expanded={mobileOpen}
                aria-controls="main-navigation"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
