
export default function ButtonCom({message, children, handle}){

    return (
        <>
            <button onClick={() => handle({message})}>
                {children}
            </button>
        </>
    )
}