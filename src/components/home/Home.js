/**
 * Created by abhijeetgupta on 24/07/17.
 */
import React, { Component } from 'react';
import {Link } from 'react-router-dom';


import Header from '/src/components/header/Header'
import Footer from '/src/components/footer/Footer'



class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="all-content">


                    <section>
                        <div className="row margin-top-medium margin-bottom-medium">
                            <div className="portion half">
                                <h2 className="text-light margin-bottom-fixed">Never miss a sale</h2>
                                <h3 className="text-light margin-bottom-small">Accept all forms of payments from your customers in your app</h3>

                                <div className="margin-bottom-tiny">
                                    <a className="ff-button shape-curved bg-accent margin-right-fixed margin-bottom-fixed" href="sign-up.html">
                                        <span className="padding-left-fixed padding-right-fixed">CREATE ACCOUNT</span>
                                    </a>

                                    <a className="ff-button shape-curved bg-white margin-bottom-fixed" href="docs.html">
                                        <span className="text-accent padding-left-fixed padding-right-fixed">Explore docs</span>
                                    </a>
                                </div>

                                <p className="ff-pill shape-rounded bg-hue">NEW!</p>
                                <p className="no-margin-bottom show-inline"><strong>SDK v2.1.9 — Logic based routing</strong></p>
                            </div>
                        </div>

                        <img className="hero-image" src={require("../../images/ratty-server.svg")} />
                    </section>


                    {/*-- ------------------------------------------------------------------------------------------------
                    USPs
                    ------------------------------------------------------------------------------------------------ -- */}

                    <section className="usp-tiles">
                        <div className="row margin-bottom-small retain-layout-on-tab-ls">
                            <div className="portion one-third">
                                <div className="card shape-rounded bg-white shadow-hard margin-bottom-tiny">
                                    <img className="icon-huge no-margin-top no-margin-left margin-bottom-tiny" src={require("../../icons/usp-features.svg")} />
                                        <h6 className="margin-bottom-fixed">Integrate in a snap</h6>
                                        <p className="no-margin-bottom">Easy-to-include libraries and modular code packages. No-fuss integration to get your payments up in no time at all. Guaranteed.</p>
                                </div>
                            </div>

                            <div className="portion one-third">
                                <div className="card shape-rounded bg-white shadow-hard margin-bottom-tiny">
                                    <img className="icon-huge no-margin-top no-margin-left margin-bottom-tiny" src={require("../../icons/usp-updates.svg")} />
                                        <h6 className="margin-bottom-fixed">Be future-proof</h6>
                                        <p className="no-margin-bottom">We’ll support most new payment methods as they appear in the market. No app updates and costly code rewrites on your end.</p>
                                </div>
                            </div>

                            <div className="portion one-third">
                                <div className="card shape-rounded bg-white shadow-hard margin-bottom-tiny">
                                    <img className="icon-huge no-margin-top no-margin-left margin-bottom-tiny" src={require("../../icons/usp-security.svg")} />
                                        <h6 className="margin-bottom-fixed">Security comes first</h6>
                                        <p className="no-margin-bottom">We are PCI Certified, not just PCI Compliant. Payments are encrypted end-to-end on all devices, so you can breathe easy.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*-- ------------------------------------------------------------------------------------------------
                    TESTIMONIALS
                    ------------------------------------------------------------------------------------------------ -- */}

                    <section id="testimonials" className="margin-bottom-small">
                        <div className="row retain-layout-on-tab-ls">
                            <div className="portion one-third margin-bottom-small">
                                <p className="customer-quote margin-bottom-tiny"><em>Our company&rsquo;s productivity has gone up by at least a third after we integrated with Ezetap, we no longer spend precious man-hours on reconciliation every day.</em></p>
                                <div className="vertical-centre-items">
                                    <img className="icon-large shape-circular margin-right-fixed" src={require("../../images/user-bobby.png")} />
                                        <p className="no-margin-bottom"><strong>Bruce Wayne</strong><br/>
                                            <span className="text-small">CEO, Wayne Enterprises</span>
                                        </p>
                                </div>
                            </div>

                            <div className="portion one-third margin-bottom-small">
                                <p className="customer-quote margin-bottom-tiny"><em>Ezetap is the only platform that accepts all payment methods and integrates so easily. The team is very proactive in understanding and delivering requirements.</em></p>
                                <div className="vertical-centre-items">
                                    <img className="icon-large shape-circular margin-right-fixed" src={require("../../images/user-bobby.png" )}/>
                                        <p className="no-margin-bottom"><strong>Asha Sivanathan</strong><br/>
                                            <span className="text-small">Co-founder, FourTwo Studios</span>
                                        </p>
                                </div>
                            </div>

                            <div className="portion one-third margin-bottom-small">
                                <p className="customer-quote margin-bottom-tiny"><em>I now have complete peace of mind after signing up for Ezetap, everything moves like clockwork, and no hassles so far! Kudos to the excellent team behind the product!</em></p>
                                <div className="vertical-centre-items">
                                    <img className="icon-large shape-circular margin-right-fixed" src={require('../../images/user-bobby.png')} />
                                        <p className="no-margin-bottom"><strong>M. Ramaswamy</strong><br/>
                                            <span className="text-small">Owner, JRB Retail Stores</span>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <hr className="sub" />


                        <section>
                            <div className="row margin-bottom-small">
                                <div className="portion one-third margin-bottom-small">
                                    <h5 className="text-regular margin-bottom-fixed">Sounds too good to be true? We assure you, its not.</h5>
                                    <h6 className="text-regular margin-bottom-fixed">Come onboard with us now&mdash;</h6>
                                    <h5 className=""><a className="text-hue" href="sign-up.html">Create an Ezetap account</a></h5>
                                </div>

                                <div className="portion two-thirds">
                                    <h5 className="text-regular margin-bottom-fixed">From small startups to large enterprises, we have solutions to fit everyone’s payment needs.</h5>
                                    <h6 className="text-regular margin-bottom-fixed">Get in touch to see how best we can help you. Reach out to us&mdash;</h6>
                                    <h5 className="text-accent">080 6767 8787 <span className="text-shade">/</span> <a className="text-accent" href="#">support@ezetap.com</a></h5>
                                </div>
                            </div>
                        </section>


                        {/*-- ------------------------------------------------------------------------------------------------
                        FOOTER
                        ------------------------------------------------------------------------------------------------ --*/}

                        <Footer></Footer>
                       
                </div>
            </div>
        );
    }
}

export default Home;
