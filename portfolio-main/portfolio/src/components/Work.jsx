//Work.jsx
import React from 'react';
import WorkItem from './WorkItem'

const data = [
    {
        year: 2018,
        title: 'High School',
        duration: '2016 - 2018',
        details: 'Completed secondary education at Bharathiyar Matriculation Higher Secondary School in Chennai, India. Received the school second award in board exams.',
    },
    {
        year: 2020,
        title: 'Higher Secondary',
        duration: '2018 - 2020',
        details: 'Studied at Mahindra World School in Chennai, India. Received the first award in Computer Applications Subject.',
    },
    {
        year: 2023,
        title: 'Bachelor of Commerce: Computer Applications',
        duration: 'June 2020 - April 2023',
        details: 'Graduated from Women\'s Christian College in Chennai, India with a CGPA of 8.8/10. Received the Best Outgoing Student award. Coursework included Information Systems, .NET Technology, OOP in Java, Programming using Python, and Web Technology.',
    },
    {
        year: 2025,
        title: 'Master of Science: Computer Software Engineering',
        duration: 'September 2023 - May 2025',
        details: 'Completed graduate studies at Northeastern University - College of Engineering in Seattle, WA with a CGPA of 3.6/4. Coursework included Algorithms & Data Structures, Web Development, UX Engineering, Database Design, and Software Quality & Testing.',
    },
    {
        year: 2025,
        title: 'Software Engineer - Contract',
        duration: 'July 2025 - December 2025',
        details: 'Worked at Technology Crest Corporation remotely. Contributed to Cyberpal, a compliance platform, building System Security Plan (SSP) management and RFP management systems. Implemented full-stack features using React, Node.js, Express, and PostgreSQL, improving documentation effort by 40% and proposal turnaround time by 70%.',
    },
]

const Work = () => {
    return(
        <div id='work' className="education">
            <h1 className="dodo">Education & Experience</h1>
            {data.map((item, idx) => (
                <WorkItem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details} 
                />
            ))}
        </div> 
    )
}

export default Work;