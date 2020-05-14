import React from 'react';
import classes from './footer.module.css'
import Link from 'next/link';
export default props => {
    return (
        <footer className={classes.footer + " bg-white fadeIn wow"}>
            <span className={classes.header_bottom}></span>
            <div className="container " style={{ backdropFilter: "blur(18px)" }}>
                <div className="row py-5">
                    <div className="col-lg-3 col-6">
                        <h3>Quick Links</h3>

                        <ul className={classes.links}>
                            <li><Link href="/#about"><a>About us</a></Link></li>
                            <li><Link href="/products"><a>New products</a></Link></li>
                            <li><Link href="/login"><a>Login</a></Link></li>
                            <li><Link href="/signup"><a>Create account</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h3>Categories</h3>
                        <ul className={classes.links}>
                            <li><Link href="/products"><a>Products</a></Link></li>
                            <li><Link href="/reviews"><a>Reviews</a></Link></li>
                            <li><Link href="/#contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">

                        <h3>Contacts</h3>

                        <div className="collapse show" id="collapse_ft_3">
                            <ul className={classes.links}>
                                <li className="mb-3"><i className="fa fa-home mr-3 text-primary"></i>23 Mosaku street<br />Lagos - Nigeria</li>
                                <li className="mb-3"><i className="fa fa-phone mr-3 text-primary"></i>
                                    <Link href="tel:+2348091173778"><a>08091173778</a></Link>
                                </li>
                                <li className="mb-3"><i className="fa fa-envelope mr-3 text-primary"></i><Link href="mailt0:glowmeskinpolish@gmail.com">glowmeskinpolish@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div class="shareaholic-canvas" data-app="share_buttons" data-app-id="28865892"></div>
                        {/* <img src='/logo_light.jpg' alt="" className={classes.logo} /> */}
                    </div>
                </div>
                <hr />
                <div style={{ background: 'rgba(255,255,255,.2)', backdropFilter: "blur(8px)" }} className="row  text-light pt-lg-3 text-center">
                    <div className="col-lg-6 pb-3 pb-lg-0">
                        This site was created by Noel odunmilade
                    </div>
                    <div className="col-lg-6">
                        <ul className={classes.additional_links}>
                            <li><Link href="/"><a>Terms and conditions</a></Link></li>
                            <li><Link href="/"><a>Privacy</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}