import { useState } from "react";
import { Mail } from "lucide-react";
import { socials } from "../constants/constants";
import Section from "./Section";

export default function Contact() {
    const [status, setStatus] = useState(null); // "success" | "error"

    // Replace with your Formspree form ID if you choose Formspree (no backend required)
    const formAction = "https://formspree.io/f/your-form-id"; // <- put your real form id

    return (
        <Section id="contact" title="Contact">
            <div className="max-w-2xl">
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                    Send me a message using this form. It goes straight to my inbox.
                </p>
                <form
                    action={formAction}
                    method="POST"
                    className="space-y-4"
                    onSubmit={(e) => {
                        // Optimistic UI hint; Formspree will redirect to a success page unless you enable AJAX mode.
                        setStatus("sending");
                    }}
                >
                    {/* Honeypot field */}
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                    <input type="hidden" name="subject" value="New message from portfolio site" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium dark:text-white">Name</label>
                        <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium dark:text-white">Email</label>
                        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium dark:text-white">Message</label>
                        <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"></textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                        <Mail size={18} /> Send
                    </button>
                    {status === "sending" && (
                        <p role="status" className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">Sending…</p>
                    )}
                </form>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
                    Prefer email? Reach me at <a href={`mailto:${socials.email}`} className="underline">{socials.email}</a>.
                </p>
            </div>
        </Section>
    );
}