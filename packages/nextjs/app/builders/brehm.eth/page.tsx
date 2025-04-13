import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Profile: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar */}
      <div className="w-64 bg-base-200 p-10 border-r-2 border-base-300">
        <Address address="0xeD873463fb62E2B47BE045beA7385d35166A56dE" onlyEnsOrAddress size="xl" />
        <div className="flex flex-col items-center mb-6">
          <div className="text-center"></div>
        </div>

        <div className="mt-6">
          <div className="space-y-2">
            <Link
              href="https://app.buidlguidl.com/builders/0xeD873463fb62E2B47BE045beA7385d35166A56dE"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-base-300 rounded-lg"
            >
              Buidl Guidl
            </Link>
          </div>

          <div className="space-y-2">
            <Link
              href="https://warpcast.com/brehm"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-base-300 rounded-lg"
            >
              Warpcast
            </Link>
          </div>

          <div className="space-y-2">
            <Link
              href="https://github.com/austinbrehm"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-base-300 rounded-lg"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-4 p-14">
        <div className="max-w-3xl mx-auto border border-base-300 rounded-lg p-8 bg-base-200">
          <section id="about" className="mb-8">
            <h1 className="text-2xl font-bold mb-4">⚡️ About Me</h1>
            <p>
              Hello! My name is Austin. I&apos;m excited to learn more about application development on Ethereum. I
              attended Camp Build at EthDenver this year. I&apos;m looking forward to completing more issues for this
              batch and collaborating with other builders.
            </p>
            <p>Here are the resources I&apos;ve found helpful for learning:</p>
            <ul className="list-disc p-4">
              <li>
                <a href="https://solidity-by-example.org/">Solidity By Example</a>
              </li>
              <li>
                <a href="https://docs.soliditylang.org/en/v0.8.29/">Solidity Docs</a>
              </li>
              <li>
                <a href="https://docs.scaffoldeth.io/">Scaffold-ETH2 Docs</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
