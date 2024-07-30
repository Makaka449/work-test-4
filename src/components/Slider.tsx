import React from 'react';
import '../styles/Slider.scss';




const Slider: React.FC = () => {
    return (
        <div className="All_expiriens">
            <div className="All_expiriens_All">
                
                <div className="All_expiriens_End">
                    <div className="All_expiriens_End_text">
                        <h2 className="All_expiriens_End_title">
                            Що пишуть учасники <br />
                            наших турів
                        </h2>
                        <p className="All_expiriens_End_p">
                            87%учасників приходять по осодистій <br />
                            рекомендації від <br />
                            друзів. А кожен 4-тий мандрує знами <br />
                            більше двох разів!
                        </p>
                    </div>
                    <div className="All_expiriens_button">
                        <button type="button" className="All_expiriens_End_btm">            
                            <svg width="275" height="75" viewBox="0 0 275 75" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="273" height="73" rx="36.5" stroke="#DD9428" stroke-width="2"/>
  <text x="137.5" y="45" font-size="24" fill="#DD9428" text-anchor="middle" font-family="Arial, sans-serif">Читати коментарі</text>
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="All_expiriens_interactiv">

                </div>
            </div>
        </div>
    );
};

export default Slider;

