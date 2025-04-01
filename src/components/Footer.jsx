import Link from "next/link";

export default function Footer({change}) {
    return(
        <footer>            
            <Link href=''><i className="fa-solid fa-dumbbell"></i></Link>
            <Link href='/'><i className="fa-solid fa-house"></i></Link>
            <button type="button"><i className="fa-solid fa-moon"></i></button>
        </footer>
    )
}