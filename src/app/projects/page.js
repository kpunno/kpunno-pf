// Client-side routing
import Astroboy from "@/components/Astroboy";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      {/* dark:text-white */}
      <div>
        <h1 className="pb-2">Projects</h1>
      </div>
      <div className="flex flex-col [&_p]:py-2">
        <hr className="border-t-2 border-[#ddc000]" />
        <hr className="border-t-2 border-[#ddc000]" />
        {/* should have a component here to sit project section JSX in wells */}
        <hr className="invisible py-2"/>
        <h2>Astroboy</h2>
        <p>
          2D game written with the 6502 instruction set.&nbsp;
          <span className="hide-on-mobile">
            Check it out with the emulator below.
          </span>
        </p>
        <hr className="invisible py-2"/>
        <div className="flex-row m-1 border-2 rounded-xl border-[#AFAFAF] bg-[#F0FAFF] hide-on-mobile">
          <div className="px-5 py-2">
            <p>
              You are the cyan pixel, astroboy. Try to avoid the incoming
              invaders by scrolling up and down! Press <b>start</b> to
              initialize the game. Press <b>S</b> to start the onslaught. (takes
              a second to assemble)
            </p>
            <ul className="list-disc">
              Controls:
              <li className="mx-4">
                <b>W</b> -- move up
              </li>
              <li className="mx-4">
                <b>S</b> -- move down
              </li>
            </ul>
          </div>
          <div className="px-5">
            <Astroboy />
          </div>
          <hr className="invisible py-2"/>
        </div>
        <p>
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="https://github.com/kpunno/astroboy"
            target="_blank"
          >
            Source code on GitHub.
          </a>
          &nbsp; Simulator and assembler adapted from&nbsp;
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="https://github.com/skilldrick/6502js"
            target="_blank"
          >
            skilldrick 6502js.
          </a>
          <br/>
          <span className="italic text-[14px]">*Keyboard required to run Astroboy.</span>
        </p>
        <hr className="invisible py-2"/>
        {/* */}
        <hr className="border-t-2 border-[#ddc000]" />
        <hr className="border-t-2 border-[#ddc000]" />
        <p>WELL 1: Click here to see this source!</p>
        <p>WELL 2: Click here to play Astroboy!</p>
        <p>WELL 3: Click here to try out AIChefBot!</p>
      </div>
    </div>
  );
}
