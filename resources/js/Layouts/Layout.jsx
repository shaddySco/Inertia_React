import { Link } from '@inertiajs/react'

export default function Layout({children}){
    return(
        <>
        <header>
            <nav>
                <Link className="nav-link" href="/">Homee</Link>
                <Link className="nav-link" href="/create">Create</Link>
            </nav>
        </header>

        <main>{children}</main>
        </>
    )
}