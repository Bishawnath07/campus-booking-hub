import  { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { MDBCard, MDBCardBody } from "mdbreact";
import './autocounter.css'

const AutoCounter = () => {
  const [onScroll, setOnScroll] = useState(false);

    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 mx-10 md:mx-0">
     
        <div className="md:flex justify-center items-center  bg-opacity-60 pb-20 pt-12 md:px-36">
           
            <div className="md:ml-10 p-5 md:p-0">
            <ReactVisibilitySensor>
{({ isVisible }) => (
  <MDBCard>
      <h3 className="text-center text-3xl font-bold my-10">IMPORTANT FACTS</h3>
    <MDBCardBody>
      <div className="flex justify-between items-center gap-16">
      <div className="col-3">
      <h3 className="text-2xl font-bold">Teachers</h3>
        <div className=" bg-slate-500 p-5 rounded-md">
            
          <h4 className="text-5xl font-bold">
            {isVisible && !onScroll ? (
              <CountUp start={0} end={1000} onEnd={() => setOnScroll(true)} />
            ) : (
              1000
            )}
          </h4>
        </div>
      </div>
        <div className="col-3 bg-slate-500 p-5 rounded-md">
          <h4 className="text-5xl font-bold" >
            {isVisible && !onScroll ? (
              <CountUp start={0} end={45000} onEnd={() => setOnScroll(true)} />
            ) : (
              45000
            )}
          </h4>
        </div>
        <div className="col-3 bg-slate-500 p-5 rounded-md">
          <h4 className="text-5xl font-bold">
            {isVisible && !onScroll ? (
              <CountUp className="countUp" start={0} end={300} onEnd={() => setOnScroll(true)} />
            ) : (
              300
            )}
          </h4>
        </div>
        <div className="col-3 bg-slate-500 p-5 rounded-md">
          <h4 className="text-5xl font-bold">
            {isVisible && !onScroll ? (
              <CountUp className="countUp" decimals={2} start={0} end={13.19} onEnd={() => setOnScroll(true)} />
            ) : (
              "13.19%"
            )}
          </h4>
        </div>
      </div>
    </MDBCardBody>
  </MDBCard>
)}
</ReactVisibilitySensor> 
            </div>
        </div>
    </div>
    );
};
   

export default AutoCounter;

