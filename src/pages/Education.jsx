function LearningCard({ name, year, accomplishment, align = "left" }) {
    return (
        <div
            className={`bg-gray-200 p-4 rounded-md max-w-md ${
                align === "right" ? "text-right" : "text-left"
            }`}
        >
            <div className="text-black text-xl font-bold">{name}</div>
            <div className="text-black text-lg"> {year} </div>
            <div className="text-black text-base">{accomplishment}</div>
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
export default function Education({ learnings = [] }) {
    return (
        <div className="h-[600px] overflow-y-auto">
            <div className="flex flex-col items-center gap-4">
                {learnings.map((p, index) => {
                    return (
                        <div key={index} className="flex w-full items-center">
                            {/* LEFT SIDE */}
                            <div className="w-1/2 flex justify-end pr-4">
                                {index % 2 === 0 && (
                                    <LearningCard
                                        name={p.name}
                                        year={p.year_complete}
                                        accomplishment={p.accomplishment}
                                        align="right"
                                    />
                                )}
                            </div>

                            {/* CENTER SPINE */}
                            <TimelineSpine
                                isFirst={index === 0}
                                isLast={index === learnings.length - 1}
                            />

                            {/* RIGHT SIDE */}
                            <div className="w-1/2 flex justify-start pl-4">
                                {index % 2 !== 0 && (
                                    <LearningCard
                                        name={p.name}
                                        year={p.year_complete}
                                        accomplishment={p.accomplishment}
                                        align="left"
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
