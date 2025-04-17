import Image from "next/image";
import { Metadata } from "next";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Smartdev | Developer Profile",
  description: "Personal profile page for Smartdev, a Solidity developer passionate about DeFi and DAO governance.",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Smartdevs17",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.776.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.237-3.22-.123-.305-.536-1.53.117-3.18 0 0 1.01-.323 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.553 3.3-1.23 3.3-1.23.653 1.65.24 2.875.117 3.18.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.193.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "text-gray-800 dark:text-gray-200",
    hover: "hover:text-gray-600 dark:hover:text-gray-400",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/smartdev_x",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400">
        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.014-.635.961-.695 1.8-1.562 2.46-2.549z" />
      </svg>
    ),
    color: "text-blue-500 dark:text-blue-400",
    hover: "hover:text-blue-600 dark:hover:text-blue-300",
  },
  {
    name: "Telegram",
    url: "https://t.me/smartdevx",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.64 8.64l-1.92 9.12c-.14.64-.52.8-1.04.52l-2.88-2.12-1.4 1.36c-.16.16-.3.3-.6.3l.22-3.16 5.76-5.2c.26-.22-.06-.34-.4-.12l-7.12 4.48-3.08-1c-.66-.2-.68-.66.14-.98l12-4.64c.54-.2 1.02.12.84.96z" />
      </svg>
    ),
    color: "text-blue-500 dark:text-blue-400",
    hover: "hover:text-blue-600 dark:hover:text-blue-300",
  },
];

const SmartdevProfilePage: NextPage = () => {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <Image
            src="/smartdev-pic.jpeg"
            alt="Smartdev Avatar"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Smartdev</h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            <Address address="0x575109e921C6d6a1Cb7cA60Be0191B10950AfA6C" />
          </div>
          <p className="mt-4 text-gray-900 dark:text-gray-200">
            Solidity developer passionate about DeFi and DAO governance.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Web3 Journey</h2>
        <div className="space-y-4 text-gray-900 dark:text-gray-300">
          <p>
            After completing SpeedRunEthereum and getting hands-on with Scaffold-ETH, I am excited to take my skills to
            the next level through BuidlGuidl!
          </p>
          <p>
            My current focus is mastering collaborative development - from meaningful GitHub contributions to
            professional-grade dApp architecture. I am particularly interested in diving deeper into:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advanced Solidity patterns and security best practices</li>
            <li>Effective team workflows in open-source projects</li>
            <li>Production-ready frontend integration with smart contracts</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Current Projects</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">BuidlGuidl Batch Contributions</h3>
            <p className="text-gray-900 dark:text-gray-300">
              Actively participating in batch projects and helping improve our shared tools and documentation. Learning
              to create professional PRs and handle GitHub issues.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Scaffold-ETH Experiments</h3>
            <p className="text-gray-900 dark:text-gray-300">
              Building prototype dApps to explore advanced Ethereum concepts like multi-sig wallets, DAO governance, and
              gas optimization techniques.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Open Source Contributions</h3>
            <p className="text-gray-900 dark:text-gray-300">
              Making my first meaningful contributions to established web3 projects, starting with documentation
              improvements and small bug fixes.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h2>
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${link.color} ${link.hover} transition-colors duration-200`}
              aria-label={link.name}
            >
              {link.icon}
              <span className="hidden sm:inline-block">{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SmartdevProfilePage;
