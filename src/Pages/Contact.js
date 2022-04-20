import React, { useEffect, useRef, useState } from "react";
// gsap
import gsap, { Power3 } from "gsap";
// Wouter
import AnimatedWords from "../Components/AnimatedWords";

export default function Contact(props) {
  const contactContainerRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const contactElements = useRef([]);

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/9f625ad0-bbc4-11ec-8bd8-6d49e4d0c791";

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: Power3.easeOut,
      },
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
        id: "ContactForm",
      },
    });

    tl.from(contactContainerRef.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(
      contactElements.current,
      {
        yPercent: 20,
        opacity: 0,
        stagger: 0.04,
      },
      "<0.1"
    );
  }, []);

  return (
    <>
      <div id="Contact" className="relative ">
        <div className="contactContainer" ref={contactContainerRef}>
          {submitted ? (
            <> Thanks for your submission :) </>
          ) : (
            <>
              <h2>
                <AnimatedWords
                  text="Let's work together"
                  trigger="#Contact"
                  startTrigger="70%"
                  delay={0.2}
                />
              </h2>
              <form
                className="flex-column "
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
              >
                {" "}
                <div className="flex instance justify-between">
                  <label
                    ref={(e) => (contactElements.current[0] = e)}
                    htmlFor="fname"
                  >
                    Name:
                  </label>
                  <input
                    ref={(e) => {
                      contactElements.current[1] = e;
                    }}
                    type="text"
                    id="fname"
                    name="fname"
                    required
                  />
                </div>
                <div className="flex instance justify-between justify-between">
                  <label
                    ref={(e) => {
                      contactElements.current[2] = e;
                    }}
                    htmlFor="fname"
                  >
                    Email:
                  </label>
                  <input
                    ref={(e) => {
                      contactElements.current[3] = e;
                    }}
                    type="email"
                    id="fname"
                    name="fname"
                    required
                  />
                </div>
                <div className="flex instance justify-between">
                  <label
                    ref={(e) => {
                      contactElements.current[4] = e;
                    }}
                    htmlFor="fstory"
                  >
                    Let's talk about:
                  </label>
                  <input
                    ref={(e) => {
                      contactElements.current[5] = e;
                    }}
                    className="topic"
                    type="text"
                    id="fmessage"
                    name="fmessage"
                    required
                  />
                </div>
                <div className="buttonContainer flex justify-center img-fluid">
                  <button
                    ref={(e) => {
                      contactElements.current[6] = e;
                    }}
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
