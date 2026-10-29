import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết Kế Logo Chuyên Nghiệp - Dấu ấn vững bền, chinh phục niềm tin."
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế logo phù hợp với định hướng thương hiệu, lĩnh vực hoạt động và nhóm khách hàng mục tiêu. Logo được phát triển dựa trên đặc điểm riêng của doanh nghiệp, góp phần xây dựng hình ảnh nhất quán và là nền tảng cho quá trình <a href="/dich-vu/thiet-ke-nhan-dien-thuong-hieu/" target="_blank" rel="noopener">thiết kế bộ nhận diện thương hiệu</a> trên các kênh truyền thông.</p>
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế logo miễn phí!"
            />
            <ServiceOverview
                title="Thiết kế logo chuyên nghiệp là khoản đầu tư cần thiết cho doanh nghiệp"
                description="Doanh nghiệp nên thuê thiết kế logo chuyên nghiệp khi mới thành lập, cần xây dựng hình ảnh thương hiệu, muốn làm mới logo hiện tại hoặc nhận thấy logo chưa phù hợp với định hướng phát triển. Một thiết kế logo được đầu tư bài bản giúp thể hiện bản sắc doanh nghiệp, tạo sự khác biệt trên thị trường và đảm bảo khả năng ứng dụng nhất quán trên website, mạng xã hội, bao bì và các ấn phẩm truyền thông. Đây cũng là bước nền tảng để doanh nghiệp phát triển hệ thống nhận diện thương hiệu đồng bộ trong dài hạn."
            />
            <ServiceStrategy
                heading="Truyền tải câu chuyện riêng của thương hiệu qua Logo cùng HomeNest.media"
                title1="Tư vấn định hướng và concept logo"
                desc1="Xác định lĩnh vực, khách hàng mục tiêu và tính cách thương hiệu để xây dựng concept logo phù hợp"
                title2="Thiết kế logo 2D"
                desc2="Phát triển phương án logo với biểu tượng, kiểu chữ và màu sắc phù hợp. Các phiên bản logo được triển khai theo phạm vi thiết kế đã thỏa thuận."
                title3="Hoàn thiện phiên bản và biến thể logo"
                desc3="Điều chỉnh logo và hoàn thiện các phiên bản màu, đơn sắc, âm bản, ngang hoặc dọc theo nhu cầu sử dụng và phạm vi dịch vụ."
                title4="Hướng dẫn sử dụng và bàn giao file logo"
                desc4="Xây dựng hướng dẫn sử dụng logo và bàn giao file thiết kế theo định dạng đã thống nhất, phục vụ ứng dụng trên website, mạng xã hội và các ấn phẩm thương hiệu."
            />
        </>
    )
}