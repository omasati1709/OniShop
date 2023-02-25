import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - OniShop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            The company itself is a very successful company.
            We are led to be blinded by the duties of the
            time, from which reason, flexibility will occur,
            by enduring the said flattery and pain, I will
            explain the pain as if they were an option
            when I open or pursue it! For the labors of
            those who accuse him, he will be received
            by a wise man! For we are bound to lead
            him either to his advantage or to the times.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;