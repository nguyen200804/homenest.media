import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết kế Profile công ty Catalogue chuyên nghiệp - Chìa khóa chinh phục khách hàng"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media </a>cung cấp dịch vụ thiết kế profile công ty và catalogue, giúp doanh nghiệp thể hiện năng lực, giới thiệu sản phẩm và truyền tải thông tin thương hiệu một cách rõ ràng, nhất quán. Từ việc sắp xếp nội dung, lựa chọn hình ảnh đến xây dựng bố cục thiết kế, mỗi ấn phẩm đều được định hướng theo lĩnh vực hoạt động và mục đích sử dụng thực tế.</p>
                        <p>Profile và catalogue được thiết kế nhằm hỗ trợ doanh nghiệp giới thiệu hình ảnh chuyên nghiệp đến khách hàng, đối tác, đồng thời phục vụ các hoạt động bán hàng, hợp tác kinh doanh và đấu thầu.</p>
                    </>
                )}
                ctaText="Nhận tư vấn Profile/Catalogue"
            />
            <ServiceOverview
                title="Với một profile và catalogue chuyên nghiệp, doanh nghiệp sẽ dễ dàng nổi bật hơn trong thị trường."
                description="Doanh nghiệp nên thiết kế Profile và Catalogue khi cần giới thiệu năng lực, sản phẩm và dịch vụ một cách chuyên nghiệp đến khách hàng, đối tác. Đây cũng là những tài liệu hữu ích khi tham gia đấu thầu, tìm kiếm nhà phân phối hoặc mở rộng cơ hội hợp tác kinh doanh. Đối với doanh nghiệp có nhiều sản phẩm, mã hàng và thông số kỹ thuật, catalogue giúp hệ thống thông tin rõ ràng, thuận tiện cho việc tra cứu và lựa chọn. Bên cạnh đó, khi nhận diện thương hiệu thay đổi, doanh nghiệp cần cập nhật Profile và Catalogue để đảm bảo tính đồng bộ, đồng thời bổ sung phiên bản song ngữ, thông tin dự án hoặc số liệu mới theo nhu cầu sử dụng."
            />
            <ServiceStrategy
                heading="Nâng tầm hình ảnh doanh nghiệp với Profile & Catalogue tại HomeNest.media"
                title1="Tư vấn định hướng và cấu trúc nội dung"
                desc1="Xác định mục tiêu để xây dựng nội dung phù hợp cho Profile và Catalogue."
                title2="Thiết kế Profile công ty"
                desc2="Thiết kế hồ sơ năng lực với bố cục rõ ràng, hình ảnh đồng bộ và nội dung phù hợp với doanh nghiệp. "
                title3="Thiết kế Catalogue sản phẩm và dịch vụ"
                desc3=" Sắp xếp sản phẩm, hình ảnh và thông số theo bố cục rõ ràng, dễ tra cứu."
                title4="Hoàn thiện và bàn giao file thiết kế"
                desc4="Hoàn thiện thiết kế theo phản hồi và bàn giao file đúng định dạng, phạm vi thỏa thuận."
            />
        </>
    )
}