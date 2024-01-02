"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CppProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refConditionalStatements = useRef();
  const refPointers = useRef();
  const refFileHandling = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewConditionalStatements = useInView(refConditionalStatements, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewPointers = useInView(refPointers, { triggerOnce: true });
  const isInViewFileHandling = useInView(refFileHandling, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationConditionalStatements = useAnimation();
  const animationPointers = useAnimation();
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
    if (isInViewConditionalStatements) {
      animationConditionalStatements.start("visible");
    }
    if (isInViewPointers) {
      animationPointers.start("visible");
    }
    if (isInViewFileHandling) {
      animationFileHandling.start("visible");
    }
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog, isInViewConditionalStatements, animationPointers, isInViewFileHandling]);

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
            Introduction to C++ Programming
          </h1>
          <p className="text-lg">
            C++ is a powerful, high-performance programming language derived from C. It introduces object-oriented programming features and is widely used in various domains, from systems programming to game development. This course will guide you through the basics of C++ and help you harness its capabilities for building robust applications.
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
          Explore essential concepts in C++ programming, including variables, loops, and functions.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Variables and Data Types</h3>
        <p className="mb-4">
          Understand how variables and data types work in C++. Here{`'`}s an example:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`int age = 25;
float price = 19.99;
char grade = 'A';`}
        </pre>

        <h3 className="text-xl font-bold mb-2">2. Loops</h3>
        <p className="mb-4">
          Learn about loops in C++, such as for and while loops, for iterative tasks.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`for (int i = 0; i < 5; i++) {
  // Code to be repeated
}

while (condition) {
  // Code to be repeated
}

do {
  // Code to be repeated
} while (condition);`}
        </pre>

        <h3 className="text-xl font-bold mb-2">3. Functions</h3>
        <p className="mb-4">
          Explore the structure of functions in C++ for modular and reusable code.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`// Function declaration
int add(int a, int b) {
  return a + b;
}

// Function call
int result = add(3, 5);`}
        </pre>
      </motion.div>

      {/* Conditional Statements Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationConditionalStatements}
        ref={refConditionalStatements}
      >
        <h2 className="text-2xl font-bold mb-4">Conditional Statements</h2>
        <p className="text-lg mb-4">
          Explore conditional statements in C++, including if, else if, and else, for effective decision-making in your programs.
        </p>
        <p className="mb-4">
          Here is an example using an if statement:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`int x = 10;

if (x > 0) {
  // Code to execute when x is greater than 0
} else {
  // Code to execute when x is not greater than 0
}`}
        </pre>
      </motion.div>

      {/* Pointer Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationPointers}
        ref={refPointers}
      >
        <h2 className="text-2xl font-bold mb-4">Pointers in C++</h2>
        <p className="text-lg mb-4">
          Delve into the powerful world of pointers in C++ for advanced memory manipulation and dynamic memory allocation.
        </p>
        <p className="mb-4">
          Here is an example of using a pointer in C++:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`int num = 42;
int *ptr = &num; // ptr now holds the address of num

printf("Value of num: %d\\n", num);
printf("Value of num using pointer: %d\\n", *ptr);`}
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
        <h2 className="text-2xl font-bold mb-4">File Handling in C++</h2>
        <p className="text-lg mb-4">
          Learn how to read from and write to files in C++ for tasks like configuration file management and data storage.
        </p>
        <p className="mb-4">
          Here is an example of writing to a file in C++:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`#include <iostream>
#include <fstream>

int main() {
  std::ofstream file("example.txt");
  if (file.is_open()) {
    file << "Hello, File Handling in C++!";
    file.close();
  }
  return 0;
}`}
        </pre>
      </motion.div>
    </>
  );
};

export default CppProgrammingBlog;
