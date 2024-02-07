// "use client";

import "@styles/globals.css";
import "@styles/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Nav from "@components/Nav";
import FooterJr from "@components/FooterJr";
// import Script from "next/script";
// import Head from "next/head";
// import Provider from "@components/Provider";

export const metadata = {
  title: "codecampJr.",
  description: "A site to empower the youth's skill in technologies",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <Nav />
       

        <main className="app">{children}</main>

        <FooterJr/>
        
      </body>
    </html>
  );
};

export default Rootlayout;
