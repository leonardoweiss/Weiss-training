import Link from "next/link";

export default function Footer({change}) {
    return(
        <footer>    
            <Link href='/'>
                <i className="fa-solid fa-house"></i>
                <div>Início</div>
            </Link>        
            <Link href='/treino'>
                <i className="fa-solid fa-dumbbell"></i>
                <div>Progresso</div>
            </Link>
            <Link href='/treino'>
                <i class="fa-solid fa-user"></i>
                <div>Perfil</div>
            </Link>
            <Link href='/treino' className="plus">
                <i class="fa-solid fa-plus"></i>
            </Link>
        </footer>
    )
}