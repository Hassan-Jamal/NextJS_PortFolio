"use client"; // Ensure this is the very first line in the file
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { FaAward, FaLaptopCode, FaLightbulb } from "react-icons/fa";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-4 bg-black bg-opacity-80">
      <div className="flex items-center">
        <a href="/">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:animate-pulse">
            HJ
          </h1>
        </a>
      </div>

      {/* Centered Links (Desktop) */}
      <div className="hidden md:flex mx-auto space-x-6">
        <a href="#home" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          Home
        </a>
        <a href="#about" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          About
        </a>
        <a href="#skills" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          Skills
        </a>
        <a href="#projects" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          Projects
        </a>
        <a href="#contact" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          Contact
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1ViMLgSCXqTtEfnQyp0nOlfwR61B8ScsM" download className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
          Download Resume
        </a>
      </div>

      {/* Left Icons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <a href="https://www.linkedin.com/in/hassan-jamal1/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Hassan-Jamal" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://canary.discord.com/channels/@syed_hassanjamal" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
          <FaDiscord />
        </a>
        <a href="https://www.facebook.com/share/1SPjCBVAeD/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
          <FaFacebook />
        </a>
      </div>

      {/* Centered Hamburger Icon (Mobile) */}
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
        <button onClick={toggleMobileMenu} className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#home" onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            Home
          </a>
          <a href="#about" onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            About
          </a>
          <a href="#skills" onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            Skills
          </a>
          <a href="#projects" onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            Projects
          </a>
          <a href="#contact" onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            Contact
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1ViMLgSCXqTtEfnQyp0nOlfwR61B8ScsM" download onClick={toggleMobileMenu} className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:underline">
            Download Resume
          </a>

          {/* Social Icons for Mobile */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/hassan-jamal1/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Hassan-Jamal" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://canary.discord.com/channels/@syed_hassanjamal" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
              <FaDiscord />
            </a>
            <a href="https://www.facebook.com/share/1SPjCBVAeD/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="text-2xl text-gradient bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
              <FaFacebook />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Home = () => {
  const quotes = [
    "Explore my universe of web development, AI, and creativity. The stars are aligned, and so are the possibilities.",
    "Passionate about creating efficient, visually appealing, and impactful web applications.",
    "Blending MERN Stack expertise with AI innovation to build the future.",
    "Empowering ideas with technology, one project at a time.",
    "Unleashing creativity through code and endless possibilities."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="home" className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/galaxy.jpg')] bg-cover bg-fixed opacity-70"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          HASSAN JAMAL
        </h1>

        {/* Rotating Quote */}
        <p className="mt-4 text-2xl max-w-2xl animate-fade opacity-80 transition-all duration-700">
          {quotes[currentQuoteIndex]}
        </p>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          <a
            href="#contact"
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg hover:bg-gradient-to-l"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1ViMLgSCXqTtEfnQyp0nOlfwR61B8ScsM"
            download
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:bg-gradient-to-l"
          >
            Get Resume
          </a>
        </div>

        {/* Extra Details */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <p className="text-lg max-w-3xl text-gray-300">
            I'm a passionate Software Engineer specializing in MERN Stack development, Flutter, and AI technology. With a creative mindset and a knack for problem-solving, I strive to turn innovative ideas into reality.
          </p>
          <p className="text-lg max-w-3xl text-gray-300">
            I enjoy exploring new technologies and leveraging them to create impactful solutions. Whether it's building web applications, working with machine learning models, or crafting user-friendly interfaces, I aim to leave a mark of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-80"></div>
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 blur-3xl opacity-30 top-20 left-1/3"></div>
      <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 blur-2xl opacity-40 bottom-20 right-1/4"></div>

      <h2 className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade">
        About Me
      </h2>

      <div className="relative mt-8 flex flex-col items-center text-center space-y-6 px-4 max-w-5xl animate-fade-in-up">
        <p className="text-lg leading-relaxed">
          Hi! I’m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Syed Hassan Jamal</span>, a passionate Software Engineer who thrives on creating 
          <span className="text-purple-400"> innovative solutions</span> and 
          <span className="text-pink-400"> visually stunning applications</span>. 
          Currently, I’m a final-year student at <strong>COMSATS University Lahore Campus</strong>, 
          blending technical expertise with a creative mindset to build the future of web and mobile development.
        </p>

        <p className="text-lg leading-relaxed">
          My toolkit includes the <strong>MERN Stack</strong>, <strong>Flutter</strong>, and cutting-edge <strong>AI technologies</strong>. I believe in pushing boundaries, combining efficiency and beauty in my work to deliver impactful results. Whether it’s crafting user-friendly designs or harnessing the power of machine learning, I aim to leave a lasting mark in the tech world.
        </p>
      </div>

      {/* Cool highlights */}
      <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl px-4">
        <div className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaLaptopCode className="text-4xl text-purple-400 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            MERN Stack Expert
          </h3>
          <p className="text-gray-400 mt-2">
            Building fast, scalable, and modern web applications using MongoDB, Express, React, and Node.js.
          </p>
        </div>
        <div className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaLightbulb className="text-4xl text-pink-400 mb-4 animate-bounce" />
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
            Creative Innovator
          </h3>
          <p className="text-gray-400 mt-2">
            Leveraging creativity to turn complex ideas into elegant solutions and meaningful designs.
          </p>
        </div>
        <div className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaAward className="text-4xl text-blue-400 mb-4 animate-bounce-slow" />
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            AI Enthusiast
          </h3>
          <p className="text-gray-400 mt-2">
            Diving into the world of machine learning and AI to explore and create groundbreaking applications.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-16 flex flex-col items-center space-y-4">
        <p className="text-lg text-gray-300">
          Let’s connect and create something extraordinary together!
        </p>
        <a
          href="#contact"
          className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg hover:bg-gradient-to-l transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white py-12 flex flex-col items-center"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-80"></div>
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 blur-3xl opacity-30 top-20 left-1/4"></div>
      <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40 bottom-10 right-1/3"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        My Skills
      </h2>

      {/* Skill Categories */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-6xl">
        {/* Web Development */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Web Development
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>🌐 HTML & CSS</li>
            <li>⚡ JavaScript</li>
            <li>📚 Bootstrap</li>
            <li>⚛️ React.js</li>
            <li>🌿 Node.js</li>
            <li>🔗 RESTful APIs</li>
            <li>📱 Responsive Design</li>
          </ul>
        </div>

        {/* App Development */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
            App Development
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>📱 Flutter & Dart</li>
            <li>📲 Android Studio</li>
            <li>🔥 Firebase Integration</li>
            <li>🤖 ChatGPT Integration</li>
            <li>🎨 Mobile UI/UX Design</li>
            <li>🐞 App Testing & Debugging</li>
            <li>🚀 Play Store Deployment</li>
          </ul>
        </div>

        {/* AI & Machine Learning */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            AI & Machine Learning
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>🧠 Data Science & Analysis</li>
            <li>📊 Python & NumPy</li>
            <li>🤖 Machine Learning Algorithms</li>
            <li>🧬 TensorFlow & PyTorch</li>
            <li>🗣️ Natural Language Processing</li>
          </ul>
        </div>

        {/* Software Engineering */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600">
            Software Engineering
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>⚙️ Object-Oriented Programming (OOP)</li>
            <li>📝 Version Control (Git & GitHub)</li>
            <li>🛠️ Agile & Scrum Methodologies</li>
            <li>🔄 Continuous Integration & Deployment</li>
            <li>📡 API Development & Integration</li>
            <li>💻 System Design & Architecture</li>
          </ul>
        </div>

        {/* Cloud & DevOps */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Cloud & DevOps
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>☁️ AWS, Azure, Google Cloud</li>
            <li>🔄 Docker & Kubernetes</li>
            <li>🔧 CI/CD Pipelines</li>
            <li>📦 Serverless Architecture</li>
            <li>🔒 Security Best Practices</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Databases
          </h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>💾 SQL & NoSQL Databases</li>
            <li>📊 MongoDB</li>
            <li>📂 MySQL & PostgreSQL</li>
            <li>🔍 Database Design & Optimization</li>
            <li>⚡ Database Security</li>
          </ul>
        </div>
      </div>

      {/* Animation Call to Action */}
      <div className="mt-16">
        <p className="text-lg text-gray-400 text-center">
          Ready to turn these skills into reality? Let’s build something incredible together!
        </p>
        <a
          href="#contact"
          className="block mt-4 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg hover:bg-gradient-to-l transition-transform transform hover:scale-110 text-center"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};


const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white py-12 flex flex-col items-center"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-80"></div>
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 blur-3xl opacity-30 top-20 left-1/4"></div>
      <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40 bottom-10 right-1/3"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-6xl">
        {/* Project 1 - E-Learning App */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            E-Learning App
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A Flutter-based mobile application designed for e-learning, integrating Firebase for real-time data synchronization and user authentication. It includes course management, quizzes, and tracking features for learners.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>Flutter, Firebase, Dart
          </div>
        </div>

        {/* Project 2 - Diabetes Prediction and Control System */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600">
            Diabetes Prediction and Control System
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A web and mobile application designed to predict and monitor diabetes using AI and machine learning algorithms, allowing users to control their health data.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>React, Node.js, Express.js, TensorFlow, Flask, MongoDB, Firebase
          </div>
        </div>

        {/* Project 3 - Job Portal */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
            Job Portal
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A job portal web application where employers can post jobs and candidates can apply, built with React and Node.js for seamless performance.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>React, Node.js, Express.js, MongoDB, JWT Authentication
          </div>
        </div>

        {/* Project 4 - AI-Based Sentiment Analysis Tool */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
            AI-Based Sentiment Analysis Tool
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A web app powered by Python and AI that analyzes social media posts for sentiment and provides insights into public opinion.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>Python, Flask, TensorFlow, Natural Language Processing
          </div>
        </div>

        {/* Project 5 - Personal Finance Tracker */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
            Personal Finance Tracker
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A personal finance web app that allows users to track expenses, manage budgets, and visualize their financial status over time.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>React, Node.js, MongoDB, Chart.js
          </div>
        </div>

        {/* Project 6 - Movie Recommendation System */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Movie Recommendation System
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            A recommendation system built using machine learning algorithms to suggest movies based on user preferences and ratings.
          </p>
          <div className="mt-4 text-gray-400">
            <span className="font-semibold">Tech Stack: </span>Python, Flask, Scikit-learn, Movie API
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white py-12">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12">
        Contact Me
      </h2>

      {/* Contact Form */}
      <div className="flex justify-center items-center">
        <form
          action="https://formspree.io/f/mjkgyvpk"
          method="POST"
          className="w-full max-w-2xl space-y-6 p-8 bg-gray-800 rounded-lg shadow-lg border-2 border-purple-500"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-200">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-200">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-200">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg font-semibold text-gray-200">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-200">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Write your message here"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button with Icon */}
<button
  type="submit"
  className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:from-purple-500 hover:to-pink-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95 flex items-center justify-center gap-3"
>
  <i className="fas fa-paper-plane"></i> {/* Icon from Font Awesome */}
  Send Message
</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left section - Contact info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-4 text-center md:text-left">
            Feel free to reach out to me for any queries or collaborations.
          </p>
          
          <div className="flex space-x-4 text-3xl">
            <a href="https://www.linkedin.com/in/hassan-jamal1/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Hassan-Jamal" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:hassanjamal6577987@gmail.com" className="hover:text-purple-400">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Middle section - Links */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>
        <p className="italic text-center  font-semibold text-gray-800">
   "Pressure Creates Legends. Stay Under it." 
</p>


        {/* Right section - Copyright */}
        <div className="text-center">
          <p className="text-gray-300">
            &copy; 2025 Hassan Jamal. All Rights Reserved.
          </p>
          <div className="mt-2 text-gray-400 text-sm">
            <p>Built with 💻 and ❤️</p>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-xl"></div>
    </footer>
  );
};



export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
