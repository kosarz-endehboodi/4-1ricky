import { useEffect } from "react"
import { useState } from "react"

export default function useLocal(key, initialState) {
    const [value, setvalue] = useState(() => JSON.parse(localStorage.getItem(key)) || initialState)
    //localstorage uses
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setvalue]

}
 //cart,light & dark mode,save mode and chooki info