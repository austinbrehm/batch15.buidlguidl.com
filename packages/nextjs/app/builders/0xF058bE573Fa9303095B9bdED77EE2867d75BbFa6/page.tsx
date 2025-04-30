import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { MotionDiv, MotionSection } from "~~/components/MotionElements";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  { name: "GitHub", url: "https://github.com/amsorrytola", icon: <FaGithub className="w-5 h-5" /> },
  { name: "Twitter", url: "https://x.com/An92147600_", icon: <FaTwitter className="w-5 h-5" /> },
  { name: "Telegram", url: "https://t.me/tolaamsorry", icon: <FaTelegram className="w-5 h-5" /> },
];

const skills = [
  { name: "Solidity", icon: "🛠️" },
  { name: "Foundry", icon: "🧪" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Wagmi & RainbowKit", icon: "🌈" },
  { name: "zkEmail", icon: "🔐" },
  { name: "Bitcoin + Runes Protocol", icon: "₿" },
  { name: "API & ERP Integration", icon: "🔗" },
  { name: "Smart Contract Events & Hooks", icon: "📚" },
  { name: "And still learning...", icon: "...." },
];

const projects = [
  {
    title: "Hyperion-RuneLand",
    stack: "Node.js • Bitcoin Core • Testnet",
    description:
      "Built a custom Bitcoin API for etching Runes using regtest and migrated to testnet with UniSat Wallet support and then minting Runes tokens.",
    url: "https://github.com/amsorrytola/Hyperion-RuneLand",
  },
  {
    title: "FitKnight",
    stack: "React • Zustand • Axios • Node.js • MongoDB • Express • WebSocket",
    description:
      "Welcome to FitKnight, a fitness community platform where users can connect, join fitness groups, and find workout buddies based on shared goals and preferences.",
    url: "https://github.com/amsorrytola/FitKnight",
  },
  {
    title: "Secure Invoice",
    stack: "Next.js • Sablier Protocol • Supabase",
    description:
      "Secure Invoice is an invoicing and real time payments application designed for freelancers, private tutors, mentors and gig workers..",
    url: "https://github.com/raj210809/codekshetra2.0",
  },
];

const TalhaPortfolioPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-full overflow-hidden w-40 h-40 border-4 border-zinc-300 dark:border-zinc-700 shadow-xl"
          >
            <Image
              src="/Tola.jpeg"
              alt="Tola"
              width={160}
              priority
              height={160}
              className="object-cover w-full h-full"
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold mb-2">Hey, I&apos;m Talha 👋</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-4">
              Web3 Developer • Fullstack Engineer • Blockchain Enthusiast
            </p>
            <Address address="0xF058bE573Fa9303095B9bdED77EE2867d75BbFa6" />

            <div className="flex gap-4 text-2xl mt-4">
              {socials.map(({ name, url, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <span role="img" aria-label={name}>
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </MotionDiv>
        </div>

        <MotionSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-lg">
            I&apos;m a passionate developer building on Ethereum and Bitcoin. From smart contract logic and staking
            dashboards to AI-powered tools and multi-chain interfaces, I bring real utility to decentralized ecosystems.
            I&apos;m also exploring new protocols like Runes and zkEmail, and love crafting smooth UIs using React,
            Next.js, Tailwind, and animations with Framer Motion.
          </p>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md flex flex-col items-center gap-2 transition-transform"
              >
                <div className="text-2xl">{icon}</div>
                <div className="text-center text-sm font-medium">{name}</div>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Recent Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl  transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{project.stack}</p>
                <p className="text-zinc-700 dark:text-zinc-200 text-sm">{project.description}</p>
                <a href={project.url} rel="noopener noreferrer" target="_blank" className="text-blue-500 mt-2">
                  View Project
                </a>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>
      </div>
    </div>
  );
};

export default TalhaPortfolioPage;
