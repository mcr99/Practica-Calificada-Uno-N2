function Header(dark) {
    function changeToDarkMode(){
    document.documentElement.classList.toggle("dark")
    }
    return(
        <header className="relative max-w-100 sm:max-w-200">
            <button className="absolute right-1 -top-1 p-3 text-4xl sm:right-20" onClick={changeToDarkMode}>
                <p className="dark:hidden">☾</p>
                <p className="hidden dark:block">☼</p>
            </button>
            <section className="sm:flex sm:justify-between">
                <h1 className="py-8 px-3 text-3xl font-bold">The Creative Crew</h1>
                <div className="px-10 py-10 sm:w-[50%]">
                    <h2 className="font-bold">Who we are</h2>
                    <p className="text-sm">We are team of creatively diverse. driven. innovative individuals working in various locations from the world</p>
                </div>
            </section>
        </header>
    );
}

export default Header;