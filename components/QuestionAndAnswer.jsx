"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const QuestionAndAnswer = () => {
    const [questions, setQuestions] = useState([
        { id: 1, question: 'Why CodeCampJr?', answer: 'CodeCampJr offers live classes where you can learn web application development and Python programming, providing a comprehensive learning experience tailored for aspiring coders.' },
        { id: 2, question: 'How will the class continue?', answer: 'The classes will be conducted live, allowing for real-time interaction with instructors and fellow learners to enhance your understanding and address any queries you may have.' },
        { id: 3, question: 'What will I learn from the class?', answer: 'In the class, you will learn about web application development and Python programming, gaining practical skills and knowledge that are essential for building dynamic websites and applications.' },
        { id: 4, question: 'What is the payment method?', answer: 'The payment method accepted by CodeCampJr is through Nagad account. For more information contact with us 01704614424,01706113752' },
        // Add more questions and answers as needed
      ]);

  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full h-auto max-[500px]:px-4 px-12 bg-white dark:bg-black  text-gray-800 dark:text-gray-100">
      <div className="questionList ">
        {questions.map((qna) => (
          <div key={qna.id} className="w-full  px-2 border-b border-gray-200  dark:border-gray-600 py-4">
            <div className="questionHeader  flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(qna.id)}>
              <h3 className="text-[1.3] font-semibold">{qna.question}</h3>
              {expandedId === qna.id ? <FaMinus className="text-gray-600 dark:text-gray-400" /> : <FaPlus className="text-gray-600 dark:text-gray-400" />}
            </div>
            <div className={`transition-all duration-[0.7s] ${expandedId === qna.id ? 'max-[500px]:h-32 h-16 flex_start opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-gray-600 text-[1rem] dark:text-gray-400 mt-2">{qna.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
