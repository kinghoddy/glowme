import React, { Component } from 'react'
import Toolbar from '../toolbar/toolbar'
import Head from 'next/head';
import SideWidjet from '../sidewidget.js';
import Footer from '../footer/footer'

class Layout extends Component {

    render() {
        return <div className="position-relative">
            <Head>
                <meta property="og:image" content={this.props.src} />
                <meta property="og:title" content={this.props.title} />
                <title>{this.props.title ? this.props.title : 'Glow me skin polish 100% organic skin care'}</title>
                <meta name="description" content={this.props.body} />
                <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
                <script dangerouslySetInnerHTML={{
                    __html: `               var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
                        OneSignal.init({
                            appId: "3b8c1c05-461f-48f4-b10c-e30dc63c01fd",
                        });
  });` }} />

                <meta property="og:description"
                    content={this.props.body ? this.props.body : "100% percent organic recipie FOR YOUR FLAWLESS AND GLOWING SKIN WITH NO GREEN VEINS, DARK KNUCKLES. OUR PRODUCTS ARE SAFE AND ACTIVE 100% ORGANIC. CALL ."} />
                <link rel="shortcut icon" href={this.props.src ? this.props.src : "/logo_light.jpg"} type="image/x-icon" />
            </Head>
            {this.props.hideToolbar ? null : <Toolbar />}
            {this.props.children}
            <div class="elfsight-app-46868d0b-ac2b-4f38-bd6a-a92fa7a453cf"></div>

            <Footer />
            <style jsx>{`
            .overflow{
                overflow-x: hidden
            }
            `} </style>
        </div >
    }
}

export default Layout