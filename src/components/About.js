import React from 'react';
import '../css/about.css';
import {Helmet} from "react-helmet";


const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column col-md-offset-6" id="about">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Valeriya Hasty</title>
          <link rel="canonical" href="http://vprotsan.com/about" />
          <meta name="description" content="Valeriya Hasty, full-stack web developer" />
      </Helmet>
      <div className="inner-wrapper">
        <div className="my-auto">
          <h1 className="mb-0">Valeriya
            <span className="text-primary">Hasty</span>
          </h1>
          <p className="mb-5">
            Hi
            <span> I’m Valeriya Hasty, and I’m a front-end web developer and a recent award winning graduate of Wyncode Academy, Miami, Florida.  </span>
            <span>I bring value and results to companies and organizations based on understanding your business needs and combining my expertise for building and designing creative and easy to use applications.</span>
            <span>I’m passionate about adopting ideas and bringing them to life through technology.</span>
            <span>Things I do for fun: codewars and handstands  🙌</span>
          </p>

        </div>
      </div>
  </section>
)

export default About;
