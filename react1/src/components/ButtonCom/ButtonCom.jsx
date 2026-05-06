import style from "./ButtonCom.module.css"

export default function ButtonCom({message, children}){
    function handleClick(){
        alert(message);
    }

    return (
        <>
            <button onClick={handleClick}>
                {children}
            </button>
        </>
    )
}