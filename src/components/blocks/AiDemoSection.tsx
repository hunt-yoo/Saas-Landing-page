import { useState, useEffect } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { Loader2, Image as ImageIcon, MessageSquare, Key, Sparkles } from "lucide-react";

export function AiDemoSection() {
  const [activeTab, setActiveTab] = useState<"image" | "text">("image");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const keySelected = await window.aistudio.hasSelectedApiKey();
        setHasKey(keySelected);
      } else {
        setHasKey(!!process.env.GEMINI_API_KEY);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      try {
        await window.aistudio.openSelectKey();
        setHasKey(true); // Assume success to mitigate race condition
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult(null);

    try {
      // Create a new instance right before the call to ensure it uses the latest key
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("API key is missing");
      const ai = new GoogleGenAI({ apiKey });

      if (activeTab === "image") {
        const response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-image-preview',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
              imageSize: "1K"
            }
          }
        });

        let foundImage = false;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setResult(`data:image/png;base64,${base64EncodeString}`);
            foundImage = true;
            break;
          }
        }
        if (!foundImage) {
          setResult("No image was generated. Please try a different prompt.");
        }
      } else {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: prompt,
          config: { 
            thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH } 
          }
        });
        setResult(response.text || "No response generated.");
      }
    } catch (error: any) {
      console.error("Generation error:", error);
      setResult(error.message || "An error occurred during generation. Please try again.");
      if (error.message?.includes("Requested entity was not found")) {
        setHasKey(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative z-10" id="ai-demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive AI Playground</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Axiom AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Test our next-generation models directly in your browser. Generate high-fidelity images or solve complex reasoning tasks.</p>
        </div>

        <GlassCard className="max-w-4xl mx-auto p-6 md:p-8" glow>
          {!hasKey ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center mx-auto mb-6">
                <Key className="w-10 h-10 text-[#8A2BE2]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">API Key Required</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                To use the advanced Gemini 3.1 models for image generation and complex reasoning, please select your Google Cloud API key.
                <br/><br/>
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-[#00F0FF] hover:underline text-sm">Learn about billing requirements</a>
              </p>
              <Button onClick={handleSelectKey} variant="primary" size="lg">
                Select API Key
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex gap-4 border-b border-white/10 pb-4">
                <button
                  onClick={() => { setActiveTab("image"); setResult(null); setPrompt(""); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === "image" ? "bg-[#00F0FF]/20 text-[#00F0FF]" : "text-gray-400 hover:text-white"}`}
                >
                  <ImageIcon className="w-4 h-4" /> Image Generation
                </button>
                <button
                  onClick={() => { setActiveTab("text"); setResult(null); setPrompt(""); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === "text" ? "bg-[#8A2BE2]/20 text-[#8A2BE2]" : "text-gray-400 hover:text-white"}`}
                >
                  <MessageSquare className="w-4 h-4" /> Complex Reasoning
                </button>
              </div>

              <div className="space-y-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={activeTab === "image" ? "Describe an image to generate (e.g., A futuristic city with flying cars at sunset, cyberpunk style)..." : "Ask a complex question that requires deep reasoning (e.g., Explain quantum entanglement to a 5-year-old)..."}
                  className="w-full h-32 bg-[#05050A]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00F0FF]/50 transition-colors resize-none"
                />
                
                <div className="flex justify-end">
                  <Button onClick={handleGenerate} disabled={loading || !prompt} variant="primary">
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                    ) : (
                      <><Sparkles className="w-4 h-4" /> Generate</>
                    )}
                  </Button>
                </div>
              </div>

              {result && (
                <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Result</h4>
                  {activeTab === "image" ? (
                    result.startsWith("data:image") ? (
                      <img src={result} alt="Generated" className="w-full rounded-xl border border-white/10 shadow-2xl" referrerPolicy="no-referrer" />
                    ) : (
                      <p className="text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">{result}</p>
                    )
                  ) : (
                    <div className="prose prose-invert max-w-none bg-[#05050A]/50 p-6 rounded-xl border border-white/10 text-gray-300 leading-relaxed">
                      <p className="whitespace-pre-wrap">{result}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
