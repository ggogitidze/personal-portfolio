import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 flex flex-col items-center justify-center bg-background/80 border-t border-accent/10 text-foreground/70 text-sm">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span>&copy; {new Date().getFullYear()} Giorgi Gogitidze. All rights reserved.</span>
        <span className="hidden sm:inline mx-2">|</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="https://www.linkedin.com/in/giorgigogitidze/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/ggogitidze" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="mailto:gogitidzegiorgi1@outlook.com" className="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
} 