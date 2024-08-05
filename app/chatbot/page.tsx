"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Chatbot = () => {
  return (
    <motion.div
      className="min-h-screen bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-24 rounded-2xl">
        <div className="text-black text-4xl font-sans font-bold">
          Chatbot
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;
