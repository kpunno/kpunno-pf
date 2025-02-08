// Client-side routing
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* dark:text-white, bg-charcoal */}
      <div>
        <h1 className="pb-2 text-[#1f1f1f]">Kristjan Punno</h1>
        <hr className="border-t-2 border-[#ddc000]" />
        <hr className="border-t-2 border-[#ddc000]" />
      </div>
      <hr className="invisible py-2"/>
      <div>
        <p>
          Hey, I'm Kristjan. I guess this is my website.<br/>
          Check out some demo projects through the sidepanel, or contact me via the links below.
        </p>
        <br/>
        <p>
          <br/>
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="mailto:k.punno@gmail.com"
            target="_blank"
          >k.punno@gmail.com</a><br/>
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="https://www.linkedin.com/in/kristjan-punno-68a873296/"
            target="_blank"
          >LinkedIn</a><br/>
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="https://github.com/kpunno"
            target="_blank"
          >GitHub</a>
        </p>
        <br/>
      </div>
    </>
  );
}
