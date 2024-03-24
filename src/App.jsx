import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import { dayData } from "./data/data";
import niftyData from "./data/data";
import Day from "./components/day/Day";
import Footer from "./components/footer/Footer";
import { Link } from "react-router-dom";
function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItem, setVisibleItem] = useState(null);
  const [Data,setData]=useState([]);
  const [nData,setnData]=useState([]);
  const [sDataToggled, setsDataToggled] = useState(false);
  const [nDataToggled, setnDataToggled] = useState(false);
  const [position,setPosition]=useState(0);
  // console.log("Position is : ",position);
  const resultData=niftyData.filter((data)=>data.isDetail)
  console.log(resultData);
  const handleMouseEnter = (itemId) => {
    console.log(`Item Number : ${itemId}`);
    setHoveredItem(itemId);
    setTimeout(()=>{
      setHoveredItem(null);
    },5000)
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  // console.log(content);
  const viewSDetail =(itemId)=>{
        console.log(resultData[0].sData);
        setsDataToggled(!sDataToggled);
        setVisibleItem(itemId)
        return ()=>{
          setsDataToggled(!sDataToggled)
        }
  }
  const viewNDetail =(itemId)=>{
    setnDataToggled(!nDataToggled);
    setVisibleItem(itemId)
    return ()=>{
      setnDataToggled(!nDataToggled)
    }
}
// sdata change handler ======================
  useEffect(()=>{
    !sDataToggled?setData(resultData[0].sData.filter((data)=>(data.id<=4))):setData(resultData[0].sData.filter((data)=>(data.id)))
  },[sDataToggled])
  useEffect(()=>{
    !nDataToggled?setnData(resultData[1].nData.filter((data)=>(data.id<=4))):setnData(resultData[1].nData.filter((data)=>(data.id)))
  },[nDataToggled])

  return (
    <BrowserRouter>
      <Header />
      <div className=" container flex justify-center items-center m-auto">
      <div className=" parent flex flex-col mt-[10vh] w-[70%] max-lg:w-[85%]  max-sm:w-[97%] ">
        <div className="child1 pt-5  w-full flex justify-center items-center max-md:fixed max-md:bottom-0 lg:sticky lg:top-[10vh] max-sm:bottom-0  bg-[rgb(212, 221, 232)] z-40">
          <div className=" date-time flex w-[50%] max-md:w-[100%] justify-evenly items-center   border bg-white">
            {dayData.map((day) => {
              return <Day key={day.id} data={day} position={position} setPosition={setPosition} />;
            })}
          </div>
        </div>
        <div className="child2 sticky top-[10vh] bg-slate-100   z-30 ">
          <div className=" flex ">
            <Link to={"/"} className=" pr-3 text-2xl font-bold">{"<"} </Link>
            <div>
              <div>
                <h1 className=" text-xl font-semibold" >🪙 NIFTY 50</h1>
              </div>
              <div>
                <h1>
                  {" "}
                  &nbsp; ₹ 2200.23 <span className=" font-extrabold text-green-500 ">&uarr;</span> <span className=" text-green-400 text-sm">(+0.234%)</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------- */}
        <div className="boxes-container flex flex-wrap justify-center  gap-[20px] max-lg:grid-cols-1">
         {
          niftyData.map((data)=>{
           return <div key={data.id} className="box flex w-[45%] max-lg:w-[90%] justify-between flex-col p-4 border bg-white rounded-md">
            <div>
            <div className=" top-part flex justify-between items-center">
               <div className="message-container">
               <span>{data.name}</span>
               </div>
               <div className="info-container relative">
              {data.info.isInfo?<span id="info-icon" onMouseEnter={()=>{handleMouseEnter(data.id)}}
              // onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseLeave}
              > ℹ</span>:""}
               {
                hoveredItem === data.id &&(
                  <div
                  onMouseEnter={()=>{setHoveredItem(data.id)}}
                  onMouseLeave={handleMouseLeave} className={` z-20 show-data absolute w-[20rem] text-sm h-[20vh] overflow-hidden border backdrop-blur-2xl bg-white rounded-md p-2 right-10 top-0`}>
                <p className="">{data.info.value}</p>
               </div>
                )
               }
               </div>
            </div>
            <div className=" relative image-container px-[20%] py-4">
                <img src={data.imgUrl} alt="img" />
                <img className= {`absolute top-${data.cordinate.x} w-5 max-md:w-7 left-[${data.cordinate.y+position>100?data.cordinate.y-position:data.cordinate.y+position<0?data.cordinate.y+position:data.cordinate.y-position}%]`} src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg" alt="" />

               <div className=" flex justify-between items-center">
                  {
                   data.content.map((data)=>{
                    return (
                      <div key={data.id} className=" flex flex-col gap-3 justify-center"
                     >
                             <h2 className=" text-center">{data.value}</h2>
                             <p className={` px-3 rounded-md text-center text-sm pb-[2px] ${data.title.toLowerCase()==="bearish"?" bg-pink-200 text-red-700":data.title.toLowerCase()==="neutral"?" bg-slate-300 text-gray-600":" bg-green-200 text-green-500"}`} >{data.title}</p>
                      </div>
                    );
                   })
                  }
               </div>
               </div>
               <div className=" grid grid-cols-3 justify-between flex-wrap pt-5  relative left-[6%] ">
                 {
                 data.gridContent? data.gridContent.map((data)=>(
                    <div className="flex flex-col" >
                      <div><p>{data.value}</p></div>
                      <div><p className=" text-gray-400" >{data.title}</p></div>
                    </div>
                  )):""
                 }

               </div>
            </div>
               <div className=" display-more ">
               {
                <div>
                   <div className=" grid grid-cols-1 justify-between flex-wrap px-[6%]  relative  ">
                  {
                    data.sData?Data.map((data)=>(
                      
                      <div key={data.id} className="flex justify-between items-center" >
                      <div className=" flex justify-between items-center" ><span className=" bg-pink-200 px-2 py-[2px] text-[12px] text-red-600 rounded-sm">S</span><p className=" pl-2">  {data.name}</p></div>
                      <div><p>{data.value}</p></div>
                    </div>
                   )):data.nData?nData.map((data)=>(
                    <div key={data.id} className="flex justify-between items-center" >
                      <div className=" flex justify-between items-center" ><span className=" bg-slate-200 px-2 py-[2px] text-[12px] text-gray-600 rounded-sm">N</span><p className=" pl-2"> {data.name}</p></div>
                      <div><p>{data.value}</p></div>
                    </div>
                   )):""
                  }
                  </div>
                </div>
               }
               {data.isDetail?<div className=" flex justify-end items-center pr-[5%]">

                {   <>
                    {data.sData?<p className=" pt-2 text-gray-400 hover:text-blue-500 cursor-pointer" onClick={()=>{viewSDetail(data.id)}} >{sDataToggled ?"View Less 🔼":"View Details 🔽"}</p>:""}
                   {data.nData? <p className=" pt-2 text-gray-400 hover:text-blue-500 cursor-pointer" onClick={()=>{viewNDetail(data.id)}} >{nDataToggled ?"View Less 🔼":"View Details 🔽"}</p>:""}
                    </>
                } 
               </div>:""} 
               </div>
          </div>
          })
         }
        </div>
      </div>
      </div>    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
