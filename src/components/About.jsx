import { motion } from "framer-motion";
import { container } from "../constants/constants";
import Section from "./Section";

export default function About() {
    return (
        <Section id="about" title="About">
            <div className="grid md:grid-cols-3 gap-8">
                <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="text-zinc-700 dark:text-zinc-300 md:col-span-2 text-justify">
                    I’m a developer with a background in computer engineering. I initially focused on web development, learning React.js and Django to build modern web applications.
                    Over time, I discovered a passion for Artificial Intelligence, which inspired me to pursue it as my career path. I began by studying machine learning algorithms independently and completing several projects in the field.
                    To deepen my expertise, I pursued an MSc in AI and Data Science at Bournemouth University, from which I have now graduated.
                </motion.p>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                    <h3 className="font-semibold mb-2 dark:text-white">Highlights</h3>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm space-y-1 text-justify">
                        <li>7+ years of programming</li>
                        <li>4+ years of AI coding</li>
                        <li>Performance & accessibility focused</li>
                        <li>Comfortable across the stack</li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}