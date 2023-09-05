import Layout from "@/components/Layout";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <div className=' py-10'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-6'>
            Contact Us
          </h1>
          <form className='max-w-md mx-auto'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-600'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='John Doe'
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-600'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='john@example.com'
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-gray-600'>
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                placeholder='Write your message here...'
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                required
              ></textarea>
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
