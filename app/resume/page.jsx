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
            role: "Business Financial Analyst",
            dates: "Jan 2024 – Jan 2025",
            company: "Siyana; Business Strategy Unit",
            location: "Beirut, LB",
            image: "/logos/siyana.png",
            bullets: [
                {
                    text: "Siyana is a startup maintenance service provider company with an office in Beirut (LB)",
                    subBullets: [
                        "Developed 5+ Tableau dashboards bringing visibility to the sales funnel, improving overall efficiency ",
                        "Partnered with the IT department to design a database for seamless data integration and functionality, enabling sales teams to log visits and outcomes",
                        "Forecasted company financials including revenues, expenses, and cash flows, improving projection accuracy by 15%",
                        "Collaborated with sales, marketing, and technician teams to develop a new subscription model, ultimately receiving c-suite approval",
                        "Conducted market analysis to evaluate potential, strengths, and weaknesses, leading to a 20% increase in client acquisition within the first quarter",
                        "Drafted and presented a seed round pitch deck, raising $100k in investment from three investment partners"
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
                        "Analyzed accessibility tool usage with SQL across 800 online courses, identifying key enhancements that increased course material availability for 3000 students with disabilities",
                        "Crafted 30+ interactive dashboards in Tableau, showcasing accessibility tool usage trends for 135 faculty members, resulting in the creation of courses to address low usage",
                        "Designed actionable metrics to measure accessibility improvement, including error remediation rates and user engagement, driving continuous enhancement in course design",
                        "Coordinated efforts with cross-functional teams, including ITS stakeholders, to align project deliverables with institutional accessibility goals and policies",
                        "Implemented advanced data manipulation techniques to cleanse and structure UDOIT-generated datasets, ensuring accurate insights for strategic decision-making"
                        
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
                        "Assisted with daily transactions, which increased customer satisfaction by 15% based on surveys",
                        "Supported financial operations by ensuring accuracy and reliability in daily transactions",
                       
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
                        <Button text="Download PDF" href="https://drive.google.com/file/d/11GB0z_O56amZSzRtWnSLjqwYFb1mxwE4/view?usp=drive_link" />
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
