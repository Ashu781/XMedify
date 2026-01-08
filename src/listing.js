import react from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import styles from "./Landing.module.css";
import logo from "./Assets/logo.png";
import faqBanner from "./Assets/faqs-banner.jpg";
import Accordion from "./accordian";
import mobile from "./Assets/mobile.png";
import downArr from "./Assets/down-arr.png";
import appleLogo from "./Assets/apple-logo.png";
import playStoreLogo from "./Assets/playstore.png";
import fb from "./Assets/fb.png";
import pinterest from "./Assets/pinterest.png";
import twitter from "./Assets/twitter.png";
import yt from "./Assets/yt.png";
import cta from "./Assets/cta.jpg";
import Hosps from "./hospitals";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Listings(){

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    let [states, setStates] = useState([]);
    let [selectedState, setSelectedState] = useState( searchParams.get("state"));
    let [cities, setCities] = useState([]);
    let [selectedCity, setSelectedCity] = useState(searchParams.get("city"));
    let [submitCount, setSubmitCount] = useState(0);

    let [hospitals, setHospitals] = useState([]);
  


    useEffect(()=>{
      async function getHospitals(){
        let response = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`);
        setHospitals(response.data);
      }
      getHospitals();
    },[submitCount]);



  useEffect(()=>{

    async function getState(){
      let response = await axios.get("https://meddata-backend.onrender.com/states");
      setStates(response.data);
    }
    getState();

  },[]);


  useEffect(()=>{

    async function getCity(){
      if(selectedState!==""){

      let response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
      setCities(response.data);
      }
      else{
        setSelectedCity("");
        setCities([]);
      }
    }
    getCity();

  },[selectedState]);



  function handleSubmit(e){

    e.preventDefault();
    setSubmitCount((prev) => prev+1);
    
  };










    

    return(
        <>
        <div style={{fontFamily: "'Poppins', sans-serif"}}>
            <p style={{width:"100%",backgroundColor:"#2AA7FF",margin:"0px", textAlign:"center",padding:"10px 0px",color:"white"}}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <div style={{backgroundColor:"white"}}>
                <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"25px 0px",width:"80%",margin:"0px auto"}}>
                    <div>
                    <img src={logo} alt="Logo"/>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",width:"75%"}}>
                    <div>Find Doctors</div>
                    <div>Hospitals</div>
                    <div>Medicines</div>
                    <div>Surgeries</div>
                    <div>Software for provider</div>
                    <div>Facilities</div>
                    <button onClick={()=>navigate("/my-bookings")} style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 40px"}}>My Bookings</button>
                    </div>
                </nav>
            </div>
            <div style={{background:"linear-gradient(90deg, #2AA7FF, #0C8CE5)",height:"100px",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}>

                <div style={{width:"80%",margin:"0px auto",border:"0px",borderRadius:"15px",backgroundColor:"white",height:"110px",zIndex:"1",position:"relative",top:"50px",boxShadow:"0px 4px 12px rgba(0,0,0,0.15)"}}>
                    <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"space-between",padding:"30px 30px"}}>
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} style={{appearance:"none",width:"27%",borderRadius:"5px", border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",paddingLeft: "32px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' width='16' height='16'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E\")",backgroundRepeat: "no-repeat",backgroundPosition: "8px center",backgroundSize: "16px",}}>
                       <option value="">State</option>
                       {states.map((state) => (
                         <option key={state} value={state}>{state}</option>))}
                    </select>
                    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{appearance:"none",width:"49%",borderRadius:"5px", border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",paddingLeft: "32px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' width='16' height='16'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E\")",backgroundRepeat: "no-repeat",backgroundPosition: "8px center",backgroundSize: "16px",}}>
                       <option value="">City</option>
                       {cities.map((city) => (
                         <option key={city} value={city}>{city}</option>))}
                    </select>
                    <button type="submit" label="Search" id="searchBtn" style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 120px",fontSize:"16px",fontWeight:"500"}}>
                    Search
                    </button>
                  </form>
                </div>
            </div>





            {/*List of medical centers section*/}

            <div style={{backgroundColor:"E7F0FF"}}>
             
              <div style={{width:"80%",margin:"200px auto 100px auto",display:"flex",justifyContent:"space-between"}}>
                <div style={{width:"70%"}}>
                 <Hosps data={hospitals}/>
                </div>

                <div style={{width:"25%",paddingTop:"100px"}}>
                  <img src={cta} alt="Free Appointment Banner" width="100%" style={{borderRadius:"19px"}}/>
                </div>
              </div>

            </div>





            {/*Frequently Asked Questions section*/}
      
            <div style={{height:"810px",backgroundColor:"white"}}>
               <div style={{textAlign:"center",fontSize:"16px",fontWeight:"600",color:"#2AA7FF",padding:"60px 0px 10px 0px"}}>Get Your Answer</div>
               <div style={{textAlign:"center",fontSize:"48px",fontWeight:"600",color:"#1B3C74",paddingBottom:"45px"}}>Frequently Asked Questions</div>
               <div style={{display:"flex",justifyContent:"space-between",padding:"0px"}}>
                 <div style={{width:"47%",display:"flex",justifyContent:"flex-end"}}><img src={faqBanner} alt="faqBanner" width="70%"/></div>
                 <div style={{width:"47%",padding:"50px 0px"}}>
                  <Accordion title="Why choose our medical for your family?">We provide compassionate, high-quality healthcare with experienced doctors, modern facilities, and a patient-first approach. From routine checkups to advanced treatments, your family’s health, safety, and comfort are always our top priority.</Accordion>
                  <Accordion title="Why we are different from others?">We combine expert medical care, advanced technology, and genuine compassion to deliver personalized treatment for every patient.</Accordion>
                  <Accordion title="Trusted & experience senior care & love">Our dedicated team ensures older adults receive safe, personalized care in a warm and supportive environment.</Accordion>
                  <Accordion title="How to get appointment for emergency cases?">For emergencies, visit our emergency department immediately or call our 24/7 emergency helpline for urgent assistance.</Accordion>
                </div>
              </div>
            </div>



            {/*Download The App section*/}

            <div style={{height:"590px"}}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"40px 50px 0px 50px"}}>
                <div style={{width:"47%",display:"flex",justifyContent:"flex-end"}}><img src={mobile} alt="mobile" width="62%"/></div>
                <div style={{paddingTop:"130px"}}><img src={downArr} alt="down arrow" width="50px"/></div>
                <div style={{width:"47%",padding:"80px 0px"}}>
                  <div style={{fontSize:"48px", fontWeight:"600",margin:"10px 0px",lineHeight:"67px"}}>Download the <br/><span style={{color:"#2AA7FF"}}>Medify</span> App</div>
                  <div style={{fontSize:"16px",fontWeight:"700",margin:"20px 0px",color:"#414146"}}>Get the link to download the app</div>
                  <div style={{display:"flex",alignItems:"center",marginBottom:"50px"}}>
                    <span style={{width:"28px",backgroundColor:"white",padding:"11px 5px",borderRadius:"5px 0px 0px 5px",border:"1px solid #00000012",fontWeight:"550"}}>+91</span>
                    <input style={{width:"260px", borderRadius:"0px 5px 5px 0px",padding:"15px 15px",border:"1px solid #00000012",marginRight:"13px"}} placeholder="Enter phone number" type="text"/>
                    <button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 30px"}}>Send SMS</button>
                  </div>
                    <div style={{display:"flex"}}>
                      <button style={{backgroundColor:"black",color:"white",borderRadius:"5px", border:"0px",padding:"18px 25px", display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:"20px",fontSize:"19px",fontWeight:"600",width:"188px"}}><img src={playStoreLogo} alt="Google Play" width="25px"/><div>Google Play</div></button>
                      <button style={{backgroundColor:"black",color:"white",borderRadius:"5px", border:"0px",padding:"18px 25px", display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"20px",fontWeight:"600",width:"175px"}}><img src={appleLogo} alt="App Store" width="25px"/><div>App Store</div></button>
                    </div>
                </div>
              </div>
            </div>


            {/*Footer section*/}

            <div style={{height:"600px",backgroundColor:"#1B3C74"}}>
              <div style={{width:"70%",height:"295px",margin:"0px auto",paddingTop:"120px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                 <div style={{width:"30%",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                    <img src={logo} alt="Logo" width="160px"/>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"55%"}}>
                      <img src={fb} alt="Fb" width="50px"/>
                      <img src={twitter} alt="twitter" width="50px"/>
                      <img src={yt} alt="youtube" width="50px"/>
                      <img src={pinterest} alt="pinterest" width="50px"/>
                    </div>
                 </div>
                 <div style={{width:"15%"}}>
                    <ul style={{color:"white",lineHeight:"55px",fontSize:"20px",listStyle:"none"}}>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>About Us</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Our Pricing</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Our Gallery</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Appointment</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Privacy Policy</li>
                    </ul>
                 </div>
                 <div style={{width:"15%"}}>
                    <ul style={{color:"white",lineHeight:"55px",fontSize:"20px",listStyle:"none"}}>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Orthology</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Neurology</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Dental Care</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Ophalmology</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Cardiology</li>
                    </ul>
                 </div>
                 <div style={{width:"15%"}}>
                    <ul style={{color:"white",lineHeight:"55px",fontSize:"20px",listStyle:"none"}}>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>About Us</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Our Pricing</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Our Gallery</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Appointment</li>
                      <li><span style={{fontWeight:"800",marginRight:"12px"}}>&gt;</span>Privacy Policy</li>
                    </ul>
                 </div>
              </div>
              <hr style={{width:"70%",margin:"95px auto 35px auto", border: "none",borderTop: "1px solid #FFFFFF1A"}}/>
              <div style={{width:"70%",margin:"0px auto",color:"#FFFFFF",fontSize:"16px"}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
            </div>



        </div>
        
        </>
    )
}