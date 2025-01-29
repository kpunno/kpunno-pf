
// Client-side routing
import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/* dark:text-white */}
      <div className="px-[2rem] py-20">
        <div>
          <h1 className="leading-none text-[4rem]">projects</h1>
        </div>
        <br />
        <div className="flex flex-col [&_p]:py-4">
          <p>WELL 1: Click here to see this source!</p>
          <p>WELL 2: Click here to play Astroboy!</p>
          <p>WELL 3: Click here to try out AIChefBot!</p>
        </div>
      </div>
    </>
  );
}
