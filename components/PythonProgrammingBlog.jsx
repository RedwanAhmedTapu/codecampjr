"use client"
// PythonProgrammingBlog.js
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const PythonProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refControlStructures = useRef();
  const refFunctions = useRef();
  const refFileHandling = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewControlStructures = useInView(refControlStructures, { triggerOnce: true });
  const isInViewFunctions = useInView(refFunctions, { triggerOnce: true });
  const isInViewFileHandling = useInView(refFileHandling, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationControlStructures = useAnimation();
  const animationFunctions = useAnimation();
  const animationFileHandling = useAnimation();

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
    if (isInViewControlStructures) {
      animationControlStructures.start("visible");
    }
    if (isInViewFunctions) {
      animationFunctions.start("visible");
    }
    if (isInViewFileHandling) {
      animationFileHandling.start("visible");
    }
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog, isInViewControlStructures, animationFunctions, isInViewFileHandling]);

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
            Introduction to Python Programming
          </h1>
          <p className="text-lg">
            Python is a versatile and beginner-friendly programming language known for its readability and ease of use. Whether you{`'`}re interested in web development, data science, or automation, Python has you covered. This course provides a solid foundation in Python programming, covering essential concepts for both beginners and experienced developers.
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
          Explore essential concepts in Python programming, including variables, loops, and functions.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Variables and Data Types</h3>
        <p className="mb-4">
          Understand how variables and data types work in Python. Here{`'`}s an example:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`age = 25
price = 19.99
name = "John"`}
        </pre>

        <h3 className="text-xl font-bold mb-2">2. Control Structures</h3>
        <p className="mb-4">
          Learn about control structures in Python, including if statements and loops.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`if condition:
    # Code to execute when the condition is true

for i in range(5):
    # Code to be repeated
`}
        </pre>

        <h3 className="text-xl font-bold mb-2">3. Functions</h3>
        <p className="mb-4">
          Explore the structure of functions in Python for modular and reusable code.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`# Function definition
def add(a, b):
    return a + b

# Function call
result = add(3, 5)`}
        </pre>
      </motion.div>

      {/* Control Structures Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationControlStructures}
        ref={refControlStructures}
      >
        <h2 className="text-2xl font-bold mb-4">Control Structures</h2>
        <p className="text-lg mb-4">
          Learn about control structures in Python, including if statements, loops, and more for effective program flow.
        </p>
        <p className="mb-4">
          Here is an example using an if statement:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`x = 10

if x > 0:
    # Code to execute when x is greater than 0
else:
    # Code to execute when x is not greater than 0
`}
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
        <h2 className="text-2xl font-bold mb-4">Functions in Python</h2>
        <p className="text-lg mb-4">
          Dive into the world of functions in Python for modular and reusable code.
        </p>
        <p className="mb-4">
          Here is an example of defining a function in Python:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`# Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
message = greet("Alice")
print(message)
`}
        </pre>
      </motion.div>

      {/* File Handling Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationFileHandling}
        ref={refFileHandling}
      >
        <h2 className="text-2xl font-bold mb-4">File Handling in Python</h2>
        <p className="text-lg mb-4">
          Learn how to read from and write to files in Python for tasks like configuration file management and data storage.
        </p>
        <p className="mb-4">
          Here is an example of writing to a file in Python:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`with open("example.txt", "w") as file:
    file.write("Hello, File Handling in Python!")`}
        </pre>
      </motion.div>
    </>
  );
};

export default PythonProgrammingBlog;
