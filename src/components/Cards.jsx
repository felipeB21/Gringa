function Cards(props) {
    return (
        <div className="inline-block">
            <a href={props.url}>
                <img className="2xl:w-80 xl:w-60 lg:w-52 w-48" src={props.image} alt="img" />
                <div className="mt-2">
                    <p className="font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">{props.discount} Off</p>
                    <h2 className="text-lg font-medium">{props.name}</h2>
                    <p className="text-gray-600 font-medium">{props.desc}</p>
                    <div>
                        <p className="font-medium">$ {props.price}</p>
                    </div>
                    
                </div>
            </a>
        </div>
    )
}

export default Cards