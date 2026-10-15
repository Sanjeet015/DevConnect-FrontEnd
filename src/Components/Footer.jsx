import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4 sm:py-5 transition-colors">
      <div className="flex flex-col items-center gap-3 px-4">
        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 text-center font-medium">
          Made with ❤️ by Sanjeet Soni
        </p>

        <div className="flex items-center gap-6 text-lg sm:text-xl">
          <a
            href="https://github.com/Sanjeet015"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sanjeet-soni/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;