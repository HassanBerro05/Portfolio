import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="py-10 bg-michiganBlue">
      <div className="container mx-auto px-2 py-32 flex items-center content-between flex-col-reverse sm:flex-row gap-4">
        <div className="sm:w-2/3 lg:w-1/2">
          <h1 className="text-5xl font-extrabold self-align-center">
            I&apos;m{' '}
            <span className style={{ color: '#FFCB05' }}>
              Hassan
            </span>
          </h1>
          <p className="mt-2">
          University of Michigan Data and Business Analyst graduate with a strong foundation in data, business, and financial analytics. I excel on solving complex problems, leveraging data-driven insights, and delivering impactful solutions. 
          </p>
          <div className="flex justify-start gap-5 pt-2 flex-wrap">

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

        <Image
          className="rounded h-[600px] object-cover md:ml-auto w-[300px]"  // Custom width class
          width={300}
          height={600}
          src="/Hassan1.png"
          alt="Hassan Berro"
        />
      </div>
    </div>
  );
}
