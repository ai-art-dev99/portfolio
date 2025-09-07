import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section"

export default function Badges() {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const slideTo = (i) => {
        const track = trackRef.current;
        if (!track) return;
        const slides = track.querySelectorAll("[data-slide]");
        const clamped = Math.max(0, Math.min(i, slides.length - 1));
        setIndex(clamped);
        slides[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };
    const next = () => slideTo(index + 1);
    const prev = () => slideTo(index - 1);

    const [badges, setBadges] = useState([])
    useEffect(() => {
        async function fetchBadges() {
            fetch('/data/badges.json')
                .then(bg => bg.json())
                .then(bg => setBadges(bg))
        }
        fetchBadges()
    }, [])

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const slides = Array.from(track.querySelectorAll("[data-slide]"));
            if (!slides.length) return;
            const mid = track.scrollLeft + track.clientWidth / 2;
            let bestI = 0, bestDiff = Infinity;
            slides.forEach((el, i) => {
                const center = el.offsetLeft + el.clientWidth / 2;
                const diff = Math.abs(center - mid);
                if (diff < bestDiff) { bestDiff = diff; bestI = i; }
            });
            setIndex(bestI);
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => track.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Section id="badges" title="Badges">
            <div className="max-w-6xl mx-auto px-4">

                <div className="relative">
                    <div
                        ref={trackRef}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-1
                       [scrollbar-width:none] [-ms-overflow-style:none]"
                        aria-roledescription="carousel"
                        aria-label="Badge list"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowRight") next();
                            if (e.key === "ArrowLeft") prev();
                        }}
                    >
                        {badges.map((b, i) => (
                            <a
                                key={b.name + i}
                                data-slide
                                className="snap-center shrink-0 w-50 h-50 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800
                           p-4 bg-white dark:bg-zinc-900 grid place-items-center hover:shadow transition"
                                href={b.href || undefined}
                                target={b.href ? "_blank" : undefined}
                                rel={b.href ? "noreferrer" : undefined}
                                aria-label={b.name + (b.href ? " (opens in new tab)" : "")}
                            >
                                <img src={b.image} alt={b.name} className="max-h-30 object-contain" />
                                <p className="mt-2 text-sm font-medium text-center dark:text-white">{b.name}</p>
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        type="button"
                        onClick={prev}
                        className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white dark:bg-zinc-900
                       ring-1 ring-zinc-200 dark:ring-zinc-800 shadow"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white dark:bg-zinc-900
                       ring-1 ring-zinc-200 dark:ring-zinc-800 shadow"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </Section>
    );
}
