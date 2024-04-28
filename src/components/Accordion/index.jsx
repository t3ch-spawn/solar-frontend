import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Accordion({ question, answer }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="rounded-2xl p-4 bg-[#14141880] text-left text-white" layout>
      <button
        onClick={() => setOpen((open) => !open)}
        className="flex w-full justify-between text-base font-bold"
      >
        <span>{question}</span>
        <span
          className={clsx(
            "rounded-[5px] w-6 h-6 transition-all",
            isOpen ? "bg-theme-orange text-white" : "bg-[#0C0C0F] text-theme-orange"
          )}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#BBBBBB] mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
