"use client";

// Client-side routing
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* dark:text-white, bg-charcoal */}
      <div className="flex items-center space-x-14">
        <h1 className="pb-2 text-[#1f1f1f]">Kristjan Punno</h1>
        {/* Icon? */}
        <img className="h-[6rem] w-[6rem]" src="./favicon.ico" alt="Kristjan's icon" />
      </div>

      <hr className="invisible py-2" />
      <hr className="invisible py-2" />
      
      <div>
        <div>
          <h2 className="pb-2 text-[#1f1f1f]">Projects</h2>
          <hr className="border-t-2 border-[#BBB] w-[50%]" />
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
      </div>
    </>
  );
}
