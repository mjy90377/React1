import { useState } from "react"

export default function BtnClick(){
    const [number, setNumber] = useState(0);
    
    function handleIncrease3() {
        setNumber(number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
    }

    function handleIncrease5() {
        setNumber(number + 1);
        alert(number);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleIncrease3}>+3</button>
            <button onClick={handleIncrease5}>+5</button>
        </>
    )
}