import type { LogoShowcaseItem } from "@/types/logoShowcase.types";

export const LOGO_SHOWCASE_HEADING = "";

/** Mô tả mặc định, dùng khi biến thể đang chọn chưa có `desc`. */
export const LOGO_SHOWCASE_DESCRIPTION_DEFAULT = "";

export const LOGO_SHOWCASE: LogoShowcaseItem[] = [
  {
    color: "#FF0000",
    bien2: [
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-1_color-1.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-2_color-1.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-3_color-1.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-4_color-1.webp", desc: "" },
    ],
  },
  {
    color: "#000000",
    bien2: [
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-1_color-2.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-2_color-2.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-3_color-2.webp", desc: "" },
      { image: "/images/thiet-ke-logo-chuyen-nghiep/logo-4_color-2.webp", desc: "" },
    ],
  },
];
