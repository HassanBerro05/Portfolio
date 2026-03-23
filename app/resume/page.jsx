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
            role: "Business System Analyst",
            dates: " May 2025 – Present",
            company: "Sobeys (Empire Company Limited); Digitization",
            location: "Dartmouth, NS",
            image: "/logos/17733.png",
            bullets: [
                {
                    text: " Operate within ERP transformation and enterprise reporting modernization initiatives, supporting SAP S/4HANA migration and business systems validation across a large Canadian retail organization",
                    subBullets: [
                        "Executed structured User Acceptance Testing (UAT) for SAP S/4HANA finance migration, validating GL and AR data accuracy and tracking defects through resolution with IT and SAP teams.",
                        "Queried and validated financial data mappings between legacy SAP and S/4HANA environments to ensure controlled data migration and production readiness.",
                        "Designed Power BI dashboards using Power Query to automate GL reporting and reconciliation tracking, reducing manual reporting effort.",
                        "Developed Tableau dashboards to analyze AR open line items, aging trends, and clearing progress, enabling targeted balance reduction initiatives.",
                        "Built advanced Excel automation tools to identify clearing-eligible accounts across 500,000+ AR line items, supporting large-scale data cleanup.",
                        "Designed and implemented a SharePoint and Power Automate workflow to centralize issue intake, automate tracking, and provide real-time visibility for 150+ end users."
                        
                    ]
                }
            ]
        },
        {
            role: "Business Analyst",
            dates: "Jan 2024 – Jan 2025",
            company: "Siyana; Business Strategy Unit",
            location: "Beirut, LB",
            image: "/logos/siyana.png",
            bullets: [
                {
                    text: "Supported business intelligence, financial modelling, and reporting automation initiatives within a strategy-focused environment",
                    subBullets: [
                        "Automated financial and operational reporting using SQL and Tableau, reducing manual processing time by 50% and improving reporting turnaround.",
                        "Developed regression-based forecasting models that improved budget accuracy by 15% and supported data-driven planning decisions.",
                        "Built a machine learning–based customer segmentation model to refine targeting strategy, increasing campaign efficiency by 20%.",
                        "Co-developed a subscription revenue model, analyzing pricing elasticity and churn scenarios to support strategic launch planning.",
                        "Prepared investor-facing financial analyses and projections contributing to the successful raise of $100K in seed funding."
            
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
                    text: "Delivered institutional reporting and dashboard solutions focused on digital accessibility and compliance visibility",
                    subBullets: [
                        "Conducted a deep dive analysis of accessibility tool usage across 800+ online courses, leading to policy changes that improved accessibility for 3,000+ students.",
                        "Engineered Tableau dashboards to provide clear visual insights into accessibility compliance, increasing faculty engagement by 40%.",
                        "Utilized Excel tool for advanced statistical data analysis, detecting trends, anomalies, and inefficiencies.",
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
                    text: "Supported credit analysis and financial process improvement within the commercial banking division",
                    subBullets: [
                        "Streamlined credit evaluation workflows, reducing loan turnaround time by 30%.",
                        "Automated client documentation tracking to improve compliance accuracy and data integrity.",
                       
                       
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
                        <Button text="Download PDF" href="https://drive.google.com/file/d/1RmrZNVuLlh88Fn8OfEVYTfEiEiB_GyZE/view?usp=sharing" />
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
