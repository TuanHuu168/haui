import './App.css';

function Footer() {
    return (
        <>
            <footer>
                <div class="footer">
                    <div class="footer-items">
                        <div class="logo topic">
                            <img src="https://www.haui.edu.vn/dnn/web/haui/assets/images/logo.png" />
                        </div>
                        <div class="map">
                            <p class="topic">
                                Bản đồ chỉ dẫn
                            </p>
                            <span>Trường Đại học Công nghiệp Hà Nội</span> <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4737883168505!2d105.73291811474792!3d21.0537309859848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1679685205351!5m2!1svi!2s" ></iframe>
                        </div>
                        <div class="addr">
                            <p class="topic">
                                Trụ sở chính
                            </p> <br />
                            <span>
                                <i class="fa fa-map" aria-hidden="true"></i> Số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội
                            </span>
                            <span>
                                <i class="fa fa-phone" aria-hidden="true"></i> +84 243 765 5121
                            </span>
                            <span>
                                <i class="fa fa-address-book" aria-hidden="true"></i> Email: dhcnhn@haui.edu.vn
                            </span> <br />
                            <p class="topic">
                                Các cơ sở khác
                            </p> <br />
                            <span>
                                <i class="fa fa-map" aria-hidden="true"></i> Cơ sở 2: Phường Tây Tựu, Bắc Từ Liêm, Hà Nội
                            </span>
                            <span>
                                <i class="fa fa-map" aria-hidden="true"></i> Cơ sở 3: Lê Hồng Phong, TP. Phủ Lý, Hà Nam
                            </span>
                        </div>
                        <div class="link">
                            <p class="topic">
                                Liên kết site
                            </p> <br />
                            <div class="link-items">
                                <span>
                                    <a href="#">Trường Đại học Công nghiệp Hà Nội</a>
                                </span>
                                <span>
                                    <a href="#">Cổng thông tin tuyển sinh</a>
                                </span>
                                <span>
                                    <a href="#">Hành chính điện tử</a>
                                </span>
                                <span>
                                    <a href="#">Đào tạo trực tuyến</a>
                                </span>
                                <span>
                                    <a href="#">Cổng thông tin đào tạo</a>
                                </span>
                            </div>
                            <div class="media">
                                <img src="img/facebook.svg" />
                                <img src="img/youtube.svg" />
                                <img src="img/zalo.png" />
                                <img src="img/tiktok.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copy-right">
                    <a href="#">Copyright © 2021 Đại Học Công Nghiệp Hà Nội</a>
                </div>
            </footer>
        </>
    )
}

export default Footer