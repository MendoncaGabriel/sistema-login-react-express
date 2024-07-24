import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../components/Button"

function Home(){
    const navigate = useNavigate()
    const [msg, setMsg] = useState("Bem Vindo so Sistema!")
    const [hiddenBtn, setHiddenBtn] = useState(false)

    const handleSair = () =>{
        setMsg("Até mais!!!")
        setHiddenBtn(true)

        setTimeout(() => {           
            localStorage.removeItem("token")
            navigate("/login")
        }, 2000);
    }

    return (
        <>
            <section className="bg-gray-500 min-h-screen flex items-center justify-center">
                <div className="flex items-center flex-col space-y-4">
                    <h1 className="text-white font-bold text-4xl ">{msg}</h1>

                    <div className={`${hiddenBtn && "hidden"}`}>
                        <Button func={handleSair} texto={"Sair"}/>

                    </div>

             
                </div>
            </section>
        </>
    )
}

export default Home