import { useState, useEffect } from "react";
import { SendHorizonal } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easeOut } from "framer-motion";
import DecryptedText from '../components/Animations/DecryptedText';


type careerHistory = {
  duration: string,
  role: string,
  description: string,
  skills: string[]
}

const seCareerHistory: careerHistory[] = [
  {
    duration: "SEPTEMBER 2023 – PRESENT",
    role: "SOFTWARE ENGINEER, NCS GROUP",
    description: "Developed an AWS-based orchestrator for migrating 300K+ customers and designed APIs to integrate phone services with wearable devices. Maintained legacy ColdFusion systems and resolved critical incidents during on-call rotations.",
    skills: ["Typescript", "AWS", "Microservices", "ColdFusion", "NodeJS", "MySQL", "NoSQL", "Docker"]
  },
  {
    duration: "SEPTEMBER 2022 – SEPTEMBER 2023",
    role: "SOFTWARE ENGINEER, NLP LOGIX",
    description: "Optimized over 200 RPA bots and built automation solutions in Python/C#. Leveraged Azure for deployments and SQL for data analysis while scripting Python tools to streamline workflows.",
    skills: ["Python", "Azure", "Automation", "C#", ".NET", "MSSQL", "NoSQL"]
  },
  {
    duration: "NOVEMBER 2021 – SEPTEMBER 2022",
    role: "SOFTWARE ENGINEER, POINTWEST INNOVATIONS CORPORATION",
    description: "Built a Xamarin-based mobile app with localization support and contributed to full-stack web development using ReactJS and .NET. Successfully deployed an iOS application to the App Store.",
    skills: ["C#", ".NET", "React", "Xamarin", "MSSQL"]
  }
];

const ceCareerHistory: careerHistory[] = [
  {
    duration: "MAY 2021 – NOVEMBER 2021",
    role: "PLANNING ENGINEER, DATEM INCORPORATED",
    description: "Develops project timelines and milestones, tracks critical activities to mitigate delays, and implements recovery plans or time extension claims when necessary.",
    skills: ["AutoCAD", "PrimaveraP6", "Project Planning", "EOT", "Vertical Construction"]
  },
  {
    duration: "JANUARY 2020 – MAY 2021",
    role: "PROJECT AND SALES ENGINEER, BMB STEEL PHILIPPINES",
    description: "Secures new projects through client meetings and company marketing, while overseeing awarded projects from tender to completion to ensure successful delivery.",
    skills: ["AutoCAD", "Sales Engineering", "Project Management"]
  }
];

export const CareerSection = () => {
  const [careerType, setCareerType] = useState<"SE" | "CE">("SE");

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <motion.section
      id="Career"
      className="pt-24 pb-36 px-4 relative md:ml-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl z-10">
        <h2 className="text-3xl md:text-4xl font-gotham text-primary mb-12 text-start">
          <DecryptedText
            text="Career Background"
            animateOn="view"
            revealDirection="center"
          />
        </h2>

        {/* Career Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1.5fr] gap-3 text-start">
          <div>
            <div className="mb-6 flex gap-4">
              <button
                onClick={() => setCareerType("SE")}
                className={`py-2 text-left font-gotham ${careerType === "SE" ? "border-b-2 border-b-accent text-primary" : "bg-none opacity-50"
                  }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setCareerType("CE")}
                className={`px-2 py-2 text-left font-gotham ${careerType === "CE" ? "border-b-2 border-b-accent text-primary" : "bg-none opacity-50"
                  }`}
              >
                Civil Engineer
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={careerType}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {careerType === "SE" ? (
                  <>
                    <p className="font-gotham text-sm">
                      With over 5 years of experience in web development, I specialize in creating responsive,
                      accessible, and performant web applications using modern technologies.
                    </p>
                    <p className="font-gotham text-sm">
                      I'm passionate about creating elegant solutions to complex problems, and I'm constantly
                      learning new technologies and techniques to stay at the forefront of the ever-evolving web
                      landscape.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-gotham text-sm">
                      I started my career in the civil engineering industry where I was involved in planning,
                      design, and supervision of construction projects.
                    </p>
                    <p className="font-gotham text-sm">
                      My experience taught me strong problem-solving skills, working with teams on-site, and
                      dealing with real-world structural challenges.
                    </p>
                  </>
                )}
                <span className="invisible lg:visible flex items-center gap-4 pt-4 transition-colors relative overflow-hidden group">
                  <span className="absolute inset-0 bg-accent animate-sweep-border z-10" />
                  <span
                    className="relative flex items-center"
                    style={{
                      opacity: 0,
                      animation: 'fade-in 0.5s ease 1s forwards'
                    }}
                  >
                    <SendHorizonal className="text-accent-themed w-4 h-4" />
                    <a href="#contact" className="font-gotham text-accent-themed text-sm ml-2">
                      Send me a message
                    </a>
                  </span>
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Section */}
          <div ref={ref} className="overflow-y-auto max-h-[600px] md:-mt-6 md:ml-5 lg:mr-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={careerType}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="hidden"
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-[600px]"
              >
                <span className="text-accent-themed text-[18px] mb-4 lg:hidden font-gotham">Experience</span>
                {(careerType === "SE" ? seCareerHistory : ceCareerHistory).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="md:p-8 card-hover mt-2 mb-4 md:my-0 flex gap-3 self-start"
                  >
                    <div className="w-1/5 font-gotham text-secondary text-[9px] md:text-[11px] mt-1">{item.duration}</div>
                    <div className="w-4/5">
                      <h4 className="font-gotham text-primary text-[14px] md:text-[16px]">{item.role}</h4>
                      <p className="text-secondary text-[13px] mt-2">{item.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2.5">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-secondary/10 text-primary px-3 py-1.5 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};