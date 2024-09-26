import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="tai/back">Treino A</Link>
        <Link href="tai/chest">Treino B</Link>
        <Link href="tai/legs">Treino C</Link>
        <Link href="tai/arms">Treino D</Link>
        <Link href="tai/sholders">Treino E</Link>
      </div>
    </main>
  );
}
