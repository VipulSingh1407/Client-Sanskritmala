import React, { useEffect } from 'react';
import AOS from 'aos';

import './about.css'; // Import CSS for styling

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-us">
      <section className="section about" data-aos="fade-up">
        <div className="content left-align main-content">
          <h1 className="large-header">About Us</h1>
          <h3>
            Welcome to Sanskrit Mala, your ultimate destination for comprehensive and accessible education resources.
            Our mission is to provide high-quality educational materials and courses to learners of all ages and
            backgrounds. We strive to make learning a seamless and enriching experience through our diverse range of
            offerings.
          </h3>
          <button className="oval-button">Get Started</button>
        </div>
        <div className="image right-align" data-aos="fade-left">
          <img src="https://i.pinimg.com/564x/fc/2f/41/fc2f41ab81dce00cd84cdc7fe0c3fcd9.jpg" alt="About Us" />
        </div>
      </section>

      <section className="section vision" data-aos="fade-up">
        <div className="image left-align" data-aos="fade-right">
          <img src="https://i.pinimg.com/564x/09/3b/4e/093b4e6c876080de83d855c3a525708e.jpg" alt="Vision" />
        </div>
        <div className="content right-align">
          <h1 className='header'>Vision</h1>
          <h3>
            At Sanskrit Mala, our vision is to empower learners globally by providing them with unparalleled access to
            educational resources. We aim to be a beacon of knowledge, fostering an environment where learning is
            limitless and accessible to everyone. Our goal is to integrate traditional learning with modern technology,
            creating a holistic and engaging educational experience.
          </h3>
        </div>
      </section>

      <section className="section mission" data-aos="fade-up">
        <div className="content left-align main-content">
          <h1 className='header'>Mission</h1>
          <h3>
            Our mission at Sanskrit Mala is to bridge the gap between learners and quality education. We are committed
            to offering a vast array of books, e-books, test series, notes, and courses that cater to various
            educational needs. By leveraging digital platforms, we aim to make learning flexible, interactive, and
            enjoyable. We believe in continuous improvement and strive to update our resources to meet the evolving
            educational landscape.
          </h3>
        </div>
        <div className="image right-align" data-aos="fade-left">
          <img src="https://i.pinimg.com/564x/5f/8a/ee/5f8aeec2641c8d429358f9180370a473.jpg" alt="Mission" />
        </div>
      </section>

      <section className="section values" data-aos="fade-up">
        <div className="image left-align" data-aos="fade-right">
          <img src="https://i.pinimg.com/564x/dc/4b/68/dc4b687ce9498f9b8730fbae0d0dd5af.jpg" alt="Values" />
        </div>
        <div className="content right-align">
          <h1 className='header'>Our Values</h1>
          <h3>
          We uphold the highest standards of integrity in all our actions, ensuring that everything we do is rooted in honesty and ethical principles. Striving for excellence in every aspect of our work, we are committed to continuous improvement and innovation. Inclusivity is at the heart of our mission, as we believe in providing access to quality education for everyone, regardless of their background or circumstances. We emphasize the importance of collaboration, working closely with our partners, educators, and learners to achieve our shared goals. Moreover, we promote a culture of lifelong learning, encouraging curiosity and a passion for knowledge in all individuals.</h3>







        </div>
      </section>

      <section className="section contact" data-aos="fade-up">
        <div className="content center-align">
          <h1>Links</h1>
          <ul>
            <li><a href="https://youtube.com">YouTube</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
          <h1>Contact Us</h1>
          <p>
            We are here to assist you.</p>
            <p>Reach out to us at 8396068147 or 7323908890 for any inquiries or support.
          </p>
          <button className="oval-button center-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
