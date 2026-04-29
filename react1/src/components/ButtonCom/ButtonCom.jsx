import style from "./ButtonCom.module.css"

export default function ButtonCom(){
    return (
        <>
            <h1 className={style.title}>ButtonCom</h1>
            <nav className={style.navBar}>
                <button>버튼1</button>
                <button>버튼2</button>
            </nav>
        </>
    )
}