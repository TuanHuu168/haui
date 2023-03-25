//Data của phần thông tin chiếm 2/3 trang ở dưới :v
const news = [
  {
    topic: 'TIN TỨC',
    bigImg: 'img/bI1.jpg',
    bigLink: 'HaUI hợp tác với NATV trong đào tạo nhân lực chất lượng cao',
    bigContent: 'Ngày 21/3, TS.Kiều Xuân Thực, Hiệu trưởng Trường Đại học Công nghiệp Hà Nội đã có buổi tiếp và làm việc với Công ty TNHH Nissan Automotive Technology Việt Nam',
    smallImg1: "img/smI1_1.jpg",
    smallContent1: "Hơn 10.000 lượt học sinh, phụ huynh tham quan, tư vấn và tìm hiểu ngành nghề đào tạo của Đại học Công nghiệp",
    smallImg2: "img/smI1_2.jpg",
    smallContent2: "Trường Đại học Công nghiệp Hà Nội ký kết thỏa thuận hợp tác đào tạo với Trường Đại học Khoa học kỹ thuật",
    smallImg3: "img/smI1_3.jpg",
    smallContent3: "Hội thảo kiểm định chất lượng theo chuẩn ABET và AUN thuộc dự án BUILD-IT",
    smallImg4: "img/smI1_4.jpg",
    smallContent4: "Hơn 400 học sinh Trường THPT C Nghĩa Hưng - Nam Định tham quan Đại học Công nghiệp Hà Nội",
    smallImg5: "img/smI1_5.jpg",
    smallContent5: "Những bông hoa đậm đà sắc hương",
  },
  {
    topic: 'SỰ KIỆN',
    bigImg: 'img/bI2.jpg',
    bigLink: 'Sinh viên được hỗ trợ gì khi học tại các trường đại học ngành Công Thương?',
    bigContent: 'Để hỗ trợ sinh viên, nhiều chính sách và hoạt động đã được các trường đại học ngành Công Thương đưa ra trong những năm gần đây.',
    smallImg1: "img/smI2_1.jpg",
    smallContent1: "Ngành công nghệ vẫn có sức hút giữa 'bão' sa thải",
    smallImg2: "img/smI2_2.jpg",
    smallContent2: "Tọa đàm: “Phát triển mô hình doanh nghiệp, mô hình đào tạo THPT tại các trường Đại học, Cao Đẳng thuộc Bộ Công Thương”",
    smallImg3: "img/smI2_3.jpg",
    smallContent3: "Giảng đường doanh nghiệp",
    smallImg4: "img/smI2_4.jpg",
    smallContent4: "Lễ trao Quyết định Chỉ huy trưởng Ban Chỉ huy Quân sự Trường Đại học Công nghiệp Hà Nội",
    smallImg5: "img/smI2_5.jpg",
    smallContent5: "Nữ giảng viên Nguyễn Thị Hải Yến: 16 năm gửi trọn tình yêu với nghề",
  },
  {
    topic: ' HOẠT ĐỘNG SINH VIÊN',
    bigImg: 'img/bI3.jpg',
    bigLink: 'Tuổi trẻ Đại học Công nghiệp Hà Nội sôi nổi các hoạt động chào mừng Tháng Thanh niên 2023',
    bigContent: 'Tháng 3 về mang theo biết bao ước mơ, khát vọng trong không khí hân hoan của tuổi trẻ cả nước chào mừng Kỷ niệm 92 năm Ngày thành lập Đoàn Thanh niên cộng s...',
    smallImg1: "img/smI3_1.jpg",
    smallContent1: "Nữ sinh Đại học Công Nghiệp Hà Nội bén duyên với nghề MC",
    smallImg2: "img/smI3_2.jpg",
    smallContent2: "Ra quân tháng thanh niên 2023: Tuổi trẻ tiên phong chuyển đổi số",
    smallImg3: "img/smI3_3.jpg",
    smallContent3: "Nữ sinh chế tạo tay máy robot, đạt giải Nhất nghiên cứu khoa học",
    smallImg4: "img/smI3_4.jpg",
    smallContent4: "Sinh viên Trường Đại học Công nghiệp Hà Nội nhận học bổng Năng lượng tương lai AES",
    smallImg5: "img/smI3_5.jpg",
    smallContent5: "Xuân yêu thương - Tết sẻ chia: Tỏa sáng tình người trong gian khó",
  }
];
//Data của phần thông tin chiếm 1/3 trang còn lại :v
const subnews = [
  {
    id: "1",
    topic: "THÔNG BÁO",
    text1: "Kế hoạch tổ chức Lễ kỷ niệm 20 năm ngày thành lập Khoa Công nghệ Hóa",
    text2: "Hội thảo việc làm và thi tuyển trực tiếp của Công ty TNHH LG Innotek Việt Nam Hải Phòng",
    text3: "Hội thảo giới thiệu chương trình thực tập tại Đan Mạch và Mỹ",
    image: "img/notice.webp",
  },
  {
    id: "2",
    topic: "GÓC NHÌN HaUI",
    text1: "Giải pháp nâng cao vai trò của tham vấn tâm lý học đường trong bối cảnh chuyển đổi số",
    text2: "Kỹ thuật sản xuất thông minh - Chương trình đào tạo nhân lực kỹ thuật cao",
    text3: "Phát triển hoạt động nghiên cứu khoa học của sinh viên tại khoa Kế toán - Kiểm toán, ĐHCNHN: Từ số lượng đến chất lượng sản phẩm nghiên cứu khoa học",
  },
  {
    id: "3",
    img1: "img/sub_banner1.jpg",
    img2: "img/sub_banner2.jpg",
    img3: "ing/sub_banner3.jpg",
  }
];

//Data cho phần số liệu
const infoData = [
  {
    topic: "TOP 0",
    text: "ĐẠI HỌC DẪN ĐẦU VỀ NGHIÊN CỨU TẠI VIỆT NAM",
  },
  {
    topic: "0",
    text: "CÔNG BỐ QUỐC TẾ",
  },
  {
    topic: "0",
    text: "ĐỀ TÀI/ĐỀ ÁN KHOA HỌC CÔNG NGHỆ",
  }
]
//Data phần chứa cả hình và nội dung .-.
const moreInfo = [
  {
    img: "img/moreInfo1_1.webp",
    text: "Tin khoa học công nghệ",
  },
  {
    img: "img/moreInfo1_2.webp",
    text: "Công bố quốc tế",
  },
  {
    img: "img/moreInfo1_3.webp",
    text: "Nhiệm vụ khoa học công nghệ",
  },
  {
    img: "img/moreInfo2_1.webp",
    text: "Nhiệm vụ khoa học công nghệ",
  },
  {
    img: "img/moreInfo2_2.webp",
    text: "Nhiệm vụ khoa học công nghệ",
  },
  {
    img: "img/moreInfo2_3.webp",
    text: "Nhiệm vụ khoa học công nghệ",
  }
]


//Data cho phần banner .-.
const bannerImg = [
  [
    "img/bigB1.jpg",
    "img/bigB2.jpg",
    "img/bigB3.jpg"
  ],
  [
    "img/mdB1.jpg",
    "img/mdB2.jpg",
    "img/mdB3.jpg"
  ],
  [
    "img/smB1.jpg",
    "img/smB2.jpg",
    "img/smB3.jpg"
  ], [
    'img/tc5.jpg',
    'img/tc6.jpg',
    'img/tc7.jpg',
    'img/tc8.jpg',
    'img/tc9.jpg',
  ]
]


export {
  bannerImg, moreInfo, infoData, subnews, news
}