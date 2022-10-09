import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import type { HeadFC } from "gatsby";

// CSS imports
import "../styles/global.css";

// Component imports
import NavigationBar from "../components/NavigationBar";
import ArticleCard from "../components/ArticleCard";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            strapi_id
            Title
            Date
            Author
            Content {
              data {
                Content
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <NavigationBar />
      <div className="flex justify-center my-5 align-center">
        <h1>Articles</h1>
      </div>
      <div className="flex justify-center align-center">
        <div className="grid tablet:grid-cols-3  gap-5 p-4">
          {data.allStrapiArticle.edges.map(({ node }: any) => (
            <ArticleCard
              title={node.Title}
              date={node.Date}
              author={node.Author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
