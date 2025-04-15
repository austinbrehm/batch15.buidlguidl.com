import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const PavelArsProfile: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col md:flex-row px-5 max-w-4xl mx-auto gap-8">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="mb-6">
              <div className="avatar">
                <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <Image src="/pavelars_pfp.png" width={500} height={500} alt="Pavel Ars pfp" />
                </div>
              </div>
            </div>
            <h1 className="text-center mb-4">
              <span className="block text-4xl font-bold">Pavel Ars</span>
            </h1>
            <span className="block mb-6 text-s text-center text-gray-500">
              Mango Monster Enjoyer & Custom Mechanical Keyboards Enthusiast
            </span>
            <div className="flex flex-wrap mb-6 gap-4 items-center">
              <Link href="https://github.com/pavelars" passHref className="btn btn-circle btn-outline">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/pavel-arsentev" passHref className="btn btn-circle btn-outline">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://x.com/arsiexd" passHref className="btn btn-circle btn-outline">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://t.me/pavelars" passHref className="btn btn-circle btn-outline">
                <FaTelegram size={24} />
              </Link>
            </div>
            <div>
              <Address address="0xd09d0D84E0aDEEfd9C54893B15b914E94c52E4D4" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-2/3 mt-8 md:mt-0">
            <h1 className="text-center mb-4">
              <span className="block text-2xl mb-2">About me</span>
            </h1>
            <div className="mb-6">
              <p className="mb-4">
                I&apos;m a passionate quality assurance engineer specializing in test automation and full-stack testing,
                expertise in Playwright and TypeScript for Angular frontend and Go for backend.
              </p>
              <p className="mb-6">
                Currently exploring decentralized applications and want to contribute to open-source projects. Learning
                Solidity and Rust, Next.js with React.
              </p>
              <p className="mb-6">I hope one day I&apos;ll become a fullstack blockchain developer. Wish me luck!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PavelArsProfile;
