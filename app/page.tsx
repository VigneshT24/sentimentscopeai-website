import { Button } from "@/components/ui/button"
import { TerminalWindow } from "@/components/terminal-window"
import Link from "next/link"
import { Package, Github, Shield, BarChart3, Cpu, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                src="/ssai_website_logo.png" 
                alt="SentimentScopeAI Logo" 
                className="h-17 w-auto object-contain" 
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quickstart</a>
              <a href="#credits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Credits</a>
              <a 
                href="https://github.com/VigneshT24/SentimentScopeAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='launchpage' className="relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
                <span className="text-[#5964eb]">Stop </span>Drowning in Reviews. <span className="text-[#5964eb]">Start </span>Fixing Your Business.
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                By leveraging our advanced CLI-based NLP pipeline, instantly process thousands of reviews to extract and frequency-rank the exact operational failures from your customer reviews that is impacting your valuable company.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                
                {/* PyPI Link Wrapper */}
                <a href="https://pypi.org/project/sentimentscopeai/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Install via PyPI
                  </Button>
                </a>

                {/* GitHub Link Wrapper */}
                <a href="https://github.com/VigneshT24/SentimentScopeAI" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
                
              </div>
            </div>

            {/* Right Content - Terminal */}
            <div className="lg:pl-8 flex justify-center lg:justify-end">
              {/* The scale-110 makes it 10% bigger, scale-125 makes it 25% bigger */}
              <div className="relative scale-110 md:scale-200 transform origin-center lg:origin-right">
                
                {/* Glow Effect */}
                <div className="absolute -inset-6 bg-[#5964eb]/30 rounded-2xl blur-3xl opacity-60 pointer-events-none" />
                
                <TerminalWindow 
                  command="pip install sentimentscopeai" 
                  title="Terminal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground"><span className="text-[#5964eb]">SentimentScopeAI</span> is built for speed & convenience</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Zero cloud latency. Zero infrastructure headaches. 
              Process thousands of reviews natively on your own hardware with a simple, drop-in Python package.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Optimized NLP Engine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Powered by optimized transformer models that run entirely on your CPU or GPU.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Privacy as Priority</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Run natively. Store locally. SentimentScopeAI never trains on your customer feedback. 
                All analysis happens on your hardware, delivering insights straight to your own JSON files.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ranked Insights</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Automatically clusters and ranks issues by frequency. Focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart Section */}
      <section id="quickstart" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <span className="text-[#5964eb]">Simple </span>CLI, <span className="text-[#5964eb]">Powerful </span>Results
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get started with just a few lines of Python. Our intuitive CLI makes it easy to analyze reviews and extract important insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Hardware-optimized batch processing (via batch_size)</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Pull raw reviews directly via Yelp URL</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Initialize with your local JSON and business context</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">example.py</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-accent">from</span> sentimentscopeai <span className="text-accent">import</span> SentimentScopeAI{"\n\n"}
                  <span className="text-muted-foreground/60"># Pass a JSON file, company name, and service name</span>{"\n"}
                  analyzer = SenitmentScopeAI("companyreviews.json", "X", "Y"){"\n\n"}
                  <span className="text-muted-foreground/60"># Load your reviews from Yelp if needed</span>{"\n"}
                  analyzer.import_yelp_reviews(<span className="text-green-400">{'"yelp.com/biz/company-service-name"'}</span>){"\n\n"}
                  <span className="text-muted-foreground/60"># Generate the summary</span>{"\n"}
                  print(analyzer.generate_summary(batch_size=8)){"\n\n"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Bio & Links */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built by <span className="text-[#5964eb]">Vignesh Thondikulam</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a Robotics major specializing in artificial intelligence and natural language processing. SentimentScopeAI was built to give developers a secure, hardware-accelerated CLI alternative to expensive cloud APIs.
              </p>
              {/* Social Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/VigneshT24" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                  >
                    <Github className="w-4 h-4 mr-2 text-black" />
                    Follow on GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/vignesh-thondikulam/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                  >
                    <Linkedin className="w-4 h-4 mr-2 text-black" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="lg:pl-8 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect (Matched to your custom purple/blue) */}
                <div className="absolute -inset-6 bg-[#5964eb]/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
                
                <img 
                  src="/profile.jpeg" 
                  alt="Vignesh Thondikulam" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-border shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

{/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* 1. Left Section (Forces equal width) */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="flex items-center gap-2">
                {/* Optional: You can drop your new mini-icon in here! */}
                <span className="font-medium text-foreground">SentimentScopeAI</span>
              </div>
            </div>

            {/* 2. Center Section (Navigation) */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#launchpage" className="hover:text-foreground transition-colors">Launch Page</a>

              <Link href="/legalnotice" className="hover:text-foreground transition-colors">Legal Notice</Link>
              
              <a 
                href="https://github.com/VigneshT24/SentimentScopeAI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              
              <a 
                href="https://pypi.org/project/sentimentscopeai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                PyPI
              </a>
            </div>

            {/* 3. Right Section (Forces equal width) */}
            <div className="flex-1 flex justify-center md:justify-end">
              <p className="text-sm text-muted-foreground text-center md:text-right">
                © 2026 SentimentScopeAI. MIT License.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </main>
  )
}
