import React from 'react';

const About = () => {
  const paragraphStyle = {
    color: '#FFCD00FF',
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-4 text-light">
      <h2 className="fs-2 font-bold mb-4 text-light">Allow me to introduce myself</h2>
      <p className="fs-5" style={paragraphStyle}>
        I am Keston Antonio Schmidtgen, a skilled frontend developer eagerly seeking exciting career opportunities in the industry. With a deep passion for creating visually appealing and intuitive user experiences, I am committed to delivering exceptional results that align with business objectives.
      </p>
      <p className="fs-5" style={paragraphStyle}>
        As a frontend developer, I possess a strong command of the latest web technologies, including HTML, CSS, and JavaScript. My expertise extends to modern frameworks and libraries such as React and Vue.js, enabling me to build responsive and dynamic web applications. I take pride in my attention to detail, ensuring pixel-perfect designs and seamless functionality across various devices.
      </p>
      <p className="fs-5" style={paragraphStyle}>
        I invite you to explore my diverse portfolio of projects, where you will witness firsthand my ability to transform ideas into captivating digital experiences. Each project showcases my adaptability, problem-solving skills, and dedication to producing high-quality code.
      </p>
      <p className="fs-5" style={paragraphStyle}>
        If you believe that my skills and passion align with your company's vision, I would be delighted to discuss potential collaboration opportunities further. I welcome the chance to contribute my expertise to your team, driving innovation and delivering exceptional frontend solutions.
      </p>
      <p className="fs-5" style={paragraphStyle}>
        Thank you for considering my application. I eagerly anticipate the possibility of joining your esteemed organization and making a meaningful impact. Please do not hesitate to reach out to me to discuss how we can work together.
      </p>
    </div>
  );
};

export default About;
