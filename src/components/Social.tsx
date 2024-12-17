import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];
const Social = ({
  containerStyle,
  iconStyle,
}: {
  containerStyle: any;
  iconStyle: any;
}) => {
  return (
    <div className={containerStyle}>
      {socials.map((items, index) => {
        return (
          <Link key={index} href={items.path} className={iconStyle}>
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
