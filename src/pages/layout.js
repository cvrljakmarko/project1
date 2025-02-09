import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            {children}
        </div>
    );
}
