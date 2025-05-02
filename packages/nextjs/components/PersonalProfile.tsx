import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export const PersonalProfile = () => {
  const { address } = useAccount();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);

  const { data: checkedInEvents } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: BigInt(32418133),
    watch: true,
  });

  useEffect(() => {
    if (!checkedInEvents || !address) {
      setIsCheckedIn(false);
      return;
    }

    try {
      const hasUserCheckedIn = checkedInEvents.some(event => event && event.args && event.args.builder === address);
      setIsCheckedIn(hasUserCheckedIn);
    } catch (error) {
      console.error("Error checking checked-in events:", error);
      setIsCheckedIn(false);
    }
  }, [checkedInEvents, address]);

  useEffect(() => {
    const checkProfile = async () => {
      if (!address) {
        setHasProfile(false);
        return;
      }

      try {
        const response = await fetch(`/api/check-profile-exists?address=${address}`);

        if (!response.ok) {
          console.error("Error checking profile - HTTP error:", response.status);
          setHasProfile(false);
          return;
        }

        const data = await response.json();

        if (data && typeof data.exists === "boolean") {
          setHasProfile(data.exists);
        } else {
          console.error("Invalid response format:", data);
          setHasProfile(false);
        }
      } catch (error) {
        console.error("Error checking profile:", error);
        setHasProfile(false);
      }
    };

    checkProfile();
  }, [address]);

  return (
    <>
      {address && isCheckedIn && (
        <div className="flex items-center">
          {hasProfile ? (
            <Link href={`/builders/${address}`}>
              <UserCircleIcon className="h-5 w-5 text-gray-500 hover:text-secondary cursor-pointer" />
            </Link>
          ) : (
            <div className="tooltip tooltip-bottom" data-tip="No builder page yet">
              <UserCircleIcon className={`h-6 w-6 text-gray-300 cursor-not-allowed`} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
