import React, { useState } from 'react';
import { motion } from 'framer-motion';
import courses from '../assets/courses.png';
import books from '../assets/books.png';
import ebook from '../assets/ebook.png';
import test from '../assets/test.png';
import youtube from '../assets/youtube.png';
import notes from '../assets/notes.png'

const services = [
  { title: 'Courses', description: 'High-quality courses on Sanskrit.', icon: '📚', link: '/courses', details: 'Detailed information about our courses. Enhance your knowledge with high-quality content.', image: courses },
  { title: 'E-Books', description: 'Download and read e-books.', icon: '📖', link: '/ebooks', details: 'Discover a vast collection of e-books to read and download at your convenience.', image: ebook },
  { title: 'Test Series', description: 'Prepare with our test series.', icon: '📝', link: '/test-series', details: 'Practice and assess your knowledge with our comprehensive test series.', image: test },
  { title: 'Notes', description: 'Access free and paid notes.', icon: '🗒️', link: '/notes', details: 'Get access to both free and premium notes for thorough learning.', image: notes },
  { title: 'YouTube', description: 'Connect with us on YouTube.', icon: '📺', link: '/youtube', details: 'Watch our educational videos and tutorials on our YouTube channel.', image: youtube },
  { title: 'Book Store', description: 'Explore our Book Store.', icon: '📚', link: '/book-store', details: 'Purchase a variety of Sanskrit books from our online store.', image: books },
];

const TabbedServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-300">What are we Offering?</h2>
      <div className="flex justify-center mb-8 space-x-4">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center px-4 py-2 mx-2 rounded-lg transition-all duration-300 ${
              activeTab === index ? 'bg-orange text-black transform scale-105' : 'bg-gray-700 text-gray-300 hover:bg-yellow-100 hover:text-black'
            }`}
          >
            <span className="mr-2">{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div key={activeTab} variants={itemVariants} className="flex-1 md:mr-8 mb-4 md:mb-0">
          <div className="text-4xl mb-4">{services[activeTab].icon}</div>
          <h3 className="text-2xl text-white font-bold mb-2">{services[activeTab].title}</h3>
          <p className='text-gray-300'>{services[activeTab].description}</p>
          <div className="mt-4">
            <p className="text-lg text-gray-300 mb-4">{services[activeTab].details}</p>
            <a href={services[activeTab].link} className="bg-orange text-black px-4 py-2 rounded-lg hover:bg-yellow-100 transition-colors duration-300 w-[10rem] flex items-center">
              <span className="mr-2">🔗</span> Try Now
            </a>
          </div>
        </motion.div>
        <motion.div key={`${activeTab}-image`} variants={itemVariants} className="flex-1">
          <img src={services[activeTab].image} alt={services[activeTab].title} className="rounded-lg h-64 w-full  object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TabbedServices;
