import { RoadmapNode, Category } from '../types';

export const generateMockRoadmap = (query: string, category: Category): RoadmapNode[] => {
  const roadmaps: Record<Category, (query: string) => RoadmapNode[]> = {
  career: generateCareerRoadmap,
  skill: generateSkillRoadmap,
  project: generateProjectRoadmap,
  course: generateCourseRoadmap
};
  return roadmaps[category](query);
};

const generateCourseRoadmap = (query: string): RoadmapNode[] => {
  return [
    {
      id: '1',
      title: 'Choose Course',
      description: 'Select the course you want to learn',
      x: 600,
      y: 50,
      level: 0,
      category: 'course',
      connections: ['2'],
      resources: {
        youtubeVideos: [
          { title: 'How to Choose the Right Course', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Best Online Learning Tips', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Start by selecting the course related to your career goal. Check course content, duration, and difficulty level before starting.',
        searchResults: [
          { title: 'Course Selection Guide', url: 'https://example.com', description: 'How to select the best course for your career' },
          { title: 'Online Learning Tips', url: 'https://example.com', description: 'Tips to learn effectively online' }
        ]
      }
    },
    {
      id: '2',
      title: 'Learn Basics',
      description: 'Understand fundamental concepts',
      x: 600,
      y: 250,
      level: 1,
      category: 'course',
      connections: ['3'],
      resources: {
        youtubeVideos: [
          { title: 'Beginner Course Guide', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Fundamentals Explained', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Start learning basic concepts of the course. Focus on understanding theory before moving to advanced topics.',
        searchResults: [
          { title: 'Beginner Learning Guide', url: 'https://example.com', description: 'Learn basics step by step' },
          { title: 'Study Techniques', url: 'https://example.com', description: 'Best ways to remember concepts' }
        ]
      }
    },
    {
      id: '3',
      title: 'Practice Exercises',
      description: 'Solve problems and complete assignments',
      x: 600,
      y: 450,
      level: 2,
      category: 'course',
      connections: ['4'],
      resources: {
        youtubeVideos: [
          { title: 'Practice Problems Guide', url: 'https://youtube.com', thumbnail: '' },
          { title: 'How to Learn Faster', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Practice what you learn by solving exercises, quizzes, and assignments. Practice helps to understand concepts deeply.',
        searchResults: [
          { title: 'Practice Methods', url: 'https://example.com', description: 'Best ways to practice effectively' },
          { title: 'Assignment Tips', url: 'https://example.com', description: 'How to complete assignments correctly' }
        ]
      }
    },
    {
      id: '4',
      title: 'Complete Course',
      description: 'Finish course and revise all topics',
      x: 600,
      y: 650,
      level: 3,
      category: 'course',
      connections: [],
      resources: {
        youtubeVideos: [
          { title: 'Course Completion Tips', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Revision Strategy', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Complete the course, revise all topics, and test your knowledge. Make notes and prepare for real-world application.',
        searchResults: [
          { title: 'Revision Guide', url: 'https://example.com', description: 'How to revise effectively' },
          { title: 'Apply Your Skills', url: 'https://example.com', description: 'Use knowledge in real projects' }
        ]
      }
    }
  ];
};

const generateCareerRoadmap = (query: string): RoadmapNode[] => {
  return [
    {
      id: '1',
      title: 'Choose Career Goal',
      description: 'Decide which career you want to pursue',
      x: 600,
      y: 50,
      level: 0,
      category: 'career',
      connections: ['2', '3'],
      resources: {
        youtubeVideos: [
          { title: 'How to Choose the Right Career', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Career Guidance for Students', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Start by deciding your career goal. Understand your interests, strengths, and future opportunities before choosing a career path.',
        searchResults: [
          { title: 'Career Selection Guide', url: 'https://example.com', description: 'How to choose the right career path' },
          { title: 'Career Planning Tips', url: 'https://example.com', description: 'Plan your future career step by step' }
        ]
      }
    },
    {
      id: '2',
      title: 'Learn Required Skills',
      description: 'Learn skills needed for your career',
      x: 350,
      y: 250,
      level: 1,
      category: 'career',
      connections: ['4'],
      resources: {
        youtubeVideos: [
          { title: 'Top Skills for Students', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Learn Skills Fast', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Identify the skills required for your career and start learning them step by step using courses, tutorials, and practice.',
        searchResults: [
          { title: 'Skill Development Guide', url: 'https://example.com', description: 'Learn important skills for career growth' },
          { title: 'Online Learning Platforms', url: 'https://example.com', description: 'Best sites to learn new skills' }
        ]
      }
    },
    {
      id: '3',
      title: 'Build Projects',
      description: 'Create projects to gain experience',
      x: 850,
      y: 250,
      level: 1,
      category: 'career',
      connections: ['4'],
      resources: {
        youtubeVideos: [
          { title: 'Project Ideas for Students', url: 'https://youtube.com', thumbnail: '' },
          { title: 'How to Build Portfolio', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Work on real projects to improve your knowledge. Projects help you understand concepts and build a strong portfolio.',
        searchResults: [
          { title: 'Student Project Ideas', url: 'https://example.com', description: 'Best projects for beginners' },
          { title: 'Portfolio Guide', url: 'https://example.com', description: 'How to create a strong portfolio' }
        ]
      }
    },
    {
      id: '4',
      title: 'Apply for Internships / Jobs',
      description: 'Start applying for internships and jobs',
      x: 600,
      y: 450,
      level: 2,
      category: 'career',
      connections: ['5'],
      resources: {
        youtubeVideos: [
          { title: 'How to Apply for Jobs', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Resume Building Tips', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Prepare your resume, create portfolio, and start applying for internships and jobs related to your career.',
        searchResults: [
          { title: 'Resume Writing Guide', url: 'https://example.com', description: 'Make a strong resume' },
          { title: 'Interview Preparation', url: 'https://example.com', description: 'Prepare for job interviews' }
        ]
      }
    },
    {
      id: '5',
      title: 'Prepare for Interview',
      description: 'Practice interview questions and improve communication',
      x: 600,
      y: 650,
      level: 3,
      category: 'career',
      connections: [],
      resources: {
        youtubeVideos: [
          { title: 'Interview Tips for Students', url: 'https://youtube.com', thumbnail: '' },
          { title: 'HR Interview Questions', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Practice interview questions, improve communication skills, and prepare for technical and HR interviews.',
        searchResults: [
          { title: 'Interview Questions List', url: 'https://example.com', description: 'Common interview questions' },
          { title: 'Communication Skills Tips', url: 'https://example.com', description: 'Improve speaking skills' }
        ]
      }
    }
  ];
};

const generateProjectRoadmap = (query: string): RoadmapNode[] => {
  return [
    {
      id: '1',
      title: 'Define Requirements',
      description: 'Clearly outline project goals and requirements',
      x: 600,
      y: 50,
      level: 0,
      category: 'project',
      connections: ['2'],
      resources: {
        youtubeVideos: [
          { title: 'Requirements Gathering', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Project Scope Definition', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary: 'Start by clearly defining what you want to achieve. Write down specific, measurable goals and identify all stakeholders and their needs.',
        searchResults: [
          { title: 'Requirements Template', url: 'https://example.com', description: 'Professional requirements documentation templates' },
          { title: 'Stakeholder Analysis Guide', url: 'https://example.com', description: 'Identify and manage project stakeholders' }
        ]
      }
    },
    {
      id: '2',
      title: 'Create Project Plan',
      description: 'Develop timeline, milestones, and resource allocation',
      x: 600,
      y: 250,
      level: 1,
      category: 'project',
      connections: ['3', '4'],
      resources: {
        youtubeVideos: [
          { title: 'Project Planning Basics', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Gantt Chart Creation', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary: 'Create a detailed project plan with timelines, milestones, and resource requirements. Break down large tasks into manageable components.',
        searchResults: [
          { title: 'Project Management Tools', url: 'https://example.com', description: 'Compare popular project management software' },
          { title: 'Timeline Planning Templates', url: 'https://example.com', description: 'Professional project timeline templates' }
        ]
      }
    },
    {
      id: '3',
      title: 'Execute Tasks',
      description: 'Implement the project according to your plan',
      x: 350,
      y: 450,
      level: 2,
      category: 'project',
      connections: ['5'],
      resources: {
        youtubeVideos: [
          { title: 'Task Management Tips', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Productivity Techniques', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary: 'Execute your project plan systematically. Focus on one task at a time and track progress regularly. Adjust plans as needed.',
        searchResults: [
          { title: 'Productivity Methods', url: 'https://example.com', description: 'Proven methods to boost productivity' },
          { title: 'Task Prioritization', url: 'https://example.com', description: 'Prioritize tasks effectively' }
        ]
      }
    },
    {
      id: '4',
      title: 'Monitor Progress',
      description: 'Track progress and adjust plans as needed',
      x: 850,
      y: 450,
      level: 2,
      category: 'project',
      connections: ['5'],
      resources: {
        youtubeVideos: [
          { title: 'Progress Tracking Methods', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Project Metrics Dashboard', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary: 'Regularly monitor your progress against the plan. Use metrics and key performance indicators to track success and identify issues early.',
        searchResults: [
          { title: 'Project Tracking Tools', url: 'https://example.com', description: 'Tools to monitor project progress' },
          { title: 'Performance Metrics Guide', url: 'https://example.com', description: 'Essential project performance indicators' }
        ]
      }
    },
    {
      id: '5',
      title: 'Review & Optimize',
      description: 'Evaluate results and optimize for future projects',
      x: 600,
      y: 650,
      level: 3,
      category: 'project',
      connections: [],
      resources: {
        youtubeVideos: [
          { title: 'Project Review Process', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Lessons Learned Documentation', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary: 'Conduct a thorough project review to identify what worked well and what could be improved. Document lessons learned for future projects.',
        searchResults: [
          { title: 'Project Retrospective Guide', url: 'https://example.com', description: 'Conduct effective project retrospectives' },
          { title: 'Continuous Improvement', url: 'https://example.com', description: 'Build a culture of continuous improvement' }
        ]
      }
    }
  ];
};

const generateSkillRoadmap = (query: string): RoadmapNode[] => {
  return [
    {
      id: '1',
      title: 'Understand Skill',
      description: 'Learn what this skill is and why it is important',
      x: 600,
      y: 50,
      level: 0,
      category: 'skill',
      connections: ['2'],
      resources: {
        youtubeVideos: [
          { title: 'Introduction to Skill Learning', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Why Skills Are Important', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Start by understanding the skill you want to learn. Know its uses, career benefits, and where it is applied.',
        searchResults: [
          { title: 'Skill Learning Guide', url: 'https://example.com', description: 'How to start learning new skills' },
          { title: 'Importance of Skills', url: 'https://example.com', description: 'Why skill development matters' }
        ]
      }
    },
    {
      id: '2',
      title: 'Learn Basics',
      description: 'Study fundamental concepts of the skill',
      x: 600,
      y: 250,
      level: 1,
      category: 'skill',
      connections: ['3', '4'],
      resources: {
        youtubeVideos: [
          { title: 'Beginner Tutorial', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Basic Concepts Explained', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Learn the basic concepts first. Focus on understanding theory before moving to advanced topics.',
        searchResults: [
          { title: 'Beginner Learning Plan', url: 'https://example.com', description: 'Step by step beginner guide' },
          { title: 'Study Tips', url: 'https://example.com', description: 'Best ways to learn faster' }
        ]
      }
    },
    {
      id: '3',
      title: 'Practice Regularly',
      description: 'Practice daily to improve your skill',
      x: 350,
      y: 450,
      level: 2,
      category: 'skill',
      connections: ['5'],
      resources: {
        youtubeVideos: [
          { title: 'Practice Techniques', url: 'https://youtube.com', thumbnail: '' },
          { title: 'How to Improve Skills Fast', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Practice regularly to gain confidence. The more you practice, the better your understanding becomes.',
        searchResults: [
          { title: 'Practice Methods', url: 'https://example.com', description: 'Effective practice techniques' },
          { title: 'Learning Routine', url: 'https://example.com', description: 'Build daily learning habits' }
        ]
      }
    },
    {
      id: '4',
      title: 'Build Mini Projects',
      description: 'Apply your skill in small projects',
      x: 850,
      y: 450,
      level: 2,
      category: 'skill',
      connections: ['5'],
      resources: {
        youtubeVideos: [
          { title: 'Project Ideas for Beginners', url: 'https://youtube.com', thumbnail: '' },
          { title: 'How to Build Projects', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Build small projects using your skill. Projects help you understand real-world usage.',
        searchResults: [
          { title: 'Mini Project Ideas', url: 'https://example.com', description: 'Best beginner projects' },
          { title: 'Portfolio Guide', url: 'https://example.com', description: 'Create strong portfolio' }
        ]
      }
    },
    {
      id: '5',
      title: 'Master the Skill',
      description: 'Revise, practice, and become confident',
      x: 600,
      y: 650,
      level: 3,
      category: 'skill',
      connections: [],
      resources: {
        youtubeVideos: [
          { title: 'Advanced Learning Tips', url: 'https://youtube.com', thumbnail: '' },
          { title: 'Expert Advice', url: 'https://youtube.com', thumbnail: '' }
        ],
        aiSummary:
          'Revise all topics, practice more, and improve your knowledge. Master the skill to use it in career and projects.',
        searchResults: [
          { title: 'Advanced Guide', url: 'https://example.com', description: 'Become expert in your skill' },
          { title: 'Career Skills Tips', url: 'https://example.com', description: 'Use skills in real jobs' }
        ]
      }
    }
  ];
};