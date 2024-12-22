"use client";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+93) 77 161 3037",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmadziaseyar2024@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Zia Tech",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27273c]  rounded-lg"
            >
              <h3 className="text-4xl text-accent">Let's Work Togeter</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                similique vitae illo a molestiae dolores harum ex distinctio,
                debitis, hic, nesciunt quisquam temporibus fuga autem fugiat
                porro tempore aliquam nulla.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="Firstname" />
                <Input type="lastName" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select A Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select A Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button className="max-w-40 md">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
