import logo from '../../assets/ncet.jpeg';
import "./logo.css"

export const Logo = () => {

  return(
    <div className="logo">
      <img src={logo} alt="" />
      <h1>EDEA API SCRAPPER</h1>
    </div>
  )
}