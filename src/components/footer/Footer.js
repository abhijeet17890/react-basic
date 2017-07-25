

import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="all-content">
                    <div className="row margin-top-tiny">
                        <div className="portion one-third half-on-mobile">
                            <p>&copy;2017 Ezetap Mobile Solutions Pvt Ltd</p>
                        </div>

                        <div className="portion two-thirds half-on-mobile">
                            <div className="row no-margin-bottom retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile">
                                <div className="portion half">
                                    <a className="text-small text-regular">Privacy</a><br/>
                                    <a className="text-small text-regular">Terms</a><br />
                                </div>

                                <div className="portion half">
                                    <a className="text-small text-regular">Support</a><br />
                                    <a className="text-small text-regular" href="https://medium.com/engineering-ezetap/" target="_blank">Blog</a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


