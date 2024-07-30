import React from 'react';
import '../styles/AboutAs.scss';

const AboutAs: React.FC = () => {

    return (
        <div className="All_toor">
            <div className="All_toor_All">
                <div className="All_toor_interactiv">

                </div>
                <div className="All_toor_End">
                    <div className="All_toor_End_text">
                        <h2 className="All_toor_End_title">
                            Подивитися всі<br />
                            направлення Турів
                        </h2>
                        <p className="All_toor_End_p">
                            Береги океанів і дикі пляжі з рідкісними<br></br>породами<br></br>
                            дерев. Місцева архітектура і <br></br>первозданний вигляд дикої природи.
                        </p>
                    </div>
                    <div className="All_toor_button">
                        <button type="button" className="All_toor_End_btm">
                            
                            <svg width="275" height="75" viewBox="0 0 275 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="273" height="73" rx="36.5" stroke="#DD9428" stroke-width="2"/>
                                <text x="137.5" y="45" font-size="24" fill="#DD9428" text-anchor="middle" font-family="Arial, sans-serif">Дивитися все</text>
                            </svg>



                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutAs;
