import type { NavItem } from "@/types/navigation.types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Dịch vụ Homenest",
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
          { label: "Thi công Booth quảng cáo", href: "/dich-vu/thiet-ke-thi-cong-booth-quang-cao" },
          { label: "Thiết kế – thi công gian hàng", href: "/dich-vu/thiet-ke-thi-cong-gian-hang" },
          { label: "Thiết kế – thi công Backdrop", href: "/dich-vu/thiet-ke-thi-cong-backdrop" },
          { label: "Thi công hàng rào công trình", href: "/dich-vu/thiet-ke-thi-cong-hang-rao-cong-trinh" },
          { label: "Dán Decal kính văn phòng", href: "/dich-vu/dan-decal-kinh-van-phong" },
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
      {
        label: "Wiki Digital Marketing",
        href: "/wiki/wiki-digital-marketing",
        children: [
          { label: "Cẩm nang Ads", href: "/wiki/cam-nang-ads" },
          { label: "Cẩm nang SEO", href: "/wiki/cam-nang-seo" },
          { label: "Cẩm nang Social Media", href: "/wiki/cam-nang-social-media" },
          { label: "Xu Hướng Digital Marketing", href: "/wiki/xu-huong-digital-marketing" },
        ],
      },
      {
        label: "Wiki Branding",
        href: "/wiki/wiki-branding",
        children: [
          { label: "Cẩm nang Branding", href: "/wiki/cam-nang-branding" },
          { label: "Kinh nghiệm Branding", href: "/wiki/kinh-nghiem-branding" },
          { label: "Xu hướng Branding", href: "/wiki/xu-huong-branding" },
        ],
      },
      {
        label: "Wiki Event, triễn lãm",
        href: "/wiki/wiki-event-trien-lam",
        children: [
          { label: "Cẩm nang Booth triễn lãm", href: "/wiki/cam-nang-booth-trien-lam" },
          { label: "Cẩm nang thiết kế", href: "/wiki/cam-nang-thiet-ke" },
          { label: "Thông tin triễn lãm", href: "/wiki/thong-tin-trien-lam" },
          { label: "Xu hướng Event, Triễn Lãm", href: "/wiki/xu-huong-event-trien-lam" },
        ],
      },
      { label: "Wiki HomeNest Media", href: "/wiki/wiki-homenest-media" },
    ],
  },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "FAQ", href: "/faq" },
];
