import React from "react";
function NewsCard(news) {
    news = news.news;
    return (
                <div className="news">
                    <p className="topic">{news.topic}</p>
                    <div className="news-contents">
                        <div className="news1">
                            <img src={news.bigImg} /> <br />
                            <a href="#" className="header-link">{news.bigLink}</a>
                            <span>{news.bigContent}</span>
                        </div>
                        <div className="other-news">

                            <a href="#" className="flex-content">
                                <img src={news.smallImg1} />
                                <span>{news.smallContent1}</span>
                            </a>
                            <a href="#" className="flex-content">
                                <img src={news.smallImg2} />
                                <span>{news.smallContent2}</span>
                            </a>
                            <a href="#" className="flex-content">
                                <img src={news.smallImg3} />
                                <span>{news.smallContent3}</span>
                            </a>
                            <a href="#" className="flex-content">
                                <img src={news.smallImg4} />
                                <span>{news.smallContent4}</span>
                            </a>
                            <a href="#" className="flex-content">
                                <img src={news.smallImg5} />
                                <span>{news.smallContent5}</span>
                            </a>
                        </div>
                    </div>
                </div>

    )
}

export default NewsCard