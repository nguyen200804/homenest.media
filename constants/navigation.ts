import type { NavItem } from "@/types/navigation.types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Dịch vụ HomeNest",
    href: "/dich-vu",
    children: [
      {
        label: "Digital Marketing",
        href: "/dich-vu/digital-marketing",
        children: [
          { label: "Dịch vụ SEO Tổng Thể", href: "/dich-vu/seo-tong-the" },
          { label: "Dịch vụ SEO Từ Khoá", href: "/dich-vu/seo-tu-khoa" },
          { label: "Quảng cáo Google", href: "/dich-vu/quang-cao-google" },
          { label: "Quảng cáo Facebook", href: "/dich-vu/quang-cao-facebook" },
          { label: "Quảng cáo Youtube", href: "/dich-vu/quang-cao-youtube" },
          { label: "Quảng cáo – Xây kênh Tiktok", href: "/dich-vu/xay-kenh-tiktok" },
          { label: "Email Marketing", href: "/dich-vu/email-marketing" },
        ],
      },
      {
        label: "Branding", href: "/dich-vu/branding",
        children: [
          { label: "Thiết kế Logo Chuyên nghiệp", href: "/dich-vu/thiet-ke-logo-chuyen-nghiep" },
          { label: "Thiết kế Nhận diện thương hiệu", href: "/dich-vu/thiet-ke-nhan-dien-thuong-hieu" },
          { label: "Thiết kế Mascot – Linh vật thương hiệu", href: "/dich-vu/thiet-ke-mascot-linh-vat-thuong-hieu" },
          { label: "Thiết Kế Profile Công Ty, Catalogue", href: "/dich-vu/thiet-ke-profile-catalogue" },
          { label: "Thiết kế Ấn phẩm Marketing", href: "/dich-vu/thiet-ke-an-pham-marketing" },
        ],
      },
      {
        label: "Quảng cáo",
        href: "/dich-vu/quang-cao",
        children: [
          { label: "Quảng cáo ngoài trời", href: "/dich-vu/quang-cao-ngoai-troi" },
          { label: "Quảng cáo truyền hình", href: "/dich-vu/quang-cao-truyen-hinh" },
        ],
      },
      { label: "Event", href: "/dich-vu/event" },
    ],
  },
  { label: "Dự án", href: "/du-an" },
  {
    label: "Wiki",
    href: "/wiki",
    children: [
      { label: "Kiến thức SEO", href: "/wiki/seo" },
      { label: "Kiến thức Marketing", href: "/wiki/marketing" },
      { label: "Kiến thức Thương hiệu", href: "/wiki/thuong-hieu" },
    ],
  },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "FAQ", href: "/faq" },
];
