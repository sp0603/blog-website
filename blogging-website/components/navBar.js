import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="inline">
            <ul className="flex justify-end text-right space-x-15 text-l font-bold m-5 bg">
                <li className="hover:text-pink-600"><Link href="/about">About</Link></li>
                <li className="hover:text-pink-600"><Link href="/contact">Contact</Link></li>
                <li className="hover:text-pink-600"><Link href="/"> Echo</Link></li>
                <li className="hover:text-pink-600"><Link href="/signup">Sign up</Link></li>
                <li className="hover:text-pink-600"><Link href="/login"> Log In</Link></li>
            </ul>
        </nav>
    );
}