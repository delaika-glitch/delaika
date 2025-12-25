"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const meteorCount = number || 20;
  const meteors = new Array(meteorCount).fill(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random values only on client side
  const getRandomDelay = (idx: number) => {
    if (!mounted) return "0s";
    // Use index as seed for consistent randomness per meteor
    const seed = idx * 0.618033988749; // Golden ratio for better distribution
    return ((Math.sin(seed * 1000) * 0.5 + 0.5) * 5) + "s";
  };

  const getRandomDuration = (idx: number) => {
    if (!mounted) return "5s";
    const seed = idx * 0.618033988749;
    return Math.floor((Math.sin(seed * 2000) * 0.5 + 0.5) * 5 + 5) + "s";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px", // Start above the container
              left: position + "px",
              animationDelay: getRandomDelay(idx),
              animationDuration: getRandomDuration(idx),
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
