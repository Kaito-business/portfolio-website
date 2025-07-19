"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tag, Clock, CheckCircle } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

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

  const statusIcons = {
    completed: CheckCircle,
    'in-progress': Clock,
    planned: Tag
  };

  const StatusIcon = statusIcons[project.status];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* ヘッダー */}
          <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${statusColors[project.status]}`}>
                    <StatusIcon size={14} />
                    <span>{statusLabels[project.status]}</span>
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Tag size={16} />
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{project.completedAt.toLocaleDateString('ja-JP')}</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          {/* コンテンツ */}
          <div className="p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 左側: 詳細情報 */}
              <div className="space-y-6">
                {/* 概要 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    プロジェクト概要
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* 詳細説明 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    詳細説明
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* アクションボタン */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.demoUrl && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleExternalClick(project.demoUrl!)}
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>ライブデモを見る</span>
                    </motion.button>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleExternalClick(project.githubUrl)}
                    className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <Github size={20} />
                    <span>GitHub で見る</span>
                  </motion.button>
                </div>
              </div>

              {/* 右側: 技術スタックと画像 */}
              <div className="space-y-6">
                {/* プロジェクト画像 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    プレビュー
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-50">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                </div>

                {/* 技術スタック */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    使用技術
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.02 }}
                        className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center space-x-3"
                      >
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {tech.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {tech.category}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* プロジェクト統計 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    プロジェクト情報
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {project.technologies.length}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        使用技術数
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {project.images.length}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        スクリーンショット
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;