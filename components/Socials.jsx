"use client";

import Link from "next/link";
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];
//TODO: ADICIONAR MEUS LINKS

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
