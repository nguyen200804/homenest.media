import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Dịch vụ SEO từ khóa - Chạm đỉnh Google, dẫn đầu thành công!"
                description={(
                    <>
                        <p data-pm-slice="1 1 []"><a href="https://HomeNest.media/" target="_blank" rel="noopener">HomeNest.media</a> hỗ trợ doanh nghiệp xác định nhóm từ khóa mục tiêu, tối ưu trang đích và triển khai <a href="https://HomeNest.media/seo-la-gi-nhung-dieu-ban-can-biet-ve-seo-search-engine-optimization/" target="_blank" rel="noopener">SEO</a> phù hợp với nhu cầu tìm kiếm của khách hàng. Kế hoạch được xây dựng dựa trên mục tiêu kinh doanh, ngân sách và tình trạng website. Phạm vi công việc, chi phí và thời gian triển khai sẽ được xác nhận trong báo giá hoặc hợp đồng.</p>
                    </>
                )}
                ctaText="Tư vấn miễn phí"
            />
            <ServiceOverview
                title="Giải pháp SEO từ khóa theo nhu cầu doanh nghiệp"
                description="Doanh nghiệp nên cân nhắc sử dụng dịch vụ SEO từ khóa khi website đã có sản phẩm hoặc dịch vụ rõ ràng nhưng chưa đạt thứ hạng tốt trên Google. Đây cũng là giải pháp phù hợp khi lượng truy cập tự nhiên chưa tạo ra đủ khách hàng tiềm năng, nhiều URL cùng cạnh tranh một nhóm từ khóa hoặc website cần cải thiện khả năng hiển thị trên công cụ tìm kiếm. Bên cạnh đó, SEO từ khóa giúp doanh nghiệp xây dựng nguồn truy cập tự nhiên dài hạn, bổ trợ cho các hoạt động quảng cáo trả phí và mở rộng cơ hội tiếp cận khách hàng."
            />
            <ServiceStrategy
                heading="Giải pháp SEO từ khóa giúp nâng cao vị thế thương hiệu tại HomeNest.media"
                title1="SEO Audit và thiết lập dữ liệu ban đầu"
                desc1="Kiểm tra khả năng lập chỉ mục, canonical, sitemap, redirect và hiệu suất website để xác định vấn đề cần ưu tiên."
                title2="Nghiên cứu và phân bổ từ khóa"
                desc2="Phân nhóm từ khóa theo Search Intent, xác định mức độ ưu tiên và phân bổ vào các trang đích phù hợp, hạn chế trùng lặp nội dung."
                title3="Tối ưu Onpage và Technical SEO"
                desc3="Tối ưu tiêu đề, cấu trúc heading, nội dung trang dịch vụ, CTA và trải nghiệm di động. Đồng thời xử lý các lỗi kỹ thuật ảnh hưởng đến SEO."
                title4="Xây dựng liên kết và đo lường hiệu quả"
                desc4="Phát triển liên kết nội bộ theo ngữ cảnh, theo dõi thứ hạng, lượt nhấp, lưu lượng truy cập và khách hàng tiềm năng qua Google Search Console và GA4."
            />
        </>
    )
}