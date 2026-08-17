"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  Calendar,
  Plus,
  X,
  Mail,
  CheckCircle,
  Radio,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    title:
      "Bootstrap vs Tailwind CSS: Real Project Experience as a Student Developer",
    excerpt:
      "Real-world comparison of Bootstrap and Tailwind CSS from a student developer's perspective, exploring pros, cons, and practical applications.",
    date: "July 22, 2025",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*PCokWlV6Oda4VAYPNQsHeQ.jpeg",
    link: "https://medium.com/@khubaibxkhan/%EF%B8%8F-bootstrap-vs-tailwind-css-real-project-experience-as-a-student-developer-b650b3c5dc47",
    author: {
      name: "Khubaib Ahmad Khan",
      avatar: "/members/me.jpg",
      platform: "Medium",
    },
  },
  {
    title: "SSH Remote Port Forwarding (with Reverse Shell example)",
    excerpt:
      "Deep dive into SSH remote port forwarding techniques with practical reverse shell examples for network security professionals.",
    date: "July 11, 2025",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6f-TzrUCDb8AZPvlKneHeA.png",
    link: "https://medium.com/@mfarazkhan2002/ssh-remote-port-forwarding-with-reverse-shell-example-47583783ccdf",
    author: {
      name: "Faraz Khan",
      avatar: "/members/faraz.jpg",
      platform: "Medium",
    },
  },
  {
    title: "Software Development Best Practices",
    excerpt:
      "Software development is a dynamic field that requires a deep understanding of technology and user needs. Explore best practices and methodologies.",
    date: "August 31, 2024",
    image:
      "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog3.23190b6c716c35396daf.jpeg",
    link: "https://khaliquehussain.hashnode.dev/software-development",
    author: {
      name: "Khalique Hussain",
      avatar: "/members/khalique.jpg",
      platform: "Hashnode",
    },
  },
  {
    title: "Understanding DevOps: The Future of IT",
    excerpt:
      "In the ever-evolving IT landscape, DevOps is rapidly gaining traction. Explore what DevOps means and its key aspects for modern development.",
    date: "August 31, 2024",
    image:
      "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog4.7b6b861b97e8e5622841.avif",
    link: "https://hashnode.com/post/cm0i7yhxm000609jqcd6ee2ch",
    author: {
      name: "Hamza",
      avatar: "/members/hamza_rizvi.jpg",
      platform: "Hashnode",
    },
  },
  {
    title: "GitHub Student Developer Pack Guide",
    excerpt:
      "GitHub offers a special programme for students. Learn why GitHub is essential for students and how to apply for the Student Developer Pack.",
    date: "April 6, 2024",
    image:
      "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog6.ce5d98eb0d7569c671fd.png",
    link: "https://tauqeerahmad.hashnode.dev/get-your-github-student-developer-pack",
    author: {
      name: "Tauqeer Ahmad",
      avatar: "/members/tauqeer.jpg",
      platform: "Hashnode",
    },
  },
  {
    title: "Android Development for Beginners",
    excerpt:
      "Welcome to the exciting world of Android development, where you'll learn to create mobile apps from scratch in a fun and approachable way.",
    date: "March 10, 2024",
    image:
      "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/blog5.4b1facd22f8fba7555f0.webp",
    link: "https://medium.com/@syedaasif009/a-playful-dive-into-android-development-for-beginners-080b0fe33ce2",
    author: { name: "Md Aasif", avatar: "/md-aasif4.jpg", platform: "Medium" },
  },
  {
    title: "Navigating Microsoft Azure CLI",
    excerpt:
      "Welcome to Azure CLI! As cloud computing revolutionizes application development, having Azure CLI in your toolkit is essential for success.",
    date: "January 28, 2024",
    image:
      "https://tezosjamiahamdard.github.io/TezosWebsite/static/media/Blog2.3ab1727ef0a455dc59c7.avif",
    link: "https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli",
    author: {
      name: "Tauqeer Husaain",
      avatar: "/members/tauqeer.jpg",
      platform: "Hashnode",
    },
  },
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    date: "",
    image: "",
    link: "",
    authorName: "",
    authorEmail: "",
    platform: "Medium",
  });

  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogs;
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const featured = !searchTerm ? filteredBlogs[0] : null;
  const rest = !searchTerm ? filteredBlogs.slice(1) : filteredBlogs;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailBody = `
Hi Khubaib,

A new blog has been submitted for review on your website:

AUTHOR: ${formData.authorName} (${formData.authorEmail})
TITLE: ${formData.title}
PLATFORM: ${formData.platform}
DATE: ${formData.date}
URL: ${formData.link}
IMAGE: ${formData.image || "Not provided"}

DESCRIPTION:
${formData.excerpt}

Submitted: ${new Date().toLocaleString()}
      `.trim();

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=khubaibxkhan22@gmail.com&su=${encodeURIComponent(
        `New Blog Submission: ${formData.title}`,
      )}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailUrl, "_blank");

      setIsSubmitting(false);
      setShowSuccessMessage(true);
      setFormData({
        title: "",
        excerpt: "",
        date: "",
        image: "",
        link: "",
        authorName: "",
        authorEmail: "",
        platform: "Medium",
      });
      setShowSubmissionForm(false);
      setTimeout(() => setShowSuccessMessage(false), 4000);
    } catch (error) {
      console.error("Error submitting blog:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white relative selection:bg-[#2C7DF7] selection:text-white">
      <Navbar />

      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          className="fixed top-24 right-6 z-50 bg-[#08080c]/95 backdrop-blur-xl border border-[#00E5FF]/25 rounded-2xl p-4 flex items-center gap-4 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
        >
          <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-[#00E5FF]" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Blog Submitted!</p>
            <p className="text-gray-400 text-xs">
              Gmail opened with your submission details.
            </p>
          </div>
        </motion.div>
      )}

      <section className="spotlight-zone relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="scan-line inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-6">
              <Radio size={12} className="text-[#00E5FF]" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#9fe8ff] uppercase">
                Community Insights
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              From The <span className="text-tezos-gradient">Devs</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Tutorials, deep-dives, and honest write-ups from people actually
              building — not marketing copy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all backdrop-blur-xl"
                />
              </div>
              <button
                onClick={() => setShowSubmissionForm(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#020204] font-semibold rounded-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <Plus className="w-4 h-4" /> Submit Article
              </button>
            </div>
          </div>

          {/* Featured post — magazine layout, only shown when not searching */}
          {featured && (
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="gradient-border group block relative rounded-[1.75rem] overflow-hidden mb-8"
            >
              <div className="relative z-10 grid md:grid-cols-2 bg-[#08080c] rounded-[1.75rem] overflow-hidden border border-white/[0.06]">
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#08080c] via-transparent to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="w-fit px-3 py-1 mb-5 rounded-full bg-[#2C7DF7]/10 border border-[#2C7DF7]/25 text-[11px] font-mono tracking-widest text-[#9fe8ff] uppercase">
                    Featured · {featured.author.platform}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#9fe8ff] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {featured.author.name}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {featured.date}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-[#00E5FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.a>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((blog, index) => (
              <motion.a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="gradient-border group relative rounded-[1.5rem] overflow-hidden flex flex-col"
              >
                <div className="relative z-10 bg-[#08080c] rounded-[1.5rem] overflow-hidden border border-white/[0.06] flex-1 flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/20 to-transparent opacity-80" />
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-gray-300 uppercase">
                      {blog.author.platform}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-white/[0.05]">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {blog.author.name}
                        </p>
                        <p className="text-[10px] text-gray-500 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" /> {blog.date}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-base font-bold text-white group-hover:text-[#9fe8ff] transition-colors line-clamp-2 leading-snug mb-2.5">
                      {blog.title}
                    </h2>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4 flex-1">
                      {blog.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 group-hover:text-[#00E5FF] transition-colors mt-auto w-fit">
                      Read article
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 bg-white/[0.01] border border-white/[0.05] border-dashed rounded-[2rem] max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/[0.02] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2 tracking-tight">
                No articles found
              </h3>
              <p className="text-gray-500">Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submission Modal */}
      <AnimatePresence>
        {showSubmissionForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020204]/85 backdrop-blur-2xl z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#08080c] border border-white/[0.08] rounded-[1.75rem] shadow-[0_0_80px_rgba(44,125,247,0.15)] w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-white/[0.06] flex items-center justify-between shrink-0">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Publish <span className="text-tezos-gradient">Article</span>
                </h2>
                <button
                  onClick={() => setShowSubmissionForm(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto scrollbar-hide">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.authorName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            authorName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.authorEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            authorEmail: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all"
                      placeholder="Building decentralized applications..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Short Excerpt *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.excerpt}
                      maxLength={200}
                      onChange={(e) =>
                        setFormData({ ...formData, excerpt: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all resize-none"
                      placeholder="Brief summary of your article (max 200 characters)"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Platform *
                      </label>
                      <select
                        required
                        value={formData.platform}
                        onChange={(e) =>
                          setFormData({ ...formData, platform: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#2C7DF7] transition-all appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.2em",
                        }}
                      >
                        <option value="Medium" className="bg-[#08080c]">
                          Medium
                        </option>
                        <option value="Hashnode" className="bg-[#08080c]">
                          Hashnode
                        </option>
                        <option value="Dev.to" className="bg-[#08080c]">
                          Dev.to
                        </option>
                        <option value="Personal Blog" className="bg-[#08080c]">
                          Personal Blog
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Publish Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#2C7DF7] transition-all [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Article URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.link}
                      onChange={(e) =>
                        setFormData({ ...formData, link: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Cover Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#2C7DF7] focus:ring-1 focus:ring-[#2C7DF7] transition-all"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmissionForm(false)}
                      className="flex-1 px-6 py-3.5 bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] text-white font-medium rounded-xl transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 relative px-6 py-3.5 bg-white text-[#020204] font-semibold rounded-xl overflow-hidden hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          <span>Opening Mail...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Submit for Review</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    This will open your default email client with details
                    pre-filled.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
