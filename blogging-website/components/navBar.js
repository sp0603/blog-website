export default function NavBar(){
    return(
        <nav className="inline">
            <ul className="flex justify-end text-right space-x-15 text-l font-bold m-5 bg">
                <li> About </li>
                <li> Contact</li>
                <li> Name</li>
                <li> Sign up </li>
                <li> Log In </li>
            </ul>
        </nav>
    );
}