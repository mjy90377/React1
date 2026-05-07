import ButtonCom from "./ButtonCom"
import { handlePlay } from "./handle"
import { handleStop } from "./handle"
import sampleVideo from "../../assets/sample.mp4"
import style from "./ButtonCom.module.css"

export default function Toolbar(){
    return (
        <>
            <nav>
                <ButtonCom message="videoPlayer" handle={handlePlay}>
                    Play
                </ButtonCom>
                <ButtonCom message="videoPlayer" handle={handleStop}>
                    Stop
                </ButtonCom>
            </nav>
            <br />
            <section>
                <video id="videoPlayer" src={sampleVideo} controls width="350"/>
            </section>
        </>
    )
}