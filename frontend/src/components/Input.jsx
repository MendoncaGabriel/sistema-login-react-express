import { useState, useEffect } from "react"

function Input({label, onChange, type, alertInput}){
    const [alert, setAlert] = useState(false)

    useEffect(()=>{
        setAlert(alertInput)
    }, [alertInput])

    return(
        <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-600">{label}:</label>
            <input 
                onChange={onChange} 
                type={type ? type : "text"} 
                className={`${alert && "border-red-500 text-red-500"} border px-4 py-2 rounded-md outline-none focus:shadow-md bg-white`} 
            />
        </div>
    )
}

export default Input