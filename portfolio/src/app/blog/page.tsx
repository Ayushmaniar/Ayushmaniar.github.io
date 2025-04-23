'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Multi-agent Collaboration in AI: The Future of Complex Problem Solving",
    excerpt: "How multiple AI agents can work together to solve problems that are too complex for single agents.",
    date: "April 15, 2025",
    slug: "multi-agent-collaboration",
    tags: ["AI Agents", "Research", "Collaboration"],
  },
  {
    id: 2,
    title: "From Data to Decisions: My Journey at Walmart",
    excerpt: "Reflections on my experience as a Data Scientist at Walmart and the lessons I learned along the way.",
    date: "April 10, 2025",
    slug: "data-to-decisions",
    tags: ["Data Science", "Career", "Walmart"],
  },
  {
    id: 3,
    title: "The Evolution of Deep Learning: Past, Present, and Future",
    excerpt: "Exploring how deep learning has evolved over the years and what we might expect in the coming decade.",
    date: "April 5, 2025",
    slug: "evolution-of-deep-learning",
    tags: ["Deep Learning", "AI", "Research"],
  },
];

export default function Blog() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Create a separate ref for each blog post
  const postRefs = blogPosts.map(() => useInView({
    triggerOnce: true,
    threshold: 0.1,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header */}
        <motion.section 
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Thoughts, ideas, and insights on AI, deep learning, and data science.
            </p>
          </div>
        </motion.section>
        
        {/* Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => {
                // Access ref and inView directly from the useInView hook result
                return (
                  <motion.article 
                    key={post.id}
                    ref={postRefs[index][0]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={postRefs[index][1] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>5 min read</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-purple-600 dark:text-purple-400 font-medium">
                          Read more &rarr;
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to receive new blog posts and updates directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
