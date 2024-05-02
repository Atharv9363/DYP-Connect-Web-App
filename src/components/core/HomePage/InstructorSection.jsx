import React from 'react';
import CTAButton from '../../../components/core/HomePage/Button';
import { FaArrowRight } from 'react-icons/fa';
import Instructor from '../../../assets/Images/Instructor.png';
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="flex flex-col lg:flex-row gap-20 items-center mx-auto w-11/12 max-w-maxContent">
        <div className="lg:w-[50%]">
          <img
            src={Instructor}
            alt=""
            className="shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-lg"
          />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold">
            Become an <HighlightText text={'instructor'} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Highly experienced Instructors from our college will teach the students on
            DYP-Connect. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit mt-6">
            <CTAButton active={true} linkto={'/signup'}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
