function Button({cor, texto, func}){
    return(
        <button 
            className={`bg-${cor ? cor : 'blue'}-500 hover:bg-${cor ? cor : 'blue'}-600 duration-200 rounded-md px-4 py-2 w-full font-semibold text-white hover:drop-shadow-md`}
            onClick={func}
        >
            {texto}
        </button>
    )
}
export default Button