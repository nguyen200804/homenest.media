export type ProjectCategory = "website" | "branding" | "event" | "marketing";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  /** Kích thước gốc của thumbnail (px), dùng cho next/image. */
  width: number;
  height: number;
  description: string;
  year: number;
  /** Không bắt buộc. */
  link?: string;
};
