import React, { useState } from 'react';
import '../styles/Header.scss';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
             
            <div className="header-content">
                <div className='logo_container'>
                    <div className='logo'>
                        <a href="" className='logo_a'>
                            <svg width="180" height="70" viewBox="0 0 160 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_9)">
                                <path d="M7.53906 0.383163H14.7741V2.31564H12.3721V29.7035H10.2176V2.31564H7.53906V0.383163Z" fill="white"/>
                                <path d="M25.0866 4.4147C25.1254 4.4147 25.1448 4.5924 25.1448 4.9478C25.1448 5.3032 25.14 5.6586 25.1303 6.01399V6.53043C24.3636 6.53043 23.6842 6.70813 23.0922 7.06353C22.5099 7.40782 21.9374 8.03532 21.3745 8.94602V29.7035H19.2054V4.71457H21.3745V7.49667C21.6268 6.51932 22.0684 5.7641 22.6992 5.23101C23.3397 4.68681 24.1355 4.4147 25.0866 4.4147Z" fill="white"/>
                                <path d="M29.7072 4.71457H31.8908V29.7035H29.7072V4.71457ZM29.7072 0.0166588H31.8762V2.41559H29.7072V0.0166588Z" fill="white"/>
                                <path d="M44.416 12.028C44.416 10.0733 44.3432 8.85717 44.1976 8.37961C44.0618 7.89094 43.8968 7.47445 43.7027 7.13016C43.5086 6.78587 43.1883 6.61373 42.7419 6.61373C42.2955 6.61373 41.9655 6.64704 41.752 6.71368C41.2279 6.88027 40.8446 7.36339 40.6019 8.16304C40.3593 8.95158 40.238 10.251 40.238 12.0613V21.9902C40.238 24.1115 40.3836 25.6108 40.6747 26.4882C40.9756 27.3545 41.5385 27.7876 42.3634 27.7876C43.1883 27.7876 43.7367 27.3545 44.0084 26.4882C44.2801 25.6219 44.416 24.0948 44.416 21.9069V12.028ZM40.238 6.63039C40.7524 5.23101 41.718 4.53132 43.1349 4.53132C44.1249 4.53132 44.8673 4.90893 45.3622 5.66415C45.8669 6.40826 46.1969 7.3745 46.3521 8.56286C46.5074 9.74011 46.5851 11.1617 46.5851 12.8276V21.7903C46.5851 21.8236 46.5851 21.8625 46.5851 21.9069C46.5851 25.05 46.226 27.1879 45.5078 28.3207C44.7896 29.4425 43.8094 30.0033 42.5672 30.0033C42.0723 30.0033 41.6064 29.8034 41.1697 29.4036C40.7427 28.9927 40.4321 28.4929 40.238 27.9043V34.1182H38.069V4.71457H40.238V6.63039Z" fill="white"/>
                                <path d="M61.0377 5.01444L61.0523 5.69747C61.0523 6.89693 61.5957 9.02932 62.6827 12.0946C63.43 11.0284 64.0026 9.98445 64.4005 8.96268C64.8081 7.92981 65.0119 6.78032 65.0119 5.51421C65.0119 4.24811 64.8906 3.34851 64.6479 2.81541C64.4053 2.27121 63.8327 1.99911 62.9302 1.99911C61.7559 1.99911 61.1348 2.77099 61.0668 4.31475C61.0571 4.55908 61.0474 4.72012 61.0377 4.79787C61.0377 4.8645 61.0377 4.93669 61.0377 5.01444ZM67.2974 23.6228C68.6755 26.9325 69.5101 28.9593 69.8013 29.7035H67.9962C67.7438 29.0149 67.2295 27.7599 66.4531 25.9385C65.9678 27.1935 65.468 28.0931 64.9537 28.6373C64.4393 29.1815 63.9249 29.548 63.4106 29.7368C62.9059 29.9367 62.3236 30.0366 61.6637 30.0366C60.3438 30.0366 59.2762 29.5147 58.461 28.4707C57.6458 27.4267 57.2382 25.994 57.2382 24.1726C57.2382 22.3512 57.3983 21.0018 57.7186 20.1244C58.0486 19.247 58.3591 18.4751 58.6503 17.8087C58.9414 17.1424 59.844 15.8319 61.358 13.8772C59.7372 9.72345 58.9269 6.98578 58.9269 5.66415C58.9269 1.89916 60.3147 0.0166588 63.0903 0.0166588C64.711 0.0166588 65.7737 0.50533 66.2784 1.48267C66.7927 2.46002 67.0499 3.82608 67.0499 5.58085C67.0499 7.33563 66.7103 8.86828 66.0309 10.1788C65.3613 11.4782 64.5169 12.8498 63.4979 14.2936C64.187 16.1151 65.1138 18.4029 66.2784 21.1573C67.0645 19.2692 67.9282 17.6921 68.8696 16.426L69.8741 18.2086C69.0006 19.4525 68.1417 21.2572 67.2974 23.6228ZM65.3758 23.4396C63.9589 20.1744 62.9156 17.7255 62.246 16.0928C61.4308 17.3367 60.7611 18.5973 60.237 19.8745C59.713 21.1517 59.4461 22.6122 59.4364 24.2559C59.4364 26.7215 60.2662 27.9542 61.9257 27.9542C62.838 27.9542 63.6047 27.3434 64.2258 26.1217C64.5363 25.4887 64.9197 24.5946 65.3758 23.4396Z" fill="white"/>
                                <path d="M90.2807 0.383163H92.7118V29.7035H90.7466V17.1424L91.0814 5.33096L87.4275 29.0704H85.3603L81.5754 5.33096L81.9102 17.1424V29.7035H79.9304V0.383163H82.3615L86.3939 25.0055L90.2807 0.383163Z" fill="white"/>
                                <path d="M98.89 4.71457H101.074V29.7035H98.89V4.71457ZM98.89 0.0166588H101.059V2.41559H98.89V0.0166588Z" fill="white"/>
                                <path d="M109.421 7.16348C109.615 6.41937 110.042 5.77521 110.702 5.23101C111.372 4.6757 112.158 4.39804 113.06 4.39804C113.963 4.39804 114.705 4.82563 115.288 5.68081C115.87 6.53598 116.161 7.81875 116.161 9.5291V29.7035H113.992V9.32919C113.992 8.36295 113.798 7.66881 113.41 7.24678C113.031 6.81364 112.522 6.59707 111.881 6.59707C110.241 6.59707 109.421 7.52443 109.421 9.37916V29.7035H107.252V4.71457H109.421V7.16348Z" fill="white"/>
                                <path d="M128.089 12.4278C128.089 10.2843 127.944 8.78498 127.653 7.92981C127.371 7.06353 126.818 6.63039 125.993 6.63039C125.168 6.63039 124.615 7.07463 124.334 7.96313C124.052 8.84051 123.911 10.3676 123.911 12.5444V22.44C123.911 24.7279 124.067 26.1939 124.377 26.8381C124.697 27.4822 125.168 27.8043 125.789 27.8043C126.41 27.8043 126.852 27.6766 127.114 27.4211C127.386 27.1546 127.614 26.7159 127.798 26.1051C127.992 25.4831 128.089 24.2725 128.089 22.4733V12.4278ZM128.075 0H130.258V29.7035H128.075V27.8043C127.57 29.1926 126.604 29.8867 125.178 29.8867C123.557 29.8756 122.528 28.7705 122.092 26.5715C121.849 25.3609 121.728 23.7339 121.728 21.6904V12.9109C121.728 9.55686 122.077 7.30231 122.776 6.14727C123.484 4.99222 124.479 4.4147 125.76 4.4147C126.255 4.4147 126.711 4.62017 127.129 5.0311C127.556 5.43092 127.871 5.91959 128.075 6.49711V0Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.384 8.01446L159.709 15.252C160.097 15.6962 160.097 16.4162 159.709 16.8604L153.384 24.0979C152.996 24.5421 152.367 24.5421 151.979 24.0979C151.591 23.6538 151.591 22.9337 151.979 22.4896L156.607 17.1935H139.13V14.9189H156.607L151.979 9.62281C151.591 9.17868 151.591 8.4586 151.979 8.01446C152.367 7.57033 152.996 7.57033 153.384 8.01446Z" fill="#EFC224"/>
                                <path d="M3.97516 14.9189H0V17.1934H3.97516V14.9189Z" fill="#EFC224"/>
                                </g>
                                <defs>
<clipPath id="clip0_3_9">
<rect width="160" height="35" fill="white"/>
</clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/" onClick={toggleMenu}>Home</a></li>
                        <li><a href="/" onClick={toggleMenu}>About</a></li>
                        <li><a href="/" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </nav>
                <div className='hero'>
                    <div className='hero_container'>
                        <h1 className='hero_title'>Відкрий для себе Нову<br></br>Ірландію</h1>
                        <h3 className='hero_h3'>Авторські тури по екзотичним<br></br>куткам від Антона Птушкіна</h3>
                        <div className='Btm_contacts'>
                            <button type="button" >Залишити заявку</button>
                        </div>
                        <a href="https://youtu.be/AQDC09k62F0?si=p6Sx2zSkyr2wHuNa" className='video'>
                            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_25)">
<g opacity="0.75">
<path opacity="0.75" d="M37.5 74C57.6584 74 74 57.6584 74 37.5C74 17.3416 57.6584 1 37.5 1C17.3416 1 1 17.3416 1 37.5C1 57.6584 17.3416 74 37.5 74Z" stroke="white" stroke-width="2"/>
<path opacity="0.75" d="M32.25 28.4067L48 37.5L32.25 46.5933V28.4067Z" stroke="white" stroke-width="2"/>
</g>
                                </g>
                                <defs>
<clipPath id="clip0_3_25">
<rect width="75" height="75" fill="white"/>
</clipPath>
                                </defs>
                            </svg>
                            Подивитися
                            <br />
                            відео-звіт
                            <br />
                            2018-2019
                        </a>
                    </div>
                    <div className="hero_media">
                        <h5 className="hero_media__title">Підписуйтесь на наші соціальні мережі</h5>
                        <ul className="hero_media__list">
                            <li className="hero_media__item">
                                <a href="https://www.youtube.com/" className="hero_media__link">
                                    <svg className="hero_media__icon" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3_35)">
            <path d="M18.2594 1.14781C17.5736 0.33255 16.3073 0 13.8891 0H5.11076C2.63714 0 1.34943 0.354001 0.666165 1.22196C0 2.06823 0 3.31514 0 5.04089V8.33017C0 11.6735 0.7904 13.371 5.11076 13.371H13.8891C15.9862 13.371 17.1483 13.0776 17.9001 12.3581C18.6711 11.6203 19 10.4157 19 8.33017V5.04089C19 3.22094 18.9485 1.96668 18.2594 1.14781ZM12.1981 7.13965L8.21186 9.22289C8.12275 9.26947 8.02529 9.29258 7.92796 9.29258C7.81776 9.29258 7.70781 9.26291 7.61042 9.20395C7.42704 9.09284 7.31506 8.89408 7.31506 8.67969V4.52656C7.31506 4.31254 7.42673 4.11397 7.60975 4.00279C7.79282 3.89162 8.02051 3.88402 8.21045 3.98269L12.1967 6.05251C12.3995 6.15781 12.5268 6.36717 12.5271 6.59559C12.5274 6.8242 12.4006 7.03386 12.1981 7.13965Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_3_35">
              <rect width="19" height="14" fill="white"/>
            </clipPath>
          </defs>
                                    </svg>
                                </a>
                            </li>
                            <li className="hero_media__item">
                                <a href="https://www.facebook.com/" className="hero_media__link">
                                    <svg className="hero_media__icon" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3_37)">
            <path d="M9.36525 0.0037452L7.03106 0C4.40867 0 2.71396 1.73871 2.71396 4.42982V6.47227H0.36703C0.164227 6.47227 0 6.63668 0 6.83949V9.79876C0 10.0016 0.164415 10.1658 0.36703 10.1658H2.71396V17.633C2.71396 17.8358 2.87819 18 3.08099 18H6.14307C6.34587 18 6.5101 17.8356 6.5101 17.633V10.1658H9.25421C9.45701 10.1658 9.62124 10.0016 9.62124 9.79876L9.62236 6.83949C9.62236 6.74211 9.5836 6.64886 9.51487 6.57994C9.44615 6.51103 9.35252 6.47227 9.25514 6.47227H6.5101V4.74086C6.5101 3.90868 6.70841 3.48622 7.79246 3.48622L9.36488 3.48566C9.56749 3.48566 9.73172 3.32124 9.73172 3.11863V0.370775C9.73172 0.168347 9.56768 0.00411972 9.36525 0.0037452Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_3_37">
              <rect width="10" height="18" fill="white"/>
            </clipPath>
          </defs>
                                    </svg>
                                </a>
                            </li>
                            <li className="hero_media__item">
                                <a href="https://x.com/" className="hero_media__link">
                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_39)">
<path d="M18.7314 1.73609C18.0233 2.04068 17.315 2.2309 16.6072 2.3073C17.4066 1.82762 17.9474 1.14995 18.2292 0.274347C17.4978 0.708269 16.7175 1.00514 15.8877 1.16511C15.1566 0.388478 14.2583 0 13.1921 0C12.1719 0 11.3021 0.359715 10.5822 1.0793C9.8628 1.79885 9.50304 2.6687 9.50304 3.68896C9.50304 3.96302 9.53345 4.24485 9.59441 4.53416C8.08675 4.45803 6.67245 4.07924 5.35129 3.39777C4.0302 2.71622 2.90901 1.80822 1.98773 0.673746C1.65269 1.24468 1.48512 1.86534 1.48512 2.53537C1.48512 3.16735 1.63357 3.75372 1.93068 4.29434C2.22759 4.83487 2.62743 5.27263 3.12999 5.6077C2.53598 5.58482 1.98016 5.42869 1.46248 5.13934V5.18502C1.46248 6.07595 1.7423 6.85815 2.30188 7.53221C2.86153 8.2062 3.5678 8.63044 4.42052 8.80565C4.10069 8.8893 3.77702 8.93119 3.44966 8.93119C3.23644 8.93119 3.00418 8.91218 2.75296 8.87438C2.98898 9.61281 3.42302 10.2198 4.05492 10.696C4.68694 11.1718 5.40269 11.4171 6.20221 11.4327C4.86216 12.4833 3.33553 13.0086 1.62233 13.0086C1.29486 13.0086 0.997991 12.9937 0.731445 12.9631C2.44469 14.067 4.33299 14.619 6.39647 14.619C7.70611 14.619 8.93583 14.4117 10.0852 13.9966C11.2352 13.5818 12.2173 13.0259 13.0321 12.329C13.8467 11.6324 14.5492 10.831 15.1393 9.92492C15.7293 9.0188 16.1689 8.07282 16.4585 7.08681C16.7477 6.10059 16.8924 5.11286 16.8924 4.12284C16.8924 3.90962 16.8886 3.7498 16.8809 3.64315C17.6045 3.11802 18.2212 2.48212 18.7314 1.73609Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_39">
<rect width="19" height="15" fill="white"/>
</clipPath>
</defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
