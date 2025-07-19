"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '@/data/sampleData';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const highlights = [
    {
      icon: '🎯',
      title: 'ユーザー中心設計',
      description: 'ユーザビリティを重視し、直感的で使いやすいインターフェースの設計を心がけています。'
    },
    {
      icon: '⚡',
      title: 'パフォーマンス最適化',
      description: '高速で効率的なアプリケーションの構築に取り組み、最適なユーザー体験を提供します。'
    },
    {
      icon: '🔧',
      title: 'モダンな技術スタック',
      description: '最新の技術トレンドを積極的に学習し、プロジェクトに適用しています。'
    },
    {
      icon: '🤝',
      title: 'チームワーク',
      description: 'チームでの開発経験を活かし、効果的なコミュニケーションと協力を重視しています。'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* セクションタイトル */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              私についてもう少し詳しくご紹介します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側: プロフィール画像とクイック情報 */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* メイン画像 */}
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center text-white text-8xl font-bold"
                  >
                    {personalInfo.name.charAt(0)}
                  </motion.div>
                  
                  {/* フローティング要素 */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-yellow-400 text-white p-3 rounded-full shadow-lg"
                  >
                    ⚡
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                  >
                    💻
                  </motion.div>
                </div>

                {/* クイック情報 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">開発経験年数</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">完了プロジェクト</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右側: 詳細情報 */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {personalInfo.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {personalInfo.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  新しい技術を学ぶことに情熱を持ち、常にスキルアップを心がけています。
                  品質の高いコードを書くことはもちろん、チームでの協力やコミュニケーションも大切にしています。
                  ユーザーにとって価値のあるプロダクトを作ることが私の目標です。
                </p>
              </div>

              {/* 所在地情報 */}
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-xl">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* 特徴・強み */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              私の強み
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;