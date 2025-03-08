'use client'

// Client-side routing
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* dark:text-white, bg-charcoal */}
      <div>
        <h1 className="pb-2 text-[#1f1f1f]">Kristjan Punno</h1>
        <hr className="border-t-2 border-[#BBB]" />
        <hr className="border-t-2 border-[#BBB]" />
      </div>
      <hr className="invisible py-2" />
      <hr className="invisible py-2" />
      <div>
        <div className="inline-block">
          <h2 className="pb-2 text-[#1f1f1f] inline-block">Projects</h2>
          <hr className="border-t-2 border-[#BBB]" />
        </div>
        <div>
          <p>
            <br />
            <Link
              className="text-[#905000] underline hover:text-[#C0A000]"
              href="./projects#astroboy"
            >
              AstroBoy
            </Link>
            <br />
            <Link
              className="text-[#905000] underline hover:text-[#C0A000]"
              href="./projects#aichefbot"
            >
              AIChefBot
            </Link>
            <br />
          </p>
          <br />
        </div>
        <div>
          <h2 className="pb-2 text-[#1f1f1f]">Social</h2>
          <hr className="border-t-2 w-[20rem] border-[#BBB]" />
        </div>
        <div>
          <p>
            <br />
            <a
              className="text-[#905000] underline hover:text-[#C0A000]"
              href="mailto:k.punno@gmail.com"
              target="_blank"
            >
              k.punno@gmail.com
            </a>
            <br />
            <a
              className="text-[#905000] underline hover:text-[#C0A000]"
              href="https://www.linkedin.com/in/kristjan-punno-68a873296/"
              target="_blank"
            >
              LinkedIn
            </a>
            <br />
            <a
              className="text-[#905000] underline hover:text-[#C0A000]"
              href="https://github.com/kpunno"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
