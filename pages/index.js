import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/layout';
import classes from './index.module.css'
import Toolbar from '../components/toolbar/toolbar'
import Card from '../components/post/card';
import Link from 'next/link'


export default props => {

  const [scrolled, setScrolled] = useState(false)
  const [products, updateProducts] = useState([{
    name: 'Glowing herbal soap oapoap  poappoap',
    features: ["Features of this product", "Features of this product res of this product", "res of this productres of this productFeatures of this product"],
    src: '/img/p1.jpg',
    price: 2000
  },
  {
    name: 'Glowing herbal soap',
    src: '/img/p2.jpg',
    features: ["Features of this product", "Features of this product", "Features of this product", "Features of this product"],
    price: 2000
  },
  {
    name: 'Glowing herbal soap',
    src: '/img/p3.jpg',
    features: ["Features of this product", "Features of this product", "Features of this product"],
    price: 2000
  }
  ])
  useEffect(() => {

    if (document.documentElement.scrollTop > 11) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
    window.addEventListener('scroll', e => {
      if (document.documentElement.scrollTop > 11) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  })
  return <Layout hideToolbar title="Home | glowme skin scare">
    <Toolbar background="none" scrolled={scrolled} />
    <header className={classes.header}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 ">
            <h1 className="text-white fadeInDown wow font-weight-bold"> Let your skin introduce you</h1>
            <Link href="tel:+2348091173778"><a className="btn align-items-center d-flex w-50 justify-content-center btn-outline-light btn-lg rounded-pill"> <i className="material-icons mr-5">phone</i> Call Now</a></Link>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center py-3 py-lg-0">
            {/* <img src="/google.png" className="img-fluid" /> */}
            <div class="elfsight-app-feedc6cb-102e-47a7-bc4e-ceded89477c0"></div>
          </div>
        </div>
      </div>

      <span className={classes.header_bottom}></span>
    </header>


    <section className={classes.section}>
      <div className="container">
        <h1 className={classes.heading}>About glowme skin polish</h1>
        <div className="row pt-3">
          <div className="col-12 col-lg-6 pt-lg-5">
            <h4 >How its made </h4>
            <p>
              Glowme products are 100% organic, it's the combination of purely natural fruit that is formulated to improve your skin tone and solve all your skin problem
            </p>
            <h4 className="mt-3">Why choose glowme </h4>
            <p>
              Glowme products are the best you can get in the skincare market because the fruits are carefully selected to suit your skin without having any  blemish
              Glowme has different types of products to give you your desired tone.
              Glowme does not bleach your skin but can give you some lighter shade as you so desire
            </p>
          </div>
          <div className={classes.gallery_con + " col-12 col-lg-6 position-relative"}>
            <div className={classes.gallery + " wow fadeInUp fast"}><img src="/img/p1.jpg" alt="" /></div>
            <div className={classes.gallery + " wow fadeInUp slow"}><img src="/img/p2.jpg" alt="" /></div>
            <div className={classes.gallery + " wow slideInUp slow"} style={{ animationDelay: ".5s" }}><img src="/img/p3.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.section}>
      <div className="container">
        <h1 className={classes.heading}>Our products </h1>
        <div className="row py-5">
          {products.map(cur => (
            <div className="col-md-6 col-lg-4 py-3 py-lg-0">
              <Card {...cur} />
            </div>
          ))}
        </div>
        <div className="row justify-content-center py-3">
          <Link href="/">

            <a className="btn btn-danger  text-capitalize">view more -></a>
          </Link>
        </div>
      </div>
    </section>
    <section className={classes.section}>
      <div className="container">
        <div className="row">
          <div className="pb-3 fadeIn wow col-lg-6">
            <h3>WHAT IS THE TERM SKINCARE???</h3>
            <p>
              Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. They can include nutrition, avoidance of excessive sun exposure and appropriate use of emollients.
      </p>
            <h3>DIFFERENT SKIN TYPES</h3>
            <p>
              There are five common skin types: normal, oily, dry, combination and sensitive. Blotting a clean tissue on your face in the morning is an easy way to find out your skin type.
<br />
              <br />
              A normal skin type has good circulation and there will not be any trace of sebum (or oil) on the tissue. Normal skin is soft, with a smooth, even skin tone.
            </p>
          </div>
          <div className="pb-3 fadeIn wow col-lg-6"></div>
          <div className="pb-3 fadeIn wow col-lg-6"></div>
          <div className="pb-3 fadeIn wow col-lg-6">
            <p>
              An oily skin type will leave blots of facial oil on the tissue, particularly from the cheeks, nose and forehead. This type of skin has overactive sebaceous glands, producing more oil than necessary. Oily skin can be caused by hereditary factors, diet, hormone levels, pregnancy, unsuitable cosmetics and stress, leading to acne flare ups and enlarged pores. It is vital to thoroughly clean the skin regularly with gentle, soap-free cleansers.
            </p>
            <p>
              A dry skin type has a low level of sebum and does not maintain oil easily. Dry skin is often flaky and feels tight after being wiped. Gentle cleansing and a rich protective moisturiser for dry skin is essential to control that tight, uncomfortable feeling. It may be necessary to adjust your dry skin moisturiser for the changing seasons With.
            </p>
          </div>
          <div className="pb-3 fadeIn wow col-lg-6">
            <p>

              A combination skin type oil is produced around the 'T-zone' of the  nose and forehead but not on the cheeks, mouth and eye areas. The best skin care for combination skin will involve treating each region differently.
<br />
              <br />

              Having a sensitive skin type can mean different things to different people. It can be caused by skin conditions such as rosacea, eczema or allergies. Sensitive skin can become inflamed and irritated easily. It is important to choose the right skin care products for sensitive skin because many cleansers and moisturisers contain ingredients that can cause an adverse reactions to this skin..
<br />
              <br />

              Basically our skins all fall in either of d sections above👆
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>

}