import React, { useRef } from "react";
import './App.css';
//import slick slider for slideshow banner
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {bannerImg, moreInfo, infoData, subnews, news} from "./data";


function SlideBanner(num) {
    // const slider = useRef(null);
    const settings = {
        infinite: true,
        slidesToShow: num.len,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    const val = bannerImg[num.num];
    return (
        <div className="banner">
            <div>
                {/* <Slider ref={slider} {...settings}> */}
                <Slider {...settings}>
                    {val.map((e)=>(
                        <img src={e} />

                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default SlideBanner