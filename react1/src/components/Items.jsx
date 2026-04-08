export default function Items({name, isPacked}){
     if(isPacked){
               return <li>{name} ☑️</li>;
            }
            return <li>{name}</li>;
}