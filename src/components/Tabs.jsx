import { useState } from "react";
import Hero from "../pages/Hero";
import Education from "../pages/Education";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Tabs({ cv }) {
    const [active, setActive] = useState("hero");

    // Each tab gets an ID, label, and background color
    const tabs = [
        { id: "hero", label: "Who", color: "bg-blue-400" },
        { id: "learning", label: "How", color: "bg-pink-400" },
        { id: "work", label: "Work", color: "bg-red-400" },
        { id: "projects", label: "Play", color: "bg-green-400" },
        { id: "contact", label: "Why", color: "bg-yellow-400" },
    ];

    // Find the active tab (to set background + show component)
    const activeTab = tabs.find((t) => t.id === active);

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Content Area */}
            <div
                className={`flex-1 flex items-center justify-center transition-colors duration-500 ${activeTab.color}`}
            >
                <div className="w-full p-10">
                    {active === "hero" && (
                        <Hero
                            name={cv.name}
                            title={cv.title}
                        />
                    )}
                    {active === "learning" &&  <Education  learnings={cv.education}/>}
                    {active === "work" && <Work experience={cv.work_experience} linkedIn={cv.linkedIn}/>}
                    {active === "projects" && <Projects projects={cv.projects} />}
                    {active === "contact" && (
                        <Contact email={cv.contactEmail} />
                    )}
                </div>
            </div>

            {/* Sidebar Tabs */}
            <nav className={`flex flex-col items-stretch relative ${activeTab.color}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`
                            relative w-20 py-4 text-sm font-semibold
                            transition-all duration-300
                            ${tab.color}
                            ${active === tab.id ? "-translate-x-20 z-10" : ""}
                        `}
                        style={{ writingMode: "vertical-rl" }} // text vertical like your screenshot
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
        </div>
    );
}
