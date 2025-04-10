import Image from "next/image";

export default function BuilderPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto space-y-6 bg-white rounded-2xl shadow-lg mt-10">
      <div className="flex items-center space-x-5">
        <Image
          src="/pexels-pixabay-416160.jpg"
          alt="Your Avatar"
          width={80}
          height={80}
          className="rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-2xl font-extrabold text-blue-800">Biliqis Onikoyi</h1>
          <p className="text-sm text-gray-600 italic">Builder | Smart Contract Wizard | Rust</p>
        </div>
      </div>

      <div className="space-y-2 text-gray-700">
        <p>
          Hey there! I&apos;m currently building{" "}
          <span className="font-semibold text-blue-700">at BuidlGuidl Batch 15.</span>
        </p>
        <p>
          Passionate about Ethereum, Solidity, and scaling dapps with gasless UX. Let&apos;s build the future together
          ✨
        </p>
      </div>

      <div className="flex gap-4 text-blue-600">
        <a
          href="https://github.com/BiliqisO"
          className="hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/Biliqis_O"
          className="hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Address: <span className="font-mono text-gray-600">0x6F1b6ac175E2cf9436D7478E6d08E22C415eb474</span>
      </p>
    </main>
  );
}
