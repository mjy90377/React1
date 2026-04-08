export default function Items({name, isPacked}){
    return(
        <li>
            {isPacked ? (
                <del>
                    {name + "☑️"} 
                </del>
            ) : ( name
            )}
        </li>
    )
}