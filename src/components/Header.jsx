export function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-b border-line">
      <nav className="page-wrap relative flex min-h-[70px] items-center justify-between sm:min-h-[84px]" aria-label="Main navigation">
        <a className="font-display text-[1.35rem] font-bold tracking-[-0.08em]" href="#top" onClick={closeMenu}>AF<span className="text-[#829d18]">.</span></a>
        <button className="block border-0 bg-transparent font-mono text-xs font-bold sm:hidden" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
          Menu <span>{menuOpen ? "×" : "+"}</span>
        </button>
        <div id="nav-links" className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-20 flex-col gap-5 border-b border-line bg-paper p-5 text-sm font-bold sm:static sm:flex sm:flex-row sm:items-center sm:gap-9 sm:border-0 sm:bg-transparent sm:p-0`}>
          <a className="text-[#5d655f] transition-colors hover:text-[#829d18]" href="#work" onClick={closeMenu}>Selected work</a>
          <a className="text-[#5d655f] transition-colors hover:text-[#829d18]" href="#about" onClick={closeMenu}>About</a>
          <a className="border border-ink px-[18px] py-[13px] text-center transition-colors hover:bg-ink hover:text-paper" href="mailto:adilprogrammer73@gmail.com">Let&apos;s talk <span className="ml-3">↗</span></a>
          <div className="flex gap-5">
            <a target="_blank" href="https://github.com/CodeAndCofe"><img className="w-8" src="githubz.png" alt="github link" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/adil-ferryat-90a931297/"><img className="w-8" src="linkedin.png" alt="linkedin link" /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
