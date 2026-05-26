// import logo2 from "../assets/latest-logo.png";
import logo from "../assets/2-logo.png";

const Logo2 = () => {
    const style={borderRadius:"50px",height:"100px"}

  return (
    <div className="logo-img">
        <img src={logo} alt="logo" className="logo" style={style}/>
    </div>
  )
}
export default Logo2