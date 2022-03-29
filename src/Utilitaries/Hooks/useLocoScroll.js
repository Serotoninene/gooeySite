import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  useEffect
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll() {

  // useEffect(() => {
  //   if (!start) return;
  //   const scrollEl = document.querySelector("#smooth-scroll");

  //   const locoScroll = new LocomotiveScroll({
  //     el: scrollEl,
  //     smooth: true,
  //     lerp: 0.5,
  //     multiplier: 0.6
  //   });

  // }, [start])
  // }


  useEffect(() => {

    let locoScroll = null;

    const scrollEl = document.querySelector("[data-scroll-container");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.05,
      multiplier: 0.01
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length ?
            locoScroll.scrollTo(value, 0, 0) :
            locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  });
}