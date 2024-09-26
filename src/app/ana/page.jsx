import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="ana/back">Treino A</Link>
        <Link href="ana/chest">Treino B</Link>
        <Link href="ana/legs">Treino C</Link>
        <Link href="ana/arms">Treino D</Link>
        <Link href="ana/sholders">Treino E</Link>
      </div>
    </main>
  );
}
