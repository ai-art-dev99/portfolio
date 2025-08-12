import { Mail, Github, Linkedin } from "lucide-react";
import { socials } from "../constants/constants";

export default function Footer() {
    return (
        <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Amirparsa Rouhi. All rights reserved.</p>
                <ul className="flex items-center gap-4">
                    <li><a className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" href={`mailto:${socials.email}`} aria-label="Email"><Mail /></a></li>
                    <li><a className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></li>
                    <li><a className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></li>
                </ul>
            </div>
        </footer>
    );
}