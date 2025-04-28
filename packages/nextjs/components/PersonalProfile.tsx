import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const PersonalProfile = () => {
  const { address } = useAccount();

  const [hasProfile, setHasProfile] = useState(false);

  // Check if profile exists when address changes
  useEffect(() => {
    const checkProfile = async () => {
      if (!address) {
        setHasProfile(false);
        return;
      }

      try {
        // Use the correct API endpoint format for App Router
        const response = await fetch(`/api/check-profile-exists?address=${address}`);

        if (!response.ok) {
          console.error("Error checking profile - HTTP error:", response.status);
          setHasProfile(false);
          return;
        }

        const data = await response.json();

        // Check if the data includes the expected property
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
      {address && (
        <div className="flex items-center">
          {hasProfile ? (
            <Link href={`/builders/${address}`}>
              <UserCircleIcon className="h-6 w-6 text-gray-500 hover:text-secondary cursor-pointer" />
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
