import React from "react";
import {useState,useEffect} from "react";
import hospitalIcon from "./Assets/hospitalicon.png";
import star from "./Assets/star.png";
import tick from "./Assets/check-mark.png";
import styles from "./Hospital.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";



export default function Hosps({data}){

    let [hCount,setHCount] = useState(0);
    let [selectedCity, setSelectedCity] = useState("");

    let [activeIndex, setActiveIndex] = useState(-1);
    const [activeSlide, setActiveSlide] = useState(0);

    const [open, setOpen] = useState(false);
    


    useEffect(()=>{
      setHCount(data.length);
      setSelectedCity(data[0]?.City);
    },[data]);



    const getFormattedDate = (x) => {
      const date = new Date();
      date.setDate(date.getDate() + x);

    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

   const [bookingDetails, setBookingDetails] = useState({hospitalName:"",address:"",city:"",state:"",type:"",rating:"",date:getFormattedDate(0),time:""});

   const tabs = [
      <p style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"0"}}><span>Today</span><span style={{color:"#01A400",fontSize:"12px"}}>11 Slots Available</span></p>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>Tomorrow</span><span style={{color:"#01A400",fontSize:"12px"}}>17 Slots Available</span></div>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>{getFormattedDate(2)}</span><span style={{color:"#01A400",fontSize:"12px"}}>18 Slots Available</span></div>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>{getFormattedDate(3)}</span><span style={{color:"#01A400",fontSize:"12px"}}>12 Slots Available</span></div>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>{getFormattedDate(4)}</span><span style={{color:"#01A400",fontSize:"12px"}}>16 Slots Available</span></div>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>{getFormattedDate(5)}</span><span style={{color:"#01A400",fontSize:"12px"}}>15 Slots Available</span></div>,
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><span>{getFormattedDate(6)}</span><span style={{color:"#01A400",fontSize:"12px"}}>17 Slots Available</span></div>
    ];

    const datesData = [
        getFormattedDate(0),
        getFormattedDate(1),
        getFormattedDate(2),
        getFormattedDate(3),
        getFormattedDate(4),
        getFormattedDate(5),
        getFormattedDate(6)
    ];


    function handleBooking(ele){

      const newBooking = {
        ...bookingDetails,
        hospitalName: ele["Hospital Name"],
        address: ele.Address,
        type: ele["Hospital Type"],
        rating: ele["Hospital overall rating"],
        city: ele.City,
        state: ele.State
      };

       const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

       // 2️⃣ Add new booking
       const updatedBookings = [...existingBookings, newBooking];


       setBookingDetails(prev=>({
        ...prev,
        hospitalName:ele["Hospital Name"],
        address:ele.Address,
        type:ele["Hospital Type"],
        rating:ele["Hospital overall rating"],
        city: ele.City,
        state: ele.State
       }));

       localStorage.setItem("bookings",JSON.stringify(updatedBookings));
 
       setOpen(true);

    }


    return(
        <>
        <div style={{width:"100%",fontFamily: "'Poppins', sans-serif"}}>
          <h1 style={{margin:"0px",marginLeft:"10px"}}>{hCount} medical centers available in {selectedCity}</h1>
          <div style={{fontSize:"16px",fontWeight:"400",color:"#787887",padding:"3px 0px 25px 3px",display:"flex",alignItems:"center"}}>
            <img src={tick} alt="tick" width="21px" height="21px"/>
            <div style={{marginLeft:"35px"}}>Book appointments with minimum wait-time & verified doctor details</div>
          </div>
          {
            data.map((ele,idx)=>(
               <div key={idx} style={{marginBottom:"30px",backgroundColor:"white",borderRadius:"15px"}}>
                <div style={{height:"240px",display:"flex",justifyContent:"space-between",padding:"45px 40px 20px 40px"}}>
                    <div style={{width:"20%"}}>
                      <img src={hospitalIcon} alt="hospital icon" width="80%"/>
                    </div>
                    <div style={{width:"42%",paddingTop:"8px"}}>
                      <h3 style={{fontSize:"22px",fontWeight:"600",color:"#14BEF0"}}>{ele["Hospital Name"]}</h3>
                      <div style={{fontWeight:"700",fontSize:"14px",color:"#414146"}}>{ele.Address}</div>
                      <div style={{fontWeight:"400",fontSize:"14px",color:"#414146"}}>{ele["Hospital Type"]}</div>
                      <div style={{fontWeight:"400",fontSize:"14px",color:"#414146",margin:"20px 0px 3px 0px"}}><span style={{fontWeight:"700",fontSize:"14px",color:"#02A401",marginRight:"6px"}}>Free</span><s style={{fontWeight:"400",fontSize:"14px",color:"#787887",marginRight:"4px"}}>₹500</s>Consultation fee at clinic</div>
                    <hr style={{border:"none",borderTop:"2px dashed #E8E8F0",width:"6%",marginLeft:"0%"}}/>
                    <button style={{display:"flex",alignItems:"center",background:"#FFFFFF",border: "1px solid #E5E7EB",marginTop:"13px"}}>
                      <img src={star} alt="thumbsup" width="13px"/><span style={{fontWeight:"700",fontSize:"14px",marginLeft:"5px"}}>{ele["Hospital overall rating"]}</span>
                    </button>
                    </div>
                    <div style={{width:"30%",paddingTop:"143px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                      <div onClick={()=>setActiveIndex(idx)} style={{fontWeight:"500",fontSize:"16px",color:"#01A400",marginBottom:"10px",cursor: "pointer", userSelect: "none"}}>Available Today (Check Slots)</div>
                      <button label="Book FREE Center Visit" onClick={()=>handleBooking(ele)} style={{backgroundColor:"#2AA7FF",color:"white",borderRadius:"5px",cursor: "pointer", border:"0px",padding:"18px 50px",fontSize:"16px",fontWeight:"700"}}>
                      Book FREE Center Visit
                      </button>
                    </div>
                </div>

                {activeIndex===idx && 
                  <div style={{marginTop:"-15px",padding:"10px 30px"}}>
                    <hr style={{border:"none",borderTop: "2px solid #F0F0F5",margin:"0px"}}/>
                    <hr style={{backgroundColor:"#00A500",height:"4px",width:"5%",margin:"0px auto",border:"none",borderRadius:"15px"}}/>

                     <Swiper slidesPerView={3} spaceBetween={0} navigation modules={[Navigation]} className={styles.tabs}>
                        {tabs.map((tab, index) => (
                          <SwiperSlide key={index} className={`${styles.tab} ${activeSlide === index ? styles.active : ""}`} onClick={() => {setActiveSlide(index);setBookingDetails(prev=>({...prev,date:datesData[index]}));}}>
                            {tab}
                          </SwiperSlide>
                        ))}
                      </Swiper>

                    <div style={{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(6, 1fr)", gap: "40px",padding:"25px 60px 20px 60px"}}>
                      <p style={{margin:"0"}}>Morning</p>
                      <button className={styles.btn} value="11:30 AM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>11:30 AM</button>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <hr style={{border:"none",borderTop: "2px solid #F0F0F5"}}/>

                    <div style={{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(6, 1fr)", gap: "40px",padding:"20px 60px"}}>
                      <p style={{margin:"0"}}>Afternoon</p>
                      <button className={styles.btn} value="12:00 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>12:00 PM</button>
                      <button className={styles.btn} value="12:30 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>12:30 PM</button>
                      <button className={styles.btn} value="01:30 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>01:30 PM</button>
                      <button className={styles.btn} value="02:00 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>02:00 PM</button>
                      <button className={styles.btn} value="02:30 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>02:30 PM</button>
                    </div>
                    <hr style={{border:"none",borderTop: "2px solid #F0F0F5"}}/>

                    <div style={{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(6, 1fr)", gap: "40px",padding:"20px 60px"}}>
                      <p style={{margin:"0"}}>Evening</p>
                      <button className={styles.btn} value="06:00 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>06:00 PM</button>
                      <button className={styles.btn} value="06:30 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>06:30 PM</button>
                      <button className={styles.btn} value="07:00 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>07:00 PM</button>
                      <button className={styles.btn} value="07:30 PM" onClick={(e)=>{setBookingDetails(prev=>({...prev,time:e.target.value}))}}>07:30 PM</button>
                    </div>
                  </div>
                  
                }
              </div>
            ))
          }
        </div>



        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
        <Alert severity="success" onClose={() => setOpen(false)}>
          Booking Successful!
        </Alert>
        </Snackbar>

        </>
    );
}