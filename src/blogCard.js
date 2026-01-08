import react from "react";
import blog from "./Assets/blog.png";
import person from "./Assets/person.png";

export default function BlogCard(){

    return (
        <>

          <div style={{width:"32%",border:"1px solid #00000012",borderRadius:"5px"}}>
            <img src={blog} alt="blogImg" width="100%" style={{borderRadius:"5px"}}/>
            <div style={{padding:"12px 15px",fontSize:"16px",fontWeight:"500",color:"#77829D"}}>Medical |  March 31, 2022</div>
            <div style={{padding:"5px 15px 0px 15px",fontSize:"26px",fontWeight:"500",color:"#1B3C74"}}>6 Tips To Protect Your Mental Health When You're Sick</div>
            <div style={{padding:"5px 15px 12px 15px",fontSize:"17px",fontWeight:"500",color:"#1B3C74",display:"flex",alignItems:"center"}}><img src={person} alt="Person" width="18px" style={{paddingRight:"12px"}}/>              Rebecca Lee</div>
          </div>


        </>
    );


}