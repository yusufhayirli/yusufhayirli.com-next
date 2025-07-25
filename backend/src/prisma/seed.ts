// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clean all data for idempotent seed (optional)
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      context: "https://schema.org",
      type: "Person",
      name: "Yusuf HAYIRLI",
      whatIdo: "A man of focus, commitment and sheer will.",
      additionalName: "PensarNada",
      url: "https://yusufhayirli.github.io",
      gender: "http://schema.org/Male",
      nationality: "Turkey",
      birthDate: "1993",
      birthPlace: "Adana, Turkey",
      workLocation: "İzmir, Turkey",
      country: "Turkey",
      image: "https://yusufhayirli.github.io/images/itisMe.jpg",
      currentCompanyName: "",
      currentCompanyUrl: "",
      title: "Computer Engineer",
      jobTitle: "Full-Stack Software Engineer",

      socialUrls: {
        create: {
          instagram: "https://www.instagram.com/pensarnada/",
          twitter: "https://twitter.com/pensarnada",
          linkedin: "https://www.linkedin.com/in/yusufhayirli/",
          mail: "mailto:yusufhayirli@gmail.com",
          github: "https://github.com/yusufhayirli",
          spotify: "https://open.spotify.com/user/pensarnada?si=d00b6de8403d48da&nd=1"
        }
      },

      education: {
        create: {
          institution: "Izmir Institude of Technology (IZTECH)",
          universityUrl: "https://iyte.edu.tr/",
          degree: "B.Sc. in Computer Engineering",
          location: "Izmir, Turkey",
          period: "2017 – 2022",
          details: [
            "Relevant Coursework: Algorithms, Data Structures, OOP (Java/Python), Databases, Web Dev, Software Engineering",
            "NUFFIC-recognized degree: Internationally accredited and formally acknowledged by the Dutch education system for eligibility in highly skilled migrant visa programs.",
            "Blue Diploma: An EU-standard diploma awarded to graduates who meet rigorous academic and language criteria, signifying international excellence and mobility.",
            "One of the few Turkish universities offering engineering education entirely in English, preparing graduates for global career paths.",
            "Recognized for producing high-performing engineers and researchers with strong foundations in software and system design, often sought by global tech employers."
          ]
        }
      },

      experiences: {
        create: [
          {
            jobTitle: 'Full Stack Developer',
            currentCompanyName: 'Upwork/Freelance',
            currentCompanyUrl: '#',
            startDate: '07/2024',
            leaveDate: 'Present',
            summary: [
              'Integrated RESTful APIs and cloud services for full-stack applications.',
              'Optimized for scalability, CI/CD pipelines, and cross-team collaboration.'
            ],
            skills: [
              'React.js', 'JavaScript', 'Node.js', 'Next.js',
              'PostgreSQL', 'GraphQL', 'Java'
            ]
          },
          {
            jobTitle: 'Full-Stack/Mobile Software Engineer',
            currentCompanyName: 'OSF Digital',
            currentCompanyUrl: 'https://www.osf.digital',
            startDate: '02/2022',
            leaveDate: '06/2024',
            summary: [
              "Developed and deployed React.js-based web applications integrated with RESTful APIs, using Node.js and Salesforce Commerce Cloud for scalable, client-facing solutions.",
              "Contributed to R&D initiatives, working alongside department teams to enhance internal tools and solutions using SFCC, SG, SFRA, and headless architectures.",
              "Built and certified Salesforce B2C cartridges on the Salesforce AppExchange.",
              "Managed internal projects, including Customer Behavior Tracker™, Bloglink, and others, ensuring Salesforce AppExchange certification.",
              "Delivered solutions for Brooks Running (NA), Sephora, Kal Tire, Pharmacias Ahumada (LATAM) and 5+ global clients.",
              "Facilitated discussions on system architecture to align with client requirements.",
              "Provided documentation and guidance to technical and non-technical teams.",
              "Ensured project scalability, security, and maintainability while supporting future developments.",
              "Collaborated with other departments & helped their project developments.",
              "Conducted audits, identified performance bottlenecks, and implemented technical enhancements.",
              "Ensured security compliance and identified potential improvements during development."
            ],
            skills: [
              'React.js', 'JavaScript', 'jQuery', 'Postman Services',
              'Node.js', 'RESTful APIs', 'SCSS', 'CSS'
            ]
          },
          {
            jobTitle: 'Full Stack Developer',
            currentCompanyName: 'Upwork/Freelance',
            currentCompanyUrl: '#',
            startDate: '09/2021',
            leaveDate: '02/2022',
            summary: [
              "Built and maintained client-side and server-side web applications.",
              "Debugged and resolved front-end and back-end issues to improve app performance and UX."
            ],
            skills: [
              'React.js', 'JavaScript', 'Python', 'Node.js'
            ]
          },
          {
            jobTitle: 'Front-end Developer Intern',
            currentCompanyName: 'JotForm',
            currentCompanyUrl: 'https://www.jotform.com',
            startDate: '07/2021',
            leaveDate: '09/2021',
            summary: [
              "Developing a React.js integration to the main JotForm site",
              "Development of RESTful APIs with MVC architecture by Node.js",
              "Read Model to integrate a component to main website",
              "Managed API connectivity between backend and frontend using Postman"
            ],
            skills: [
              'React.js', 'JavaScript', 'Postman Services', 'PHP'
            ]
          }
        ]
      },

      likeToBuild: {
        create: [
          { item: "Computer Engineer" },
          { item: "Uncle" },
          { item: "Certified Salesforce" },
          { item: "Team-Player" },
          { item: "Full-Stack Developer" },
          { item: "Software Engineer" },
          { item: "Gamer" },
          { item: "Streamer" },
          { item: "Problem-solver" },
          { item: "Builder" }
        ]
      },

      skillsAndCerts: {
        create: {
          frontEnd: [
            "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
            "HTML5", "CSS3", "SCSS", "jQuery", "Responsive Design"
          ],
          backEnd: [
            "Node.js", "Express.js", "Java", "Python", "RESTful APIs",
            "MVC Architecture", "JWT Authentication"
          ],
          databases: [
            "MongoDB", "PostgreSQL", "Firebase", "SQL/NoSQL"
          ],
          devOpsTools: [
            "Git", "GitHub", "Postman", "Jira", "Confluence", "Docker (if used)",
            "GitHub Actions", "CI/CD pipelines"
          ],
          cloudInfrastructure: [
            "Salesforce Commerce Cloud", "Headless CMS", "PWA Kit", "AppExchange"
          ],
          softwarePractices: [
            "Agile", "Scrum", "SOLID", "DRY", "KISS", "YAGNI",
            "Unit Testing", "Code Reviews", "CI/CD", "Microservices", "GDPR"
          ],
          languages: [
            "English · Professional", "Turkish · Native", "Dutch · Beginner"
          ],
          certifications: {
            create: [
              {
                title: "Salesforce B2C Commerce Developer (Issued 2022 / Up to date)",
                image: "/assets/images/salesforce-b2c-badge.png",
                alt: "Salesforce Certified B2C Commerce Developer Badge",
                issued: "Issued 2022 • Credential ID: 2611483",
                pdfLink: "/assets/documents/Cert2611483_B2CCommerceDeveloper_20221002.pdf"
              },
              {
                title: "Salesforce Associate (Issued 2023 / Up to date)",
                image: "/assets/images/salesforce-associate-badge.png",
                alt: "Salesforce Certified Associate Badge",
                issued: "Issued 2023 • Credential ID: (Eklenirse)",
                pdfLink: "/assets/documents/Cert3368530_Associate_20230504.pdf"
              }
            ]
          }
        }
      }
    }
  })
}

main()
  .then(() => {
    console.log('Seed successful!')
    return prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    return prisma.$disconnect()
  })
