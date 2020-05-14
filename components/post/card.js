import React from 'react'
import Link from 'next/link'

export default props => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    });
    return <div className="Card">
        <figure>
            <img alt="" src={props.src} />
        </figure>
        <h1>
            <span>
                {props.name}
            </span>
        </h1>
        <div className="py-2 px-3 ">
            <ul >
                {props.features.map(cur => <li className="py-2 border-bottom">{cur}</li>)}
            </ul>
        </div>
        <div className="border-top p-2 d-flex align-items-center justify-content-between">
            <Link href="/reviews">
                <a className="text-capitalize font-weight-light btn-sm btn btn-outline-success">reviews</a>
            </Link>
            <span className="price " >
                <span className="font-weight-light text-warning">Price: </span>  {formatter.format(props.price)} </span>
        </div>

        <style jsx>{`
        .Card {
            box-shadow : 0 10px 25px rgba(0,0,0, .15);
            background : var(--white);
            position : relative ;
        }

        figure{
            height : 15rem;
            width : 100%;
            background : var(--secondary);
            position : relative;
            overflow : hidden;
            clip-path : polygon(0 0 ,100% 0,100% 80%  , 0 100%)
        }
        .Card h1{
            text-transform : capitalize;
            display : inline-block;
            font-size : 1.4rem;
            position : absolute;
            top : 12rem;
            text-align : right ;
            width : 75%;
            right : 2rem;
        }
        .Card h1 span {
            color : #fff;
            background : rgba(0,0,0 , .8);
            box-decoration-break : clone;
            padding : .5rem 1rem;
            
        }
        figure:hover img{
            transform : scale(1.2)
        }
        figure img {
            height : 100%;
            width : 100%;
            transition : .3s;
            object-fit : cover;
        }
        ul {
            list-style : none;
            padding : 0;
        }
        ul li {
            color : #;
            text-align : center;
            font-size : .8rem;
        }
        .price {
            font-size : 1.4rem;
        }
        .naira{
            display : inline-block;
            position : relative;
        }
        .naira::after , .naira::before {
            content : '';
            display : inline-block;
            width : 18px;
            height : 1px;
            background : var(--dark);
            position : absolute;
            left : 50%;
            transform : translateX(-50%);
            top : 40%;
        }
        .naira::after{
            top: 60%;
        }

        `}
        </style>
    </div>

}
