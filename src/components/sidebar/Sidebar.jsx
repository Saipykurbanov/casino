import React from 'react';
import './css/sidebar.css';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <nav>
                <NavLink to={'/crash'}>
                    <svg width="31.583313" height="31.583328" viewBox="0 0 31.5833 31.5833" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs/>
                        <path id="path" d="M28.89 26.27L28.91 26.25C30.41 26.25 31.58 27.42 31.58 28.91C31.58 30.41 30.41 31.58 28.91 31.58L28.89 31.56L28.89 26.27ZM0.01 2.68L0 2.66C0 1.17 1.17 0 2.66 0C4.16 0 5.33 1.17 5.33 2.66L5.31 2.68L0.01 2.68ZM8.92 22.02L8.92 22.05C7.87 23.1 6.21 23.1 5.15 22.05C4.1 20.99 4.1 19.33 5.15 18.28L5.18 18.28L8.92 22.02ZM30.1 17.23L30.12 17.25C30.12 18.74 28.95 19.91 27.45 19.91C25.96 19.91 24.79 18.74 24.79 17.25L24.81 17.23L30.1 17.23ZM21.64 14.06L21.62 14.08C20.13 14.08 18.95 12.91 18.95 11.41C18.95 9.92 20.13 8.75 21.62 8.75L21.64 8.76L21.64 14.06Z" fill="#000000" fillOpacity="0" fillRule="nonzero"/>
                        <path id="path" d="M28.91 28.91L9.66 28.91C7.21 28.91 5.99 28.91 5.05 28.43C4.23 28.02 3.56 27.35 3.14 26.52C2.66 25.59 2.66 24.36 2.66 21.91L2.66 2.66M7.04 20.16L12.87 14.33L18.7 20.16L27.45 11.41M21.62 11.41L27.45 11.41L27.45 17.25" stroke="#EEEEEE" strokeOpacity="1.000000" strokeWidth="5.333333" strokeLinejoin="round" strokeLinecap="round"/>
                    </svg>
                </NavLink>
                <NavLink to={'/roulette'}>
                    <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#eeeeee" stroke="#eeeeee">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <title>roulette</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1644.000000, -414.000000)" fill="#eeeeee" fillRule="nonzero"> <g id="1" transform="translate(1350.000000, 120.000000)"> <path d="M301.294248,319.654671 C303.367339,321.525196 306.045865,322.737484 309.000433,322.962143 L309.000433,322.962143 L309.000703,325.969301 C305.218288,325.736217 301.791406,324.189005 299.170997,321.778603 L299.170997,321.778603 Z M318.982613,319.39751 L320.949747,321.363961 C321.003054,321.417268 321.060882,321.463298 321.122218,321.502031 C318.466977,324.07013 314.925065,325.727139 311.000299,325.96924 L311.000299,325.96924 L311.00057,322.962067 C314.088037,322.727064 316.874016,321.41358 318.982613,319.39751 L318.982613,319.39751 Z M310,299 C316.075132,299 321,303.924868 321,310 C321,316.075132 316.075132,321 310,321 C303.924868,321 299,316.075132 299,310 C299,303.924868 303.924868,299 310,299 Z M297.037933,311.00057 C297.245091,313.722203 298.290292,316.209562 299.916055,318.205164 L299.916055,318.205164 L297.786439,320.336328 C295.625803,317.785845 294.249702,314.549627 294.03076,311.000299 L294.03076,311.000299 Z M325.96924,311.000299 C325.758451,314.417451 324.475084,317.544377 322.450871,320.048771 C322.424444,320.014353 322.395474,319.98126 322.363961,319.949747 L322.363961,319.949747 L320.320332,317.906198 C321.810814,315.963525 322.765131,313.58791 322.962067,311.00057 L322.962067,311.00057 Z M308.585786,304.343146 C307.414214,303.171573 305.514719,303.171573 304.343146,304.343146 C303.171573,305.514719 303.171573,307.414214 304.343146,308.585786 C305.266805,309.509446 306.642915,309.704899 307.758058,309.172145 L307.758058,309.172145 L308.586494,309.999293 L307.758058,310.827855 C306.642915,310.295101 305.266805,310.490554 304.343146,311.414214 C303.171573,312.585786 303.171573,314.485281 304.343146,315.656854 C305.514719,316.828427 307.414214,316.828427 308.585786,315.656854 C309.509185,314.733456 309.704788,313.357864 309.172598,312.24289 L309.172598,312.24289 L310.000707,311.413506 L310.827855,312.241942 C310.295101,313.357085 310.490554,314.733195 311.414214,315.656854 C312.585786,316.828427 314.485281,316.828427 315.656854,315.656854 C316.828427,314.485281 316.828427,312.585786 315.656854,311.414214 C314.733456,310.490815 313.357864,310.295212 312.24289,310.827402 L312.24289,310.827402 L311.414921,309.999293 L312.24289,309.172598 C313.357864,309.704788 314.733456,309.509185 315.656854,308.585786 C316.828427,307.414214 316.828427,305.514719 315.656854,304.343146 C314.485281,303.171573 312.585786,303.171573 311.414214,304.343146 C310.490554,305.266805 310.295101,306.642915 310.827855,307.758058 L310.827855,307.758058 L310.000707,308.585079 L309.172598,307.75711 C309.704788,306.642136 309.509185,305.266544 308.585786,304.343146 Z M305.757359,312.828427 C306.147884,312.437903 306.781049,312.437903 307.171573,312.828427 C307.562097,313.218951 307.562097,313.852116 307.171573,314.242641 C306.781049,314.633165 306.147884,314.633165 305.757359,314.242641 C305.366835,313.852116 305.366835,313.218951 305.757359,312.828427 Z M312.828427,312.828427 C313.218951,312.437903 313.852116,312.437903 314.242641,312.828427 C314.633165,313.218951 314.633165,313.852116 314.242641,314.242641 C313.852116,314.633165 313.218951,314.633165 312.828427,314.242641 C312.437903,313.852116 312.437903,313.218951 312.828427,312.828427 Z M322.031716,299.452745 C324.297069,302.034859 325.744482,305.352396 325.969301,309.000703 L325.969301,309.000703 L322.962143,309.000433 C322.74768,306.179961 321.633203,303.611044 319.90526,301.580228 L319.90526,301.580228 Z M297.786439,299.663672 L299.916055,301.794836 C298.290093,303.790683 297.244834,306.278408 297.037857,309.000433 L297.037857,309.000433 L294.030699,309.000703 C294.249443,305.450982 295.625599,302.214396 297.786439,299.663672 L297.786439,299.663672 Z M305.757359,305.757359 C306.147884,305.366835 306.781049,305.366835 307.171573,305.757359 C307.562097,306.147884 307.562097,306.781049 307.171573,307.171573 C306.781049,307.562097 306.147884,307.562097 305.757359,307.171573 C305.366835,306.781049 305.366835,306.147884 305.757359,305.757359 Z M312.828427,305.757359 C313.218951,305.366835 313.852116,305.366835 314.242641,305.757359 C314.633165,306.147884 314.633165,306.781049 314.242641,307.171573 C313.852116,307.562097 313.218951,307.562097 312.828427,307.171573 C312.437903,306.781049 312.437903,306.147884 312.828427,305.757359 Z M309.000703,294.030699 L309.000433,297.037857 C306.046339,297.26248 303.368199,298.474415 301.295247,300.344428 L301.295247,300.344428 L299.170997,298.221397 C301.791406,295.810995 305.218288,294.263783 309.000703,294.030699 L309.000703,294.030699 Z M311.000299,294.03076 C314.683996,294.257991 318.030426,295.731653 320.623025,298.035181 L320.623025,298.035181 L318.496627,300.160647 C316.454186,298.39536 313.856347,297.255301 311.00057,297.037933 L311.00057,297.037933 Z" id="roulette"> </path> </g> </g> </g> </g>

                    </svg>
                </NavLink>
                <NavLink to={'g'}>
                    <svg fill="#eeeeee" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 475.996 475.996" xmlSpace="preserve" stroke="#eeeeee">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M239.765,178.954c49.418,0,89.477-40.064,89.477-89.477C329.242,40.059,289.178,0,239.765,0 c-49.418,0-89.477,40.059-89.477,89.477C150.287,138.89,190.346,178.954,239.765,178.954z M221.839,139.09l17.925-25.114 l17.925,25.114H221.839z M215.921,76.124c4.91,0,9.467,1.49,13.261,4.029c0.108-0.169,0.189-0.353,0.302-0.517 c-7.88-3.907-13.348-11.95-13.348-21.34c0-13.107,10.557-23.721,23.629-23.864c0.092,0,0.174-0.026,0.261-0.026 c13.194,0,23.89,10.696,23.89,23.89c0,9.549-5.642,17.725-13.737,21.55c0.097,0.148,0.164,0.312,0.251,0.466 c3.84-2.632,8.479-4.183,13.486-4.183c13.194,0,23.89,10.696,23.89,23.89c0,13.194-10.696,23.89-23.89,23.89 c-13.194,0-23.89-10.696-23.89-23.89c0-0.307,0.077-0.589,0.087-0.891c-0.118,0.005-0.23,0.036-0.353,0.036 c-0.015,0-0.026-0.005-0.041-0.005c0.01,0.292,0.087,0.563,0.087,0.86c0,13.194-10.696,23.89-23.89,23.89 s-23.89-10.696-23.89-23.89C192.026,86.825,202.721,76.124,215.921,76.124z"/> <path d="M378.921,148.782c-49.418,0-89.477,40.059-89.477,89.477c0,49.418,40.059,89.477,89.477,89.477 c49.418,0.005,89.477-40.054,89.477-89.472S428.339,148.782,378.921,148.782z M378.921,294.195l-47.483-55.931l47.478-55.931 l47.483,55.931L378.921,294.195z"/> <path d="M239.765,297.042c-49.418,0-89.477,40.059-89.477,89.477c0,49.418,40.059,89.477,89.477,89.477 s89.477-40.064,89.477-89.477C329.247,337.106,289.183,297.042,239.765,297.042z M221.839,429.189l17.925-25.114l17.925,25.114 H221.839z M263.634,417.009c-13.184,0-23.869-10.685-23.869-23.869c0,13.184-10.685,23.869-23.869,23.869 s-23.869-10.685-23.869-23.869c0-6.589,2.673-12.559,6.994-16.876l11.935-11.935l28.815-28.815l40.75,40.75 c4.321,4.321,6.989,10.286,6.994,16.881C287.503,406.323,276.818,417.009,263.634,417.009z"/> <path d="M186.557,233.702c0-49.418-40.059-89.477-89.477-89.477c-49.423-0.005-89.482,40.059-89.482,89.477 c0,49.418,40.059,89.477,89.477,89.477C146.493,323.18,186.557,283.121,186.557,233.702z M142.94,230.676 c-1.208,2.857-2.954,5.427-5.115,7.588l-11.935,11.935l-28.815,28.815L68.26,250.199l-11.935-11.935 c-4.321-4.321-6.989-10.286-6.994-16.881c0-13.184,10.685-23.869,23.869-23.869c13.184,0,23.869,10.685,23.869,23.869 c0-6.589,2.673-12.559,6.994-16.881s10.286-6.994,16.875-6.994c6.589,0,12.559,2.673,16.881,6.994s6.994,10.286,6.994,16.881 C144.814,224.681,144.148,227.82,142.94,230.676z"/> </g> </g> </g>

                    </svg>
                </NavLink>
                <NavLink to={'d'}>
                    <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <clipPath id="clip13_138">
                                <rect id="coin-1-svgrepo-com" width="40.000000" height="40.000000" fill="white" fillOpacity="0"/>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip13_138)">
                            <path id="path" d="M36.53 27.91C35.98 32.34 32.34 35.98 27.91 36.53C25.23 36.86 22.73 36.13 20.78 34.69C19.66 33.88 19.93 32.14 21.26 31.74C26.28 30.23 30.23 26.26 31.76 21.24C32.16 19.93 33.89 19.66 34.71 20.76C36.13 22.73 36.86 25.23 36.53 27.91Z" fill="#EEEEEE" fillOpacity="1.000000" fillRule="nonzero"/>
                            <path id="path" d="M16.65 3.33C9.3 3.33 3.33 9.3 3.33 16.65C3.33 24 9.3 29.96 16.65 29.96C24 29.96 29.96 24 29.96 16.65C29.95 9.3 24 3.33 16.65 3.33ZM15.08 14.78L19.1 16.18C20.55 16.7 21.25 17.71 21.25 19.28C21.25 21.08 19.81 22.56 18.06 22.56C18.06 23.25 17.35 23.9 16.66 23.9C15.98 23.9 15.41 23.33 15.41 22.65C13.56 22.56 12.08 20.91 12.08 18.98C12.08 18.29 12.65 17.73 13.33 17.73C14.01 17.73 14.58 18.29 14.58 18.98C14.58 19.58 15.01 20.06 15.55 20.06L18.04 20.06C18.43 20.06 18.73 19.71 18.73 19.28C18.73 18.7 18.63 18.66 18.25 18.53L14.23 17.13C12.8 16.63 12.08 15.61 12.08 14.03C12.08 12.23 13.51 10.75 15.26 10.75C15.26 10.06 15.98 9.43 16.66 9.43C17.35 9.43 17.91 9.99 17.91 10.68C19.76 10.76 21.25 12.41 21.25 14.35C21.25 15.03 20.68 15.6 20 15.6C19.31 15.6 18.75 15.03 18.75 14.35C18.75 13.75 18.31 13.26 17.78 13.26L15.28 13.26C14.9 13.26 14.6 13.61 14.6 14.05C14.58 14.61 14.68 14.65 15.08 14.78Z" fill="#EEEEEE" fillOpacity="1.000000" fillRule="nonzero"/>
                        </g>
                    </svg>
                </NavLink>
                <NavLink to={'/cards'}>
                    <svg fill="#eeeeee" width="40px" height="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#eeeeee">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path d="M200.00781,88V200a16.01833,16.01833,0,0,1-16,16h-144a16.01833,16.01833,0,0,1-16-16V88a16.01833,16.01833,0,0,1,16-16h144A16.01833,16.01833,0,0,1,200.00781,88Zm16-48h-152a8,8,0,0,0,0,16h152V176a8,8,0,0,0,16,0V56A16.01833,16.01833,0,0,0,216.00781,40Z"/> </g>

                    </svg>
                </NavLink>
            </nav>
            <Button mode={'white flex'}>
                <svg width="20px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#8000C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

                </svg>
            </Button>
        </div>
    );
};

export default Sidebar;