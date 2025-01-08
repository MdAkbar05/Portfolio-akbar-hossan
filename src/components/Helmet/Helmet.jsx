import React from "react";
import { Helmet } from "react-helmet";

const HelmetPage = ({ title, desc, link }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      {/* keyword  */}
      <meta
        name="keywords"
        content="Akbar Hossan, Mern Stack Developer, Web Developer, Web Design, Backend Development, Project Management, Portfolio, Contact with me"
      />
      <meta
        name="google-site-verification"
        content="a80qAFms4eTJ1nwn3EllLq1lMVScPJg8-FnIeNCWrTo"
      />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:image" content={link} />
      <meta property="og:site_name" content="MD. Akbar Hossan | Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={link} />

      {/* Google Analytics */}

      <link rel="canonical" href={link} />
    </Helmet>
  );
};

export default HelmetPage;
