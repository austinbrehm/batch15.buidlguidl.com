"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SparklesIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import BackgroundBeams from "~~/components/BackgroundBeams";
import FlipWords from "~~/components/FlipWords";
import { MotionDiv } from "~~/components/MotionElements";
import { Address } from "~~/components/scaffold-eth";
import cn from "~~/utils/scaffold-eth/twMerge";

// function shuffleArray<T>(array: T[]): T[] {
//   const newArray = [...array];
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// }

type Builder = { builderAddress: string; profilePage: boolean };

const getBuilders = async () => {
  try {
    const res = await fetch("/api/builders");
    const data = await res.json();
    const builders = data?.builders;
    return builders;
  } catch (err) {
    console.error("ERROR --> ", err);
    return [];
  }
};

const BuildersPage = () => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  useEffect(() => {
    const fetchProfilePages = async () => {
      const builderProfiles = await getBuilders();
      setBuilders(builderProfiles);
    };
    fetchProfilePages();
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen overflow-hidden relative",
        "bg-gradient-to-br from-gray-100 to-white text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white",
      )}
    >
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
            <SparklesIcon className={cn("h-16 w-16 mx-auto", "dark:text-indigo-400", "text-indigo-600")} />
          </MotionDiv>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            buildGuild <FlipWords words={["Builders", "Makers", "Contributors"]} />
          </h1>
          <p className={cn("text-xl max-w-3xl mx-auto", "dark:text-gray-300", "text-gray-700")}>
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
          ></MotionDiv>
          <>
            {builders.length === 0 ? (
              <div className="text-center py-16">
                <UserCircleIcon className={cn("mx-auto h-16 w-16", "dark:text-gray-600", "text-gray-400")} />
                <h3 className={cn("mt-4 text-xl font-medium", "dark:text-gray-400", "text-gray-600")}>
                  No builders found
                </h3>
                <p className={cn("mt-1", "dark:text-gray-500", "text-gray-500")}>Try adjusting your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {builders.map((builder, index) => (
                  <MotionDiv
                    key={builder.builderAddress}
                    className={cn(
                      "backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                      "dark:bg-gray-800/70 dark:border-gray-700 dark:hover:border-indigo-500/80 dark:hover:shadow-indigo-500/20",
                      "bg-white/90 border-gray-200 hover:border-indigo-400 hover:shadow-lg shadow-sm",
                    )}
                    whileHover={{ scale: 1.03, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-5">
                        <div className="flex flex-col">
                          <Address address={builder.builderAddress} />
                        </div>
                      </div>

                      <div className="mt-auto border-t dark:border-gray-700 border-gray-100 pt-4 ">
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">Builder {index + 1}</div>
                          {builder.profilePage ? (
                            <Link
                              href={`/builders/${builder.builderAddress}`}
                              prefetch
                              className="px-4 py-1.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium transition-colors duration-200"
                            >
                              View Profile
                            </Link>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400">
                              No Profile
                            </span>
                          )}
                        </div>
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
};

export default BuildersPage;
