// JavaScriptProgrammingBlog.js
"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const JavaScriptProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refControlFlow = useRef();
  const refFunctions = useRef();
  const refAsynchronousProgramming = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewControlFlow = useInView(refControlFlow, { triggerOnce: true });
  const isInViewFunctions = useInView(refFunctions, { triggerOnce: true });
  const isInViewAsynchronousProgramming = useInView(refAsynchronousProgramming, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationControlFlow = useAnimation();
  const animationFunctions = useAnimation();
  const animationAsynchronousProgramming = useAnimation();

  useEffect(() => {
    if (isInViewIntroduction) {
      animationIntroduction.start("visible");
    }
    if (isInViewAnimatedIcon) {
      animationAnimatedIcon.start("visible");
    }
    if (isInViewFundamentalBlog) {
      animationFundamentalBlog.start("visible");
    }
    if (isInViewControlFlow) {
      animationControlFlow.start("visible");
    }
    if (isInViewFunctions) {
      animationFunctions.start("visible");
    }
    if (isInViewAsynchronousProgramming) {
      animationAsynchronousProgramming.start("visible");
    }
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog, isInViewControlFlow, animationFunctions, isInViewAsynchronousProgramming]);

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
            Introduction to JavaScript Programming
          </h1>
          <p className="text-lg">
            JavaScript is a versatile programming language that is essential for web development. From creating interactive user interfaces to building server-side applications, JavaScript is a fundamental language for modern development. This course covers the basics of JavaScript, including its syntax, fundamental concepts, and advanced features.
          </p>
        </motion.div>

        {/* Animated SVG Image Section */}
        <motion.div
          className="w-1/2 bg-blue-500"
          variants={containerVariants2}
          animate={animationAnimatedIcon}
          ref={refAnimatedIcon}
        >
          {/* Replace 'your-coding-svg-animation.svg' with the actual path to your SVG file */}
          {/* <img
            src="your-coding-svg-animation.svg"
            alt="Coding Animation"
            className="w-full h-full object-cover"
          /> */}
        </motion.div>
      </motion.div>

      {/* Fundamental Blog Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants3}
        initial="hidden"
        animate={animationFundamentalBlog}
        ref={refFundamentalBlog}
      >
        <h2 className="text-2xl font-bold mb-4">Fundamental Concepts</h2>
        <p className="text-lg mb-4">
          Explore fundamental concepts in JavaScript programming, including variables, data types, and basic syntax.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Variables and Data Types</h3>
        <p className="mb-4">
          Understand how variables and different data types work in JavaScript. Here{`'`}s an example:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`let age = 25;
const price = 19.99;
let name = "John";`}
        </pre>

        <h3 className="text-xl font-bold mb-2">2. Control Flow</h3>
        <p className="mb-4">
          Learn about control flow in JavaScript, including if statements, loops, and switch statements.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`if (condition) {
    // Code to execute when the condition is true
} else {
    // Code to execute when the condition is false
}

for (let i = 0; i < 5; i++) {
    // Code to be repeated
}
`}
        </pre>

        <h3 className="text-xl font-bold mb-2">3. Functions</h3>
        <p className="mb-4">
          Explore the structure of functions in JavaScript for modular and reusable code.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`// Function declaration
function add(a, b) {
    return a + b;
}

// Function call
let result = add(3, 5);`}
        </pre>
      </motion.div>

      {/* Control Flow Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationControlFlow}
        ref={refControlFlow}
      >
        <h2 className="text-2xl font-bold mb-4">Control Flow</h2>
        <p className="text-lg mb-4">
          Dive into control flow structures in JavaScript, including if statements, loops, and switch statements.
        </p>
        <p className="mb-4">
          Here is an example using an if statement:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`let x = 10;

if (x > 0) {
    // Code to execute when x is greater than 0
} else {
    // Code to execute when x is not greater than 0
}`}
        </pre>
      </motion.div>

      {/* Functions Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationFunctions}
        ref={refFunctions}
      >
        <h2 className="text-2xl font-bold mb-4">Functions in JavaScript</h2>
        <p className="text-lg mb-4">
          Learn about functions in JavaScript for modular and reusable code.
        </p>
        <p className="mb-4">
          Here is an example of defining a function in JavaScript:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function call
let message = greet("Alice");
console.log(message);`}
        </pre>
      </motion.div>

      {/* Asynchronous Programming Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationAsynchronousProgramming}
        ref={refAsynchronousProgramming}
      >
        <h2 className="text-2xl font-bold mb-4">Asynchronous Programming</h2>
        <p className="text-lg mb-4">
          Explore asynchronous programming in JavaScript, including Promises and async/await for handling asynchronous operations.
        </p>
        <p className="mb-4">
          Here is an example using a Promise:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = "Fetched data";
            resolve(data);
        }, 1000);
    });
}

fetchData().then((result) => {
    console.log(result);
});
`}
        </pre>
      </motion.div>
    </>
  );
};

export default JavaScriptProgrammingBlog;
