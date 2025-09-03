function ProjectCard({ name, url, description, website, align = "left" }) {
    return (
        <div
            className={`bg-gray-200 p-4 rounded-xl shadow-md max-w-md ${
                align === "right" ? "text-right" : "text-left"
            }`}
        >
            {/* Title / Name with clickable link */}
            <div className="text-lg font-semibold mb-2">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition"
                >
                    {name}
                </a>
            </div>

            {/* Description */}
            <div className="text-gray-700 mb-4">{description}</div>

            {/* Website button-style link */}
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
            >
                Visit Website
            </a>
        </div>
    );
}

function TimelineSpine({ isFirst = false, isLast = false }) {
    return (
        <div className="items-center justify-items-center">
            {!isFirst && <div className="w-2 h-3 bg-black"></div>}
            <div className="w-10 h-10 bg-black rounded-full"></div>
            {!isLast && <div className="w-2 h-3 bg-black"></div>}
        </div>
    );
}

export default function Projects({ projects = [] }) {
    return (
        <div>
            <div className="flex h-fit flex-col items-center">
                {projects.map((p, index) => {
                    return (
                        <div key={index} className="flex w-full items-center">
                            {/* LEFT SIDE */}
                            <div className="w-1/2 flex justify-end pr-4">
                                {index % 2 === 0 && (
                                    <ProjectCard
                                        name={p.name}
                                        url={p.url}
                                        description={p.description}
                                        website={p.website}
                                        align="right"
                                    />
                                )}
                            </div>

                            {/* CENTER SPINE */}
                            <TimelineSpine isFirst={index === 0} isLast={index === projects.length-1}/>

                            {/* RIGHT SIDE */}
                            <div className="w-1/2 flex justify-start pl-4">
                                {index % 2 !== 0 && (
                                    <ProjectCard
                                        name={p.name}
                                        url={p.url}
                                        description={p.description}
                                        website={p.website}
                                        align="right"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
