import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="py-10 bg-michiganBlue">
      <div className="container mx-auto px-2 py-32 flex items-center justify-center flex-col-reverse sm:flex-row gap-4">

  <div className="sm:w-2/3 lg:w-1/2 text-center flex flex-col items-center justify-center">
    
    <h1 className="text-5xl font-extrabold">
            I&apos;m{' '}
            <span className style={{ color: '#FFCB05' }}>
              Hassan
            </span>
          </h1>
          <p className="mt-2">
          Business Analyst and Financial Analyst with experience in SAP transformation, process improvement, Power BI, Power Query, SQL, and automation. I specialize in turning complex business and finance data into clear insights, streamlined workflows, and practical solutions that support decision-making.
          </p>
          <div className="flex justify-center gap-5 pt-4 flex-wrap">

            <Link
              className="border-sky-600 border-4 p-4 rounded hover:-translate-y-1 drop-shadow-md"
              href="/resume"
            >
             My Resume
            </Link>
            <Link
              className="border-sky-600 border-4 p-4 rounded hover:-translate-y-1 drop-shadow-md"
              href="/projects"
            >
             My Projects
            </Link>
          </div>
        </div>

 
      </div>
    </div>
  );
}
