import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects";

export const metadata = {
    title: 'Projects - Sam Berro',
    icons: {
        icon: '/H.jpg',
    },
}

export default async function Projects() {
    const projectsData = await getProjectsData();
    return (
        <div>
            <section className='pt-24 pb-10 bg-gradient-to-t from-py-10 bg-michiganBlue'>
                <h1 className='text-3xl font-bold text-center'>
                    Selected Projects 
                </h1>
                <ProjectSection data={projectsData} />
            </section>
            <Footer />
        </div>
    );
}
