import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";

export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Dịch vụ SEO tổng thể cho tăng trưởng website"
                description={(
                    <>
                        <p data-pm-slice="1 1 []"><a href="https://HomeNest.media/" target="_blank" rel="noopener">HomeNest.media</a> hỗ trợ doanh nghiệp xây dựng kế hoạch SEO tổng thể dựa trên mục tiêu kinh doanh, tình trạng website và dữ liệu Google Search Console. Phạm vi triển khai có thể bao gồm SEO kỹ thuật, chiến lược nội dung, cấu trúc website, liên kết nội bộ và đo lường hiệu quả tìm kiếm tự nhiên.</p>
                        <p>Kế hoạch thực hiện, chi phí và thời hạn được xác nhận theo nhu cầu thực tế trong báo giá hoặc hợp đồng.</p>
                    </>
                )}
                ctaText="Tư vấn miễn phí"
            />
            <ServiceOverview
                title="Khi nào doanh nghiệp cần SEO tổng thể?"
                description="Nếu doanh nghiệp muốn cải thiện khả năng hiển thị trên Google, phát triển lưu lượng truy cập tự nhiên và tiếp cận khách hàng có nhu cầu thực tế, SEO tổng thể chính là một lựa chọn tối ưu. Thay vì chỉ tập trung vào một vài từ khóa, dịch vụ SEO cung cấp bởi HomeNest.media tổng thể xem xét toàn bộ website, từ kỹ thuật, nội dung đến cấu trúc và trải nghiệm người dùng."
            />
            <ServiceStrategy
                heading="Chiến lược SEO tổng thể cho doanh nghiệp: từ nền tảng đến tăng trưởng"
                title1="Phân tích website và Technical SEO"
                desc1="Kiểm tra hiệu suất tìm kiếm, lập chỉ mục, tốc độ tải trang và lỗi kỹ thuật để xác định các hạng mục cần cải thiện."
                title2="Nghiên cứu từ khóa và cấu trúc website"
                desc2="Phân tích Search Intent, tối ưu trang dịch vụ và xây dựng cấu trúc Silo, liên kết nội bộ phù hợp."
                title3="Phát triển nội dung và độ uy tín"
                desc3="Xây dựng nội dung theo nhu cầu tìm kiếm, cập nhật bài viết và phát triển liên kết chất lượng."
                title4="Tối ưu chuyển đổi và đo lường"
                desc4="Cải thiện CTA, biểu mẫu và trải nghiệm người dùng; theo dõi lưu lượng truy cập, khách hàng tiềm năng và tỷ lệ chuyển đổi."
            />
        </>
    )
}