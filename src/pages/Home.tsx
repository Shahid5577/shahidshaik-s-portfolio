import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profile from '../assets/profile.png';

const Home: React.FC = () => (
  <div>
    <Header />
    <main>
      <section className="hero bg-neutral-900 text-zinc-50 text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Welcome to <span className='text-4xl font-bold text-blue-700'>Shahid Shaik</span>'s Portfolio</h1>
          <p className="mt-4 text-lg"><span className='text-lg font-bold text-blue-700'>Full Stack Developer</span> | Web Enthusiast</p>
        </div>
      </section>
      <section className="highlight bg-neutral-900 text-white text-center">
        <div className="flex flex row gap-14 sm:w-full w-full container mx-auto">
          <div className="w-full sm:w-1/2 ">
          <h1 className='text-sm sm:text-4xl font-semi-bold text-left  text-zinc-50'>Innovative Full Stack Developer with extensive experience in designing, developing, and deploying highly responsive, user-centric web applications.</h1>
            <p className="mb-4 text-start text-[14px] pt-4 text-zinc-300">
               Proficient in React.js, Node.js, and Java, with a proven track record of delivering scalable solutions that meet both client and user needs. Adept at working independently and in cross-functional teams, with a strong commitment to continuous learning and improvement. Looking to leverage my skills and experience to make a significant impact at a leading tech company.
            </p>
          </div>
          <div className="w-full sm:w-1/2 ">
            <img src={profile} alt='profile' className='h-[70%] w-[95%] rounded-2xl'/>
           </div>
         
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Professional Summary</h3>
            <p className="mb-4">
              Innovative Full Stack Developer with extensive experience in designing, developing, and deploying highly responsive, user-centric web applications. Proficient in React.js, Node.js, and Java, with a proven track record of delivering scalable solutions that meet both client and user needs. Adept at working independently and in cross-functional teams, with a strong commitment to continuous learning and improvement. Looking to leverage my skills and experience to make a significant impact at a leading tech company.
            </p>
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Frontend: React.js, HTML5, CSS3, Tailwind CSS, Material UI</li>
              <li>Backend: Node.js, Java, REST APIs</li>
              <li>Database: MySQL, MongoDB</li>
              <li>Tools & Methodologies: Git, Agile, Azure Fundamentals</li>
              <li>Other: Web API Integration, Responsive Design</li>
            </ul>
            <h3 className="text-xl font-semibold">Professional Experience</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Clikkle Technologies – Full Stack Developer</strong>
                <p>Ontario, Canada (Remote) | Nov 2023 – Present</p>
                <ul className="list-disc list-inside">
                  <li>Designed and developed a fully responsive website with seamless Web API integration.</li>
                  <li>Independently managed the entire website, including a collapsible menu and an apps menu.</li>
                  <li>Developed a fully functional and responsive frontend for Clikkle Crew Meeting Platform, integrating webcam, speaker, and mic components.</li>
                  <li>Worked on brand management, sub-brand sections, and pressroom content for Grahamcorp.ca.</li>
                  <li>Implemented job cards, job details, user authentication, and Web API integration for Careers Portal.</li>
                  <li>Created an HR Dashboard UI with features like department management, employee onboarding, and interview scheduling.</li>
                  <li>Designed and implemented features for secure communication and location management for Swiprr & Hivrr Social Media Platforms.</li>
                  <li>Developed an e-commerce web application for home needs and appliances for Ketup Shopping Platform.</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Bachelor of Technology in Electronics and Communication Engineering, DBS Institute of Technology (Affiliated with JNTUA University) | June 2019 – May 2023 | 81%</li>
              <li>Intermediate (MPC), Srisrinivasa Junior College | July 2017 – March 2019 | 6.19 CGPA</li>
              <li>SSC, SPHS School | June 2016 – April 2017 | 7.5 CGPA</li>
            </ul>
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Accenture Virtual Developer Experience Program Certification | 2023</li>
              <li>Certified in Python | VSIT, 2019</li>
              <li>Certified in SQL and Relational Databases 101, Machine Learning – Dimensionality Reduction | IBM, 2023</li>
            </ul>
            <h3 className="text-xl font-semibold">Awards & Honors</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Gold Five Star Badge in Java Programming | HackerRank</li>
              <li>Gold Medal in Employability Skill Development Training Program | Mahindra Pride Classroom & APITA</li>
            </ul>
            <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
            <p>Learning about web development and new technologies. Reading books, playing shuttle, and cricket.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
