import { motion } from "framer-motion";
import { socials, container } from "../constants/constants";
import { FileDown, ExternalLink, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="pt-16 bg-gradient-to-b from-zinc-200 to-white">
            <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-7">
                    <motion.h1
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={container}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white"
                    >
                        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Amirparsa Rouhi</span>
                    </motion.h1>
                    <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-prose">
                        I am an AI developer. <br /> Here you’ll find a selection of my projects, my skill set,
                        and a bit about me.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href={socials.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-400 text-white hover:bg-blue-700">View Projects <ExternalLink size={18} /></a>
                        <a href={socials.resume} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 dark:text-white">
                            <FileDown size={18} /> Download CV
                        </a>
                    </div>
                    <ul className="mt-6 flex items-center gap-4" aria-label="Social links">
                        <li><a className="p-2 rounded-lg" href={`mailto:${socials.email}`} aria-label="Email"><Mail /></a></li>
                        <li><a className="p-2 rounded-lg" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></li>
                        <li><a className="p-2 rounded-lg" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></li>
                    </ul>
                </div>
                <div className="md:col-span-5">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
                        <img src="/images/main-pic.jpg" alt="Your headshot" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}