import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const StatusIndicators = () => {
  const { address } = useAccount();
  const [hasProfile, setHasProfile] = useState(false);

  const { data: isBatchMember, isLoading: isLoadingMember } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: checkedInContractAddress, isLoading: isLoadingCheckIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

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

  const isCheckedIn =
    checkedInContractAddress && checkedInContractAddress !== "0x0000000000000000000000000000000000000000";

  if (!address) return null;
  if (isLoadingMember || isLoadingCheckIn) {
    return (
      <div className="flex items-center gap-1">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="tooltip tooltip-bottom" data-tip={isBatchMember ? "Batch Member" : "Not a Batch Member"}>
        <div className="flex items-center gap-1">
          {isBatchMember ? (
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      {isBatchMember && (
        <div className="tooltip tooltip-bottom" data-tip={isCheckedIn ? "Checked In" : "Not Checked In"}>
          <div className="flex items-center gap-1">
            {isCheckedIn ? (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      )}
      {isCheckedIn &&
        (hasProfile ? (
          <Link href={`/builders/${address}`}>
            <UserCircleIcon className="h-5 w-5 text-gray-500 hover:text-secondary cursor-pointer" />
          </Link>
        ) : (
          <div className="tooltip tooltip-bottom" data-tip="No builder page yet">
            <UserCircleIcon className={`h-6 w-6 text-gray-300 cursor-not-allowed`} />
          </div>
        ))}
    </div>
  );
};
