import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {


    render() {

        return (
            <html>
                <Head>
                    <link rel="preload" href="https://cdn.shareaholic.net/assets/pub/shareaholic.js" as="script" />
                    <meta name="shareaholic:site_id" content="102b183701bce3fbf9230a238ad19725" />
                    <script data-cfasync="false" async src="https://cdn.shareaholic.net/assets/pub/shareaholic.js"></script>
                    <meta name="theme-color" content="#000" />
                    <link rel="shortcut icon" href="/logo_light.jpg" type="image/x-icon" />
                    <link rel="stylesheet" href="/iconfont/material-icons.css" />
                    <link rel="stylesheet" href="/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/index.css" />
                    <link rel="stylesheet" href="/css/animate.min.css" />
                    <script src="/js/jquery.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/all.js"></script>
                    <script src="/js/wow.min.js"></script>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    <meta name="description"
                        content="100% percent organic recipie FOR YOUR FLAWLESS AND GLOWING SKIN WITH NO GREEN VEINS, DARK KNUCKLES. OUR PRODUCTS ARE SAFE AND ACTIVE 100% ORGANIC. CALL ." />

                    <meta property="og:title" content="Glow me skin polish 100% organic skin care" />
                    <meta property="og:description"
                        content="100% percent organic recipie FOR YOUR FLAWLESS AND GLOWING SKIN WITH NO GREEN VEINS, DARK KNUCKLES. OUR PRODUCTS ARE SAFE AND ACTIVE 100% ORGANIC. CALL ." />
                    <meta property="og:image" content="/logo_light.jpg" />
                </Head>
                <body>
                    <Main />

                    <NextScript />

                </body>
                <script src="/js/main.js"></script>
                <script async src="https://static.addtoany.com/menu/page.js"></script>
            </html>
        )
    }
}