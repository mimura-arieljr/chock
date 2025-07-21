/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendHorizonal } from "lucide-react";
import DecryptedText from '../components/Animations/DecryptedText';
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
      toast.custom((t) => (
        <div
          className={`w-80 bg-background border border-red-500 rounded-md p-4 shadow-lg transition-all ${t.visible ? "animate-enter" : "animate-leave"
            }`}
        >
          <div className="font-gotham font-semibold text-lg text-accent-themed">
            Ooopps!
          </div>
          <p className="text-sm mt-1 text-foreground">
            Kindly fill in both email and message.
          </p>
          <div className="mt-3 text-right">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-accent-themed text-sm hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      ));
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {

      // Use custom toast
      toast.custom((t) => (
        <div
          className={`w-80 bg-background border border-accent-themed rounded-md p-4 shadow-lg transition-all ${t.visible ? "animate-enter" : "animate-leave"
            }`}
        >
          <div className="font-gotham font-semibold text-lg text-accent-themed">
            Message sent!
          </div>
          <p className="text-sm mt-1 text-foreground">
            Thank you for your message. I'll get back to you soon.
          </p>
          <div className="mt-3 text-right">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-accent-themed text-sm hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      ));

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="Contact" className="min-h-[500px] flex items-center justify-center pb-20 px-4">
      <div className="max-w-xl w-full flex flex-col gap-y-8">
        <h2 className="text-[25px] md:text-[36px] font-gotham mb-6 text-primary text-start">
          <DecryptedText
            text="Say hello"
            characters="アイサツヲスル"
            animateOn="view"
            revealDirection="start"
          />
        </h2>
        <div>
          <div className="w-full h-0.5 bg-accent-themed" />
          <div className="w-16 h-2 bg-accent-themed clip-path-large mb-10" />
        </div>
        <form
          className="space-y-12"
          onSubmit={handleSubmit}
          action="https://formsubmit.co/arieljrmimura@gmail.com"
          method="POST"
        >
          {/* Optional: disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none font-gotham-narrow"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none font-gotham-narrow"
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-accent-themed text-background font-gotham transition clip-path-small"
          >
            <SendHorizonal className="text-background" />
            {isSubmitting ? 'Sending...' : 'Send a message'}
          </button>
        </form>
      </div>
    </section>
  );
};