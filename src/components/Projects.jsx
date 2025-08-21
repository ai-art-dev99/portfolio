import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Section from "./Section"
import { container } from "../constants/constants"

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        async function fetchProjects() {
            fetch('/data/projects.json')
                .then(prj => prj.json())
                .then(prj => setProjects(prj))
        }
        fetchProjects()
    }, [])
    return (
        <Section id="projects" title="Projects">
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p) => (
                    <motion.article key={p.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="rounded-3xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
                        <img src={p.image} alt="Project screenshot" className="w-full aspect-video object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold dark:text-white">{p.title}</h3>
                            <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-justify">{p.description}</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <li key={t} className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{t}</li>
                                ))}
                            </ul>
                            <div className="mt-4 flex gap-3">
                                {p.links.demo && (
                                    <a className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline" href={p.links.demo} target="_blank" rel="noreferrer">
                                        Live <ExternalLink size={16} />
                                    </a>
                                )}
                                {p.links.repo && (
                                    <a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-200" href={p.links.repo} target="_blank" rel="noreferrer">
                                        Code <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}