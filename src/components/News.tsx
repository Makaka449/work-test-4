import React from 'react';
import '../styles/News.scss';

const News: React.FC = () => {
    return (
        <div className="news">
            <div className="news-container">
                <div className="news-header">
                <h2 className="news-title">
                    Залишити заявку на<br />безкоштовну<br />консультацію
                </h2>
                <p className="news-subtitle">Ми зателефонуємо вам<br />в найблищий час</p>
                </div>
                <div className="news-form">
                <ul className="news-list">
                    <li className="news-item">
                        <input className="news-input" type="text" placeholder="Ваше ім'я" name="" id="" />
                    </li>
                    <li className="news-item">
                        <input className="news-input" type="tel" placeholder="+7 (_ _ _)_ _ _-_ _-_ _" name="" id="" />
                    </li>
                    <li className="news-item">
                        <button className="news-button" type="button">
                            Відправити заявку
                        </button>
                    </li>
                        <li className="news-item">
                            <div className="news-link-container">
                                <a className="news-link" href="">
                                    Нажимаючи кнопку, ви даєте згоду <br />
                                    на <span className="news-span">обробку персональних диних</span>
                                </a>
                            </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default News;
