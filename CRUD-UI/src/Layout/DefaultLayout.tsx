import { Link } from "react-router-dom";
import { useAuth } from "../auth/authProvider";
import { Modal } from "reactstrap";

interface DefaultLayoutProps {
    children: React.ReactNode;
}
export default function DefaultLayout({children}: DefaultLayoutProps) {
    const auth = useAuth();
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li>
                            <Link onClick={auth.logout} to='/'>Log out</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}