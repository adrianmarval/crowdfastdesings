'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex items-center rounded-full border border-black/10 bg-black/5 p-1 opacity-50 dark:border-white/10 dark:bg-white/5">
        <div className="h-7 w-7" />
        <div className="h-7 w-7" />
      </div>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .theme-pill-animated {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `,
        }}
      />
      <div className="relative inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/5 p-1 dark:border-white/10 dark:bg-white/5">
        <div
          className="theme-pill-animated absolute left-1 h-7 w-7 rounded-full bg-white shadow-sm dark:bg-white/20"
          style={{
            transform: currentTheme === 'dark' ? 'translateX(calc(100% + 4px))' : 'translateX(0)',
          }}
        />
        <Button
          variant="ghost"
          onClick={() => setTheme('light')}
          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
            currentTheme === 'light' ? 'text-black dark:text-white' : 'text-gray-500 hover:text-black dark:hover:text-white'
          }`}
          aria-label="Light mode"
        >
          <Sun size={14} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setTheme('dark')}
          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
            currentTheme === 'dark' ? 'text-black dark:text-white' : 'text-gray-500 hover:text-black dark:hover:text-white'
          }`}
          aria-label="Dark mode"
        >
          <Moon size={14} />
        </Button>
      </div>
    </>
  );
}
