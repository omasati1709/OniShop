import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="Author" content={author} />
        <title>{title}</title>
    </Helmet>
      {/* <Header /> */}
      <Header />
      <main style={{ minHeight: "76.5vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps={
    title:'OniShop - Shop now',
    description:'mern stact project',
    keywords:"mern,react,node,mongodb",
    author:"OniShop"
}
export default Layout;