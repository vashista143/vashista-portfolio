import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ScrollFloat from "./ScrollFloat";
import timelineElements from "../timelineElements";
const TimelineSection = () => {
  return (
    <section className="relative w-full px-4 md:px-10 lg:px-16 py-16 md:py-32 text-white
    bg-[linear-gradient(180deg,#0D1B4D_0%,#0d1b4d_100%)]
    before:content-[''] before:absolute before:w-[600px] before:h-[600px] 
    before:top-1/2 before:right-[10%] before:-translate-y-1/2
    before:bg-[radial-gradient(circle,rgba(99,102,241,0.5)_0%,rgba(99,102,241,0)_70%)]
    before:blur-[80px] before:z-0">

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  className="text-3xl md:text-5xl font-bold mb-10 md:mb-20">
  My Journey
</ScrollFloat>

      <VerticalTimeline  lineColor="#3b82f6"
  layout="2-columns">
        {timelineElements.map((element) => {
          const isWork = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={{
                background: isWork ? "#3b82f6" : "#6366f1",
                color: "#fff",
              }}
              contentStyle={{
  padding: "0.8rem 1rem",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
}}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255,255,255,0.1)",
              }}
            >
<h3 className="text-base md:text-lg font-semibold">                {element.title}
              </h3>

<p className="text-xs md:text-sm text-gray-400">                {element.location}
              </p>

<p className="mt-2 text-xs md:text-sm text-gray-300 leading-relaxed">                    {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default TimelineSection;