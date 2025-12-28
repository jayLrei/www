import React from "react";

export default function Description() {
  return (
    <div className="absolute z-5 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-xl bg-opacity-90 text-black p-6 rounded-lg shadow-lg w-100 text-center">
      <h2 className="text-6xl font-bold mb-10">
        WWW 주민 모두 행복해지는 주루마블
      </h2>
      <div className="text-4xl flex flex-col gap-10 text-left font-semibold">
        <p>1. 주사위를 던져 나오는 숫자대로 칸을 이동한다.</p>
        <p>
          2. 도착한 칸에 쓰여진 <span className="bg-green-300">미션</span>이나{" "}
          <span className="bg-rose-700 text-white">벌칙</span>,{" "}
          <span className="bg-cyan-300">보너스</span>를 수행한다.
        </p>
        <p>
          3. 한 바퀴를 가장 빠르게 돈{" "}
          <span className="text-blue-900 font-bold">1, 2, 3위 팀</span>이{" "}
          <span className="text-rose-900 font-bold">5, 6, 7위 팀</span>에게
          사랑이 담긴 술을 말아준다.
        </p>
        <p>
          4. 벌칙주는 우정주를 말아주되 마시는 순서는 알아서 정한다. 문명인답게,
          교양있게 말아준다.
        </p>
        <p>
          <span className="bg-slate-300 ml-8">감옥</span>은 무조건
          수행해야함(흑기사/장미 가능)
        </p>
        <p>6. 업히기, 잡기 없음. 윷놀이 아님</p>
        <p>7. 벌칙은 당당하고 떳떳하게 수행하는 멋진 WWW 공연진이 된다.</p>
        <p>8. Sleep tomorrow, but tonight go super crazy</p>
      </div>
    </div>
  );
}
