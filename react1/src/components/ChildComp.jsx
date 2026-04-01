export default function ChildComp ({imageInfo, width=300, height=300}) {
  return (
    <>
        <img src={imageInfo.src} alt={imageInfo.alt} width={width} height={height} />
    </>
  )
}
