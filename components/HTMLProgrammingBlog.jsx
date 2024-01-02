"use client"
// HTMLProgrammingBlog.js
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const HTMLProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refBasicTags = useRef();
  const refSemanticTags = useRef();
  const refForms = useRef();
  const refMediaTags = useRef();
  const refResponsiveDesign = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewBasicTags = useInView(refBasicTags, { triggerOnce: true });
  const isInViewSemanticTags = useInView(refSemanticTags, { triggerOnce: true });
  const isInViewForms = useInView(refForms, { triggerOnce: true });
  const isInViewMediaTags = useInView(refMediaTags, { triggerOnce: true });
  const isInViewResponsiveDesign = useInView(refResponsiveDesign, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationBasicTags = useAnimation();
  const animationSemanticTags = useAnimation();
  const animationForms = useAnimation();
  const animationMediaTags = useAnimation();
  const animationResponsiveDesign = useAnimation();

  useEffect(() => {
    if (isInViewIntroduction) {
      animationIntroduction.start("visible");
    }
    if (isInViewBasicTags) {
      animationBasicTags.start("visible");
    }
    if (isInViewSemanticTags) {
      animationSemanticTags.start("visible");
    }
    if (isInViewForms) {
      animationForms.start("visible");
    }
    if (isInViewMediaTags) {
      animationMediaTags.start("visible");
    }
    if (isInViewResponsiveDesign) {
      animationResponsiveDesign.start("visible");
    }
  }, [isInViewIntroduction, isInViewBasicTags, isInViewSemanticTags, isInViewForms, animationMediaTags, isInViewResponsiveDesign]);

  const containerVariants1 = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const containerVariants2 = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 75, transition: { duration: 0.5 } },
  };

  const containerVariants3 = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const containerVariants4 = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const containerVariants5 = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const containerVariants6 = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Introduction Section */}
      <motion.div
        className="flex w-full h-screen flex_center justify-start"
        variants={containerVariants1}
        initial="hidden"
        animate={animationIntroduction}
        ref={refIntroduction}
      >
        <motion.div
          className="w-1/2 h-screen flex_col_center bg-gray-200 pt-52 px-8"
          variants={containerVariants1}
          animate={animationIntroduction}
        >
          <h1 className="text-3xl font-bold mb-4">
            Introduction to HTML
          </h1>
          <p className="text-lg">
            HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. In this course, you{`'`}ll learn the basics of HTML, including fundamental tags, semantic tags, forms, media tags, and responsive design.
          </p>
        </motion.div>

        {/* Animated SVG Image Section */}
        <motion.div
          className="w-1/2 bg-blue-500"
          variants={containerVariants2}
          animate={animationBasicTags}
          ref={refBasicTags}
        >
          {/* Replace 'your-coding-svg-animation.svg' with the actual path to your SVG file */}
          {/* <img
            src="your-coding-svg-animation.svg"
            alt="Coding Animation"
            className="w-full h-full object-cover"
          /> */}
        </motion.div>
      </motion.div>

      {/* Basic Tags Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants3}
        initial="hidden"
        animate={animationBasicTags}
        ref={refBasicTags}
      >
        <h2 className="text-2xl font-bold mb-4">Basic HTML Tags</h2>
        <p className="text-lg mb-4">
          Learn about fundamental HTML tags for creating the structure of a web page.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>

  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
  <a href="https://example.com">Visit Example.com</a>

</body>
</html>`}
        </pre>
      </motion.div>

      {/* Semantic Tags Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationSemanticTags}
        ref={refSemanticTags}
      >
        <h2 className="text-2xl font-bold mb-4">Semantic HTML Tags</h2>
        <p className="text-lg mb-4">
          Explore semantic HTML tags for better structure and accessibility.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`<article>
  <h2>Article Title</h2>
  <p>Article content goes here.</p>
</article>

<aside>
  <h2>Sidebar Content</h2>
  <p>Additional information or related links.</p>
</aside>

<footer>
  <p>&copy; 2023 My Website</p>
</footer>`}
        </pre>
      </motion.div>

      {/* Forms Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationForms}
        ref={refForms}
      >
        <h2 className="text-2xl font-bold mb-4">HTML Forms</h2>
        <p className="text-lg mb-4">
          Learn how to create forms to collect user input on a web page.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="submit" value="Submit">
</form>`}
        </pre>
      </motion.div>

      {/* Media Tags Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationMediaTags}
        ref={refMediaTags}
      >
        <h2 className="text-2xl font-bold mb-4">HTML Media Tags</h2>
        <p className="text-lg mb-4">
          Explore HTML media tags for embedding images, audio, and video.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`<img src="image.jpg" alt="Description of the image">

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}
        </pre>
      </motion.div>

      {/* Responsive Design Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationResponsiveDesign}
        ref={refResponsiveDesign}
      >
        <h2 className="text-2xl font-bold mb-4">Responsive Design with HTML</h2>
        <p className="text-lg mb-4">
          Learn how to create responsive web pages that adapt to different screen sizes.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
  @media only screen and (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
</style>`}
        </pre>
      </motion.div>
    </>
  );
};

export default HTMLProgrammingBlog;
