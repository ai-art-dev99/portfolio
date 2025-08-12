import { motion } from "framer-motion";
import { container } from "../constants/constants";

export default function Section({ id, title, children }) {
    return (
        <section id={id} className="py-20 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-8 dark:text-white"
                >
                    {title}
                </motion.h2>
                {children}
            </div>
        </section>
    );
}
