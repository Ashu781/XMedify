import react from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "./Assets/logo.png";
import offer1 from "./Assets/offer1.jpg";
import offer2 from "./Assets/offer2.jpg";
import ahmad from "./Assets/Ahmad.png";
import heena from "./Assets/Heena.png";
import ankur from "./Assets/Ankur.png";
import lesley from "./Assets/Lesley.png";
import hero_image from "./Assets/hero.png";
import doctor from "./Assets/Doctor.png";
import hospital from "./Assets/Hospital.png";
import drugStore from "./Assets/Drugstore.png";
import capsule from "./Assets/Capsule.png";
import ambulance from "./Assets/Ambulance.png";
import divSwiper from "./Assets/div.swiper-pagination.png";
import patientcaring from "./Assets/patientcaring.png";
import blueTick from "./Assets/tick-blue.png";
import BlogCard from "./blogCard";
import familyBanner from "./Assets/our-families-banner.png";
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


export default function Landing(){

    const navigate = useNavigate();

    let [states, setStates] = useState([]);
    let [selectedState, setSelectedState] = useState("");
    let [cities, setCities] = useState([]);
    let [selectedCity, setSelectedCity] = useState("");


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
      setSelectedCity("");
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
    navigate(`/listings?state=${selectedState}&city=${selectedCity}`);
  };




    return(
        <>
        <div style={{fontFamily: "'Poppins', sans-serif"}}>
            <p style={{width:"100%",backgroundColor:"#2AA7FF",margin:"0px", textAlign:"center",padding:"10px 0px",color:"white"}}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <div style={{width:"80%", margin:"0px auto", height:"850px"}}>


                <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"25px 0px"}}>
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
                    <button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 40px"}}>My Bookings</button>
                    </div>
                </nav>


                <div style={{display:"flex", justifyContent:"space-between",marginTop:"40px"}}>
                    <div style={{paddingTop:"50px",width:"50%",letterSpacing:"2%"}}>
                      <span style={{fontSize:"31px",fontWeight:"500"}}>Skip the travel! Find Online</span><br/>
                      <span style={{fontSize:"56px",fontWeight:"700",lineHeight:"68px"}}>Medical</span>
                      <span style={{fontSize:"56px",fontWeight:"700",lineHeight:"68px",color:"#2AA7FF"}}> Centers</span>
                      <p style={{fontSize:"20px",fontWeight:"400",lineHeight:"32px"}}>Connect instantly with a 24x7 specialist or choose to <br/>video visit a particular doctor.</p>
                      <button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 40px"}}>Find Centers</button>
                    </div>

                    <img src={hero_image} alt="Hero Img"/>

                </div>

                <div style={{border:"0px",borderRadius:"15px",backgroundColor:"white",height:"450px",zIndex:"1",position:"relative",top:"-95px",boxShadow:"0px 4px 12px rgba(0,0,0,0.15)"}}>
                  <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"space-between",margin:"0px 50px 0px 250px",padding:"60px 0px"}}>
                    
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} style={{appearance:"none",width:"25%",borderRadius:"5px", border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",paddingLeft: "32px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' width='16' height='16'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E\")",backgroundRepeat: "no-repeat",backgroundPosition: "8px center",backgroundSize: "16px",}}>
                       <option value="">State</option>
                       {states.map((state) => (
                         <option key={state} value={state}>{state}</option>))}
                    </select>
                    
                    
                    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{appearance:"none",width:"25%",borderRadius:"5px", border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",paddingLeft: "32px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' width='16' height='16'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E\")",backgroundRepeat: "no-repeat",backgroundPosition: "8px center",backgroundSize: "16px",}}>
                       <option value="">City</option>
                       {cities.map((city) => (
                         <option key={city} value={city}>{city}</option>))}
                    </select>
                    
                    <button type="submit" label="Search" id="searchBtn" style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 40px",fontSize:"16px",fontWeight:"500"}}>
                    Search
                    </button>

                  </form>
                  <div style={{textAlign:"center",fontSize:"20px",fontWeight:"500",letterSpacing:"2%"}}>You may be looking for</div>
                  <div style={{display:"flex",justifyContent:"space-between",margin:"0px 35px",padding:"40px 0px"}}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",width:"15%",backgroundColor:"#FAFBFE",borderRadius:"15px"}}><img src={doctor} width="75px" alt="doctor"/><div style={{marginTop:"15px"}}>Doctors</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",width:"15%",backgroundColor:"#FAFBFE",borderRadius:"15px"}}><img src={drugStore} width="75px" alt="drugStore"/><div style={{marginTop:"15px"}}>Labs</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",width:"15%",backgroundColor:"#FAFBFE",borderRadius:"15px"}}><img src={hospital} width="75px" alt="hospital"/><div style={{marginTop:"15px"}}>Hospitals</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",width:"15%",backgroundColor:"#FAFBFE",borderRadius:"15px"}}><img src={capsule} width="75px" alt="capsule"/><div style={{marginTop:"15px"}}>Medical Store</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",width:"15%",backgroundColor:"#FAFBFE",borderRadius:"15px"}}><img src={ambulance} width="75px" alt="ambulance"/><div style={{marginTop:"15px"}}>Ambulance</div></div>
                  </div>
                </div>
            </div>




           {/*Offers Section*/}

            <div style={{height:"500px",backgroundColor:"white"}}>
                <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",paddingTop:"175px"}}>
                <img src={offer1} alt="img1" style={{height:"200px",borderRadius:"15px"}}/>
                <img src={offer2} alt="img1" style={{height:"200px",borderRadius:"15px"}}/>
                <img src={offer1} alt="img1" style={{height:"200px",borderRadius:"15px"}}/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    <img src={divSwiper} alt="divSwiper"/>
                </div>
            </div>
        


            {/*Find by specialization section*/}

            <div style={{height:"700px"}}>
              <div style={{textAlign:"center",fontSize:"48px",fontWeight:"600",color:"#1B3C74",paddingTop:"60px",paddingBottom:"40px"}}>Find By Specialisation</div>
              <div style={{display:"grid",gridTemplateColumns: "repeat(4, 1fr)",gridTemplateRows: "repeat(2, 1fr)",gap: "32px",margin:"0px auto",padding:"40px 0px",width:"80%"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={drugStore} width="75px" alt="drugStore"/><div style={{marginTop:"15px"}}>Dentistry</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={drugStore} width="75px" alt="drugStore"/><div style={{marginTop:"15px"}}>Primary Care</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={hospital} width="75px" alt="hospital"/><div style={{marginTop:"15px"}}>Cardiology</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={capsule} width="75px" alt="capsule"/><div style={{marginTop:"15px"}}>MRI Resonance</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={ambulance} width="75px" alt="ambulance"/><div style={{marginTop:"15px"}}>Blood Test</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={drugStore} width="75px" alt="drugStore"/><div style={{marginTop:"15px"}}>Piscologist</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={drugStore} width="75px" alt="drugStore"/><div style={{marginTop:"15px"}}>Laboratory</div></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"160px",backgroundColor:"#FFFFFF",borderRadius:"15px"}}><img src={hospital} width="75px" alt="hospital"/><div style={{marginTop:"15px"}}>X-Ray</div></div>
              </div>
              <div style={{textAlign:"center",fontSize:"48px",fontWeight:"600",padding:"10px 0px"}}><button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 60px"}}>View All</button></div>
            </div>



           {/*Medical Specialists section*/}

            <div style={{height:"900px",backgroundColor:"white"}}>
                <div style={{textAlign:"center",color:"#1B3C74",fontSize:"48px",fontWeight:"600",paddingTop:"60px",paddingBottom:"70px"}}>Our Medical Specialist</div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"22%"}}><img src={ahmad} width="100%" alt="doctor"/><div style={{marginTop:"15px",fontSize:"24px",fontWeight:"400",color:"#1B3C74"}}>Dr. Ahmad Khan</div><div style={{marginTop:"5px",fontSize:"16px",fontWeight:"500",color:"#2AA7FF"}}>Neurologist</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"22%"}}><img src={heena} width="100%" alt="drugStore"/><div style={{marginTop:"15px",fontSize:"24px",fontWeight:"400",color:"#1B3C74"}}>Dr. Heena Sachdeva</div><div style={{marginTop:"5px",fontSize:"16px",fontWeight:"500",color:"#2AA7FF"}}>Orthopadics</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"22%"}}><img src={ankur} width="100%" alt="hospital"/><div style={{marginTop:"15px",fontSize:"24px",fontWeight:"400",color:"#1B3C74"}}>Dr. Ankur Sharma</div><div style={{marginTop:"5px",fontSize:"16px",fontWeight:"500",color:"#2AA7FF"}}>Medicine</div></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"22%"}}><img src={lesley} width="100%" alt="capsule"/><div style={{marginTop:"15px",fontSize:"24px",fontWeight:"400",color:"#1B3C74"}}>Dr. Lesley Hull</div><div style={{marginTop:"5px",fontSize:"16px",fontWeight:"500",color:"#2AA7FF"}}>Surgeon</div></div>
                </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    <img src={divSwiper} alt="divSwiper"/>
                    </div>
            </div>


            {/*Patient Caring section*/}

            <div style={{height:"700px"}}>

              <div style={{display:"flex",justifyContent:"space-between",padding:"100px"}}>
                <div style={{width:"47%",display:"flex",justifyContent:"flex-end"}}><img src={patientcaring} alt="patientcaring" width="60%"/></div>
                <div style={{width:"47%",padding:"80px 0px"}}>
                  <div style={{fontSize:"16px",fontWeight:"600",color:"#2AA7FF"}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
                  <div style={{fontSize:"48px",fontWeight:"600",margin:"10px 0px"}}>Patient <span style={{color:"#2AA7FF"}}>Caring</span></div>
                  <div style={{fontSize:"17px",fontWeight:"500",fontFamily: "'Inter', sans-serif",color:"#77829D",width:"52%",margin:"20px 0px"}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</div>
                  <div style={{fontSize:"18px",fontWeight:"500",fontFamily: "'Roboto', sans-serif",color:"#1B3C74",margin:"30px 0px"}}><img src={blueTick} alt="blue tick" width="18px"/>   Stay Updated About Your Health</div>
                  <div style={{fontSize:"18px",fontWeight:"500",fontFamily: "'Roboto', sans-serif",color:"#1B3C74",margin:"30px 0px"}}><img src={blueTick} alt="blue tick" width="18px"/>   Check Your Results Online</div>
                  <div style={{fontSize:"18px",fontWeight:"500",fontFamily: "'Roboto', sans-serif",color:"#1B3C74",margin:"30px 0px"}}><img src={blueTick} alt="blue tick" width="18px"/>   Manage Your Appointments</div>
                </div>
              </div>

            </div>




            {/*Blog and News section*/}
            <div style={{height:"800px",backgroundColor:"white"}}>
              <div style={{textAlign:"center",fontSize:"16px",fontWeight:"600",color:"#2AA7FF",padding:"60px 0px 10px 0px"}}>Blog and News</div>
              <div style={{textAlign:"center",fontSize:"48px",fontWeight:"600",color:"#1B3C74",paddingBottom:"45px"}}>Read Our Latest News</div>
              <div style={{display:"flex",justifyContent:"space-between",width:"70%",margin:"0px auto"}}>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
              </div>
            </div>


            {/*Our Families section*/}

            <div style={{height:"800px"}}>

              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 250px"}}>
                <div style={{width:"47%",padding:"215px 0px 0px 100px"}}>
                  <div style={{fontSize:"24px",fontWeight:"600",color:"#2AA7FF"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
                  <div style={{fontSize:"70px", fontWeight:"600",margin:"10px 0px",color:"#1B3C74"}}>Our Families</div>
                  <div style={{fontSize:"24px",fontWeight:"500",fontFamily: "'Inter', sans-serif",color:"#77829D",lineHeight:"240%",width:"80%",margin:"20px 0px"}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</div>
                </div>
                <div style={{width:"47%",display:"flex",justifyContent:"flex-end"}}><img src={familyBanner} alt="familyBanner" width="80%"/></div>
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
                    <span style={{width:"28px",backgroundColor:"white",padding:"11px 5px", borderRadius:"5px 0px 0px 5px",border:"1px solid #00000012",fontWeight:"550"}}>+91</span>
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