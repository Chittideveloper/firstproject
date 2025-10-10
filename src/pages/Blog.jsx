// src/pages/Blog.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SocialMedia from "@/components/SocialMedia";
import { blogPosts, categories } from '@/lib/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0] || blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 text-center bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">GPS Technology Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert insights on GPS tracking, fleet management, and geospatial technology solutions transforming industries across India
            </p>
            <nav aria-label="Blog categories">
              <ul className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <li key={category}>
                    <Button
                      variant={category === selectedCategory ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={category === selectedCategory}
                    >
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-4 py-16" aria-labelledby="featured-article">
          <div className="max-w-7xl mx-auto">
            <article className="overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={`Featured: ${featuredPost.title}`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{featuredPost.category}</span>
                    <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                    {/* <span>{featuredPost.readTime}</span> */}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 pb-16 bg-secondary/50" aria-labelledby="latest-articles">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h2 id="latest-articles" className="text-3xl md:text-4xl font-bold text-gradient mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">Stay updated with the latest trends in GPS technology</p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mb-2 inline-block w-fit">{post.category}</span>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm text-muted-foreground">
                         <div className="flex items-center gap-1"><User className="w-4 h-4" />{post.author.split(' ')[0]}</div>
                         <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</div>
                      </div>
                    </CardContent>
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

export default Blog;