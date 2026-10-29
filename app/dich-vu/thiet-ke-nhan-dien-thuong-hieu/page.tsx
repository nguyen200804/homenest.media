import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Kiến tạo dấu ấn thương hiệu qua hệ thống nhận diện chuyên nghiệp"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế nhận diện thương hiệu, giúp doanh nghiệp xây dựng hình ảnh nhất quán và thể hiện rõ bản sắc thương hiệu trên các điểm chạm với khách hàng. Từ <a href="/dich-vu/thiet-ke-logo-chuyen-nghiep/" target="_blank" rel="noopener">thiết kế logo</a>, màu sắc, kiểu chữ đến các ấn phẩm ứng dụng, hệ thống nhận diện được phát triển dựa trên định hướng thương hiệu, lĩnh vực hoạt động và nhu cầu sử dụng thực tế.</p>
                        <p>Giải pháp thiết kế hướng đến việc chuẩn hóa hình ảnh doanh nghiệp trên các nền tảng truyền thông, hỗ trợ hoạt động marketing và tạo sự đồng bộ trong quá trình phát triển thương hiệu.</p>
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế nhận diện thương hiệu! "
            />
            <ServiceOverview
                title="Khi nào doanh nghiệp cần thiết kế hoặc chuẩn hóa nhận diện?"
                description={(
                    <>
                        <ul><li>Thành lập doanh nghiệp hoặc ra mắt nhãn hàng mới, cần hệ thống hình ảnh thống nhất từ đầu.</li><li>Tái định vị, thay đổi phân khúc khách hàng hoặc mở rộng thị trường.</li><li>Có logo nhưng các tài liệu bán hàng, đồng phục và kênh số đang thiếu đồng bộ.</li><li>Phát triển nhiều chi nhánh, đội ngũ hoặc đối tác cần sử dụng nhận diện đúng quy chuẩn.</li><li>Chuẩn bị gọi vốn, giới thiệu dự án, phát triển hệ thống phân phối hay tham gia triển lãm.</li></ul>
                    </>
                )}
            />
            <ServiceStrategy
                heading="Giải pháp thiết kế nhận diện thương hiệu toàn diện tại HomeNest.media"
                title1="Nghiên cứu thị trường và mục tiêu của thương hiệu"
                desc1="Tìm hiểu lĩnh vực, khách hàng mục tiêu và thị trường để xác định định hướng thiết kế phù hợp với thương hiệu."
                title2="Hệ thống nhận diện nhất quán "
                desc2="Thiết kế đồng bộ từ logo, màu sắc, kiểu chữ đến các ấn phẩm ứng dụng nhằm duy trì hình ảnh thương hiệu nhất quán."
                title3="Thiết kế có chiến lược "
                desc3="Thiết kế các yếu tố nhận diện thể hiện giá trị, cá tính và thông điệp thương hiệu, đồng thời đáp ứng yêu cầu thẩm mỹ."
                title4="Ứng dụng trên đa nền tảng "
                desc4="Định hướng hệ thống nhận diện để ứng dụng nhất quán trên website, mạng xã hội, danh thiếp, hồ sơ doanh nghiệp và các ấn phẩm truyền thông."
            />
        </>
    )
}