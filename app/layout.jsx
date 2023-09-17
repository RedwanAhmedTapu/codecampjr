"use client";

import "@styles/globals.css";
import Nav from "@components/Nav";
// import Script from "next/script";
// import Head from "next/head";
// import Provider from "@components/Provider";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
        <GoogleOAuthProvider clientId="<88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com>">
          <main className="app">{children}</main>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};

export default Rootlayout;
