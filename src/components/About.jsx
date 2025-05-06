import React from "react";
import "./styles/About.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LinkIcon from '@mui/icons-material/Link';

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <h1>About me</h1>
        <p>
          My name is Kaisa Ets, and I am 30 years old. I have previously studied
          at University of Tartu Pärnu College, where I graduated from tourism
          and hotel management. After working in the field for a few years, I
          attended career counseling. After analyzing the results, I decided to
          take some lT courses to gain more insight. This, in turn, made me want
          to gain a deeper understanding of the subject, so I applied to Tartu
          Vocational College, specializing in software development and was
          accepted.{" "}
        </p>
        <div className="experience">
          <VerticalTimeline animate="true" lineColor="#122223">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2024 - ..."
              iconStyle={{ background: "rgb(231, 84, 133)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Software development
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Vocational education
              </h4>
              <p>Tartu Vocational College</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May - June 2024"
              iconStyle={{ background: "rgb(86, 162, 223)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Technical consultant intern
              </h3>
              <p>Telia Eesti AS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="March - October 2024"
              iconStyle={{ background: "rgb(231, 84, 133)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                "WoTech" reskilling program
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p><a
                  href="https://www.smartworkacademy.com/wotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Java, Python <LinkIcon />
                </a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="March 2023 - January 2024"
              iconStyle={{ background: "rgb(231, 84, 133)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                            "Work In Tech" retraining program
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>
                <a
                  href="https://www.coursera.org/professional-certificates/google-it-support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google IT Support Specialist <LinkIcon />
                </a>
                <br />
                <a
                  href="https://www.coursera.org/professional-certificates/google-project-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Project Management <LinkIcon />
                </a>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2021"
              iconStyle={{ background: "rgb(86, 162, 223)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Travel consultant
              </h3>
              <p>CWT Estonia AS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - 2019"
              iconStyle={{ background: "rgb(231, 84, 133)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Tourism and Hotel Management
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Diploma of professional higher education
              </h4>
              <p>University of Tartu Pärnu College</p>
            </VerticalTimelineElement>
           </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default About;