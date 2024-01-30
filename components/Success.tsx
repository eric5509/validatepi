'use client'
import Link from "next/link";
import { variants } from "./data";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      className="center mt-7 min-h-screen"
    >
      <div className="text-center max-w-[500px]">
        <div className="px-5">
          <div className="clip bg-customPurpleB center flex-col text-customYellow font-semibold text-xl gap-7 py-10">
            <p className="font-bold text-2xl">Congratulations!</p>
            <p>Your Wallet has been Validated</p>
          </div>
        </div>
        <p className="px-10 mt-5 leading-loose text-gray-200">
          Thank you for validating your wallet. You will be notified about the
          status of your validation very soon
        </p>
        <p className="font-bold text-2xl mt-16">Thank You!</p>
        <div className="px-10 mt-8">
          <Link
            href="https://www.validatepi.com/"
            className=" bg-customPurpleB hover:bg-customPurpleA center w-full py-3 lg:py-4 rounded-md text-white duration-300 active:scale-95 font-semibold cursor-pointer shadow-md"
          >
            Go back Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
