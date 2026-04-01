import reactLogo from '../assets/react.svg'


export default function ChildComp ({alt, width, height}) {
  return (
    <>
        <img className="button-icon" src={reactLogo} alt={alt} width={width} height={height} />
    </>
  )
}
