"use client";
import { useEffect, useRef } from "react";

export default function Section01() {
  const section01 = useRef(null);

  // 이전 스크립트의 동작을 담당하는 useEffect Hook
  useEffect(() => {
    const handleMouseMove = (e) => {
      section01.current.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    // Mapping 드래그 컨트롤 함수
    const draggable = ($targets) => {
      $targets.forEach(($target) => {
        let isPress = false,
          prevPosX = 0,
          prevPosY = 0;

        const start = (e) => {
          prevPosX = e.clientX;
          prevPosY = e.clientY;
          isPress = true;
        };

        const move = (e) => {
          if (!isPress) return;
          const posX = prevPosX - e.clientX;
          const posY = prevPosY - e.clientY;
          prevPosX = e.clientX;
          prevPosY = e.clientY;
          $target.style.left = $target.offsetLeft - posX + "px";
          $target.style.top = $target.offsetTop - posY + "px";
        };

        const end = () => {
          isPress = false;
        };

        $target.addEventListener("mousedown", start);
        $target.addEventListener("mouseup", end);
        window.addEventListener("mousemove", move);

        return () => {
          $target.removeEventListener("mousedown", start);
          $target.removeEventListener("mouseup", end);
          window.removeEventListener("mousemove", move);
        };
      });
    };

    // 이 조건문은 section01 ref 객체가 DOM 요소를 참조할 경우에만 실행됩니다.
    if (section01.current) {
      section01.current.addEventListener("mousemove", handleMouseMove);
      draggable(section01.current.querySelectorAll(".mover"));
    }

    return () => {
      section01.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={section01} id="section01" className="section01">
      <div className="txtArea">
        <h2>KWON JUN HEE, PORTFOLIO <br/>Publisher & FrontEnd</h2>
      </div>
        <div className="mover mover01 layer" data-speed="-6">
          1234
        </div>
        <div className="mover mover02 layer" data-speed="8">
          3445
        </div>
        <div className="mover mover03 layer" data-speed="-12">
          드디어 이정도?
        </div>
    </section>
  );
}
