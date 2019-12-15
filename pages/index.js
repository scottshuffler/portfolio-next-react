import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";


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

    <Gallery/>
  </div>;

export default Home;
