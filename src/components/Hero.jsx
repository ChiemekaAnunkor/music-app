import React from "react";
import DownloadAds from "./DownloadAds";

function  Hero () {
    return  (
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
      {/* left side  */}
      <div className="heading flex flex-col items-start justify-between h-[100%] text-[3rem]">
          <span>Expereince The</span> {" "}
          <span> <b> Best Qaulity Music</b></span>
          <span className="text-[15px] text-[#525D6E]">
            asdasd asdasda as asd asdasd sad asdas addasd a sd.
            <br></br>
            sdsdsds sd sdsj dsjdjsj djshdhsdjs.
          </span>
                {/* download ads  */}
          <div>
              <span className="text-[13px]" > Download Now on IOS and Andriod</span>
              <DownloadAds/>
          </div>

      </div>
      {/* right side  */}
        <div className="images relative w-[50%]">
            <img src={require("../img/backgraphics.png")} alt="" className="mockup absolute top[-8rm] left-19rem" />
            <img src={require("../img/p 1.png")} alt="" className="absolute top-[-15rem] h-[34rem] left-[13rem] " />
            <img src={require("../img/p 2.png")} alt="" className="absolute left-[235px] top-[94px] w-[175px]" />
            <img src={require("../img/p 3.png")} alt="" className="absolute w-[5rem] left-[13rem] top-[12rem]" />
            <img src={require("../img/p 4.png")} alt="" className="absolute w-[5rem] left-[12.5rem] top-[12rem]" />

        </div>
      </div>


        )
}
export default Hero;