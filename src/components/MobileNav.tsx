"use client";
import Link from "next/link";
import { SheetContent, SheetTrigger, Sheet, SheetTitle } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center text-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="text-4xl font-semibold">
                Zia<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
        </SheetTitle>
        <nav className="flex flex-col justify-center items-center gap8">
          {links.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={`${
                path === pathName && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
