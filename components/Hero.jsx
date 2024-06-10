import Link from "next/link";
import { Button } from "./ui/button";
import { Download, MessagesSquareIcon } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Enginner
            </div>
            <h1 className="h1 mb-4">Hello, my name is Antônio Alberto</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I love turning ideas into amazing digital products and am always
              on the lookout for new technologies and challenges.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-1">
                  Contact me <MessagesSquareIcon size={18} />
                </Button>
              </Link>
              <Button className="gap-x-1" variant='secondary'>
                Download CV <Download size={18} />
              </Button>
            </div>
          </div>
          <div className="hidden xl:flex relative">img</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;