import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#home" className="font-semibold text-lg dark:text-white">amirparsa.dev</a>
                <nav>
                    <button className="md:hidden p-2 rounded-lg border dark:border-zinc-700" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(v => !v)}>
                        Menu
                    </button>
                    <ul id="primary-nav" className={`md:flex items-center gap-6 ${open ? 'block mt-4' : 'hidden md:flex'}`}>
                        {[
                            ["About", "about"],
                            ["Skills", "skills"],
                            ["Projects", "projects"],
                            ["Badges", "badges"],
                            ["Contact", "contact"]
                        ].map(([label, id]) => (
                            <li key={id}>
                                <a href={`#${id}`} className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}