import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="links">
        <Link href="/treino">Treino</Link>
      </div>
      {/* <div className="imc">
        <span>seu peso</span><input type="text"/> <br/>
        <span>sua altura</span><input type="text"/>
      </div> */}
    </main>
  );
}
