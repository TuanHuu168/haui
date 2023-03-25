import React from "react";
import SlideBanner from './Banner.jsx';

function SubNewsCard(news) {
    const subnews = news.news;
    return (
        <>
        {
            subnews.id == "1" || subnews.id == "2" ? (
                <>
                    <div className="noti">
                        <p className="topic">{subnews.topic}</p>
                        <ul className="contents">
                            <li>
                                <a href="#"><span>»</span> {subnews.text1}</a>
                            </li>
                            <li>
                                <a href="#"><span>»</span> {subnews.text2}</a>
                            </li>
                            <li>
                                <a href="#"><span>»</span> {subnews.text3}</a>
                            </li>
                            {subnews.id == "1" ? (
                                <img src={subnews.image} />

                            ) : subnews.id == "2" ? (
                                <div style={{ paddingTop: '40px' }}>
                                    <SlideBanner num="2" len={1}/>
                                </div>
                            ) : (
                                <p>hihi</p>
                            )
                            }
                        </ul>
                    </div>
                </>

            ) : (<>
                <div class="sub-banner">
                    <img src="img/sub_banner1.jpg" />
                    <img src="img/sub_banner2.jpg" />
                    <img src="img/sub_banner3.jpg" />
                </div>
            </>)
        }
        </>


    )
}

export default SubNewsCard