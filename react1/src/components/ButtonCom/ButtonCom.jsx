import style from "./ButtonCom.module.css"

export default function ButtonCom(){
    function handleClick(){
        alert('버튼 클릭');
    }

    return (
        <>
            <h1 className={style.title}>ButtonCom</h1>
            <nav className={style.navBar}>
                <button onClick={handleClick}>버튼1</button>
                <button>버튼2</button>
            </nav>
        </>
    )
}