// "use client";
import "@styles/globals.css";
import Nav from "@components/Nav";
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
        <Nav/>
        <hr className="  max-w-ful  "/>
      
        <main className="app">{children}</main>
       
      </body>
    </html>
  );
};

export default Rootlayout;
