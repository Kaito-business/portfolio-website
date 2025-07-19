"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, featured = false }) => {
  const handleExternalClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    planned: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  };

  const statusLabels = {
    completed: '完了',
    'in-progress': '進行中',
    planned: '計画中'
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group ${
        featured ? 'border-2 border-blue-500 dark:border-blue-400' : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      {/* プロジェクト画像 */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            {project.title.substring(0, 2)}
          </div>
        </div>
        
        {/* ステータスバッジ */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
            {statusLabels[project.status]}
          </span>
        </div>

        {/* フィーチャードバッジ */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* ホバー時のオーバーレイ */}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      {/* プロジェクト情報 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Tag size={16} className="text-gray-400" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.category}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full flex items-center space-x-1"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* 完了日 */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{project.completedAt.toLocaleDateString('ja-JP')}</span>
        </div>

        {/* アクションボタン */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleExternalClick(e, project.demoUrl!)}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
            >
              <ExternalLink size={16} />
              <span>デモ</span>
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleExternalClick(e, project.githubUrl)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
          >
            <Github size={16} />
            <span>コード</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;