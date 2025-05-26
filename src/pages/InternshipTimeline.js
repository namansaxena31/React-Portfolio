import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdWork } from 'react-icons/md';

export default function InternshipTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022"
        iconStyle={{ background: '#6a1b9a', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <img
            src="/images/idbi_logo.png"
            alt="IDBI Logo"
            style={{ height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          IDBI Bank
        </h4>
        <p>Built Spring web applications and REST APIs</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
        iconStyle={{ background: '#0d47a1', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Fullstack Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <img
            src="/images/skad_logo.png"
            alt="SKAD Logo"
            style={{ height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          SKAD IT Solutions
        </h4>
        <p>Built fullstack web applications using Laravel</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2025"
        iconStyle={{ background: '#1b5e20', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <img
            src="/images/omang_logo.png"
            alt="Omang Logo"
            style={{ height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          Omang Technologies
        </h4>
        <p>Developed web and android applications using Laravel, React, Flutter and Node.js</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
