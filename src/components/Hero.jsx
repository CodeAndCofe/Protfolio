import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section className="page-wrap grid items-center gap-12 py-16 sm:py-20 lg:min-h-[630px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[60px] lg:py-24">
      <div>
        <SectionLabel><span className="mr-2 inline-block size-[7px] rounded-full bg-[#91b41e] align-middle shadow-[0_0_0_4px_#dfeabd]" />Junior full-stack developer <span className="mx-2 text-[#b2b8b1]">/</span> Tangier, Morocco</SectionLabel>
        <h1 className="my-7 max-w-[700px] font-display text-[clamp(3.3rem,8vw,7rem)] font-bold leading-[.88] tracking-[-0.095em] sm:text-[clamp(4rem,8vw,7.6rem)]">I make the web<br /><em className="not-italic text-[#829d18]">make sense.</em></h1>
        <p className="mb-8 max-w-[470px] text-[.95rem] leading-[1.8] text-[#69736d] sm:text-base">I am Adil Ferryat, a developer trained at 1337 Coding School. I build thoughtful interfaces and the reliable systems behind them.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a className="inline-flex min-w-[178px] items-center justify-between rounded-[3px] bg-ink px-5 py-4 text-xs font-extrabold text-paper transition-transform hover:-translate-y-1" href="#work">Explore my work <span className="ml-3 text-base">↓</span></a>
          <a className="border-b border-ink pb-1 text-xs font-extrabold transition-colors hover:text-[#829d18]" href="/full.pdf" target="_blank" rel="noopener">Open résumé <span className="ml-3">↗</span></a>
        </div>
      </div>
      <div className="relative flex min-h-[325px] items-center justify-center sm:min-h-[380px]">
        <div className="grid-paper absolute inset-0 left-[15%] opacity-55" />
        <div className="relative z-10 w-full max-w-[390px] rotate-2 rounded bg-deep p-5 text-[#eef0e6] shadow-[20px_25px_0_rgba(28,40,35,.11)]">
          <div className="flex justify-between border-b border-white/15 pb-4 font-mono text-[.65rem] text-[#a2ada5]"><span>profile.ts</span><span className="text-[.5rem] tracking-[3px] text-[#84931a]">● ● ●</span></div>
          <pre className="mt-5 overflow-x-auto font-mono text-[.67rem] leading-7 sm:text-[.72rem]"><span className="text-[#68766c]">01</span> <span className="text-lime">const</span> adil = {`{`}{"\n"}<span className="text-[#68766c]">02</span>   focus: <span className="text-[#e9b16f]">&quot;full-stack products&quot;</span>,{"\n"}<span className="text-[#68766c]">03</span>   foundation: <span className="text-[#e9b16f]">&quot;C / C++ / Linux&quot;</span>,{"\n"}<span className="text-[#68766c]">04</span>   currently: <span className="text-[#e9b16f]">&quot;React + Node.js&quot;</span>,{"\n"}<span className="text-[#68766c]">05</span>   available: <span className="text-[#9bd4b0]">true</span>{"\n"}<span className="text-[#68766c]">06</span> {`};`}</pre>
        </div>
        <div className="absolute bottom-0 right-0 z-20 grid size-[82px] rotate-[-10deg] place-content-center rounded-full bg-lime font-mono text-[.56rem] font-bold leading-tight tracking-[.09em] text-ink sm:size-[91px]">BUILD<br />WITH<br /><span className="text-[#718813]">INTENT</span></div>
        <div className="absolute bottom-[-18px] left-0 font-mono text-[.67rem] text-muted">01 <span className="mx-2 text-[#b3b8af]">/</span> 04</div>
      </div>
    </section>
  );
}
