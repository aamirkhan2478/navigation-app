import Layout from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div className='py-10'>
        <div className='container mx-auto px-4 font-extrabold w-[500px]'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-6'>
            About Us
          </h1>
          <p className='text-gray-600 leading-relaxed'>
            My name is Aamir Khan and I am a full stack developer. I have been created many projects in ReactJS, NodeJS, MongoDB and ExpressJS. I created Degree Tracking and Validation System in my Final year Project. I&apos;ve spent the last several months wholly immersed in remote development, Building everything from landing pages to Rails APIs. I also have experience with GitHub and my previous experience taught me about punctuality, how to accomplish goals within time, and how to deal with hurdles and blockages. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
