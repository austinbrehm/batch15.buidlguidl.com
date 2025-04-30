"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEnsAvatar, useEnsName } from "wagmi";

interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const address = "0xd6353Ff442dfa5ecf6dFe33C23f3da65654C0F21";
const name = "Sir Coderin";
const title = "Aspiring Web3 Developer";
const bio =
  "Hi, everyone. My name is Codrin and I've been a Web 2 developer for 5 year now. I am looking forward to get my hands on as many projects as possible to see what web 3 can truly light up in me, so thank you for organizing this! It is greatly appreciated.";
const localAddress = "Coderin's DeFi Castle";

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sircoderin",
    imageSrc: "https://github.githubassets.com/favicons/favicon.svg",
    imageAlt: "GitHub Logo",
  },
  {
    name: "BuidlGuidl",
    url: `https://app.buidlguidl.com/builders/${address}`,
    imageSrc: "https://buidlguidl.com/favicon.png",
    imageAlt: "BuidlGuidl Logo",
  },
];

const PersonalPage: React.FC = () => {
  const { data: ensName } = useEnsName({ address: address, chainId: 1 });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined, chainId: 1 });
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-500">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-36 h-36 transition-transform duration-300">
            {ensAvatar && !avatarError ? (
              <Image
                src={ensAvatar}
                alt={name}
                width={150}
                height={150}
                className="object-cover rounded-full"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="flex items-center justify-center w-36 h-36 text-4xl font-bold text-white bg-blue-500 rounded-full">
                {name.charAt(0)}
              </div>
            )}
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{name}</h1>
            <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400">{title}</h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">{bio}</p>

            <div className="pt-2">
              <p className="inline-block text-gray-700 dark:text-gray-300 transition-transform duration-300">
                📍 {localAddress}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 font-medium rounded-full text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 hover:scale-105 active:scale-95"
                >
                  {link.imageSrc ? (
                    <Image src={link.imageSrc} alt={link.imageAlt || link.name} width={20} height={20} />
                  ) : (
                    <span className="text-xl">{link.icon}</span>
                  )}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
