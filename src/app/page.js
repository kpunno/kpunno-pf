// Client-side routing
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* dark:text-white, bg-charcoal */}
      <div>
        <h1 className="text-[#1f1f1f]">Kristjan Punno</h1>
      </div>
      <br />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sodales vulputate euismod. Proin condimentum massa urna, non faucibus
          est vestibulum nec. Curabitur id finibus justo. Vivamus facilisis
          hendrerit orci at pharetra. Vestibulum eu magna in quam fringilla
          eleifend quis ut quam. Duis efficitur elementum magna, quis dignissim
          elit gravida vel. Nullam cursus mauris eget tellus consequat ultrices.{" "}
        </p>
      </div>
    </>
  );
}
