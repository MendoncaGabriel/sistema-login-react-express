import { SiAuth0 } from "react-icons/si";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function Register(){
    const navigate = useNavigate()
    const [form, setFom] = useState({})
    const [checkPass, setCheckPass] = useState(true)

    const handleChangeUser = (event) => {
        setFom({...form, user: event.target.value})
    }

    const handleChangePass = (event) => {
        setFom({...form, pass: event.target.value})
    }

    const handleChangeConfimPass = (event) => {
        setFom({...form, confirmPass: event.target.value})
    }

    const handleCreateAccount = async () => {
        const res = await fetch("http://localhost:3001/auth/create", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                user: form.user,
                pass: form.pass
            })
        })
        const data = await res.json()
        localStorage.setItem("token", data.newUsser.token)
        navigate("/home")
    }

    const handleConfirmCreateAcount = () => {
       
        if(form.pass != form.confirmPass){
            setCheckPass(false)
            alert("Senhas não conferem!")
        }else{
            handleCreateAccount()
        }
    }

    const handleButtonRedirectLogin = () => {
        navigate("/login")
    }
   
    return (
        <>
            <section className="bg-gray-400 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-10 w-96 space-y-5">
                    <div className="flex items-center space-x-2">
                        <SiAuth0 className="text-2xl" />
                        <h1 className="text-gray-600 text-xl font-semibold">Crie sua conta</h1>
                    </div>
                    
      
                    <Input label={"Usuário"} onChange={handleChangeUser} />
                    <Input label={"Senha"} onChange={handleChangePass} type={"password"}  alertInput={!checkPass}/>
                    <Input label={"Confirmar senha"} onChange={handleChangeConfimPass} type={"password"} alertInput={!checkPass} />

                    <div className="flex flex-col">
                        <Button  texto={"Criar Conta"} func={handleConfirmCreateAcount} />
                    </div>
                    <p>Já tem uma conta?, <button onClick={handleButtonRedirectLogin} className="font-semibold text-blue-500">Fazer Login</button></p>

                </div>
            </section>
        </>
    )
}

export default Register