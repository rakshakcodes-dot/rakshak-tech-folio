import { EducationItem, ExperienceItem, SkillCategory, ProjectData, ServiceCard, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'What I Build', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE_DATA = {
  name: 'Rakshak Saini',
  shortTitle: 'B.Tech IT Student',
  heroHeadline: 'B.Tech IT Student | Cloud, AI & Web Development Enthusiast',
  subtitle: 'B.Tech Information Technology Student',
  keyAreas: [
    'Cloud Computing',
    'AI Technologies',
    'Web Development',
    'Data Structures & Algorithms'
  ],
  supportingText: 'Building practical technology solutions with cloud platforms, AI tools, modern web technologies, and strong problem-solving fundamentals.',
  institution: 'Meerut Institute of Engineering and Technology (MIET)',
  cohort: '2024 – 2028 (Expected)',
  status: 'Currently Pursuing B.Tech IT',
  location: '127 Jubli Gnj Rajban, Meerut Cantt, UP 250001',
  locationShort: 'Meerut Cantt, UP 250001',
  phone: '(+91) 7251961997',
  phoneRaw: '+917251961997',
  email: 'rakshak.codes@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rakshak-saini-461396324',
  github: 'https://github.com/rakshakcodes-dot',
  githubUsername: 'rakshakcodes-dot',
  resumeSummary: 'Motivated B.Tech third-year student seeking an entry-level cybersecurity position. Passionate about securing cloud infrastructure and leveraging foundational knowledge in security principles to protect systems. Eager to contribute to a dynamic team while developing expertise in both cybersecurity and cloud computing.',
  bio: `I am an Information Technology undergraduate at Meerut Institute of Engineering and Technology (MIET) with a deep passion for cloud infrastructure, modern web architectures, applied AI, and core problem-solving with data structures.

Driven by curiosity and a commitment to continuous learning, I focus on transforming algorithmic concepts and digital tools into reliable, real-world solutions. From deploying robust backend services on Supabase to exploring cloud platforms like AWS and building AI-assisted web experiences, my goal is to craft digital products that offer tangible value and high technical integrity.`,
  coreValues: [
    {
      title: 'Continuous Learning',
      description: 'Eagerly absorbing modern cloud patterns, evolving AI frameworks, and engineering standards.'
    },
    {
      title: 'Practical Development',
      description: 'Turning theoretical computer science knowledge into maintainable, deployed applications.'
    },
    {
      title: 'Algorithmic Problem Solving',
      description: 'Strengthening analytical thinking through Data Structures and Algorithms with Java.'
    },
    {
      title: 'Collaborative Growth',
      description: 'Working productively across cross-functional student teams and open-source civic initiatives.'
    }
  ]
};

export const RESUME_DATA = {
  name: 'Rakshak Saini',
  address: '127 Jubli Gnj Rajban, Meerut Cantt, UP 250001',
  phone: '(+91) 7251961997',
  email: 'rakshak.codes@gmail.com',
  summary: 'Motivated B.Tech third-year student seeking an entry-level cybersecurity position. Passionate about securing cloud infrastructure and leveraging foundational knowledge in security principles to protect systems. Eager to contribute to a dynamic team while developing expertise in both cybersecurity and cloud computing.',
  education: [
    {
      institution: 'Meerut Institute of Engineering and Technology, Meerut U.P',
      degree: 'B.Tech',
      period: '2024 - 2028',
      coursework: 'Networking, Cloud Computing Fundamentals, Data Structures and Operating System.'
    },
    {
      institution: 'K.D International, Meerut U.P',
      degree: '12th',
      period: '2023 - 2024'
    },
    {
      institution: 'Karan Public School, Meerut U.P',
      degree: '10th',
      period: '2021 - 2022'
    }
  ],
  projects: [
    {
      title: 'NagrikSetu A.I',
      subtitle: 'Civic-Tech Municipal Platform',
      description: 'An AI-powered platform that automatically classifies citizen complaints, detects duplicate reports, assigns them to the correct municipal department, and tracks resolution status.',
      link: 'https://rakshakcodes-dot.github.io/NagrikSetu-AI/',
      linkLabel: 'rakshakcodes-dot.github.io/NagrikSetu-AI',
      badge: 'Web & AI Platform'
    },
    {
      title: 'Smart Bin',
      subtitle: 'Hardware & Sensor-Based Waste Segregator',
      description: 'A smart bin which automatically segregates the waste. It is mainly used by the sensor to detect the moisture from the waste (Dry waste or Wet waste) and separate into two parts.',
      tag: 'Hardware',
      badge: 'IoT & Hardware'
    },
    {
      title: 'AWS Scalable Web Application Infrastructure',
      subtitle: 'Production AWS Architecture & IaC Deployment',
      description: 'Engineered a resilient, scalable web application architecture across 8 AWS modules: Root MFA & IAM Least-Privilege Policies, Multi-AZ VPC with Internet Gateway, EC2 (Amazon Linux) with mounted EBS volumes, Application Load Balancer (ALB), S3 with SSE-KMS & Versioning, RDS MySQL, SNS & SQS decoupling, S3-triggered Python Lambda for image resizing, CloudWatch CPU alarms, AWS WAF, and CloudFormation IaC deployment via AWS CLI.',
      tag: 'Cloud Architecture Assignment',
      badge: 'AWS Certified Architecture'
    }
  ],
  skills: {
    technical: [
      'Python',
      'AWS Cloud Console (EC2, S3, EBS, IAM)',
      'Networking fundamentals (TCP/IP, DNS)',
      'Linux commands & Shell environment',
      'Java & Data Structures',
      'Supabase & PostgreSQL',
      'React, TypeScript & Tailwind CSS'
    ],
    soft: [
      'Teamwork',
      'Problem solving',
      'Time management',
      'Willingness to learn',
      'Effective communication'
    ]
  },
  awards: [
    {
      title: 'AWS Cloud Computing Certification',
      issuer: 'Tutedude',
      credentialId: 'TD-RAKS-CC-0734',
      badge: 'Certified'
    },
    {
      title: 'Python with AI',
      issuer: 'AIForTechies',
      verificationUrl: 'https://certx.in/certificate/27431ebc-ac17-43c8-9713-f5b20ad95b991483724',
      badge: 'Verified Credential'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Basic knowledge' },
    { name: 'Hindi', proficiency: 'Bilingual' }
  ]
};

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Information Technology',
  institution: 'Meerut Institute of Engineering and Technology (MIET)',
  location: 'Meerut, Uttar Pradesh, India',
  period: '2024 – 2028 (Expected)',
  status: 'Currently Pursuing',
  highlights: [
    'Focused on core Computer Science and Information Technology curriculum',
    'Active focus on Data Structures & Algorithms, Object-Oriented Programming (Java)',
    'Coursework in Computer Architecture, Operating Systems, and Relational Database Systems',
    'Participating in technical development sprints and project building initiatives'
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'ai-web-dev',
    role: 'AI Web Development',
    organization: 'Independent & Project Work',
    period: '2024 – Present',
    badge: 'Practical Experience',
    description: 'Hands-on practical development involving AI-focused web architectures, generative AI integration, and modern frontend-to-backend tooling.',
    responsibilities: [
      'Integrating Google AI Studio and modern AI APIs into web interfaces to automate smart suggestions and classification workflows.',
      'Constructing responsive client applications with React, TypeScript, and Tailwind CSS.',
      'Implementing secure authentication and data communication flows with serverless backends and REST APIs.'
    ],
    technologies: ['Google AI Studio', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js']
  },
  {
    id: 'inamigos-internship',
    role: 'Internship',
    organization: 'InAmigos',
    period: 'Internship Duration',
    badge: 'Industry Experience',
    description: 'Practical technology internship engagement contributing to digital workflows and collaborative team deliverables.',
    responsibilities: [
      'Collaborated on assigned project deliverables and team milestones.',
      'Participated in development reviews and practical technical tasks.',
      'Applied software fundamentals and problem-solving to support team goals.'
    ],
    technologies: ['Web Technologies', 'Team Collaboration', 'Software Fundamentals'],
    isEditable: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    subtitle: 'Scalable services & cloud architecture',
    icon: 'Cloud',
    skills: [
      {
        name: 'AWS Cloud Console',
        description: 'Hands-on infrastructure provisioning: EC2 compute instances, S3 object storage buckets, EBS storage volumes, and IAM policies.'
      },
      {
        name: 'Supabase & BaaS',
        description: 'Managed PostgreSQL, row-level security policies, user authentication flows, and storage buckets deployment.'
      }
    ]
  },
  {
    category: 'Programming & Core CS',
    subtitle: 'Languages, data structures & logic',
    icon: 'Code2',
    skills: [
      {
        name: 'Python',
        description: 'Scripting, backend logic, data processing, and integration with AI frameworks and modern APIs.'
      },
      {
        name: 'Java & OOP',
        description: 'Object-Oriented Programming (OOP) paradigms, classes, inheritance, polymorphism, and memory management.'
      },
      {
        name: 'Data Structures & Algorithms',
        description: 'Arrays, Linked Lists, Stacks, Queues, Binary Trees, Recursion, Sorting, and Binary Search with analytical complexity analysis.'
      }
    ]
  },
  {
    category: 'Networking & Systems',
    subtitle: 'Protocols, command line & environment',
    icon: 'Terminal',
    skills: [
      {
        name: 'Networking Fundamentals',
        description: 'Core concepts including TCP/IP stack, DNS resolution, IP routing, subnetting, and network security essentials.'
      },
      {
        name: 'Linux Commands & Shell',
        description: 'Command line navigation, file system administration, process monitoring, permissions (chmod/chown), and package management.'
      },
      {
        name: 'Git & GitHub',
        description: 'Branching, commit history, pull requests, and collaborative repository management.'
      }
    ]
  },
  {
    category: 'AI & Machine Intelligence',
    subtitle: 'Applied AI & intelligent tooling',
    icon: 'Sparkles',
    skills: [
      {
        name: 'Python with AI',
        description: 'Practical AI integration, certified by AIForTechies with verified credentials in generative and machine learning concepts.'
      },
      {
        name: 'Google AI Studio & Web AI',
        description: 'Leveraging Gemini model APIs, prompt engineering, structured JSON outputs, smart categorization, and assistive UI.'
      }
    ]
  },
  {
    category: 'Web Development',
    subtitle: 'Modern responsive web stacks',
    icon: 'Layout',
    skills: [
      {
        name: 'React & TypeScript',
        description: 'Component lifecycles, custom hooks, strictly typed state management, and reusable UI architectures.'
      },
      {
        name: 'Tailwind CSS & Vite',
        description: 'Utility-first styling, responsive layouts, rapid HMR build pipelines, and fluid animations.'
      },
      {
        name: 'Node.js & Express.js',
        description: 'RESTful API construction, middleware pipelines, routing, and JSON request/response handling.'
      }
    ]
  },
  {
    category: 'Professional Soft Skills',
    subtitle: 'Team dynamics & execution mindset',
    icon: 'ShieldCheck',
    skills: [
      {
        name: 'Problem Solving & Teamwork',
        description: 'Approaching technical bottlenecks methodically with analytical decomposition while fostering cooperative peer teamwork.'
      },
      {
        name: 'Time Management & Communication',
        description: 'Prioritizing development deliverables, structured task scheduling, and clear, active technical communication.'
      }
    ]
  }
];

export const FEATURED_PROJECT: ProjectData = {
  title: 'NagrikSetu AI',
  tagline: 'Civic-Tech Platform for Structured Pothole Management & Municipal Transparency',
  badge: 'Primary Featured Project',
  problem: 'Lack of coordination and transparency in civic pothole management leads to public frustration and delayed road repairs.',
  problemDetails: [
    'Duplicate Reports: Multiple citizens frequently report the same road hazard, cluttering municipal queues.',
    'Routing Delays: Citizen grievances often stall before reaching the designated field engineer or road contractor.',
    'Zero Visibility: Citizens submit complaints into a black hole without visibility into inspection, assignment, or completion stages.'
  ],
  solution: 'NagrikSetu AI converts unstructured citizen reports into verified, geo-tagged work orders with full transparency.',
  solutionHighlights: [
    'Possible duplicate detection based on GPS coordinates and image comparison',
    'Automated complaint priority assignment based on road severity and traffic impact',
    'Streamlined municipal officer and field contractor assignment coordination',
    'Location-based incident mapping and live geospatial grouping',
    'Real-time status tracking from Pending → In Progress → Assigned → Resolved'
  ],
  rakshakRole: {
    title: 'Role: Supabase Deployment & Backend Infrastructure',
    summary: "Rakshak's core contribution was engineering the deployment and backend database infrastructure on Supabase for the NagrikSetu AI platform.",
    details: [
      'Configured and deployed the managed PostgreSQL database schema on Supabase.',
      'Implemented Supabase Authentication workflows for citizen reporting and administrative access.',
      'Set up Supabase Storage buckets for citizen image uploads (pothole visual proof) with safe public retrieval URLs.',
      'Ensured database connectivity and relational table schemas for complaint lifecycle states.'
    ]
  },
  workflow: [
    {
      step: '01',
      title: 'Citizen Incident Submission',
      description: 'A citizen snaps a photo of a road hazard with browser GPS location auto-attached.'
    },
    {
      step: '02',
      title: 'AI Verification & De-duplication',
      description: 'The system runs duplicate detection logic against nearby existing reports within a proximity radius.'
    },
    {
      step: '03',
      title: 'Structured Work Order',
      description: 'A formal work ticket with priority rating is generated and routed to the municipal zone officer.'
    },
    {
      step: '04',
      title: 'Contractor Dispatch & Resolution',
      description: 'Contractor is assigned, road is repaired, and citizen receives status confirmation from Pending to Resolved.'
    }
  ],
  techStack: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js']
    },
    {
      category: 'Database & Services',
      items: ['Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage']
    },
    {
      category: 'Other Technologies',
      items: ['Browser GPS', 'Interactive Maps', 'Smart Category Suggestion', 'Duplicate Detection Logic', 'Priority Scoring']
    }
  ],
  links: {
    github: 'https://github.com/rakshakcodes-dot',
    liveDemo: 'https://rakshakcodes-dot.github.io/NagrikSetu-AI/'
  }
};

export const SERVICES_DATA: ServiceCard[] = [
  {
    title: 'AI-Powered Web Applications',
    description: 'Building modern web applications that integrate AI tools, generative APIs, and intelligent workflows to automate everyday tasks.',
    icon: 'Sparkles',
    deliverables: [
      'Google AI Studio API integrations',
      'Smart categorization & tagging',
      'Conversational and assistive UI',
      'Dynamic structured prompt flows'
    ]
  },
  {
    title: 'Web Development',
    description: 'Creating responsive, accessible, and fast web interfaces using contemporary frontend technologies and component-driven architecture.',
    icon: 'Layout',
    deliverables: [
      'Single-page React & TypeScript apps',
      'Tailwind CSS responsive design',
      'Interactive dashboards & data cards',
      'Mobile-first cross-device layouts'
    ]
  },
  {
    title: 'Cloud Deployment',
    description: 'Working with cloud platforms like AWS and BaaS providers like Supabase to deploy, host, and manage scalable applications.',
    icon: 'Cloud',
    deliverables: [
      'Supabase database & Auth provisioning',
      'AWS cloud fundamentals (EC2, S3)',
      'Storage bucket setup & security policies',
      'Production deployment workflows'
    ]
  },
  {
    title: 'Problem-Solving Applications',
    description: 'Developing practical software solutions to real-world civic, academic, and business problems using rigorous data structures and Java.',
    icon: 'Cpu',
    deliverables: [
      'Efficient algorithmic implementations',
      'Structured data modeling & logic',
      'Civic-tech and workflow utilities',
      'Clean and maintainable codebases'
    ]
  }
];

export interface AWSModuleStep {
  title: string;
  steps: string[];
  cliCommands?: string[];
  notes?: string;
}

export interface AWSModule {
  id: string;
  number: string;
  title: string;
  category: string;
  iconName: string;
  summary: string;
  steps: AWSModuleStep[];
}

export interface AWSCloudProjectData {
  title: string;
  subtitle: string;
  badge: string;
  assignmentTitle: string;
  overview: string;
  architectureHighlights: string[];
  cliHighlights: { label: string; command: string }[];
  modules: AWSModule[];
}

export const AWS_CLOUD_PROJECT: AWSCloudProjectData = {
  title: 'Scalable Web Application Infrastructure',
  subtitle: 'Deploying a Scalable Blog & Personal Web Application on AWS',
  badge: 'AWS Cloud Architecture Project',
  assignmentTitle: 'Deploy a Scalable Blog/Personal Web Application (AWS Hands-on)',
  overview: 'A complete, production-grade cloud architecture implementation deploying a highly available, fault-tolerant, and secure web application across 8 rigorous AWS modules following the AWS Well-Architected Framework.',
  architectureHighlights: [
    'IAM Root MFA & Least-Privilege IAM User Access (S3ReadOnlyAccess)',
    'Isolated Custom VPC with Multi-AZ Subnets and Internet Gateway Routing',
    'Amazon Linux EC2 compute with attached and mounted persistent EBS volumes',
    'High-Availability Application Load Balancer (ALB) spanning 3 Availability Zones with HTTP/HTTPS rules',
    'Secure Storage & Relational Database: S3 with SSE-KMS encryption & versioning, plus auto-connected RDS MySQL',
    'Event-Driven Decoupling: SNS Post Notification Topic, SQS Background Tasks Queue, and S3-triggered Python Lambda for image resizing',
    'Defense-in-Depth Security & Observability: AWS WAF Web ACL on ALB, CloudWatch CPU alarms with email notifications, and Customer Managed KMS Keys',
    'Infrastructure as Code (IaC): CloudFormation YAML templates deployed and monitored via AWS CLI'
  ],
  cliHighlights: [
    {
      label: 'Verify AWS CLI Installation',
      command: 'aws --version'
    },
    {
      label: 'Deploy CloudFormation Stack via CLI',
      command: 'aws cloudformation create-stack --stack-name MyLambdaStack --template-body file://template.yaml --capabilities CAPABILITY_NAMED_IAM'
    },
    {
      label: 'Query Stack Status & Resources',
      command: 'aws cloudformation describe-stacks --stack-name "rakshak"'
    }
  ],
  modules: [
    {
      id: 'iam',
      number: '01',
      title: 'Set up AWS Account & IAM Security',
      category: 'Identity & Access Management',
      iconName: 'ShieldCheck',
      summary: 'Establishing root account protection with virtual Multi-Factor Authentication and creating least-privilege IAM users.',
      steps: [
        {
          title: 'Account Verification & Multi-Factor Authentication (MFA)',
          steps: [
            'Access AWS Management Console, verify account credentials, and configure root billing settings.',
            'Navigate to IAM Dashboard and initiate root Multi-Factor Authentication (MFA) setup with a virtual device.',
            'Install Google Authenticator, scan the displayed QR code, input two consecutive time-based one-time codes, and click "Register MFA".'
          ]
        },
        {
          title: 'Least-Privilege IAM User Creation',
          steps: [
            'From the IAM navigation pane, select "IAM Users" and click "Create user".',
            'Define the user identity and proceed to the permissions boundary screen.',
            'Select "Attach policies directly" and apply granular policies (such as S3ReadOnlyAccess and custom administration rules), then finalize user provisioning.'
          ]
        }
      ]
    },
    {
      id: 'networking-compute',
      number: '02',
      title: 'Networking & Compute (VPC, Subnets, IGW, EC2 & EBS)',
      category: 'VPC & Compute Infrastructure',
      iconName: 'Server',
      summary: 'Architecting an isolated Virtual Private Cloud with custom CIDR blocks, Multi-AZ subnets, Internet Gateway routing, Amazon Linux EC2, and EBS storage.',
      steps: [
        {
          title: 'Create Custom VPC',
          steps: [
            'Navigate to VPC Dashboard and select "Create VPC".',
            'Select "VPC only", assign a designated VPC name, and configure manual IPv4 CIDR block allocation.'
          ]
        },
        {
          title: 'Provision Multi-AZ Subnets',
          steps: [
            'Under VPC Dashboard, select "Subnets" and click "Create subnet".',
            'Link to the newly created VPC, specify subnet name, and select the corresponding Availability Zone for fault tolerance.'
          ]
        },
        {
          title: 'Internet Gateway (IGW) Attachment',
          steps: [
            'From VPC navigation, select "Internet gateways" and click "Create Internet gateway".',
            'Name the gateway and invoke "Actions" -> "Attach to VPC" to establish inbound/outbound route capability.'
          ]
        },
        {
          title: 'Launch EC2 Compute Instance',
          steps: [
            'Access EC2 Dashboard -> "Instances" -> "Launch Instances".',
            'Specify instance count, naming conventions, and select Amazon Linux as the base OS.',
            'Configure Security Groups and launch the production EC2 compute instance.'
          ]
        },
        {
          title: 'Attach & Mount EBS Volume',
          steps: [
            'Provision an Elastic Block Store (EBS) volume in the identical Availability Zone as the EC2 instance.',
            'Attach volume via EC2 volume actions and mount the block device filesystem for persistent storage.'
          ]
        }
      ]
    },
    {
      id: 'scalability',
      number: '03',
      title: 'Scalability & Load Balancing (ALB & Target Groups)',
      category: 'Traffic Distribution & High Availability',
      iconName: 'Workflow',
      summary: 'Configuring an Application Load Balancer across multiple Availability Zones with HTTP/HTTPS ingress routing to backend EC2 instances.',
      steps: [
        {
          title: 'Security Group Inbound Traffic Rules',
          steps: [
            'Locate the EC2 instance security group ID.',
            'Edit inbound rules to authorize both HTTP (port 80) and HTTPS (port 443) traffic from anywhere (0.0.0.0/0).'
          ]
        },
        {
          title: 'Deploy Application Load Balancer (ALB)',
          steps: [
            'Navigate to "Load Balancing" and click "Create load balancer" -> "Application Load Balancer".',
            'Specify the load balancer name and select the target VPC.',
            'Select at least 3 Availability Zones and corresponding subnets to guarantee high availability.',
            'Configure the ALB security group, define target group health checks linked to the EC2 instances, and create the load balancer.'
          ]
        }
      ]
    },
    {
      id: 'storage-db',
      number: '04',
      title: 'Storage & Database (S3 & RDS MySQL)',
      category: 'Data Storage & Persistence',
      iconName: 'Database',
      summary: 'Implementing encrypted S3 general-purpose storage with versioning alongside a managed relational RDS MySQL database connected to compute.',
      steps: [
        {
          title: 'Provision S3 Static Asset Bucket',
          steps: [
            'Go to S3 Dashboard -> General purpose buckets -> "Create bucket".',
            'Assign a globally unique bucket name, disable ACLs, and enforce "Block all public access" for enterprise data protection.',
            'Configure bucket versioning and upload initial application static assets and media files.'
          ]
        },
        {
          title: 'Server-Side Encryption with KMS (SSE-KMS)',
          steps: [
            'Navigate to bucket "Server-side encryption settings" and choose "Edit".',
            'Select SSE-KMS (AWS Key Management Service) encryption for military-grade data at rest security.'
          ]
        },
        {
          title: 'Set up Managed RDS MySQL Database',
          steps: [
            'Navigate to RDS Dashboard -> "Databases" -> "Create database".',
            'Select MySQL engine, assign DB instance identifier, and enable self-managed auto-generated administrative credentials.',
            'Directly select the EC2 instance to establish automated security group connectivity and deploy the database.'
          ]
        }
      ]
    },
    {
      id: 'serverless-decoupling',
      number: '05',
      title: 'Decoupling & Serverless (SNS, SQS & S3-Triggered Lambda)',
      category: 'Asynchronous Event-Driven Architecture',
      iconName: 'Cpu',
      summary: 'Decoupling application workloads using standard SNS notification topics, SQS background processing queues, and automated S3-triggered Python Lambda image processing.',
      steps: [
        {
          title: 'SNS Topic for Post Notifications',
          steps: [
            'Go to Amazon SNS Dashboard -> "Topics" -> "Create topic".',
            'Select "Standard" topic type, specify topic name, and deploy notification endpoint.'
          ]
        },
        {
          title: 'SQS Queue for Background Task Processing',
          steps: [
            'Access SQS Dashboard -> "Create queue".',
            'Select Standard queue type, configure encryption and access policy boundaries, and initialize queue.'
          ]
        },
        {
          title: 'Configure Lambda for S3-Triggered Image Resize',
          steps: [
            'Create a dedicated S3 asset upload bucket.',
            'In AWS Lambda Console, create a new function with Python runtime.',
            'Add an S3 trigger targeting the designated upload bucket with recursive invocation safeguards.',
            'Author Python image processing code and click "Deploy code".',
            'Test by uploading images to S3 and verify execution logs in CloudWatch Logs.'
          ]
        }
      ]
    },
    {
      id: 'security-monitoring',
      number: '06',
      title: 'Monitoring & Security (CloudWatch, WAF & KMS Keys)',
      category: 'Observability & Threat Protection',
      iconName: 'Lock',
      summary: 'Proactive CPU threshold alerting with CloudWatch & SNS, Web Application Firewall (WAF) filtering on the ALB, and Customer Managed Symmetric KMS encryption.',
      steps: [
        {
          title: 'CloudWatch Alarms & Automated Notifications',
          steps: [
            'Access CloudWatch Console -> "Alarms" -> "Create alarm".',
            'Select EC2 Pre-Instance metric "CPUUtilization" with a 5-minute statistical evaluation period.',
            'Bind alarm threshold to an SNS topic specifying target administrator email notification.',
            'Verify log group activation under Log Management.'
          ]
        },
        {
          title: 'Configure AWS WAF Web ACL on ALB',
          steps: [
            'Ensure VPC Route Tables route subnet traffic to the Internet Gateway.',
            'From AWS WAF Dashboard, click "Create web ACL".',
            'Define application scope, add protected Application Load Balancer resources, and deploy inspection rules.'
          ]
        },
        {
          title: 'Customer Managed KMS Key Encryption',
          steps: [
            'In AWS KMS Console, click "Create a key" -> choose "Symmetric" key type.',
            'Define Key Alias name, specify administrative and usage permissions, review key policy, and generate key.',
            'Apply customer KMS key to default S3 bucket encryption (SSE-KMS/DSSE-KMS).'
          ]
        }
      ]
    },
    {
      id: 'iac-automation',
      number: '07',
      title: 'Automation with Infrastructure as Code (IaC) & AWS CLI',
      category: 'Cloud Automation & DevOps',
      iconName: 'Terminal',
      summary: 'Automating declarative infrastructure deployments using CloudFormation YAML templates and managing stacks via AWS CLI commands.',
      steps: [
        {
          title: 'CloudFormation Template Deployment',
          steps: [
            'From CloudFormation Console, select "Create Stack".',
            'Choose "Prepare template" -> upload template file (YAML/JSON) defining S3 and compute resources.',
            'Specify stack name and submit deployment parameters.'
          ]
        },
        {
          title: 'AWS CLI Installation & Stack Execution',
          steps: [
            'Verify installation on command line via `aws --version`.',
            'Deploy stack: `aws cloudformation create-stack --stack-name MyLambdaStack --template-body file://template.yaml --capabilities CAPABILITY_NAMED_IAM`',
            'Inspect real-time deployment status: `aws cloudformation describe-stacks --stack-name "rakshak"`'
          ]
        }
      ]
    },
    {
      id: 'domain-cdn',
      number: '08',
      title: 'Domain & Global Delivery (Route 53 & CloudFront)',
      category: 'Global Content Delivery & DNS',
      iconName: 'Globe',
      summary: 'Architectural blueprint for global low-latency content distribution using Amazon CloudFront edge caching and Route 53 DNS routing.',
      steps: [
        {
          title: 'Route 53 Hosted Zone & Record Routing',
          steps: [
            'Architecture design for registering custom domains and setting up Route 53 latency/weighted routing policies to the Application Load Balancer.'
          ]
        },
        {
          title: 'Amazon CloudFront Edge CDN Distribution',
          steps: [
            'Edge caching configuration pointing to the S3 bucket origin for optimized global delivery of media assets with SSL termination.'
          ]
        }
      ]
    }
  ]
};

