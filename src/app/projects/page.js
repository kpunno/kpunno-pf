// Client-side routing
import Astroboy from "@/components/Astroboy";

export default function Projects() {
  return (
    <div>
      {/* dark:text-white */}
      <div>
        <h1 className="pb-2 text-[#1f1f1f]">Projects</h1>
        <hr className="border-t-2 border-[#BBB]" />
        <hr className="border-t-2 border-[#BBB]" />
      </div>
      <div className="flex flex-col [&_p]:py-2">
        <hr className="invisible py-2"/>
        <hr className="invisible py-2" />
        {/* Astroboy Section */}
        <h2 id="astroboy">Astroboy</h2>
        <p>
          2D game written with the 6502 instruction set.&nbsp;
          <span className="hide-on-mobile">
            Check it out with the emulator below.
          </span>
        </p>
        <hr className="invisible py-2"/>
        <div className="flex-row m-1 border-2 rounded-xl border-[#AFAFAF] bg-[#F0FAFF] .bg-stripe hide-on-mobile">
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
          <span className="italic text-[14px]">*Keyboard required to run Astroboy. No touchscreen! Sorry :(</span>
        </p>
        <hr className="invisible py-2"/>

        {/* AIChefBot section */}
        <hr className="invisible py-2" />
        <hr className="border-t-2 border-[#BBB]" />
        <hr className="border-t-2 border-[#BBB]" />
        <hr className="invisible py-2" />
        <hr className="invisible py-2" />
        <h2 id="aichefbot">AIChefBot</h2>
        <p>
          AIChefBot is a dynamic recipe generation assistant that aims to please by considering your dietary restrictions.<br/>
        </p>
        <p>Integrated with OpenAI's API.</p>
        <hr className="invisible py-2"/>
        <div className="flex-row m-1 border-2 rounded-xl border-[#AFAFAF] bg-[#F0FAFF] .bg-stripe hide-on-mobile">
          <div className="px-5 py-2">
            <iframe src="https://ai-chef-bot.vercel.app" className="w-[100%] h-[48rem]"></iframe>
            <p>If some functionalities are unavailable, follow the links below to the full version.</p>
          </div>
          <hr className="invisible py-2"/>
        </div>
        <p>
          <a
            className="text-[#905000] underline hover:text-[#C0A000]"
            href="https://github.com/rjwignar/AIChefBot"
            target="_blank"
          >
            Source code on GitHub.
          </a>
        </p>
        <ul className="list-disc">
              Co-authors:
              <li className="mx-4">
                Roy J. Wignarajah
              </li>
              <li className="mx-4">
                J.P. Ostiano
              </li>
              <li className="mx-4">
                Joey Walton
              </li>
            </ul>
      </div>
    </div>
  );
}
