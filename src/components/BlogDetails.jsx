// src/pages/BlogDetails.jsx

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Search, ArrowRight, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import SocialMedia from '@/components/SocialMedia';
import { blogPosts } from '@/lib/blogData';
import { HashLink } from "react-router-hash-link";

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Find the current post based on the URL slug
    const currentPost = blogPosts.find(p => p.slug === slug);
    setPost(currentPost);

    // If the post is found, find related posts
    if (currentPost) {
      const related = blogPosts.filter(p =>
        p.category === currentPost.category && p.id !== currentPost.id
      ).slice(0, 3);
      setRelatedPosts(related);
    }

    // Scroll to the top of the page on navigation
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl">Blog post not found or is loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* HERO: All data comes from the `post` object */}
        <section className="relative h-96 pt-24 flex items-center justify-center text-center text-white px-4">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl">
            <Link to="/blog" className="bg-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block hover:bg-primary transition-colors">
              Blog
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>By {post.author}</span></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><time dateTime={post.date}>{post.date}</time></div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ARTICLE BODY: The `post.content` is rendered here */}
            <article className="lg:col-span-2 prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-blockquote:text-muted-foreground hover:prose-a:underline">
              {post.content}
              <div className="mt-12 pt-8 border-t flex flex-wrap items-center gap-4 not-prose">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground"><Share2 className="w-5 h-5" /> Share This Post:</h3>
                <div className="flex gap-2">
                  <a href="#" aria-label="Share on Facebook" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Facebook className="w-5 h-5 text-muted-foreground" /></a>
                  <a href="#" aria-label="Share on Twitter" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Twitter className="w-5 h-5 text-muted-foreground" /></a>
                  <a href="#" aria-label="Share on LinkedIn" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Linkedin className="w-5 h-5 text-muted-foreground" /></a>
                </div>
              </div>
            </article>

            {/* SIDEBAR: Static and dynamic elements */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative"><input type="text" placeholder="Type to start searching..." className="w-full pl-4 pr-10 py-2 border rounded-md bg-background" /><Search className="w-5 h-5 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2" /></div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 4).map(p => (
                    <li key={p.id}><Link to={`/blog/${p.slug}`} className="group"><h4 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h4><p className="text-sm text-muted-foreground">{p.date}</p></Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-500/10 p-6 rounded-lg text-center border border-primary-500/20">
                <h3 className="text-xl font-bold text-primary-600 mb-2">Need help choosing the right solution?</h3>
                <p className="text-muted-foreground mb-4">Our experts are here to help you find the perfect GPS solution.</p>
                <HashLink smooth to="/#contact">
                  <Button size="lg" className="rounded-full">
                    Contact Us
                  </Button>
                </HashLink>
              </div>
            </aside>
          </div>
        </section>

        {/* RELATED POSTS: Dynamically calculated */}
        <section className="py-16 px-4 bg-secondary/50" aria-labelledby="related-articles">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12"><h2 id="related-articles" className="text-3xl md:text-4xl font-bold">You may also like</h2></header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" /></div>
                    <div className="p-6">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mb-2 inline-block">{p.category}</span>
                      <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mt-1">{p.excerpt}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
      <SocialMedia />
    </div>
  );
};

export default BlogDetails;