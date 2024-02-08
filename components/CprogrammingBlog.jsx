"use client";

// CprogrammingBlog.js
// CprogrammingBlog.js
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CprogrammingBlog = () => {
  const refIntroduction = useRef();
  const refAnimatedIcon = useRef();
  const refFundamentalBlog = useRef();
  const refConditionalStatements=useRef();
  const refPointers=useRef();
  const refFileHandling=useRef();

  const isInViewIntroduction = useInView(refIntroduction, { triggerOnce: true });
  const isInViewAnimatedIcon = useInView(refAnimatedIcon, { triggerOnce: true });
  const isInViewConditionalStatements = useInView(refConditionalStatements, { triggerOnce: true });
  const isInViewFundamentalBlog = useInView(refFundamentalBlog, { triggerOnce: true });
  const isInViewPointers= useInView(refPointers, { triggerOnce: true });
  const isInViewFileHandling= useInView(refFileHandling, { triggerOnce: true });

  const animationIntroduction = useAnimation();
  const animationAnimatedIcon = useAnimation();
  const animationFundamentalBlog = useAnimation();
  const animationConditionalStatements=useAnimation();
  const animationPointers=useAnimation();
  const animationFileHandling=useAnimation();

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
  }, [isInViewIntroduction, isInViewAnimatedIcon, isInViewFundamentalBlog,isInViewConditionalStatements,animationPointers,isInViewFileHandling]);

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
  className="w-full flex flex-col justify-center items-center relative top-16"
  variants={containerVariants1}
  initial="hidden"
  animate={animationIntroduction}
  ref={refIntroduction}
>
  <motion.div
    className="w-full h-screen bg-gray-200 pt-8 px-4 text-center"
    variants={containerVariants1}
    animate={animationIntroduction}
  >
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      Introduction to C Programming
    </h1>
    <p className="text-base md:text-lg lg:text-xl">
      C is a general-purpose programming language that has been one of the
      most widely used languages of all time. It was created by Dennis
      Ritchie in 1972. Do you want to create powerful programs that run fast… faster than those written in other languages? C is a language that’s easy to write, allows for fast debugging, and is a building block for many other programming languages. With this course, you’ll learn the foundations of this powerful and advanced programming language. No prior coding experience is necessary; we’ll teach you everything you need to know in a clear, simple way that’s perfect for beginners. When you’re done, you can take a look at our Intermediate C course.
    </p>
  </motion.div>

  {/* Animated SVG Image Section */}
  <motion.div
    className="w-full bg-blue-500"
    variants={containerVariants2}
    animate={animationAnimatedIcon}
    ref={refAnimatedIcon}
  >
    {/* Your animated SVG image */}
    {/* <img src="your-coding-svg-animation.svg" alt="Coding Animation" className="w-full h-full object-cover" /> */}
  </motion.div>
</motion.div>

{/* Fundamental Blog Section */}
<motion.div
  className="w-full p-4 md:p-8"
  variants={containerVariants3}
  initial="hidden"
  animate={animationFundamentalBlog}
  ref={refFundamentalBlog}
>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
    Fundamental Concepts
  </h2>
  <p className="text-base md:text-lg lg:text-xl mb-4">
    In this section, we will cover some fundamental concepts of C
    programming, including variables, loops, and functions.
  </p>

  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">1. Variables and Data Types</h3>
  <p className="text-base md:text-lg mb-4">
    In C, variables are used to store data. Common data types include int,
    float, and char. For example:
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
    {`int age = 25;
float price = 19.99;
char grade = 'A';`}
  </pre>

  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">2. Loops</h3>
  <p className="text-base md:text-lg mb-4">
    Loops are used to execute a block of code repeatedly. The two main
    types of loops in C are for and while loops.
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
    {`for (int i = 0; i < 5; i++) {
  // Code to be repeated
}

while (condition) {
  // Code to be repeated
}

do{
  // Code to be repeated
}while(condition);

level: // Code to be repeated
if(condition) goto level;`}
  </pre>

  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">3. Functions</h3>
  <p className="text-base md:text-lg mb-4">
    Functions in C allow you to break your code into modular pieces. A
    basic function structure looks like this:
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
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
  className="w-full p-4 md:p-8"
  variants={containerVariants4}
  initial="hidden"
  animate={animationConditionalStatements}
  ref={refConditionalStatements}
>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Conditional Statements</h2>
  <p className="text-base md:text-lg mb-4">
    Conditional statements in C, such as <code>if</code>, <code>else if</code>, and <code>else</code>, allow you to control the flow of your program based on certain conditions.
  </p>
  <p className="text-base md:text-lg mb-4">
    Here is an example using an <code>if</code> statement:
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
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
  className="w-full p-4 md:p-8"
  variants={containerVariants5}
  initial="hidden"
  animate={animationPointers}
  ref={refPointers}
>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Pointers in C</h2>
  <p className="text-base md:text-lg mb-4">
    Pointers in C are powerful tools that allow you to manipulate memory directly. They are used for dynamic memory allocation and other advanced programming tasks.
  </p>
  <p className="text-base md:text-lg mb-4">
    Here is an example of using a pointer to store the address of a variable:
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
    {`int num = 42;
int *ptr = &num; // ptr now holds the address of num

printf("Value of num: %d\\n", num);
printf("Value of num using pointer: %d\\n", *ptr);`}
  </pre>
</motion.div>

{/* File Handling Section */}
<motion.div
  className="w-full p-4 md:p-8"
  variants={containerVariants6}
  initial="hidden"
  animate={animationFileHandling}
  ref={refFileHandling}
>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">File Handling in C</h2>
  <p className="text-base md:text-lg mb-4">
    File handling in C involves reading from and writing to files. This is essential for tasks like reading configuration files or saving user data.
  </p>
  <p className="text-base md:text-lg mb-4">
    Here is an example of writing to a file in C:
  </p>
  <pre className="bg-gray-100 p-2 rounded-md text-sm md:text-base">
    {`#include <stdio.h>

int main() {
  FILE *file = fopen("example.txt", "w");
  if (file != NULL) {
    fprintf(file, "Hello, File Handling in C!");
    fclose(file);
  }
  return 0;
}`}
  </pre>
</motion.div>

    
    </>
  );
};

export default CprogrammingBlog;
