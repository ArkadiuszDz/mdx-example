import React from "react";
import Layout from "../components/layout";
import PostList from '../components/postlist';
import { graphql, useStaticQuery } from 'gatsby';

const getPosts = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order:DESC}) {
      edges {
        node {
          excerpt
          frontmatter {
            author
            date(formatString: "MMMM Do, YYYY")
            title
            slug
            image{
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;


const Home = () => {

  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;

  return (
    <Layout>
      <PostList posts={posts}/>
    </Layout>
  )
}

export default Home;