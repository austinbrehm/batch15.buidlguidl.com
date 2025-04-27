"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import styles from "~~/styles/PersonalPage.module.css";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const PersonalPage: React.FC = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address: address, chainId: 1 });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined, chainId: 1 });
  const [avatarError, setAvatarError] = useState(false);

  const name = "Sir Coderin";
  const title = "Aspiring Web3 Developer";
  const bio =
    "Hi, everyone. My name is Codrin and I've been a Web 2 developer for 5 year now. I am looking forward to get my hands on as many projects as possible to see what web 3 can truly light up in me, so thank you for organizing this! It is greatly appreciated.";
  const localAddress = "Coderin's DeFi Castle";

  const socialLinks: SocialLink[] = [{ name: "GitHub", url: "https://github.com/sircoderin", icon: "📁" }];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.profile}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.profile__avatar}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
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
            <div className={styles.profile__avatarPlaceholder}>{name.charAt(0)}</div>
          )}
        </motion.div>

        <motion.div
          className={styles.profile__bio}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className={styles.profile__name}>{name}</h1>
          <h2 className={styles.profile__title}>{title}</h2>
          <p className={styles.profile__description}>{bio}</p>

          <div className={styles.profile__contact}>
            <motion.p
              className={styles.profile__contactItem}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              📍 {localAddress}
            </motion.p>
          </div>

          <div className={styles.profile__social}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className={styles.socialLink__icon}>{link.icon}</span>
                <span className="name">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalPage;
