/** Một biến thể ảnh logo (thumbnail + ảnh lớn) kèm mô tả riêng. */
export type LogoShowcaseVariant = {
  image: string;
  desc: string;
};

/** Một nhóm logo theo màu; `bien2` là danh sách các biến thể của màu đó. */
export type LogoShowcaseItem = {
  color: string;
  bien2: LogoShowcaseVariant[];
};

