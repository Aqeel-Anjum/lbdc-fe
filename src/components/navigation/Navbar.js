import React, { useState } from 'react';
import './Navbar.css';
import LOGO from '..//..//assets/logos/logo.png';
import PUGov from '..//..//assets/logos/PU Gov.png';
import ADB from '..//..//assets/logos/ADB.png';
import PU from '..//..//assets/logos/PU.png';
import LUMS from '..//..//assets/logos/LUMS.png';

import arrow from '..//..//assets/icons/arrow.png';
import custom from '..//..//assets/icons/costumize.png';
import network from '..//..//assets/icons/network.png';
import crops from '..//..//assets/icons/crops.png';
import water from '..//..//assets/icons/groundWater.png';
import soil from '..//..//assets/icons/soilInfo.png';
import egro from '..//..//assets/icons/egro.png';
import weather from '..//..//assets/icons/weather.png';
import etModeling from '..//..//assets/icons/Etmodeling.png';
import sensor from '..//..//assets/icons/sensor.png';
import scheduling from '..//..//assets/icons/scheduling.png';
import performance from '..//..//assets/icons/performance.png';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {

    const [set, setState] = useState(true)


    return (
        <>

            {/* ***************************** */}
            {/* *********** Top Bar ********* */}
            {/* ***************************** */}

            <section className='topbar'>
                <div className='container-fluid'>
                    <div className='row d-flex align-items-center'>

                        <div className='col-10 col-sm-10 col-md-8 col-lg-8'>
                            <div className='logo-title'>
                                <Link to={'/'}>
                                    <img src={LOGO} alt="IDSS logo" />
                                </Link>
                                <span>Irrigation Decision Support System</span>
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-4 institutions'>
                            <div className='logos'>
                                <img src={PUGov} className='pugov' alt="Punjab Goverment" />
                                <img src={ADB} className='adb' alt="Asian Development Bank" />
                                <img src={PU} className='pu' alt="Punjab University" />
                                <img src={LUMS} className='lums' alt="LUMS University" />
                            </div>
                        </div>

                        <div className='col-2 col-sm-2 d-flex justify-content-end'>
                            <button className='toggle-btn' onClick={() => setState(!set)}><i id="btn" className='fas fa-bars'></i></button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ***************************** */}
            {/* *********** SideBar ********* */}
            {/* ***************************** */}

            {
                set ? <section className='sidebar' id='mysidebar'>
                    <nav>
                        <aside>
                            <ul>
                                <li id='customize-menu' >
                                    <NavLink to={'/customize-menu'}>
                                        <img id='icons' src={custom} alt="Customize Menu" />
                                        <span>Customize Menu</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='irrigation-network' >
                                    <NavLink to={'/irrigation-network'}>
                                        <img id='icons' src={network} alt="Customize Menu" />
                                        <span>Irrigation Network</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='crops-info'>
                                    <NavLink to={'/crops-information'}>
                                        <img id='icons' src={crops} alt="Customize Menu" />
                                        <span>Crops Information</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='ground-water'>
                                    <NavLink to={'/ground-water'}>
                                        <img id='icons' src={water} alt="Customize Menu" />
                                        <span>Ground Water</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='soil-info'>
                                    <NavLink to={'/soil-information'}>
                                        <img id='icons' src={soil} alt="Soil Information" />
                                        <span>Soil Information</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='egro-zoning'>
                                    <NavLink to={'/egro-echological-zoning'}>
                                        <img id='icons' src={egro} alt="Egro-Echological Zoning" />
                                        <span>Egro-Echological Zoning</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='weather'>
                                    <NavLink to={'/weather'}>
                                        <img id='icons' src={weather} alt="Weather" />
                                        <span>Weather</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='et-modeling'>
                                    <NavLink to={'/et-modeling-output'}>
                                        <img id='icons' src={etModeling} alt="Weather" />
                                        <span>Et Modeling Output</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='soil-moisture'>
                                    <NavLink to={'/soil-moisture-sensors'}>
                                        <img id='icons' src={sensor} alt="Weather" />
                                        <span>Soil Moisture Sensors</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='canal-scheduling'>
                                    <NavLink to={'/canal-scheduling'}>
                                        <img id='icons' src={scheduling} alt="Weather" />
                                        <span>Canal Scheduling</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                                <li id='irrigation-performance'>
                                    <NavLink to={'/irrigation-performance'}>
                                        <img id='icons' src={performance} alt="Weather" />
                                        <span>Irrigation Performance</span>
                                        <img id='arrow' src={arrow} alt="Dropdown icon" />
                                    </NavLink>
                                </li>

                            </ul>

                            <ul>

                            </ul>
                        </aside>
                    </nav>
                </section> : null
            }

        </>
    )
}

export default Navbar;
