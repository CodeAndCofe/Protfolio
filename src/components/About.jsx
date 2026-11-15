import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section className="border-y border-line bg-soft" id="about">
      <div className="page-wrap grid gap-16 py-24 sm:py-32 lg:grid-cols-2 lg:gap-[90px]">
        <div>
          <SectionLabel>03 / The short version</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[.92] tracking-[-.08em]">
            Built from
            <br />
            <em className="not-italic text-[#829d18]">the ground up.</em>
          </h2>
        </div>
        <div className="max-w-[520px] lg:pt-6">
          <p className="font-display text-[1.2rem] leading-[1.55] tracking-[-.03em]">
            My path started close to the machine and moved steadily toward
            people and products.
          </p>
          <p className="text-[.84rem] leading-[1.9] text-muted">
            At 1337 Coding School, part of the 42 Network, I learned by
            shipping: C and C++, algorithms, memory management, graphics,
            sockets, containers, and finally complete web applications.
          </p>
          <p className="text-[.84rem] leading-[1.9] text-muted">
            That mix helps me ask better questions. I care about how a product
            feels to use, but also about the API, database, networking, and
            deployment choices that make it dependable.
          </p>
          <div className="mt-10 flex gap-[18px] border-t border-line pt-[18px]">
            <span className="font-mono text-[.65rem] text-[#829d18]">01</span>
            <div>
              <strong className="block text-[.8rem]">
                1337 Coding School
              </strong>
              <span className="mt-2 block text-[.68rem] text-muted">
                42 Network · Computer programming · Currently studying
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}