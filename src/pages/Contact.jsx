import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center py-10">
            {/* Pulsing Coming Soon */}
            <motion.div
                className="text-xl font-semibold text-blue-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                Coming Soon 🚀
            </motion.div>
        </section>
    );
}
