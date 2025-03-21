import Image from 'next/image';
import Link from 'next/link';
import Icon from './icon';

export default function ProjectSection({ data }) {

    const renderDescription = (description) => {
        return description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-2">{paragraph}</p>
        ));
    };

    const renderKeywords = (keywords) => {
        if (!keywords || keywords.length === 0) return null;
        return (
            <>
                <h3 className="text-xl font-bold">Keywords</h3>
                {keywords.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-2">{paragraph}</p>
                ))}
            </>
        );
    };

    const renderTechStack = (techStack) => {
        if (!techStack || techStack.length === 0) return null;
        return (
            <div className="mt-4">
                <h3 className="text-xl font-bold">Tech Stack</h3>
                <ul className="list-disc list-inside">
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <section className="container mx-auto px-2 py-10 relative">
            {data.map((project, index) => (
                <div key={index} className="mb-10">
                    <div className="from-py-10 bg-michiganBlue drop-shadow p-4 rounded-lg w-full">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="w-full md:w-1/2 p-4">
                                <ProjectImage image={project.desktopImage} name={project.name} />
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <div className='flex text-3xl bold justify-between items-center mb-2'>
                                    <h2 className=''>{project.name}</h2>
                                    <div className='flex gap-2'>
                                        {project.link && <Link className='' href={project.link} target='_blank'>
                                            <Icon name="open" />
                                        </Link>}
                                    </div>
                                </div>
                                <div>{renderDescription(project.description)}</div>
                                {renderKeywords(project.keywords)}
                                {renderTechStack(project.techStack)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

function ProjectImage({ name, image }) {
    if (name && image) {
        return (
            <div className="w-full">
                <Image
                    className="rounded-lg"
                    width={1920}
                    height={1080}
                    src={image}
                    alt={name}
                />
            </div>
        );
    } else {
        return null;
    }
}