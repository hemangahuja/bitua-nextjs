import { useState } from "react";


function Price({multiplier}){
    const [amount, setAmount] = useState(0);
    const handleChange = (event) =>{
        // check if the value is a number
        if(!isNaN(event.target.value)){
            setAmount(event.target.value);
        }
    }
    return (
        <div>
                <input type="text" name = "price" onChange = {handleChange}/>

            <span>{ amount * multiplier }</span>
        </div>
    )
}
export default Price;