import TwitterSVG from "../../public/twitter.svg";
import GithubSVG from "../../public/Github.svg";
import Image from "next/image";

const Footer = () => (
  <div className="flex flex-col items-center justify-between bg-[#343434] px-4 py-4 md:flex-row">
    <div className="mb-2 flex-grow pl-0 text-center md:mb-0 md:pl-0 lg:pl-48">
      <span className="text-sm text-[#6F6F6F]">
        Powered by{" "}
        <a href="https://togetherai.link/" className="underline">
          Together.ai
        </a>{" "}
        &{" "}
        <a href="https://togetherai.link/flux-playground" className="underline">
          Flux
        </a>
      </span>
    </div>
    <div className="mb-2 flex space-x-3 md:mb-0">
      <a
        href="https://github.com/Nutlope/logocreator"
        className="flex items-center rounded border border-[#6F6F6F] px-2 py-1 text-sm text-[#6F6F6F]"
      >
        <Image src={GithubSVG} alt="Twitter" className="mr-1 h-5 w-5" />
        Github
      </a>
      <a
        href="https://x.com/nutlope"
        className="flex items-center rounded border border-[#6F6F6F] px-2 py-1 text-sm text-[#6F6F6F]"
      >
        <Image src={TwitterSVG} alt="github" className="mr-1 h-4 w-4" />
        Twitter
      </a>
    </div>
  </div>
);

export default Footer;
