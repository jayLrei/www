// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      <div className="flex items-center justify-center">
        <img src="/images/whever_logo.png" className="w-80 h-80" alt="" />
      </div>
      <div
        className="font-bold p-2 text-[40px] p-8 rounded-lg hover:bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duraion-700 hover:text-white cursor-pointer"
        onClick={() => navigate("/game")}
      >
        신나는 주루마블 START
      </div>

      {/* {count === 1 && (
        <div className="fixed flex items-center justify-center z-10">
          <img
            src="/images/bonobono.jpg"
            alt=""
            className="w-60 h-60"
            style={{
              transform: "translate(0, -50%) scale(1.5)",
              animation: "fade-in 1s ease",
            }}
          />
        </div>
      )} */}
    </div>
  );
}
