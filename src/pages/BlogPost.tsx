import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CTASection from "@/components/CTASection";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <article className="pt-28 pb-16 px-4">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <header className="mb-10">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-4">{post.description}</p>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </span>
            </div>
          </header>

          <div className="prose prose-invert prose-green max-w-none 
            prose-headings:font-display prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-table:text-sm
            prose-th:text-foreground prose-th:bg-card prose-th:px-4 prose-th:py-2
            prose-td:text-muted-foreground prose-td:px-4 prose-td:py-2 prose-td:border-border/50
          ">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
              if (line.startsWith("### ")) return <h3 key={i}>{line.slice(4)}</h3>;
              if (line.startsWith("#### ")) return <h4 key={i}>{line.slice(5)}</h4>;
              if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
                if (match) return <li key={i}><strong>{match[1]}</strong> — {match[2]}</li>;
                const match2 = line.match(/- \*\*(.+?)\*\*/);
                if (match2) return <li key={i}><strong>{match2[1]}</strong></li>;
              }
              if (line.startsWith("- ")) return <li key={i}>{line.slice(2)}</li>;
              if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ")) {
                return <li key={i}>{line.slice(3)}</li>;
              }
              if (line.startsWith("|")) return null; // skip table rows for simplicity
              if (line.trim() === "") return <br key={i} />;
              if (line.startsWith("**") && line.endsWith("**")) return <p key={i}><strong>{line.slice(2, -2)}</strong></p>;
              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>

        {/* Related posts */}
        <div className="container max-w-5xl mt-20">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">
            Outros artigos que podem te interessar
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="section-card group hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {related.category}
                </span>
                <h3 className="font-display text-base font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2">{related.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;