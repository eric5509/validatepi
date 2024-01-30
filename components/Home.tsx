"use client";
import { BsCheck } from "react-icons/bs";
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
        <p className="text-center font-bold mt-6 text-xl">
          Validate your wallet
        </p>
        <p className="px-8 text-center text-gray-200 text-base mt-5">
          According to Pi Ecosystem, all Pioneers are required to Validate their
          Wallet to helo strengthen the Mainnet Ecosystem
        </p>
        <div className="flex gap-10 justify-center mt-12 mb-24 items-center">
          <SlWallet className="text-[90px]" />
          <div className="h-[85px] w-[85px] bg-green-500 center rounded-full text-white"><BsCheck className="text-[90px]"/></div>
        </div>
        <div className="px-12 mt-7">
          <Link href='/validate' className="bg-customPurpleA hover:bg-customPurpleB center w-full py-3 lg:py-4 rounded-md text-white duration-300 active:scale-95 shadow-md font-semibold text-sm">
            Validate Now
          </Link>
        </div>
        
      </div>
    </motion.div>
  );
}
