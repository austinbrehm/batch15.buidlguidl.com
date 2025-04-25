"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClassValue, clsx } from "clsx";
import { AnimatePresence } from "motion/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { FaEthereum, FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { SparklesIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { MotionDiv, MotionLinearGradient, MotionPath, MotionSpan } from "~~/components/MotionElements";

interface Builder {
  address: string;
  name: string;
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  telegram?: string;
  warpcast?: string;
  skills: string[];
}

const INITIAL_BUILDERS: Builder[] = [
  {
    address: "0x6F1b6ac175E2cf9436D7478E6d08E22C415eb474",
    name: "Biliqis Onikoyi",
    bio: "Smart‑contract builder scaling Ethereum dApps with gas‑less user experiences.",
    avatar: "/pexels-pixabay-416160.jpg",
    twitter: "Biliqis_O",
    github: "BiliqisO",
    skills: ["Ethereum", "React", "Solidity", "Gas‑less UX"],
  },
  {
    address: "0x49D1ad89ADB60241Bf2Cc003fe57bcfD4d3cfD95",
    name: "Danilevski",
    bio: "Coder eager to learn, grow, and build helpful projects.",
    avatar: "/danilevski.png",
    twitter: "dnlvskey",
    github: "dnlvskey",
    skills: ["React", "Next.js", "Typescript", "Hardhat"],
  },
  {
    address: "0x89a68d0731F9Bc419d606f1F31Ead04c3fBDFdd6",
    name: "Samuel Owen",
    bio: "Frontend Web/Smart Contract Developer. Passionate about Blockchain and crypto mainstream adoption.",
    avatar: "/owen.webp",
    github: "Samuel1505",
    twitter: "Samuel_Owen5",
    linkedin: "samuel-owen-b47570244",
    skills: ["UI/UX", "Figma", "Tailwind", "React"],
  },
  {
    address: "0x575109e921C6d6a1Cb7cA60Be0191B10950AfA6C",
    name: "Smartdev",
    bio: "Solidity developer passionate about DeFi and DAO governance.",
    avatar: "/smartdev-pic.jpeg",
    twitter: "smartdev_x",
    github: "Smartdevs17",
    telegram: "smartdevx",
    skills: ["Defi", "Scaffold‑ETH", "Solidity", "DAO"],
  },
  {
    address: "0xB032Af0F37E29a7b4C1FcBA7051A322460931dD8",
    name: "Ayush Dutt Sharma",
    bio: "Web2 dev diving into Web3 to build open decentralized experiences.",
    avatar: "/ayush_dutt_sharma_profile.jpeg",
    twitter: "Ayush_Dutt_",
    github: "Ayush-Dutt-Sharma",
    telegram: "ayush_dutt_sharma",
    skills: ["Smart Contract", "Typescript", "Ethereum", "Node.js"],
  },
  {
    address: "0xd09d0D84E0aDEEfd9C54893B15b914E94c52E4D4",
    name: "Pavel Ars",
    bio: "QA automation expert expanding into Web3 with Solidity and Rust",
    avatar: "/pavelars_pfp.png",
    twitter: "arsiexd",
    github: "pavelars",
    linkedin: "pavel-arsentev",
    telegram: "pavelars",
    skills: ["Playwright", "Go", "Next.js", "Solidity"],
  },
  {
    address: "0xeD873463fb62E2B47BE045beA7385d35166A56dE",
    name: "BrehmEth",
    bio: "Ethereum learner,inspired from ETHDenver, eager to build together.",
    avatar: "",
    warpcast: "brehm",
    github: "austinbrehm",
    skills: ["Typescript", "Scaffold‑ETH", "Next.js", "Solidity"],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const lightColors = {
  stopColor1: "#18CCFC",
  stopColor2: "#6344F5",
  stopColor3: "#AE48FF",
  radialStop: "#213448",
};

const darkColors = {
  stopColor1: "#18CCFC",
  stopColor2: "#6344F5",
  stopColor3: "#AE48FF",
  radialStop: "#EFEEEA",
};

export default function BuildersPage() {
  const builders = shuffleArray(INITIAL_BUILDERS);
  const [searchTerm, setSearchTerm] = useState("");
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const filteredBuilders = builders.filter(
    builder =>
      builder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      builder.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      builder.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div
      className={cn(
        "min-h-screen overflow-hidden relative",
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-gray-900",
      )}
    >
      <ProgressBar height="4px" color="#6366f1" options={{ showSpinner: false }} shallowRouting />
      <Toaster position="top-right" />

      <header className="py-12 px-4 md:px-8 lg:px-16 relative z-10">
        <MotionDiv
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionDiv
            className="inline-block mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <SparklesIcon className={cn("h-16 w-16 mx-auto", isDarkMode ? "text-indigo-400" : "text-indigo-600")} />
          </MotionDiv>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            buildGuild <FlipWords words={["Builders", "Makers", "Contributors"]} />
          </h1>
          <p className={cn("text-xl max-w-3xl mx-auto", isDarkMode ? "text-gray-300" : "text-gray-700")}>
            Discover the builders contributing to the buildGuild ecosystem. Connect, collaborate, and build the future
            of web3 together.
          </p>
        </MotionDiv>
      </header>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-20 relative z-10">
        <div className="mb-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search by name, address, or skills..."
                className={cn(
                  "w-full border rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 text-white"
                    : "bg-white/70 border-gray-300 text-gray-900",
                )}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className={cn("h-5 w-5", isDarkMode ? "text-gray-400" : "text-gray-500")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </MotionDiv>
          <>
            {filteredBuilders.length === 0 ? (
              <div className="text-center py-16">
                <UserCircleIcon className={cn("mx-auto h-16 w-16", isDarkMode ? "text-gray-600" : "text-gray-400")} />
                <h3 className={cn("mt-4 text-xl font-medium", isDarkMode ? "text-gray-400" : "text-gray-600")}>
                  No builders found
                </h3>
                <p className={cn("mt-1", isDarkMode ? "text-gray-500" : "text-gray-500")}>
                  Try adjusting your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBuilders.map((builder, index) => (
                  <MotionDiv
                    key={builder.address}
                    className={cn(
                      "backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                      isDarkMode
                        ? "bg-gray-800/60 border-gray-700 hover:border-indigo-500"
                        : "bg-white/80 border-gray-200 hover:border-indigo-400 shadow-sm",
                    )}
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Link href={`/builders/${builder.address}`} key={builder.address} prefetch>
                          <div className="relative">
                            <Image
                              src={builder.avatar || "/image_not_found.png"}
                              alt={builder.name}
                              width={56}
                              height={56}
                              className={cn("rounded-full object-cover", isDarkMode ? "bg-gray-700" : "bg-gray-200")}
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold text-xl">{builder.name}</h3>
                            <div
                              className={cn(
                                "flex items-center text-sm",
                                isDarkMode ? "text-gray-400" : "text-gray-500",
                              )}
                            >
                              <FaEthereum className="mr-1" />
                              <span className="truncate w-32">{`${builder.address.substring(0, 6)}...${builder.address.substring(builder.address.length - 4)}`}</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <p className={cn("mb-4", isDarkMode ? "text-gray-300" : "text-gray-700")}>{builder.bio}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {builder.skills.map(skill => (
                            <span
                              key={skill}
                              className={cn(
                                "text-xs px-2 py-1 rounded-full",
                                isDarkMode
                                  ? "bg-indigo-900/50 text-indigo-300 border border-indigo-800"
                                  : "bg-indigo-100 text-indigo-700 border border-indigo-200",
                              )}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2" onClick={e => e.stopPropagation()}>
                        {builder.github && (
                          <a
                            href={`https://github.com/${builder.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
                            )}
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                        )}
                        {builder.twitter && (
                          <a
                            href={`https://x.com/${builder.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
                            )}
                          >
                            <FaTwitter className="w-5 h-5" />
                          </a>
                        )}
                        {builder.linkedin && (
                          <a
                            href={`https://www.linkedin.com/in/${builder.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
                            )}
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        {builder.telegram && (
                          <a
                            href={`https://t.me/${builder.telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
                            )}
                          >
                            <FaTelegram className="w-5 h-5" />
                          </a>
                        )}
                        {builder.warpcast && (
                          <a
                            href={`https://warpcast.com/${builder.warpcast}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
                            )}
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            )}
          </>
        </div>
      </section>
      <BackgroundBeams />
    </div>
  );
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function FlipWords({ words, duration = 3000, className }: { words: string[]; duration?: number; className?: string }) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <MotionDiv
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <MotionSpan
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <MotionSpan
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </MotionSpan>
            ))}
            <span className="inline-block">&nbsp;</span>
          </MotionSpan>
        ))}
      </MotionDiv>
    </AnimatePresence>
  );
}

const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] -z-0",
        className,
      )}
    >
      <svg
        className="pointer-events-none absolute z-0 h-full w-full md:max-w-full sm:max-w-none max-h-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <MotionPath
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></MotionPath>
        ))}
        <defs>
          {paths.map((path, index) => (
            <MotionLinearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `93%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor={colors.stopColor1} stopOpacity="0"></stop>
              <stop stopColor={colors.stopColor1}></stop>
              <stop offset="32.5%" stopColor={colors.stopColor2}></stop>
              <stop offset="100%" stopColor={colors.stopColor3} stopOpacity="0"></stop>
            </MotionLinearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor={colors.radialStop}></stop>
            <stop offset="0.243243" stopColor={colors.radialStop}></stop>
            <stop offset="0.43594" stopColor={theme === "dark" ? "#000" : "#fff"} stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});
const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
  "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
  "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
  "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
  "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
  "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
  "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
  "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
  "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
  "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
  "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
  "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
  "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
  "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
  "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
  "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
  "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
  "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
  "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
  "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
  "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
  "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
  "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
  "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
  "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
  "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
  "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
  "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
  "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
  "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
  "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
  "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
  "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
];
BackgroundBeams.displayName = "BackgroundBeams";
