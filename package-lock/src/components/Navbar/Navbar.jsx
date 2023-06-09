import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./navbar.module.css"
import { BsInstagram } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TbWorld } from "react-icons/tb"
import NavContent from '../NavContent/NavContent'
const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className={`${Styles.navBarContainer} row`}>
                    <div className={`col-lg-6 ${Styles.topDiv}`} >
                        <Link>
                            <h1>LearnTimes</h1>

                            <span className={`letterSpace`}>Online Learning Platform</span>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${Styles.socialIcons}`}>
                            <Link >
                                <BsInstagram className={Styles.icon} />
                            </Link>
                            <Link >
                                <AiFillTwitterCircle className={Styles.icon} />
                            </Link>
                            <Link >
                                <TbWorld className={Styles.icon} />
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="row navbarrow">
                    <div className={`navbar navbar-expand-lg  ${Styles.navbar_light}`}>
                        <div className={`container navBg`}>
                            <div className={`${Styles.collapse}`} id="navbarSupportedContent">
                                <ul className={`${Styles.nav_items}`}>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link} active`} href="">Home</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="courses.html">All Courses</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="about.html">About</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="team.html">Team</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="pricing.html">Pricing</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="blog.html">Journal</Link></li>
                                    <li className={`${Styles.nav_item}`}><Link className={`${Styles.nav_link}`} href="contact.html">Contact</Link></li>
                                </ul>
                                <div className={`${Styles.divider}`}>
                                    <div >
                                        <span>sdgsgg</span>
                                    </div>
                                    <Link href="#" className={`${Styles.btn_custom}`} >
                                        Get Certificate</Link>

                                </div>
                            </div>

                        </div>
                       
                    </div>

                </div>
                
            </div>
           
        </>
    )
}

export default Navbar