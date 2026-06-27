function Footer() {
  return (
    <footer
      className="
        border-t
        transition-colors
        duration-300

        bg-white
        border-slate-200

        dark:bg-slate-950
        dark:border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}

          <div>

            <h2 className="text-2xl font-bold text-blue-500">
              Anita.
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              React Native Developer
            </p>

          </div>

          {/* Copyright */}

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Anita Kardam. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;