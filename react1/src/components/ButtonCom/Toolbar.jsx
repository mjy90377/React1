import ButtonCom from "./ButtonCom"
import { handleClick } from "./handle"

export default function Toolbar(){
    return (
        <>
            <ButtonCom message="버튼 클릭" handle={handleClick}>
                버튼
            </ButtonCom>
            <ButtonCom message="버튼2 클릭" handle={handleClick}>
                버튼2
            </ButtonCom>
        </>
    )
}