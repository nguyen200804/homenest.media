export type BlogItem = {
  /** Chuyên mục của bài viết. */
  category: string;
  title: string;
  /** Mô tả ngắn hiển thị ở thẻ bài viết. */
  desc: string;
  author: string;
  /** Định dạng dd/mm/yyyy. */
  date: string;
};
