import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="/back">Treino A</Link>
        <Link href="/chest">Treino B</Link>
        <Link href="/legs">Treino C</Link>
        <Link href="/arms">Treino D</Link>
        <Link href="/sholders">Treino E</Link>
      </div>
    </main>
  );
}
