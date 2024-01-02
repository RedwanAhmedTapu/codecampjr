"use client"
// CSharpProgrammingBlog.js
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CSharpProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refConditionalStatements = useRef();
  const refObjectOriented = useRef();
  const refFileHandling = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewConditionalStatements = useInView(refConditionalStatements, { triggerOnce: true });
  const isInViewObjectOriented = useInView(refObjectOriented, { triggerOnce: true });
  const isInViewFileHandling = useInView(refFileHandling, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationConditionalStatements = useAnimation();
  const animationObjectOriented = useAnimation();
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
    if (isInViewObjectOriented) {
      animationObjectOriented.start("visible");
    }
    if (isInViewFileHandling) {
      animationFileHandling.start("visible");
    }
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog, isInViewConditionalStatements, animationObjectOriented, isInViewFileHandling]);

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
            Introduction to C# Programming
          </h1>
          <p className="text-lg">
            C# is a versatile, modern programming language developed by Microsoft. Known for its simplicity and robustness, C# is widely used for developing Windows applications, web applications, and more. This course provides a comprehensive guide to C# basics and advanced features, helping you build efficient and scalable applications.
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
          Explore essential concepts in C# programming, including variables, loops, and functions.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Variables and Data Types</h3>
        <p className="mb-4">
          Understand how variables and data types work in C#. Here{`'`}s an example:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`int age = 25;
float price = 19.99;
string name = "John";`}
        </pre>

        <h3 className="text-xl font-bold mb-2">2. Loops</h3>
        <p className="mb-4">
          Learn about loops in C#, such as for and while loops, for iterative tasks.
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
          Explore the structure of functions in C# for modular and reusable code.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`// Function declaration
int Add(int a, int b) {
  return a + b;
}

// Function call
int result = Add(3, 5);`}
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
          Explore conditional statements in C#, including if, else if, and else, for effective decision-making in your programs.
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

      {/* Object-Oriented Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationObjectOriented}
        ref={refObjectOriented}
      >
        <h2 className="text-2xl font-bold mb-4">Object-Oriented Programming (OOP)</h2>
        <p className="text-lg mb-4">
          Dive into the principles of Object-Oriented Programming in C# for building scalable and maintainable software.
        </p>
        <p className="mb-4">
          Here is an example of defining a class in C#:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`public class Person {
  public string Name { get; set; }
  public int Age { get; set; }
}

// Creating an instance of the Person class
Person person = new Person();
person.Name = "John";
person.Age = 25;`}
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
        <h2 className="text-2xl font-bold mb-4">File Handling in C#</h2>
        <p className="text-lg mb-4">
          Learn how to read from and write to files in C# for tasks like configuration file management and data storage.
        </p>
        <p className="mb-4">
          Here is an example of writing to a file in C#:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`using System.IO;

class Program {
  static void Main() {
    string filePath = "example.txt";

    // Write to a file
    File.WriteAllText(filePath, "Hello, File Handling in C#!");
  }
}`}
        </pre>
      </motion.div>
    </>
  );
};

export default CSharpProgrammingBlog;
