"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/data/sampleData';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.socialLinks.github,
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800'
    },
    {
      icon: Linkedin,
      href: personalInfo.socialLinks.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Twitter,
      href: personalInfo.socialLinks.twitter,
      label: 'Twitter',
      color: 'hover:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-green-600 bg-green-50 dark:bg-green-900/20'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装ではAPIに送信）
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 3秒後にリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            お問い合わせ
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            プロジェクトのご相談や質問がございましたら、お気軽にご連絡ください。
            できるだけ早くお返事いたします。
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左側: 連絡先情報 */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                連絡先情報
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      メールアドレス
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <MapPin className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      所在地
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                SNS・その他
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  if (!link.href) return null;
                  
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${link.color}`}
                    >
                      <IconComponent size={24} />
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* 右側: 連絡フォーム */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                メッセージを送る
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    送信完了！
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    メッセージを受信しました。近日中にご返信いたします。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        お名前 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="山田太郎"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        メールアドレス *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      件名 *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="プロジェクトのご相談"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      メッセージ *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-vertical"
                      placeholder="お気軽にメッセージをお送りください..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>メッセージを送信</span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;