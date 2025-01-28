import {
    IoLogoGithub, IoLogoLinkedin,IoLogoTableau
} from "react-icons/io5";
import Link from 'next/link';

export default function Footer({ text, href }) {
    return (
        <footer className="flex flex-row gap-4 p-4 items-center justify-center  py-10 bg-michiganBlue">
            <div>Made by Hassan Berro, <Link className="underline" target="_blank" href='https://www.andrewye.net/'>Andrew Ye </Link> , and <Link className="underline" target="_blank" href='https://jayshaver.com'>Jay Shaver
            </Link></div>
            <div className="flex gap-2">
                <Link href='https://www.linkedin.com/in/hassanberro/'>
                    <IoLogoLinkedin className="text-3xl" />
                </Link>
                <Link href='https://github.com/HassanBerro05'>
                    <IoLogoGithub className="text-3xl" />
                </Link>
                <Link href='https://public.tableau.com/app/profile/hassan.berro/vizzes'>
                    <IoLogoTableau className="text-3xl" />
                </Link>
                
            </div>
        </footer>
    )
}