export default function Items({name, isPacked}){
    let itemContent = name;
    if(isPacked) {
        itemContent = <del>{name + "☑️"}</del>
    }
    return(
        <li>
            {itemContent}
        </li>
    )
}