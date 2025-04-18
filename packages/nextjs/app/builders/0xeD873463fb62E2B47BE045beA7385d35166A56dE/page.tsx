import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BrehmEthProfile: NextPage = () => {
  const links = new Map([
    ["https://app.buidlguidl.com/builders/0xeD873463fb62E2B47BE045beA7385d35166A56dE", "Buidl Guidl"],
    ["https://warpcast.com/brehm", "Warpcast"],
    ["https://github.com/austinbrehm", "GitHub"],
  ]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-base-100">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-base-200 p-6 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-base-300">
        <div className="flex flex-col items-center">
          <Address address="0xeD873463fb62E2B47BE045beA7385d35166A56dE" onlyEnsOrAddress size="xl" />
          <div className="mt-6 w-full">
            <div className="flex flex-col space-y-4">
              {Array.from(links.entries()).map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 hover:bg-base-300 rounded-lg text-center lg:text-left"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-10">
        <div className="max-w-3xl mx-auto border border-base-300 rounded-lg p-6 lg:p-8 bg-base-200">
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
                <a href="https://solidity-by-example.org/" className="link">
                  Solidity By Example
                </a>
              </li>
              <li>
                <a href="https://docs.soliditylang.org/en/v0.8.29/" className="link">
                  Solidity Docs
                </a>
              </li>
              <li>
                <a href="https://docs.scaffoldeth.io/" className="link">
                  Scaffold-ETH2 Docs
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrehmEthProfile;
