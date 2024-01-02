"use client"
// CSSProgrammingBlog.js
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CSSProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refSelectors = useRef();
  const refBoxModel = useRef();
  const refFlexbox = useRef();
  const refGrid = useRef();
  const refTransitionsAnimations = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewSelectors = useInView(refSelectors, { triggerOnce: true });
  const isInViewBoxModel = useInView(refBoxModel, { triggerOnce: true });
  const isInViewFlexbox = useInView(refFlexbox, { triggerOnce: true });
  const isInViewGrid = useInView(refGrid, { triggerOnce: true });
  const isInViewTransitionsAnimations = useInView(refTransitionsAnimations, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationSelectors = useAnimation();
  const animationBoxModel = useAnimation();
  const animationFlexbox = useAnimation();
  const animationGrid = useAnimation();
  const animationTransitionsAnimations = useAnimation();

  useEffect(() => {
    if (isInViewIntroduction) {
      animationIntroduction.start("visible");
    }
    if (isInViewSelectors) {
      animationSelectors.start("visible");
    }
    if (isInViewBoxModel) {
      animationBoxModel.start("visible");
    }
    if (isInViewFlexbox) {
      animationFlexbox.start("visible");
    }
    if (isInViewGrid) {
      animationGrid.start("visible");
    }
    if (isInViewTransitionsAnimations) {
      animationTransitionsAnimations.start("visible");
    }
  }, [isInViewIntroduction, isInViewSelectors, isInViewBoxModel, isInViewFlexbox, animationGrid, isInViewTransitionsAnimations]);

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
            Introduction to CSS
          </h1>
          <p className="text-lg">
            CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. In this course, you{`'`}ll explore CSS selectors, the box model, flexbox, grid, and transitions/animations to enhance the visual appearance of web pages.
          </p>
        </motion.div>

        {/* Animated SVG Image Section */}
        <motion.div
          className="w-1/2 bg-blue-500"
          variants={containerVariants2}
          animate={animationSelectors}
          ref={refSelectors}
        >
          {/* Replace 'your-coding-svg-animation.svg' with the actual path to your SVG file */}
          {/* <img
            src="your-coding-svg-animation.svg"
            alt="Coding Animation"
            className="w-full h-full object-cover"
          /> */}
        </motion.div>
      </motion.div>

      {/* CSS Selectors Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants3}
        initial="hidden"
        animate={animationSelectors}
        ref={refSelectors}
      >
        <h2 className="text-2xl font-bold mb-4">CSS Selectors</h2>
        <p className="text-lg mb-4">
          Learn about CSS selectors to target and style HTML elements.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`/* Select by element type */
p {
  color: blue;
}

/* Select by class */
.my-class {
  font-size: 16px;
}

/* Select by ID */
#my-id {
  background-color: yellow;
}

/* Select by attribute */
input[type="text"] {
  border: 1px solid black;
}`}

        </pre>
      </motion.div>

      {/* Box Model Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationBoxModel}
        ref={refBoxModel}
      >
        <h2 className="text-2xl font-bold mb-4">CSS Box Model</h2>
        <p className="text-lg mb-4">
          Understand the CSS box model, including margin, padding, border, and content.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`/* Box Model */
.box {
  width: 200px;
  height: 100px;
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}`}

        </pre>
      </motion.div>

      {/* Flexbox Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationFlexbox}
        ref={refFlexbox}
      >
        <h2 className="text-2xl font-bold mb-4">CSS Flexbox</h2>
        <p className="text-lg mb-4">
          Explore CSS Flexbox for creating flexible and responsive layouts.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`/* Flex Container */
.flex-container {
  display: flex;
  justify-content: space-between;
}

/* Flex Items */
.flex-item {
  flex: 1;
  margin: 10px;
}`}

        </pre>
      </motion.div>

      {/* CSS Grid Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationGrid}
        ref={refGrid}
      >
        <h2 className="text-2xl font-bold mb-4">CSS Grid</h2>
        <p className="text-lg mb-4">
          Learn about CSS Grid for creating two-dimensional grid layouts.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

/* Grid Items */
.grid-item {
  grid-column: span 2;
  margin: 10px;
}`}

        </pre>
      </motion.div>

      {/* Transitions and Animations Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationTransitionsAnimations}
        ref={refTransitionsAnimations}
      >
        <h2 className="text-2xl font-bold mb-4">CSS Transitions and Animations</h2>
        <p className="text-lg mb-4">
          Add smooth transitions and animations to enhance user experience.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md">
          {`/* Transition */
.transition-box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 0.5s, height 0.5s, background-color 0.5s;
}

.transition-box:hover {
  width: 150px;
  height: 150px;
  background-color: blue;
}

/* Animation */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: green;
  animation: slide 1s infinite alternate;
}`}

        </pre>
      </motion.div>
    </>
  );
};

export default CSSProgrammingBlog;
