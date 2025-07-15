import { useState } from "react";
import { SendHorizonal } from "lucide-react";

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
  return (
    <section id="Career" className="py-24 px-4 relative">
      <div className="container mx-auto md:max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-gotham text-primary mb-12 text-start">
          Career History
        </h2>

        {/* Career Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-3 text-start">
          <div>
            <div className="mb-6 flex gap-4">
              <button
                onClick={() => setCareerType("SE")}
                className={`py-2 text-left font-gotham ${careerType === "SE" ? "border-b-2 border-b-accent text-primary" : "bg-none"
                  }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setCareerType("CE")}
                className={`px-2 py-2 text-left font-gotham ${careerType === "CE" ? "border-b-2 border-b-accent text-primary" : "bg-none"
                  }`}
              >
                Civil Engineer
              </button>
            </div>
            {careerType === "SE" ? (
              <div className="space-y-6">
                <p className="font-gotham text-sm">
                  With over 5 years of experience in web development, I specialize in creating responsive,
                  accessible, and performant web applications using modern technologies.
                </p>
                <p className="font-gotham text-sm">
                  I'm passionate about creating elegant solutions to complex problems, and I'm constantly
                  learning new technologies and techniques to stay at the forefront of the ever-evolving web
                  landscape.
                </p>
                <div className="invisible lg:visible flex items-center gap-4 pt-4 transition-colors">
                  <SendHorizonal className="text-accent-themed"></SendHorizonal>
                  <a href="#contact" className="font-gotham text-accent-themed text-sm">Send me a message</a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="font-gotham text-sm">
                  I started my career in the civil engineering industry where I was involved in planning,
                  design, and supervision of construction projects.
                </p>
                <p className="font-gotham text-sm">
                  My experience taught me strong problem-solving skills, working with teams on-site, and
                  dealing with real-world structural challenges.
                </p>
                <div className="invisible lg:visible flex items-center gap-4 pt-4 transition-colors">
                  <SendHorizonal className="text-accent-themed"></SendHorizonal>
                  <a href="#contact" className="font-gotham text-accent-themed text-sm">Send me a message</a>
                </div>
              </div>
            )}
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 overflow-y-auto max-h-[600px] md:-mt-10 md:ml-5 lg:mr-9">
            <span className="text-accent-themed text-[18px] lg:hidden font-gotham">Experience</span>
            {(careerType === "SE" ? seCareerHistory : ceCareerHistory).map((item, idx) => (
              <div key={idx} className="p-8 card-hover flex gap-8">
                <div className="w-1/4 font-gotham text-secondary text-[11px] mt-1">{item.duration}</div>
                <div className="w-3/4">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};