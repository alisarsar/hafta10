import { useContext } from "react"
import SayacKapsam from "./SayacKapsam"

const GizliKomponent = ()=>{
    const {sayac, sayacGuncelle} = useContext(SayacKapsam)

    return (
        <>
            Appteki Sayac değeri: {sayac}
            <button onClick={()=>{sayacGuncelle(eski=>eski+1)}}>+</button>
        </>
    )
}

export default GizliKomponent