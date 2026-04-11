import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <div className="badge-pill mx-auto mb-6">
              <Tag className="w-4 h-4" />
              Blog AD Scale
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Conteúdo sobre{" "}
              <span className="text-gradient">Contingência Meta Ads</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Artigos, guias e estratégias para escalar suas campanhas no Meta Ads com segurança e infraestrutura profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="section-card group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;