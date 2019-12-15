import React from "react";
import Head from "next/head";
import Nav from "../components/nav";



const Home = () =>
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="Description"
        content="Event, wedding, and portrait photographer in Boone NC"
      />
      <title>Scott Shuffler</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <div className="subMenu">
        <ul>
          <li>All</li>
          <li>Portraits</li>
          <li>Nature</li>
          <li>Weddings</li>
        </ul>
      </div>

      <div className="ml">
        {photos.map(i => {
          return (
            <div key={i.src} className="ml-pnl ">
              <img src={i.src} key={i.src} className="ml-pnl__cntnt" />
            </div>
          );
        })}
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-bottom: 40px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .masonry {
        display: flex;
        flex-flow: row wrap;
        margin-left: -8px; /* Adjustment for the gutter */
        width: 100%;
      }
      .masonry-brick {
        flex: auto;
        // height: 250px;
        height: 25%;
        width: 25%;
        min-width: 150px;
        margin: 0 8px 8px 0; /* Some gutter */
      }
      // .masonry-brick:nth-child(4n + 1) {
      //   width: 250px;
      // }
      // .masonry-brick:nth-child(4n + 2) {
      //   width: 325px;
      // }
      // .masonry-brick:nth-child(4n + 3) {
      //   width: 180px;
      // }
      // .masonry-brick:nth-child(4n + 4) {
      //   width: 380px;
      // }

      .container {
        display: flex;
        flex-flow: column wrap;
        align-content: space-between;
        /* Your container needs a fixed height, and it 
         * needs to be taller than your tallest column. */
        height: 2600px;
      }

      .item {
        width: 24%;
        margin-bottom: 2%; /* Optional */
      }

      /* Re-order items into 4 rows */
      .item:nth-of-type(4n + 1) {
        order: 1;
      }
      .item:nth-of-type(4n + 2) {
        order: 2;
      }
      .item:nth-of-type(4n + 3) {
        order: 3;
      }
      .item:nth-of-type(4n) {
        order: 4;
      }

      /* Force new columns */
      .break {
        flex-basis: 100%;
        width: 0;
        margin: 0;
      }

      /* MASONRY CSS */
      .ml {
        box-sizing: border-box;
        column-count: 1;
        column-gap: 0;
        position: relative;
      }
      .ml * {
        box-sizing: border-box;
      }
      @media (min-width: 768px) {
        .ml {
          column-count: 2;
        }
      }
      @media (min-width: 1200px) {
        .ml {
          column-count: 3;
        }
      }
      .ml-pnl {
        margin: 0;
        padding: 5px;
      }

      @media (min-width: 768px) {
        .ml-pnl {
          break-inside: avoid;
        }
      }
      .ml-pnl__cntnt {
        // border-radius: 10px;
        overflow: hidden;
        // padding: 10px;
        width: 100%;
      }
      .ml-pnl__cntnt--img {
        max-width: 100%;
        padding: 0;
      }
      .ml-flp {
        perspective: 1000;
      }
      .ml-flp:hover .ml-flp__cntnt {
        transform: rotateY(180deg);
      }
      .ml-flp--sm {
        height: 200px;
      }
      .ml-flp--md {
        height: 300px;
      }
      .ml-flp--lg {
        height: 400px;
      }
      .ml-flp__pnl {
        backface-visibility: hidden;
        border-radius: 10px;
        height: 100%;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
      }
      .ml-flp__pnl--frnt {
        transform: rotateY(0deg);
        z-index: 2;
      }
      .ml-flp__pnl--bck {
        transform: rotateY(180deg);
      }
      .ml-flp__cntnt {
        height: 100%;
        overflow: visible;
        position: relative;
        transform-style: preserve-3d;
        transition: 0.25s;
      }
      .ml-clstr {
        display: flex;
        padding: 0;
      }
      .ml-clstr--vrt {
        flex-direction: column;
      }
      @media (min-width: 768px) {
        .ml-clstr--vrt {
          flex-direction: row;
        }
      }
      .ml-clstr--hrz {
        flex-direction: column;
      }
      .ml-clstr__sgmnt {
        display: flex;
        overflow: hidden;
        flex: 1 1 auto;
      }
      .ml-clstr__sgmnt--rw {
        display: flex;
        flex-direction: column;
      }
      @media (min-width: 768px) {
        .ml-clstr__sgmnt--rw {
          flex-direction: row;
        }
      }
      .ml-clstr__sgmnt--clmn {
        flex-direction: column;
      }
      @media (min-width: 768px) {
        .ml-clstr__sgmnt--hlf {
          flex-basis: 50%;
        }
        .ml-clstr__sgmnt--qrt {
          flex-basis: 25%;
        }
      }
      img {
        max-height: 800px;
      }
      img.dw-pnl__content,
      img.dw-flip__pnl {
        padding: 0;
      }
      img.dw-flip__pnl {
        max-height: 100%;
      }
      ul {
        display: flex;
        // justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 13px;
      }
      .subMenu {
        text-align: center;
      }
      .subMenu ul {
        display: inline-table;
      }
      .subMenu li {
        display: inline;
      }
    `}</style>
  </div>;

export default Home;
