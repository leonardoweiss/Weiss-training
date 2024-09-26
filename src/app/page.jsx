import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="/ana">Ana/Léo</Link>
        <Link href="/tai">Tai</Link>
      </div>
    </main>
  );
}
