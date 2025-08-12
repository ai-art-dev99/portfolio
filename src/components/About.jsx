import { motion } from "framer-motion";
import { container } from "../constants/constants";
import Section from "./Section";

export default function About() {
    return (
        <Section id="about" title="About">
            <div className="grid md:grid-cols-3 gap-8">
                <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="text-zinc-700 dark:text-zinc-300 md:col-span-2">
                    I’m a developer who loves building responsive user interfaces and thoughtful user experiences. I work mostly with
                    React and modern tooling. Outside of work I enjoy open-source and writing about frontend best practices.
                </motion.p>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                    <h3 className="font-semibold mb-2 dark:text-white">Highlights</h3>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm space-y-1">
                        <li>3+ years building React apps</li>
                        <li>Performance & accessibility focused</li>
                        <li>Comfortable across the stack</li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}