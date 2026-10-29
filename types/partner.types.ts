/** 2: logo hình chữ nhật, 1: logo hình vuông. */
export type PartnerLogoWidth = 1 | 2;

/** Dòng hiển thị logo. */
export type PartnerLine = 1 | 2 | 3;

export type Partner = {
  /** Đường dẫn logo (tính từ thư mục public). */
  urlImage: string;
  width: PartnerLogoWidth;
  line: PartnerLine;
};
