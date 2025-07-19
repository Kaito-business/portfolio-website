"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/sampleData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.socialLinks.github,
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: personalInfo.socialLinks.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      href: personalInfo.socialLinks.twitter,
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* プロフィール情報 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              {personalInfo.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              📍 {personalInfo.location}
            </p>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                if (!link.href) return null;
                
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-200`}
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-1"
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;