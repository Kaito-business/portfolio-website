"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/sampleData';
import { ProjectCategory } from '@/types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const categories: { key: ProjectCategory | 'all'; label: string; icon: string }[] = [
    { key: 'all', label: 'すべて', icon: '🌟' },
    { key: 'web-app', label: 'Webアプリ', icon: '🌐' },
    { key: 'mobile-app', label: 'モバイルアプリ', icon: '📱' },
    { key: 'library', label: 'ライブラリ', icon: '📚' },
    { key: 'tool', label: 'ツール', icon: '🛠️' },
    { key: 'other', label: 'その他', icon: '🎯' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
            プロジェクト
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            これまでに手がけたプロジェクトの一部をご紹介します。
            各プロジェクトをクリックして詳細をご確認ください。
          </motion.p>
        </motion.div>

        {/* フィルターボタン */}
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
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                filter === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* フィーチャードプロジェクト */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              ⭐ フィーチャードプロジェクト
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project.id)}
                    featured={true}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* その他のプロジェクト */}
        {otherProjects.length > 0 && (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {featuredProjects.length > 0 && (
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              >
                その他のプロジェクト
              </motion.h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project.id)}
                    featured={false}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* プロジェクト統計 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { 
              label: '総プロジェクト数', 
              value: projects.length, 
              icon: '📊' 
            },
            { 
              label: '完了プロジェクト', 
              value: projects.filter(p => p.status === 'completed').length, 
              icon: '✅' 
            },
            { 
              label: '使用技術数', 
              value: new Set(projects.flatMap(p => p.technologies.map(t => t.name))).size, 
              icon: '🔧' 
            },
            { 
              label: 'フィーチャード', 
              value: projects.filter(p => p.featured).length, 
              icon: '⭐' 
            }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
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

      {/* プロジェクト詳細モーダル */}
      {selectedProject && (
        <ProjectModal
          project={projects.find(p => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;