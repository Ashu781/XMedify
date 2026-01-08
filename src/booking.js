import react from "react";
import styles from "./Landing.module.css";
import logo from "./Assets/logo.png";
import mobile from "./Assets/mobile.png";
import downArr from "./Assets/down-arr.png";
import appleLogo from "./Assets/apple-logo.png";
import playStoreLogo from "./Assets/playstore.png";
import fb from "./Assets/fb.png";
import pinterest from "./Assets/pinterest.png";
import twitter from "./Assets/twitter.png";
import yt from "./Assets/yt.png";
import cta from "./Assets/cta.jpg";
import hospitalIcon from "./Assets/hospitalicon.png";
import star from "./Assets/star.png";


export default function Bookings(){

  let data = JSON.parse(localStorage.getItem("bookings")) || [];

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
                    <button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 40px"}}>My Bookings</button>
                    </div>
                </nav>
            </div>
            <div style={{background:"linear-gradient(90deg, #2AA7FF, #0C8CE5)",height:"100px",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}>
                <h1 style={{fontWeight:"700",fontSize:"40px",color:"white",fontFamily: "Ubuntu, sans-serif",marginTop:"0px",marginLeft:"12%",paddingTop:"1.8%"}}>My Bookings</h1>
                <div style={{width:"55%",margin:"0px 10% 0px 35%",border:"0px",borderRadius:"15px",backgroundColor:"white",height:"110px",zIndex:"1",position:"relative",top:"-40px",boxShadow:"0px 4px 12px rgba(0,0,0,0.15)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"30px 30px"}}>
                    <input type="text" placeholder="Search By Hospital" style={{width:"78%",borderRadius:"5px", border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",paddingLeft: "32px"}}/>
                    <button style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px", border:"0px",padding:"15px 70px",fontSize:"16px",fontWeight:"500"}}>
                    Search
                    </button>
                  </div>
                </div>
            </div>





            {/*List of medical centers section*/}

            <div style={{backgroundColor:"E7F0FF"}}>
             
              <div style={{width:"80%",margin:"200px auto 100px auto",display:"flex",justifyContent:"space-between"}}>
                <div style={{width:"70%"}}>
                    <div style={{width:"100%",fontFamily: "'Poppins', sans-serif"}}>  
                    {
                      data.map((ele,idx)=>(
                          <div key={idx} style={{height:"240px",display:"flex",justifyContent:"space-between",padding:"45px 40px 20px 40px",marginBottom:"30px",backgroundColor:"white",borderRadius:"15px"}}>
                              <div style={{width:"20%"}}>
                                <img src={hospitalIcon} alt="hospital icon" width="80%"/>
                              </div>
                              <div style={{width:"42%"}}>
                                <h3 style={{fontSize:"22px",fontWeight:"600",color:"#14BEF0"}}>{ele.hospitalName}</h3>
                                <div style={{fontWeight:"700",fontSize:"14px",color:"#414146"}}>{ele.address}, {ele.city}, {ele.state}</div>
                                <div style={{fontWeight:"400",fontSize:"14px",color:"#414146"}}>{ele.type}</div>
                              <hr style={{border:"none",borderTop:"2px dashed #E8E8F0",width:"6%",marginLeft:"0%"}}/>
                              <button style={{display:"flex",alignItems:"center",background:"#FFFFFF",border: "1px solid #E5E7EB",marginTop:"13px"}}>
                                <img src={star} alt="thumbsup" width="13px"/><span style={{fontWeight:"700",fontSize:"14px",marginLeft:"5px"}}>{ele.rating}</span>
                              </button>
                              </div>
                              <div style={{width:"30%",marginTop:"15px",display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
                                <button style={{backgroundColor:"white",color:"#2AA7FF",borderRadius:"5px", border:"2px solid #2AA7FF",padding:"10px 12px",fontSize:"18px",fontWeight:"400",marginRight:"16px"}}>
                                {ele.time}
                                </button>
                                <button style={{backgroundColor:"white",color:"#007100",borderRadius:"5px", border:"2px solid #007100",padding:"10px 12px",fontSize:"18px",fontWeight:"700"}}>
                                {ele.date}
                                </button>
                              </div>
                          </div>))
                      }
                    </div>
                </div>

                <div style={{width:"25%"}}>
                  <img src={cta} alt="Free Appointment Banner" width="100%" style={{borderRadius:"19px"}}/>
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