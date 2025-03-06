export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return(
        <main className="fopnt-work-sans">

            {children}
        </main>
    )
}