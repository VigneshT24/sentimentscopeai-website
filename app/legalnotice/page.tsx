import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>

        {/* Content Box */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          
          <h2 className="text-xl font-semibold mb-4 text-foreground">1. Data Privacy & Local Processing</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This software program utilizes pre-trained Pytorch and HuggingFace Flan-T5 models to process and categorize various sentiments
            presented in customer reviews, in addition to following a two-pass self verification framework. The utilization of these different models 
            are to ensure that sentiment is properly analyzed from each customer review, with high accuracy in mind. As a result, any data from your local JSON
            file is not stored by this program after its runtime, nor is it used to train any models.

          </p>

          <h2 className="text-xl font-semibold mb-4 text-foreground">2. Third-Part Integration</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SentimentScopeAI includes a feature that imports customer reviews from a specific Yelp business, by utilizing Microsoft 
            Playwright MCP. However, we are not affiliated with, endorsed by, or partnered with Yelp Inc., therefore, users are solely responsible 
            for complying with Yelp's Terms of Service and applicable laws. This feature is provided for research and personal use only. 
            Users are responsible for ensuring ethical and appropriate use of this system.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-foreground">3. License & Usage</h2>
          <p className="text-muted-foreground leading-relaxed">
            This software is provided under the MIT License. Users are free to modify and distribute the software, provided the original copyright notice is included.
          </p>

        </div>
      </div>
    </div>
  );
}