import Link from "next/link";

export default function Footer() {
    return(
        <footer>            
            <i className="fa-solid fa-dumbbell"></i>
            <Link href='/'><i className="fa-solid fa-house"></i></Link>
            <button type="button"><i className="fa-solid fa-moon"></i></button>
        </footer>
    )
}