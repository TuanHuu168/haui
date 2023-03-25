import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-icons/fa";
//import components
import { bannerImg, moreInfo, infoData, subnews, news } from "./data";
import SlideBanner from './Banner.jsx';
import NewsCard from './NewsCard.jsx';
import SubNewsCard from './SubNewsCard.jsx';
import MoreInfo from './MoreInfo.jsx';
import InfoData from './InfoData.jsx';
import Header from './header';
import Footer from './footer';

function App() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="App">
      <Header />
      <SlideBanner num="0" len={1} />
      <div className="slick1-container">
        <ul className="nav-items">
          <li>
            <a href="#">khảo thí</a>
          </li>
          <li>
            <a href="#">đảm bảo chất lượng</a>
          </li>
          <li>
            <a href="#">hợp tác doanh nghiệp</a>
          </li>
          <li>
            <a href="#">hợp tác quốc tế</a>
          </li>
          <li>
            <a href="#">đại học điện tử</a>
          </li>
          <li>
            <a href="#">văn bản pháp luật</a>
          </li>
        </ul>
      </div>


      <div className="content-container">
        <NewsCard news={news[0]} />
        <SubNewsCard news={subnews[0]} />

      </div>
      <div className="mdBanner">
        <SlideBanner num="1" len={1} />
      </div>
      <div className='bg-content'>
        <div className="content-container">
          <NewsCard news={news[1]} />
          <SubNewsCard news={subnews[1]} />
        </div>
      </div>
      <div className="content-container">
        <NewsCard news={news[2]} />
        <SubNewsCard news={subnews[2]} />
      </div>

      <div className="technology">
        <div className="tech-content">
          <p className="topic">
            KHOA HỌC CÔNG NGHỆ
          </p>
          <div className="data">
            <InfoData />
            <MoreInfo element={moreInfo[0]} />
            <MoreInfo element={moreInfo[1]} />
            <MoreInfo element={moreInfo[2]} />
          </div>
        </div>
      </div>
      <div className="longestSlider cen">
        <Slider {...settings}>
          {bannerImg[3].map((e) => (
            <p>
              <img src={e} />
            </p>

          ))}
        </Slider>
      </div>
      <div className="data cen">
        <MoreInfo element={moreInfo[3]} />
        <MoreInfo element={moreInfo[4]} />
        <MoreInfo element={moreInfo[5]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;