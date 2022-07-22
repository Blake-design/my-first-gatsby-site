import React from "react";
import Layout from "../layout/Layout";
import { StaticImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage alt="me" src="../images/paint2self.jpg" />
      <p>I'm making this by following a tutorial</p>
    </Layout>
  );
};

export default index;
