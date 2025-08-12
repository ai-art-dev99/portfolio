import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { container } from "../constants/constants"
import Section from "./Section"

export default function Skills() {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        async function fetchSkills() {
            fetch('/data/skills.json')
                .then(sk => sk.json())
                .then(sk => setSkills(sk))
        }
        fetchSkills()
    }, [])
    return (
        <Section id="skills" title="Skills">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((group) => (
                    <motion.div key={group.category} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                        <h3 className="font-semibold mb-3 dark:text-white">{group.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((s) => (
                                <li key={s} className="px-3 py-1 rounded-full text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}