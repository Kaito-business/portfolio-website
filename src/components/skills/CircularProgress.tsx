"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  percentage: number;
  color: string;
  animate?: boolean;
  delay?: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  color,
  animate = true,
  delay = 0,
  size = 120,
  strokeWidth = 8
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* 背景円 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        
        {/* プログレス円 */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={animate ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{
            duration: 1.5,
            delay,
            ease: "easeInOut"
          }}
        />
      </svg>
      
      {/* パーセンテージテキスト */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            delay: delay + 0.5,
          }}
          className="text-lg font-bold text-gray-900 dark:text-white"
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

export default CircularProgress;