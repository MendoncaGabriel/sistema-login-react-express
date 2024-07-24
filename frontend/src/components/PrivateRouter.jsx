import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function PrivateRouter({page}){
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    }, [token, navigate])

    return token ? page : null
}
export default PrivateRouter