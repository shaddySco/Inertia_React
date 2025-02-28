export default function Layout({children}){
    return(
        <>
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/create">Create</a>
            </nav>
        </header>

        <main>{children}</main>
        </>
    )
}