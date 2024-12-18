"use client";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const exprience = {
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
      <div className="conatiner mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList>
            <TabsTrigger value="">Experience</TabsTrigger>
            <TabsTrigger value="">Education</TabsTrigger>
            <TabsTrigger value="">Skills</TabsTrigger>
            <TabsTrigger value="">AboutMe</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
