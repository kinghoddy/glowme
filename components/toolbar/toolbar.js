import React from 'react'
import Link from '../UI/Link/link'

export default props => {
    return <React.Fragment>
        <nav className={" py-2 navbar navbar-dark navbar-expand-lg fixed-top"}>
            <Link href="/">
                <a className={"brand navbar-brand"}>
                    <img src="/img/logo.png" alt="glowme skin care" />

                </a>
            </Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#topNav"
                aria-controls="topNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="material-icons">
                    menu
                </i>
            </button>
            <div className="collapse navbar-collapse py-3 py-lg-0" id="topNav">
                <ul className="navbar-nav ml-auto  mt-0">
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/news/[newscat]?newscat=nigerian-news" as="/news/nigerian-news" >
                            <a className="nav-link" >
                                Nigeria
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/news/[newscat]?newscat=african-news" as="/news/african-news">
                            <a className="nav-link" >
                                Africa
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/news/[newscat]?newscat=uk-news" as="/news/uk-news">
                            <a className="nav-link" >
                                Uk
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/news/[newscat]?newscat=world-news" as="/news/world-news">
                            <a className="nav-link" >
                                World
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/news/[newscat]?newscat=business-news" as="/news/business-news">
                            <a className="nav-link" >
                                Business
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link activeClassName="active" href="/admin">
                            <a className="nav-link" >
                                Admin
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item d-flex align-items-center ml-md-3">
                        <h5 className="mb-0 mr-3 text-light">Follow us </h5>
                        <div className={" shareaholic-canvas"} data-app="follow_buttons" data-app-id="28108433"></div>
                    </li>
                </ul>
            </div>
        </nav>
        <style jsx>
            {`
            nav,
     nav.scrolled {
              background:  #faa;
              background: ${props.background};
              background-size: cover;
              background-position: bottom;
              transition : all .3s ;
              transition: all 0.3s;
              z-index: 2000;
              backdrop-filter: ${props.scrolled ? "blur(20px) brightness(80%)" : "none"} ;
           }
nav::-webkit-scrollbar {
  height: 1px;
}
nav img {
  height: ${props.scrolled ? "2.6rem" : " 5rem"};
              transition : all .3s ;
}
.plug > * {
  display: flex;
  align-items: center;
}

nav .brand {
  align-items: center;
  padding: 0 !important;
}
.nav-link:hover,
.active {
    border-bottom : 2px solid #971;
}
@media only screen and (min-width: 1200px) {
  nav {
    padding: 0 6rem;
  }
  nav img {
  height: ${props.scrolled ? "2.6rem" : " 8rem"};
}
}


            `}
        </style>
    </React.Fragment>
}