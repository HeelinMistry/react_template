import { motion } from "framer-motion";


function TimelineCard({ company, start, end, role, responsibility, align = "left" }) {
    return (
        <div
            className={`bg-gray-200 p-4 rounded-md max-w-md ${
                align === "right" ? "text-right" : "text-left"
            }`}
        >
            <div className="text-black text-xl font-bold">{company}</div>
            <div className="text-black text-lg">
                {start} - {end || "Present"}
            </div>
            <div className="text-black text-base">{role}</div>
            <div className="text-black text-base">{responsibility}</div>
        </div>
    );
}

function ApplicationsCard({ name, url, icon, align = "left" }) {
    const hasImage = Boolean(icon);
    const hasUrl = Boolean(url);

    return (
        <div className="flex justify-center items-center">
            <div
                className={`p-4 rounded-md max-w-md flex flex-col items-center ${
                    align === "right" ? "text-right" : "text-left"
                }`}
            >
                {/* Only render image if we have one */}
                {hasImage && (
                    hasUrl ? (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <motion.img
                                src={process.env.PUBLIC_URL + icon}
                                alt={name}
                                className="w-20 h-20 rounded-full shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </a>
                    ) : (
                        <motion.img
                            src={process.env.PUBLIC_URL + icon}
                            alt={name}
                            className="w-20 h-20 rounded-full shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    )
                )}

                {/* Name always centered */}
                <div className="mt-2 text-sm font-bold text-center">{name}</div>
            </div>
        </div>
    );
}

// TimelineSpine.jsx
function TimelineSpine({ isFirst = false, isLast = false }) {
    return (
        <div className="items-center justify-items-center">
            {!isFirst && <div className="w-2 h-3 bg-black"></div>}
            <div className="w-10 h-10 bg-black rounded-full"></div>
            {!isLast && <div className="w-2 h-3 bg-black"></div>}
        </div>
    );
}

// Skills.jsx
export default function Work({ experience = [], linkedIn }) {
    return (
        <div>
            <div className="flex h-fit flex-col items-center">
                {experience.map((p, index) => {
                    const start = p.start_date || p.start_year;
                    const end = p.end_date || p.end_year;

                    return (
                        <div key={index} className="flex w-full items-center">
                            {/* LEFT SIDE */}
                            <div className="w-1/2 flex justify-end pr-4">
                                {index % 2 === 0 && (
                                    <TimelineCard
                                        company={p.company}
                                        start={start}
                                        end={end}
                                        role={p.role}
                                        responsibility={p.job_description}
                                        align="right"
                                    />
                                )}
                                {index % 2 !== 0 && (
                                    p.applications.map((a, index) => (
                                        <ApplicationsCard
                                            key={index}
                                            name={a.name}
                                            url={a.url}
                                            icon={a.icon}
                                        />
                                    ))
                                )}
                            </div>

                            {/* CENTER SPINE */}
                            <TimelineSpine isFirst={index === 0} isLast={index === experience.length-1}/>

                            {/* RIGHT SIDE */}
                            <div className="w-1/2 flex justify-start pl-4">
                                {index % 2 !== 0 && (
                                    <TimelineCard
                                        company={p.company}
                                        start={start}
                                        end={end}
                                        role={p.role}
                                        responsibility={p.job_description}
                                        align="left"
                                    />
                                )}
                                {index % 2 === 0 && (
                                    p.applications.map((a, index) => (
                                        <ApplicationsCard
                                            key={index}
                                            name={a.name}
                                            url={a.url}
                                            icon={a.icon}
                                        />
                                    ))                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center justify-center">
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={process.env.PUBLIC_URL + "/LinkedIn.png"}
                        alt={linkedIn}
                        className="w-20 h-20 rounded-full shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </a>
                <a className="text-center mb-4"></a>
            </div>
        </div>
    );
}
