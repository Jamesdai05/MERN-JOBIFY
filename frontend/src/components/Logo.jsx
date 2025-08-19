import logo from "../assets/logo.png"

const Logo = () => {
  const style={height:"6rem"}

  return (
    <div className="logo-div">
        <img src={logo} alt="logo" className="logo"/>
    </div>
  )
}
export default Logo