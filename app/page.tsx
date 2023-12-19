import Link from "next/link";
import LandingHeader from "@/components/LandingHeader";
import MainSection from "@/components/MainSection";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <>
      <LandingHeader />

      {/* <div className="flex flex-col">
        <strong>Main page</strong>
        <Link href="/twitter">Go to twitter card</Link>
      </div> */}
      <main className="relative w-full h-screen overflow-auto">
        <div className="snap-start">
          <MainSection />
        </div>
        <div className="snap-start">
          <SecondSection />
        </div>
      </main>
    </>
  );
}
