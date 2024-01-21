import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Free_Trial_Reg_Modal = () => {

  const closeModal = () => {
    setIsOpen(false);
    // You can navigate to the homepage here
    window.location.href = '/'; // Replace with your actual homepage route
  };

  useEffect(() => {
    // You can scroll down to a specific div after the modal is closed
    if (!isOpen) {
      const targetDiv = document.getElementById('targetDivId'); // Replace with your actual target div id
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isOpen]);

  return (
    <>
     
    </>
  );
};

export default Free_Trial_Reg_Modal;
