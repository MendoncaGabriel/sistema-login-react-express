import { SiAuth0 } from "react-icons/si";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function Login(){
    const navigate = useNavigate()
    const [form, setFom] = useState({})
    const [alertInput, setAlertInput] = useState(false)

    const handleChangeUser = (event) => {
        setFom({...form, user: event.target.value})
    }

    const handleChangePass = (event) => {
        setFom({...form, pass: event.target.value})
    }

    const checkForm = () => {
        if(!form.user || form.user.length == 0 || !form.pass || form.pass.length == 0){
            console.log(form)
            setAlertInput(true)
            return false
        }else{
            setAlertInput(false)
            return true
        }
    }

    const handleButtonLogin = async () => {
        const check = checkForm()
        if(check == false) {
            return alert("Preencha o formulário de login")
        }else{

            const res = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    user: form.user,
                    pass: form.pass
                })
            })
    
            const data = await res.json()
            localStorage.setItem("token", data.token)
            navigate("/home")
        }
       
    }

    const handleButtonCreateAcconunt = () =>{
        navigate("/register")
    }
   
    return (
        <>
            <section className="bg-gray-400 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-10 w-96 space-y-5">
                    <div className="flex items-center space-x-2">
                        <SiAuth0 className="text-2xl" />
                        <h1 className="text-gray-600 text-xl font-semibold">Bem vindo (a)!</h1>
                    </div>
                    
      
                    <Input label={"Usuário"} onChange={handleChangeUser} alertInput={alertInput}/>
                    <Input label={"Senha"} onChange={handleChangePass} type={"password"} alertInput={alertInput} />

                    <div className="flex flex-col">
                        <Button  texto={"Entrar"} func={handleButtonLogin} />
                    </div>
                    <p>Não tem uma conta?, <button onClick={handleButtonCreateAcconunt} className="font-semibold text-blue-500">Criar Conta</button></p>
                </div>
            </section>
        </>
    )
}

export default Login