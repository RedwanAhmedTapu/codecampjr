"use client"
// JavaProgrammingBlog.js
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const JavaProgrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refObjectOrientedProgramming = useRef();
  const refCollections = useRef();
  const refExceptionHandling = useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewObjectOrientedProgramming = useInView(refObjectOrientedProgramming, { triggerOnce: true });
  const isInViewCollections = useInView(refCollections, { triggerOnce: true });
  const isInViewExceptionHandling = useInView(refExceptionHandling, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationObjectOrientedProgramming = useAnimation();
  const animationCollections = useAnimation();
  const animationExceptionHandling = useAnimation();

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
    if (isInViewObjectOrientedProgramming) {
      animationObjectOrientedProgramming.start("visible");
    }
    if (isInViewCollections) {
      animationCollections.start("visible");
    }
    if (isInViewExceptionHandling) {
      animationExceptionHandling.start("visible");
    }
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog, isInViewObjectOrientedProgramming, animationCollections, isInViewExceptionHandling]);

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
            Introduction to Java Programming
          </h1>
          <p className="text-lg">
            Java is a powerful and versatile programming language that is widely used in enterprise-level applications, mobile development (Android), and web development. This course covers the fundamentals of Java programming, including object-oriented programming, collections, and exception handling.
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
          Explore fundamental concepts in Java programming, including variables, data types, and basic syntax.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Variables and Data Types</h3>
        <p className="mb-4">
          Understand how variables and different data types work in Java. Here{`'`}s an example:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`int age = 25;
double price = 19.99;
String name = "John";`}
        </pre>

        <h3 className="text-xl font-bold mb-2">2. Object-Oriented Programming (OOP)</h3>
        <p className="mb-4">
          Learn about the principles of object-oriented programming in Java, including classes, objects, inheritance, and polymorphism.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`// Class definition
class Car {
    String brand;
    String model;

    // Constructor
    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    public void startEngine() {
        System.out.println("Engine started!");
    }
}

// Creating an object of the Car class
Car myCar = new Car("Toyota", "Camry");

// Calling a method on the object
myCar.startEngine();
`}
        </pre>
      </motion.div>

      {/* Object-Oriented Programming Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants4}
        initial="hidden"
        animate={animationObjectOrientedProgramming}
        ref={refObjectOrientedProgramming}
      >
        <h2 className="text-2xl font-bold mb-4">Object-Oriented Programming (OOP)</h2>
        <p className="text-lg mb-4">
          Dive into object-oriented programming in Java, covering classes, objects, inheritance, and polymorphism.
        </p>
        <p className="mb-4">
          Here is an example defining a class and creating an object in Java:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`class Car {
    String brand;
    String model;

    // Constructor
    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    public void startEngine() {
        System.out.println("Engine started!");
    }
}

// Creating an object of the Car class
Car myCar = new Car("Toyota", "Camry");

// Calling a method on the object
myCar.startEngine();
`}
        </pre>
      </motion.div>

      {/* Collections Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants5}
        initial="hidden"
        animate={animationCollections}
        ref={refCollections}
      >
        <h2 className="text-2xl font-bold mb-4">Collections in Java</h2>
        <p className="text-lg mb-4">
          Explore the use of collections in Java, including lists, sets, and maps for efficient data management.
        </p>
        <p className="mb-4">
          Here is an example using a List in Java:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`import java.util.ArrayList;
import java.util.List;

// Creating a List of integers
List<Integer> numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);

// Iterating through the List
for (int num : numbers) {
    System.out.println(num);
}
`}
        </pre>
      </motion.div>

      {/* Exception Handling Section */}
      <motion.div
        className="w-full p-8"
        variants={containerVariants6}
        initial="hidden"
        animate={animationExceptionHandling}
        ref={refExceptionHandling}
      >
        <h2 className="text-2xl font-bold mb-4">Exception Handling in Java</h2>
        <p className="text-lg mb-4">
          Learn about exception handling in Java to gracefully manage errors and unexpected situations.
        </p>
        <p className="mb-4">
          Here is an example using a try-catch block in Java:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          {`try {
    // Code that may throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handling the exception
    System.out.println("Error: Division by zero");
}
`}
        </pre>
      </motion.div>
    </>
  );
};

export default JavaProgrammingBlog;
