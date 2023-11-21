function Header() {
    return (
        <header className="flex items-center justify-between py-8 w-2/3 m-auto">
            <div className="flex items-center gap-8">
                <div>
                    <a className="text-xl font-bold uppercase" href="/">Gringa</a>
                </div>
                <nav>
                    <ul className="flex items-center gap-6">
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
            <div className="flex items-center gap-6">
                <a className="font-medium text-zinc-700 hover:text-black duration-150" href="#">Contacto</a>
                <a href="#"><img className="w-[20px]" src="/carrito.png" alt="Carrito" /></a>
            </div>
        </header>
    )
}

export default Header