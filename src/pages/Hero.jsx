import { motion } from "framer-motion";

export default function Hero({ name, title }) {
    const images = [
        "/Dart.svg",
        "/Flutter.svg",
        "/Java.svg",
        "/nodeJs.svg",
        "/Python.svg",
        "/React.svg",
        "/Spring.svg",
        "/Swift.svg",
        "/Tailwind.svg",
        "/Cplusplus.svg",
        "/mongo.svg",
        "/postgres.svg",
        "/express.svg",
        "/github.svg",
    ]; // put your actual file names here (inside /public)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Profile Image */}
            <motion.img
                src={process.env.PUBLIC_URL + "/profile_pic.jpg"}
                alt="Profile"
                className="w-60 h-60 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Name + Title */}
            <motion.h1
                className="mt-6 text-4xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {name}
            </motion.h1>

            <motion.p
                className="mt-2 text-lg text-gray-600 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                {title}
            </motion.p>
            <div className="w-full overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // adjust speed (higher = slower)
                        ease: "linear",
                    }}
                >
                    {[...images, ...images].map((src, i) => (
                        <img
                            key={i}
                            src={process.env.PUBLIC_URL + src}
                            alt={`scroll-img-${i}`}
                            className="h-24 w-auto rounded-lg shadow-md"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
