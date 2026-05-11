"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface TerminalWindowProps {
  command: string
  title?: string
}

export function TerminalWindow({ command, title = "Terminal" }: TerminalWindowProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-border bg-card overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground font-mono">{title}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-secondary"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 bg-card">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-accent select-none">$</span>
          <span className="text-foreground">{command}</span>
          <span className="w-2 h-5 bg-accent animate-pulse ml-0.5" />
        </div>
      </div>
    </div>
  )
}
