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
         
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A little more about me</h2>
            <p className='mb-2'> I hold a Master’s degree in Business Analytics and a Bachelor’s degree in Banking and Finance. My background combines analytical thinking, financial understanding, and business problem-solving, allowing me to connect data insights with practical business action.</p>

            <p className="mb-2"> In my current work, I support finance and business processes through SAP-related analysis, data validation, reporting, reconciliation support, dashboard development, and workflow improvement. I have worked on projects involving Power BI, Power Query, Excel, SQL, Tableau, and process automation to improve visibility, reduce manual effort, and support operational decision-making.
</p>

          <p className="mb-2">  I am especially interested in roles that sit between business, data, systems, and process improvement. My goal is to continue growing as a Business Analyst while building deeper expertise in analytics, automation, and technology-driven transformation.
</p>

            
            <h2 className='text-2xl font-bold mb-2'>Core Skills</h2>
            <p className="mb-2"> I am especially interested in roles that sit between business, data, systems, and process improvement. My goal is to continue growing as a Business Analyst while building deeper expertise in analytics, automation, and technology-driven transformation.</p>
            
            <h2 className='text-2xl font-bold mb-2'>Interests</h2>
            <p className='mb-4'>Outside of work, I enjoy learning about technology, business strategy, global affairs, and the ways data shapes decision-making. I also value continuous self-development, fitness, and building practical projects that strengthen both technical and analytical skills.</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
