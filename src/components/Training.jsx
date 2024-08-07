import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { trainings } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TrainingCard = ({ training}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={training.date}
      iconStyle={{ background: training.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={training.icon}
            alt={training.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{training.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {training.company_name}
         
        </p>

      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {training.points.map((point, index) => (
          <li
            key={`training-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Training = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Elevating Expertise: Training for Excellence
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Trainings
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {trainings.map((training, index) => (
            <TrainingCard
              key={`training-${index}`}
              training={training}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Training, "training");