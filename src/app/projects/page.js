
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
        <Astroboy/>
        <p>WELL 1: Click here to see this source!</p>
        <p>WELL 2: Click here to play Astroboy!</p>
        <p>WELL 3: Click here to try out AIChefBot!</p>
      </div>
    </>
  );
}
