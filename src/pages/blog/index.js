import React from "react";
import Layout from "../../layout/Layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{`Posted: ${node.frontmatter.date}`}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
