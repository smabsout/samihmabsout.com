import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      © {new Date().getFullYear()} {site.name}. All rights reserved.
    </footer>
  );
}
