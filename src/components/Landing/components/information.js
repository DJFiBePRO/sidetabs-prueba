const InformationBlock = ({ img, altImg, title, text,text1, button, reverse }) => (
    <div className="row-md-auto gx-5">
      <div className="p-3 col-12">
        <img className="col-sm-2 float-md-end mb-3 ms-md-3" src={img} alt={altImg} align="left" />
      </div>
      <div className="col">
        <h2>{title}</h2>
        <p className="justify-content-evenly">{text}</p>
        <p className="justify-content-evenly">{text1}</p>
      </div>
    </div>
  )
  
  export default InformationBlock;