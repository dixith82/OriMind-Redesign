import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
title: string;
description: string;
}

const SEOHead = ({ title, description }: SEOHeadProps) => {
return ( <Helmet>

  <title>{title}</title>

  <meta name="description" content={description} />

  <link rel="canonical" href="https://orimind.com" />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://orimind.com" />
  <meta property="og:image" content="/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/og-image.png" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OriMind",
      "url": "https://orimind.com",
      "description": "OriMind builds autonomous AI systems like infinall.ai."
    }
    `}
  </script>

</Helmet>

);
};

export default SEOHead;
