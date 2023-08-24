import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <strong>Main page</strong>
        <Link href="/twitter">Go to twitter card</Link>
      </div>
    </>
  );
}
