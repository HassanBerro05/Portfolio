import Image from 'next/image';
import Footer from '@/components/footer';
import Button from '@/components/button';

export const metadata = {
    title: 'Resume - Hassan Berro',
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

export default function Resume() {
    const resume = [
        {
            role: "Business Analyst (Data Analyst)",
            dates: "Jan 2024 – Jan 2025",
            company: "Siyana; Business Strategy Unit",
            location: "Beirut, LB",
            image: "/logos/siyana.png",
            bullets: [
                {
                    text: "Siyana is a startup maintenance service provider company with an office in Beirut (LB)",
                    subBullets: [
                        "Designed and implemented scalable data pipelines using SQL and Tableau, automating reporting and reducing manual processing by 50%.",
                        "Developed interactive dashboards that boosted sales visibility and increased pipeline conversion rates by 30%, enabling data-driven strategic decisions.",
                        "Leveraged predictive analytics to refine revenue projections, enhancing financial forecasting accuracy by 15%.",
                        "Built a customer segmentation model with machine learning, improving targeted marketing efficiency by 20%.",
                        "Spearheaded cross-functional collaboration between IT, Sales, and Marketing to launch a subscription-based revenue model, driving a 25% increase in recurring revenue.",
                        " Crafted a compelling investor pitch deck that secured $100K in funding, fueling company expansion and service enhancements."
                    ]
                },
                
                
            ]
        },
        {
            role: "Capstone Project Data Analyst",
            dates: "Jan 2023 – May 2023",
            company: "U-M Ann Arbor; Information Technology and Services Departmentt",
            location: "Ann Arbor, MI",
            image: "/logos/ITS.png",
            bullets: [
                {
                    text: "ITS is the information and Technology Services department that provides technology and communications services in support of UM-Ann Arbor's academic and research needs",
                    subBullets: [
                        "Analyzed accessibility tool usage across 800+ online courses, driving policy changes that improved digital accessibility for over 3,000 students.",
                        "Designed and implemented engaging Tableau dashboards to deliver clear insights on compliance, boosting faculty engagement by 40%.",
                        "Developed custom KPIs that streamlined institutional tracking and reporting, leading to measurable improvements in digital accessibility.",
                        "Optimized data transformation workflows, reducing report generation time by 50% and accelerating data-driven decision-making.",
                        "Facilitated collaborative discussions with faculty to effectively integrate analytics-driven recommendations into course design."
                        
                    ]
                }
            ]
        },
        {
            role: "Commercial Banking Intern",
            dates: "June 2019 – Sep 2019",
            company: "Credit Department",
            location: "Beirut, LB",
            image: "/logos/BSL.jpeg",
            bullets: [
                {
                    text: "BSL bank is a mid-sized bank in Lebanon that operates in the retail and commercial banking sector alongside the treasury and capital markets",
                    subBullets: [
                        "Analyzed financial statements to streamline credit assessments, cutting loan turnaround time by 30%.",
                        "Supported risk assessments by identifying high-risk clients and mitigating financial exposure.",
                        "Automated client data tracking, boosting data accuracy by 20% and ensuring regulatory compliance.",
                        "Developed benchmarking reports that informed loan structuring and investment decisions.",
                        "Cultivated strong client relationships through proactive financial guidance, enhancing customer satisfaction."
                       
                    ]
                }
            ]
        }
        
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-py-10 bg-michiganBlue'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume
                    </h1>
                    <div className="py-4 text-center">
                        <Button text="Download PDF" href="https://drive.google.com/file/d/1DSVT27rw8az0m33HfqRGaBq7VKS8qvm3/view?usp=sharing" />
                    </div>
                </div>
            </div>
            <section className='bg-gradient-to-t from-py-10 bg-michiganBlue'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION
                        </h2>
                        <div className="divider my-0"></div>
                        <Experience data={{
                            "company": "GPA: 3.84/4.00, Dean's Honor List",
                            "dates": "Jan 2022 - Dec 2023",
                            "role": "Masters of Science in Business Analytics (Financial Analytics Concentration), University of Michigan",
                            "location": "Dearborn, MI",
                            "image": "/logos/michigan.jpeg",
                        }} >
                            <p>
                                <span className="font-bold">Coursework:</span> Applied Statistical Modeling, Applied Forecasting, Data Mining for Business Applications, Decision Analysis, Management Science, Finance Fundament & Value Creation, Derivatives & Risk Management, Developing & Interpreting Financial Information
                            </p>
                        </Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                        </h2>
                        <div className="divider my-0"></div>
                        <Experience data={{
                            
                            "dates": "Sep 2017 - May 2020",
                            "role": "Bachelors of Science in Banking and Finance, Lebanese American University",
                            "location": "Beirut, LB",
                            "image": "/logos/LAU_Green_Logo.jpg",
                        }} >
                           
                        </Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE
                        </h2>
                        <div className="divider my-0"></div>
                        {resume.map((experience) => <Experience key={experience.company} data={experience} />)}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

function Experience({ data, children }) {
    return (
        <div className='p-4 border border-maize my-6 rounded-lg'>
  <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={`${data.company} logo`} />
                <div>
                    <h3 className='font-bold'>{data.role}</h3>
                    <span>{data.company}</span>
                </div>
                <div className='md:justify-self-end'>
                    <span>{data.dates}</span>
                    <span className='block'>{data.location}</span>
                </div>
            </div>
            {data?.bullets && (
                <div className='pl-4'>
                    {data.bullets.map((bullet, index) => (
                        <div key={index} className='mb-2'>
                            <div>{bullet.text}</div>
                            {bullet.subBullets && (
                                <ul className='pl-4 list-disc'>
                                    {bullet.subBullets.map((subBullet, subIndex) => (
                                        <li className='mb-1' key={subIndex}>{subBullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {children}
        </div>
    );
}
