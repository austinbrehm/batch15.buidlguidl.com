"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEnsAvatar, useEnsName } from "wagmi";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const name = "Sir Coderin";
const title = "Aspiring Web3 Developer";
const bio =
  "Hi, everyone. My name is Codrin and I've been a Web 2 developer for 5 year now. I am looking forward to get my hands on as many projects as possible to see what web 3 can truly light up in me, so thank you for organizing this! It is greatly appreciated.";
const localAddress = "Coderin's DeFi Castle";

const socialLinks: SocialLink[] = [{ name: "GitHub", url: "https://github.com/sircoderin", icon: "📁" }];

const PersonalPage: React.FC = () => {
  const { data: ensName } = useEnsName({ address: "0xd6353Ff442dfa5ecf6dFe33C23f3da65654C0F21", chainId: 1 });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined, chainId: 1 });
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-6 transition-all duration-500">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-36 h-36 hover:scale-105 transition-transform duration-300">
            {ensAvatar && !avatarError ? (
              <Image
                src={ensAvatar}
                alt={name}
                width={150}
                height={150}
                className="rounded-full object-cover"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold text-white">
                {name.charAt(0)}
              </div>
            )}
          </div>

          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <h2 className="text-xl text-blue-600 font-medium">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{bio}</p>

            <div className="pt-2">
              <p className="inline-block hover:scale-105 transition-transform duration-300 text-gray-700">
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
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
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
