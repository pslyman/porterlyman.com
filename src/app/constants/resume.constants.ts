import {
  AllJobsHistory,
  JobHistory,
  SkillsObject,
} from '../interfaces/resume.interface';

export const jobHistory: AllJobsHistory = {
  'Career': [
    {
      id: 0,
      title: 'Senior Software Engineer | Team Lead',
      location: 'Republic Services',
      dateRange: 'October 2022 – Current',
      description:
        'Rebuilt checkout and receipt systems, which contained financial and other sensitive data. Worked on their mono-repo conversions, including large component migrations and MFEs. Work included Node, NX, and heavy Angular knowledge.',
    },
    {
      id: 1,
      title: 'Software Engineer',
      location: 'Health Catalyst',
      dateRange: 'January 2019 – October 2022',
      description:
        'Front-end and back-end for budgeting, labor management, and reporting software. Day to day work included Angular, .NET, and heavy database work.',
    },
    {
      id: 2,
      title: 'Software Quality Assurance Engineer',
      location: 'Modere',
      dateRange: 'September 2018 – January 2019',
      description:
        'Web, security, and mobile product testing across platforms and countries. Built mobile and web automations, manual testing, and doing preliminary security testing. I was the last stop for product approval and was immersed in ticket tracking for all iterations.',
    },
    {
      id: 4,
      title: 'Developer',
      location: 'H&K',
      dateRange: 'March 2018 – August 2018',
      description:
        'Built a content and data management webapp (CMS). Worked with their data migration automations, Heavy use of Python and Falcon (API), SQL Alchemy, MySQL, Docker, and Vue.',
    },
    {
      id: 5,
      title: 'QA / Software Engineer Intern',
      location: 'Health Catalyst',
      dateRange: 'May 2017 – April 2018',
      description:
        'Part of the QA team, specialized in Website Development Testing. Manual and Automated testing included. Found bugs, recommended improvements, and worked with developers and project managers to improve the product in all ways possible. Wrote test case/scenarios, bug cases, and worked closely with team. Put heavy work into Selenium driven automated tests with C#. Developed e2e and unit tests for their Angular app.',
    },
  ],
  'Side-Gigs': [
    {
      id: 0,
      title: 'Mentor in Software Engineering',
      location: 'Thinkful',
      dateRange: 'January 2022 – Current',
      description:
        'Mentor for students in their full stack cohorts consisting of web fundamentals, React, Node, Postgres, and more - helping them get across the finish line.',
    },
    {
      id: 1,
      title: 'Software Engineer',
      location: 'Dramafy',
      dateRange: 'November 2020 – 2022',
      description:
        'Ported their entire Vue webapp experience into iOS and Android apps with a native feature-set, using Cordova. Also helped with content management for their audio streaming.',
    },
    {
      id: 2,
      title: 'Front-End Developer',
      location: 'The Stoke Group',
      dateRange: 'December 2017 – January 2018',
      description:
        'Co-developed an estimated ROI calculator web app to draw interest from clients. Wrote from scratch using Angular',
    },
  ],
  'Projects': [
    {
      id: 0,
      title: 'Software Engineer and Publisher',
      location: 'Pizza Dough Calculator',
      dateRange: 'May 2019 – Present',
      description:
        'Built from scratch using Ionic and Angular, an Android/iOS app suite used by thousands of pizza hobbyists all around the world, including successful and prestigious pizza restaurant owners.',
      of: true,
    },
  ],
};

export const skills: SkillsObject = {
  development: [
    'Proficient with Typescript, Javascript (ES6), Angular, Vue, React (and React-Native), C#, Ionic/Cordova, Redux, Transact SQL.',
    'Proficient with SQL Server, PostgreSQL, .NET Core, Node, MySQL, and Fluent Migrator.',
    'Proficient with Linux environments, Linux containers, and with virtualization software.',
    'Experienced with Docker, Express, and Power-Bi integrations.',
    'Experienced with ETL processes, including automated ETL scripts.',
  ],
  qa: [
    'Proficient with Protractor, Cypress, Appium, and Selenium, and building e2e and unit tests with Jasmine/Karma.',
    'Experienced with working in TFS, Jira, ADO, and Confluence as part of an Agile working environment for tracking stories and bugs, keeping developers and QAs working closely together especially within test-driven development.',
    'Familiar with automation software, including remote control clients and batch scripts.',
  ],
  other: [
    'Experienced as a mentor, and coached several interns who went on to be hired full-time within the company and externally. Have also mentored outside of the job, and helped people start their careers in tech.',
    'Ability to integrate and work well with remote and onsite team members.',
  ],
};
