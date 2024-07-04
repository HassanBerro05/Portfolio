import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="bg-gradient-to-b to-slate-300 dark:to-slate-700 from-gray-200 dark:from-gray-800">
      <div className="container mx-auto px-2 py-32 flex items-center content-between flex-col-reverse sm:flex-row gap-4">
        <div className="sm:w-2/3 lg:w-1/2">
          <h1 className="text-5xl font-extrabold self-align-center">
            I&apos;m{' '}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Andrew
            </span>
          </h1>
          <p className="mt-2">
            University of Michigan alumni 〽️ passionate about Data Science, Social Science, and Consulting.
          </p>
          <div className="flex justify-start gap-5 pt-2 flex-wrap">

            <Link
              className="border-sky-600 border-4 p-4 rounded hover:-translate-y-1 drop-shadow-md"
              href="/resume"
            >
             View My Resume
            </Link>
          </div>
        </div>

        <Image
          className="rounded h-[400px] w-auto object-cover md:ml-auto "
          width={500}
          height={500}
          src="/headshot.jpeg"
          alt="Andrew Ye"
        />
      </div>
    </div>
  );
}
