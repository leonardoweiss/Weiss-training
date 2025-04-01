import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="treino/a">Treino A</Link>
        <Link href="treino/b">Treino B</Link>
        <Link href="treino/c">Treino C</Link>
        <Link href="treino/d">Treino D</Link>
        <Link href="treino/e">Treino E</Link>
      </div>
    </main>
  );
}
