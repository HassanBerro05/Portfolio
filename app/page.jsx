import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Hassan Berro',
  icons: {
    icon: '/H.jpg',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}
export default async function Home() {
  return (
    <div>
      <Hero />
      <section className="py-10 bg-michiganBlue">


        <div className='container mx-auto px-2 flex items-center content-between flex-col lg:flex-row gap-4'>
          <Image
            className="rounded h-[600px] w-[600px] object-cover lg:mr-auto "
            width={600}
            height={600}
            src="/Dive.jpg"
            alt="Dive"
          />
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A little more about me</h2>
            <p className='mb-2'>My academic journey, encompassing a Master&aposs in Business Analytics and a Bachelor’s in Banking and Finance, has provided me with a solid foundation in data analysis, financial modeling, and strategic decision-making. This combination of analytical and business acumen allows me to approach challenges with a holistic perspective, bridging the gap between data insights and actionable solutions.</p>

            <p className="mb-2"> I am currently embarking on a new chapter in my career, driven by a passion for leveraging data to solve real-world problems. As a lifelong learner, I am always eager to expand my knowledge and stay ahead in this ever-evolving field. My recent projects include developing analytical models to address pressing issues like the Flint Water Crisis and evaluating tools like UDOIT to enhance accessibility in education. I am actively seeking opportunities where I can apply my data skills, contribute meaningfully, and continue to grow both personally and professionally. Through my work, I aim to make a lasting impact while embracing continuous learning and development.

</p>
            
            <h2 className='text-2xl font-bold mb-2'>Core Skills</h2>
            <p className="mb-2">I bring a robust skill set essential for data analysis and business intelligence. Proficient in programming languages such as SQL, I excel at data cleaning, transformation, and visualization to derive actionable insights. I have experience with Tableau for creating interactive dashboards, as well as advanced Excel for modeling and reporting.</p>
            
            <h2 className='text-2xl font-bold mb-2'>Interests</h2>
            <p className='mb-4'>When I'm not working with data, I enjoy reading about the latest trends in politics, technology, and Finance. I'm also passionate about cooking and nature. I enjoy going to Michigan Football games as well - Go Blue!</p>
            <p className='mb-4'>OH! And I am a Certified Diver.</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
