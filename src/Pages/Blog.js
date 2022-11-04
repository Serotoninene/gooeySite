import React, { useState, useEffect } from "react";
// Axios
import axios from "axios";
// Component
import BlogArticle from "../Components/BlogArticle";
// Wouter
import { useLocation } from "wouter";
// Utils
import AnimatedWords from "../Components/AnimatedLetters";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

const blogArticles = [
  {
    id: 1,
    title: "Test",
    description: "lalallala",
    picture: "",
    link: "test.com",
  },
];

const getMediumArticles = async () => {
  const { data } = await axios(
    `https://mediumpostapi.herokuapp.com/?usermedium=alexandre.pujol`
  );
  return data;
};

export default function Blog(props) {
  const [location] = useLocation();
  const [articlesData, setArticlesData] = useState([]);

  const getMediumArticles = async () => {
    const { data } = await axios(
      `https://mediumpostapi.herokuapp.com/?usermedium=alexandre.pujol`
    );
    setArticlesData(data);
  };

  useEffect(async () => {
    await getMediumArticles();
    console.log(articlesData);
  }, []);
  return (
    <>
      <AnimatePresence>
        {location === props.path && (
          <div key={location} id="Blog">
            <div
              key="articlesBg"
              className="articlesBg fixed"
              initial={{ y: "100%", zIndex: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ ease: "easeOut" }}
            ></div>
            <div className="articles-container">
              <h2>
                <AnimatedWords title="Blog" />
              </h2>
              <p>
                Here you'll find the articles I've wrote about front-end
                engineering. Some of them are interesting, some of them are
                garbage. But I love them all, like my children.{" "}
              </p>

              <div className="articles-container">
                {blogArticles.map((articleData, idx) => (
                  <BlogArticle articleData={articleData} key={idx} />
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
