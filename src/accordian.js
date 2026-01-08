import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{padding:"30px 0px"}}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "53%",
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "21px",
          fontWeight:"600",
          color:"#1B3C74"
        }}
      >
        {title}
        <span style={{color:"#2AA7FF",fontWeight:"900",fontSize:"21px"}}>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div style={{ padding: "12px", borderTop: "1px solid #00000012",color:"#77829D",fontSize:"17px",fontWeight:"500",width:"73%" }}>
          {children}
        </div>
      )}
    </div>
  );
}