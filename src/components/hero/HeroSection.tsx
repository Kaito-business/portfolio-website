"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '@/data/sampleData';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      personalInfo.title,
      'React Developer',
      'TypeScript Enthusiast',
      'UI/UX Designer'
    ];
    const type = () => {
      const currentString = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentString.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D背景 */}
      <ParticleBackground />
      
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 opacity-90" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* 挨拶 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              こんにちは、私は
            </motion.div>

            {/* 名前 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            >
              {personalInfo.name}
            </motion.h1>

            {/* タイピングアニメーション */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400"
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.h2>
            </div>

            {/* 説明文 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>お問い合わせ</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>履歴書ダウンロード</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 右側: プロフィール画像 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* 背景の装飾 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-20"
              />

              {/* プロフィール画像 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-8 rounded-full bg-gray-200 dark:bg-gray-700 shadow-2xl overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  {personalInfo.name.charAt(0)}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;