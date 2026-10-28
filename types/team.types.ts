/** Thẻ ảnh thành viên. */
export type TeamPhotoItem = {
    type: "photo";
    src: string;
    alt: string;
};

/** Thẻ trích dẫn (ô chữ nền gradient xen giữa các ảnh). */
export type TeamQuoteItem = {
    type: "quote";
    text: string;
};

export type TeamItem = TeamPhotoItem | TeamQuoteItem;