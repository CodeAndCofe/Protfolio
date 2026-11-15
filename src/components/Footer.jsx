export function Footer() {
  return <footer className="page-wrap flex min-h-[75px] flex-wrap items-center justify-between gap-5 py-5 font-mono text-[.62rem] text-muted max-sm:min-h-[110px]"><span>© {new Date().getFullYear()} Adil Ferryat</span><span className="max-sm:order-3 max-sm:w-full">Made with care / Tangier → everywhere</span><a className="text-ink transition-colors hover:text-[#829d18]" href="https://github.com/CodeAndCofe" target="_blank" rel="noopener">GitHub ↗</a></footer>;
}
