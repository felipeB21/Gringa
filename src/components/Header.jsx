function Header() {
    return (
        <header className="flex items-center justify-between py-12 w-2/3 m-auto">
            <div className="flex items-center gap-8">
                <div>
                    <a className="text-xl font-bold uppercase" href="/">Gringa</a>
                </div>
                <nav>
                    <ul className="sm:flex hidden items-center gap-6">
                        <li className="relative"><button className="flex items-center gap-1 font-medium text-zinc-700 hover:text-black duration-150">Categoria<img className="w-[20px]" src="/down.png" alt="down-arrow" /></button></li>
                        <ul className="absolute mt-[165px] bg-slate-200 backdrop-blur-2xl hidden flex-col gap-2 px-4 py-2 rounded shadow-md">
                            <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="">Overzise</a></li>
                            <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="">Buzos</a></li>
                            <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="">Remeras</a></li>
                            <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="">Pantalones</a></li>
                        </ul>
                        <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="#">Tienda</a></li>
                        <li><a className="font-medium text-zinc-700 hover:text-black duration-150" href="#">Ofertas</a></li>
                    </ul>
                </nav>
            </div>
            <div className="md:flex hidden items-center gap-6">
                <a className="font-medium text-zinc-700 hover:text-black duration-150" href="#">Contacto</a>
                <a href="#"><img className="w-[22px]" src="/carrito.png" alt="Carrito" /></a>
            </div>
            <div className="flex items-center md:hidden">
                <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
</svg></button>
            </div>
        </header>
    )
}

export default Header