import { useEffect } from "react";
import { gsap } from "gsap";

const GsapTo = () => {

  useEffect(() => {
    gsap.to("#blue-box", {
      opacity: 1,
      scale:1,
      duration: 2,
      onComplete: () => {
        gsap.to("#blue-box", {
          y: -20,
          repeat: -1,
          yoyo: true,
          duration: 1,

        });
      }
    })
  })

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="opacity-0 w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
