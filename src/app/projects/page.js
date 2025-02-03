
// Client-side routing
import Link from "next/link";
import Astroboy from "@/components/Astroboy";

export default function Projects() {
  return (
    <>
      {/* dark:text-white */}
      <div>
        <h1>Projects</h1>
      </div>
      <br />
      <div className="flex flex-col [&_p]:py-4">
        <hr className="border-t-2 border-[#6e006a]" />
        <br/>
        {/* should have a component here to sit project section JSX in wells */}
        <h2>Astroboy</h2>
        <p>Simple side scroller written in 6502 assembly. Check it out with the emulator below.</p>
        <div className="flex justify-between p-2 border-2 rounded-xl border-white bg-white">
          <Astroboy/>
        </div>
        <br/>
        <p>Check out the source on github (hyperlink)</p>
        <p>Check out the emulator (hyperlink)</p>
        {/* */}
        <hr className="border-t-2 border-[#6e006a]" />
        <p>WELL 1: Click here to see this source!</p>
        <p>WELL 2: Click here to play Astroboy!</p>
        <p>WELL 3: Click here to try out AIChefBot!</p>
      </div>
    </>
  );
}
