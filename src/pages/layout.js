import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
            </nav>
            {children}
        </div>
    );
}
