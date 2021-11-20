import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Link href='/'>
                    <a>
                        <Menu.Item header>D-events</Menu.Item>
                    </a>
                </Link>
            </Container>
        </Menu>

        // <header className={styles.navbar}>
        //     <div className={styles.logo}>
        //         <Link href='/'>
        //             <a>Events</a>
        //         </Link>
        //     </div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link href='/events'>
        //                     <a>Events</a>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>

        // </header>
    );
}
