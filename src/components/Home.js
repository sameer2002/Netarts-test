import logo from "../images/logo.png";
import trophy from "../images/1.png";
import person from "../images/2.png";
import product from "../images/3.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
const Home=()=>{
    return(
        <>
       <div className="banner">
        <img src={logo} alt="" />
       </div>
       <div className="hero-section">
          <div className="tr-img">
            <img src={trophy} alt="" />
          </div>
          <div className="hero-det">
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src={person} alt="" />
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
           </div>  
       </div>
       <div className="products">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <img src={product} alt="" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </p>
            
       </div>
       <footer>
        <hr />
        <div className="segments">
           <h3 style={{marginBottom: '20px'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
           <p>CHEMICALS  <span class="vertical-line"></span> PROCESS POWER WATER <span class="vertical-line"></span> WASTE WATER OILS <span class="vertical-line"></span> GAS PHARMA SUGARS <span class="vertical-line"></span> DISTILLERIES PAPER <span class="vertical-line"></span> PULP MARINE <span class="vertical-line"></span> DEFENCE METAL <span class="vertical-line"></span> MINING FOOD <span class="vertical-line"></span> BEVERAGE PETROCHEMICAL <span class="vertical-line"></span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span class="vertical-line"></span> RESIDENTIAL</p>
        </div>
        <div className="contact">
      <a href="#"><CallRoundedIcon style={{ fontSize: '30px' }} />Toll free 1800 200 1234</a>
      <a href="#"><FacebookOutlinedIcon style={{ fontSize: '30px' }} />www.facebook.com/cripumps</a>
      <a href="#"><LanguageOutlinedIcon style={{ fontSize: '30px' }} />www.crigroups.com</a>
    </div>
       </footer>
       </>
    );
}
export default Home;