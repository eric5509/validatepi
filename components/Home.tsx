"use client";
import { BiCheckCircle, BiSolidCheckCircle, BiWallet } from "react-icons/bi";
import { BsCheck2Circle, BsCheckCircle, BsWallet } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";
import { motion } from "framer-motion";
import { variants } from "./data";
import Link from "next/link";

export default function Home() {
 

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      className="center mt-7"
    >
      <div className="max-w-[500px]">
        <p className="text-center font-semibold mt-6 text-lg">
          Validate your wallet
        </p>
        <p className="px-10 text-center text-sm mt-5">
          According to Pi Ecosystem, all Pioneers are required to Validate their
          Wallet to helo strengthen the Mainnet Ecosystem
        </p>
        <div className="flex gap-10 justify-center mt-10 mb-20 items-center">
          <SlWallet className="text-[90px]" />
          <BiSolidCheckCircle className="text-green-500 text-[90px]" />
        </div>
        <div className="px-12 mt-7">
          <Link href='/validate' className="bg-customPurpleA hover:bg-purple-700 center w-full py-3 lg:py-4 rounded-md text-white duration-300 active:scale-95 shadow-md font-semibold text-sm">
            Validate Now
          </Link>
        </div>
        
      </div>
    </motion.div>
  );
}
