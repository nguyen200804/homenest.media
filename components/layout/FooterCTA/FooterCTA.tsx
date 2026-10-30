"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { ButtonGradientSpin, ButtonTransparentToGradient } from "@/components/ui/Buttons";
import styles from "./FooterCTA.module.css";

export interface FooterCTAProps {
  className?: string;
  preTitle?: string;
  emailContact?: string;
  phoneContact?: string;
  phoneDisplay?: string;
  zaloLink?: string;
  imageSrc?: string;
  bgImage?: string;
}

export default function FooterCTA({
  className = "",
  preTitle = "Kết nối với chúng tôi",
  emailContact = "info@questx.com.vn",
  phoneContact = "84898994298",
  phoneDisplay = "(+84) 898 994 298",
  zaloLink = "https://zalo.me/0708070888",
  imageSrc = "https://image.homenest.com.vn/wp-content/uploads/2026/04/CTA-Footer-HomeNest-Viet-Nam.jpg",
  bgImage,
}: FooterCTAProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Chế độ giao diện (UI) trước mắt
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailContact);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={`${styles.ctaContainer} ${className}`.trim()}>
      {/* Background Image Wrapper nếu có truyền prop bgImage */}
      {bgImage && (
        <div className={styles.bgImageWrapper}>
          <Image
            src={bgImage}
            alt="Background Gradient"
            className={styles.bgImage}
            fill
            unoptimized
          />
        </div>
      )}

      <div className={styles.contentWrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.preTitle}>
            <div className={styles.starIcon} role="img" aria-label="Star Icon">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinejoin="round"
                  d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
                />
              </svg>
            </div>
            <h2 className={styles.preTitleText}>{preTitle}</h2>
          </div>

          <p className={styles.headingWrapper}>
            <span className={styles.normalText}>Khởi Tạo </span>
            <span className={styles.cursive}>Dự Án</span>
            <span className={styles.normalText}> Của Bạn</span>
            <span className={styles.nextLine}>Ngay Hôm Nay</span>
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Panel - Contact Form */}
          <div className={styles.formBox}>
            <h3 className={styles.formTitle}>Liên hệ hợp tác</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="footer-cta-name">Họ và tên*</label>
                <input
                  id="footer-cta-name"
                  type="text"
                  name="name"
                  placeholder="Họ và tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="footer-cta-email">Email*</label>
                <input
                  id="footer-cta-email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="footer-cta-phone">Số điện thoại*</label>
                <input
                  id="footer-cta-phone"
                  type="tel"
                  name="phone"
                  placeholder={phoneDisplay}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="footer-cta-message">Lời nhắn</label>
                <textarea
                  id="footer-cta-message"
                  name="message"
                  placeholder="Tôi muốn phát triển dự án..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status === "error" && (
                <p className={styles.errorMsg}>
                  Gửi thất bại. Vui lòng thử lại.
                </p>
              )}
              {status === "success" && (
                <p className={styles.successMsg}>
                  Tin nhắn đã được gửi thành công!
                </p>
              )}

              <div className={styles.formFooter}>
                <div className={styles.contactInfo}>
                  <p>Hoặc gửi mail trực tiếp tới:</p>
                  <div
                    className={styles.copyEmail}
                    onClick={handleCopy}
                    role="button"
                    tabIndex={0}
                    aria-label={`Copy email ${emailContact}`}
                  >
                    <span>{emailContact}</span>
                    {copied ? (
                      <span className={styles.copiedText}>Copied!</span>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </div>
                </div>

                <ButtonGradientSpin
                  text={status === "loading" ? "Đang gửi..." : "Gửi yêu cầu"}
                  type="submit"
                  disabled={status === "loading"}
                />
              </div>
            </form>
          </div>

          {/* Right Panel - Info Card */}
          <div className={styles.infoBox}>
            <ul className={styles.featureList}>
              <li>
                <div className={styles.starIcon} role="img" aria-label="Star Icon">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinejoin="round"
                      d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
                    />
                  </svg>
                </div>
                <span className={styles.labelFeature}>Phản hồi nhanh chóng trong 24h.</span>
              </li>
              <li>
                <div className={styles.starIcon} role="img" aria-label="Star Icon">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinejoin="round"
                      d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
                    />
                  </svg>
                </div>
                <span className={styles.labelFeature}>Làm việc trực tiếp với chuyên gia.</span>
              </li>
              <li>
                <div className={styles.starIcon} role="img" aria-label="Star Icon">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinejoin="round"
                      d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
                    />
                  </svg>
                </div>
                <span className={styles.labelFeature}>Tư vấn chiến lược rõ ràng.</span>
              </li>
            </ul>

            <div className={styles.imageCard}>
              <Image
                src={imageSrc}
                alt="Liên hệ HomeNest - Giải pháp công nghệ hàng đầu Việt Nam"
                title="Tư vấn dự án HomeNest"
                width={400}
                height={225}
                unoptimized
              />
            </div>

            <div className={styles.buttonCTA}>
              <ButtonTransparentToGradient
                text="Liên hệ trực tiếp"
                className={styles.ctaBtnLight}
                link={`tel:${phoneContact}`}
              />

              <ButtonGradientSpin
                text="Nhận tư vấn"
                link={zaloLink}
                newTab
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

