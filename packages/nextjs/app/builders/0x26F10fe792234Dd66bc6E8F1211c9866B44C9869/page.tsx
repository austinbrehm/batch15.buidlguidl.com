"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

// Social links data
const SOCIAL_LINKS = [
  { href: "https://github.com/Av1ralS1ngh", icon: FaGithub },
  { href: "https://x.com/0xFaucetFailure", icon: FaTwitter },
  { href: "https://www.linkedin.com/in/aviral-singh-b854a6342/", icon: FaLinkedin },
];

// Achievements data
const ACHIEVEMENTS = [
  {
    icon: "🏆",
    text: "Won 6 Web3 hackathons, including major competitions by ETH Global, Polygon & National hackathons",
  },
  {
    icon: "👨‍💻",
    text: "Smart contract expert with deep knowledge of Solidity security patterns and optimization",
  },
  {
    icon: "🛡️",
    text: "Graduate of Cyfrin Updraft, focused on blockchain security and auditing",
  },
  {
    icon: "🌉",
    text: "Built cross-chain solutions and DeFi protocols using industry best practices",
  },
];

// Projects data
const PROJECTS = [
  {
    title: "DeFi-Dojo",
    description: "🧠 AI Agent Assisted DeFi Learning Platform",
    repoUrl: "https://github.com/arnavkirti/DeFi-Dojo",
  },
  {
    title: "Velmora",
    description: "🤖 AI NPCs NFT Game with cross-chain transfers",
    repoUrl: "https://github.com/Av1ralS1ngh/Velmora",
  },
];

// Journey timeline data
const JOURNEY_STEPS = [
  { position: "start", text: "Started with Cyfrin Updraft" },
  { position: "end", text: "Won first few hackathon" },
  { position: "start", text: "Learnt about major DeFi protocols" },
  { position: "end", text: "Joined BuidlGuidl Batch 15" },
];

const AviralProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 animate-fadeIn">
      <div className="w-full max-w-4xl bg-base-100 shadow-xl rounded-xl overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-primary to-secondary h-32 relative">
          <div className="absolute -bottom-16 left-8">
            <div className="rounded-full border-4 border-base-100 overflow-hidden h-32 w-32 shadow-lg">
              <Image
                src="/aviral-profile.jpg"
                alt="Aviral Singh"
                width={128}
                height={128}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-8 px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-base-content">Aviral Singh</h1>
              <Address address="0x26F10fe792234Dd66bc6E8F1211c9866B44C9869" format="short" />
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              {SOCIAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-sm"
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="divider my-6"></div>

          {/* Bio */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p>
              Blockchain developer and smart contract engineer with extensive experience in Solidity and Web3
              technologies. Started my journey through Cyfrin Updraft and have been building in the space ever since. My
              passion lies in creating secure, efficient, and innovative decentralized applications.
            </p>
          </div>

          {/* Achievements */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="bg-base-200 p-4 rounded-lg">
              <ul className="space-y-2">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="badge badge-primary mr-2 mt-1">{achievement.icon}</span>
                    <span>{achievement.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((project, index) => (
                <div key={index} className="card bg-base-200">
                  <div className="card-body p-4">
                    <h3 className="card-title text-lg">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                    <div className="card-actions justify-end mt-2">
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-outline"
                      >
                        <FaGithub className="mr-1 h-3 w-3" /> View Code
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">My Web3 Journey</h2>
            <div className="flex flex-col">
              {JOURNEY_STEPS.map((step, index) => (
                <div key={index} className="timeline">
                  {index > 0 && <hr />}
                  {step.position === "start" && (
                    <div className="timeline-start timeline-box">{step.text}</div>
                  )}
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {step.position === "end" && (
                    <div className="timeline-end timeline-box">{step.text}</div>
                  )}
                  {index < JOURNEY_STEPS.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviralProfile;
