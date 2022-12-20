
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';


const Header = () => {

  return (
    <article className='h-2/4    bg-gradient-to-r from-emerald-900 to-teal-300  '>
      <div className=' h-80 border-4  flex flex-col text-center justify-center  text-white   '>
        <div className='text-4xl my-5  font-bold text-white'>Hello, I'm <span className='text-4xl font-weight-800 text-white'>Hasan Aldhahi</span></div>
        <h3 className='text-grey-400 text-xl'>This Is My Personal Website</h3>
        <div className='w-50'>
          <button className='rounded-full text-white w-20 border-2 bg-transparent h-[60]  my-6'>CV</button>
        </div>
      </div>
    </article>
  )
}
const AboutMe = () => {

  return (

    <article className='flex flex-col'>
      <img className="rounded-full w-96 h-96   self-center " src="https://erikbabu.github.io/erik.jpg" alt="" />
      <div className='text-4xl my-5   font-bold text-lime-500 '>About Me</div>
      <div className='text-medium text-xl font-serif leading-8'>
        My family originates from Baghdad, Iraq, but I was born and brought up in Giza, Egypt and Ankara, Turkey.
        I have studied Electrical and Electronic Engineering at the University of Bilkent in Turkey, and I am currently
        pursuing a Master's degree in Data Science in Göttingen University in Germany
        I have always been passionate about Ai and machine learning and have been fortunate enough to pursue that passion into a career.
        I am always looking for ways to expand my skills and knowledge base.
        In my free time, I enjoy Swimming and I am big fan of football. I also love to travel and experience new cultures.
        Thank you for taking the time to read a little bit about me. I hope this gives you a better understanding of who I am and what I do.
        For my projects and my social media activities, i recommend you to check my social media and other accounts listed below.
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
        </div>
        <div className='col-span-6'>
          <div className='flex justify-around my-10 '>
            <Icon SocialIcon={AiOutlineGithub} website={"https://github.com/HasanAldhahi"} ></Icon>
            <Icon SocialIcon={AiOutlineLinkedin} website={"https://www.linkedin.com/feed/"} ></Icon>
            <Icon SocialIcon={AiOutlineInstagram} website={"https://www.instagram.com/hassanshka/"}></Icon>
            <Icon SocialIcon={AiOutlineWhatsApp} website={"tel:+905382169274"}></Icon>
          </div>
        </div>
        <div className='col-span-3'>
        </div>
      </div>
    </article >

  )
}

const Icon = ({ SocialIcon }) => {
  return (
    <a href="#" class="  inline-block text-gray-500 hover:text-red-500 transition duration-100 ease-in-out">
      <SocialIcon fontSize="60px"></SocialIcon>
    </a>
  )
}



const Go_Info = () => {
  return (
    <article className='flex flex-col'>
      <div className='text-2xl my-5 font-bold text-lime-500 border-4 '>University of Göttingen | M.Sc. Applied Data Science
      </div>
      <div className='text-medium text-lg font-serif leading-8 text-end  text-lime-500 mx-5'>
        Oct 2022 - Apr 2024 (Expected)
      </div>
      <div className=' text-medium text-xl font-serif leading-8 text-black pl-0'>
        <span className='underline'>Current Courses</span>
        <ul className='list-disc pl-5'>
          <li>Deep Learning</li>
          <li>Data Managment</li>
          <li>Advanced Statistical Inference (Liklihood and Bayes) </li>
          <li>High Peformance Data Analytics</li>
          <ul />
        </ul>
      </div>
    </article>
  )
}


const Bi_Info = () => {
  return (
    <article className='flex flex-col'>
      <div className='text-2xl my-5 font-bold text-lime-500 '>University of Göttingen | M.Sc. Applied Data Science
      </div>
      <div className='text-medium text-lg font-serif leading-8 text-end  text-lime-500 mx-5'>
        Oct 2022 - Apr 2024 (Expected)
      </div>
      <div className=' text-medium text-xl font-serif leading-8 text-black pl-0'>
        <span className='underline'>Current Courses</span>
        <ul className='list-disc pl-5'>
          <li>Deep Learning</li>
          <li>Data Managment</li>
          <li>Advanced Statistical Inference (Liklihood and Bayes) </li>
          <li>High Peformance Data Analytics</li>
          <ul />
        </ul>
      </div>
    </article>
  )
}



const PersonList = () => {
  return (
    <section >
      <Header />
      <article className='grid grid-cols-12   '>
        <div class=" col-span-3  ">
        </div>
        <div class="  col-span-6 justify-center">
          <AboutMe />
          <div className='bg-green-300 w-full h-[0.3px] border-dashed'></div>
          <div className=' text-4xl my-5 font-bold text-lime-500'>Education</div>
          <Go_Info />
          <div className='bg-green-300 w-full h-[0.3px] border-dashed'></div>
          <Bi_Info />

        </div>
        <div class=" col-span-3 ">
        </div>
      </article>



    </section>
  )
}
function App() {
  return (
    <div>
      <PersonList />

    </div>
  )
}
export default App;
