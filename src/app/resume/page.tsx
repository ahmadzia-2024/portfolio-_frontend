"use client";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "lorem ipsum dolor sit amet consectetur adip eu fugiat null et null et description eu fugiat null et description eu fugiat",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ahmad Zia Seyar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+93 77 161 3037",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "ahmad-2024",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Afghan",
    },
    {
      fieldName: "Email",
      fieldValue: "ahmadziaseyar2024@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Pashto",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experenence",
  description:
    "lorem ipsum dolor sit amet consectetur adip eu fugiat null et null et description eu fugiat null et description eu fugiat",
  items: [
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc",
      postion: "Full Stack Developer",
      duraton: "2022 - Present",
    },
  ],
};
const education = {
  icon: "",
  title: "My Edutcations",
  description:
    "lorem ipsum dolor sit amet consectetur adip eu fugiat null et null et description eu fugiat null et description eu fugiat",
  items: [
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
    {
      institute: "Tech Solutions Inc",
      degree: "Full Stack Developer",
      duraton: "2022 - Present",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "lorem ipsum dolor sit amet consectetur adip eu fugiat null et null et description eu fugiat null et description eu fugiat",
  skillList: [
    {
      name: "HTML5",
      icon: <FaHtml5 size="20" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 size="20" />,
    },
    {
      name: "React",
      icon: <FaReact size="20" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size="20" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size="20" />,
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">AboutMe</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duraton}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.postion}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duraton}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
