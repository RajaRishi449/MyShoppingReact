import { useContext } from "react"
import {themeContext} from '../contexts/theme'
import { counterContext } from "../contexts/counter"

function Themebutton(){
    const {Theme, toggleTheme}=useContext(themeContext)
    
    return(
        <>
        <button onClick={toggleTheme} className="btn btn-primary btn-custom">{Theme}</button>
        </>
    )
}
export default Themebutton