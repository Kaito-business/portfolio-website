"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data/sampleData';
import { SkillCategory } from '@/types';
import CircularProgress from './CircularProgress';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const categories: { key: SkillCategory; label: string; icon: string }[] = [
    { key: 'frontend', label: 'フロントエンド', icon: '🎨' },
    { key: 'backend', label: 'バックエンド', icon: '⚙️' },
    { key: 'database', label: 'データベース', icon: '🗄️' },
    { key: 'devops', label: 'DevOps', icon: '🚀' },
    { key: 'design', label: 'デザイン', icon: '✨' },
    { key: 'other', label: 'その他', icon: '🛠️' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

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

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            スキル・技術スタック
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            これまでに習得した技術スキルと経験年数を表示しています。
            各カテゴリをクリックして詳細をご確認ください。
          </motion.p>
        </motion.div>

        {/* カテゴリタブ */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* スキル表示 */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      経験: {skill.experience}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mb-4">
                <CircularProgress
                  percentage={skill.level}
                  color={skill.color}
                  animate={isInView}
                  delay={index * 0.1}
                />
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  関連プロジェクト: {skill.projects.length}件
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* スキル統計 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: '総スキル数', value: skills.length, icon: '📊' },
            { label: '平均スキルレベル', value: Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length) + '%', icon: '📈' },
            { label: '習得カテゴリ', value: new Set(skills.map(s => s.category)).size, icon: '🎯' },
            { label: '総プロジェクト数', value: new Set(skills.flatMap(s => s.projects)).size, icon: '🚀' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;