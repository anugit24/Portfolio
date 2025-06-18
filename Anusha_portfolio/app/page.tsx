"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  BookOpen,
  Award,
  ChevronRight,
  ExternalLink,
  Calendar,
  Phone,
} from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import SkillBar from "@/components/skill-bar"
import ParticlesBackground from "@/components/particles-background"
import TextCarousel from "@/components/text-carousel"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      title: "OpenD - NFT Marketplace",
      description:
        "A fully on-chain NFT marketplace built with React and Motoko on the Internet Computer. Users can mint NFTs, list them for sale, and purchase using DANG token.",
      technologies: ["React", "Motoko", "Internet Computer", "Blockchain", "Smart Contracts"],
      category: "blockchain",
      image: "/placeholder.svg?height=720&width=1280",
      featured: true,
    },
    {
      title: "Gamified Education Management System (GEMS)",
      description:
        "Interactive learning platform integrating gamification elements like leaderboards, badges, and adaptive challenges.",
      technologies: ["C++", "Python", "React.js", "Node.js", "PostgreSQL"],
      category: "web",
      image: "/placeholder.svg?height=720&width=1280",
      featured: true,
    },
    {
      title: "Hospitality Management System",
      description:
        "Comprehensive hotel management system with booking, room management, customer service, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Dashboard"],
      category: "web",
      image: "/placeholder.svg?height=720&width=1280",
      featured: true,
    },
    {
      title: "Financial Transaction Analysis and Visualization",
      description:
        "System to analyze, clean, and categorize transaction data with insightful financial visualizations.",
      technologies: ["Python", "SQL", "Power BI"],
      category: "data",
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      title: "Inventory Management System",
      description:
        "Real-time inventory tracking system enabling businesses to monitor stock levels, predict demand, and automate restocking.",
      technologies: ["Python", "PostgreSQL", "Machine Learning", "IoT"],
      category: "iot",
      image: "/placeholder.svg?height=720&width=1280",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary-green">
            <Code className="h-5 w-5 text-primary-yellow animate-pulse-glow" />
            <span>Anusha Jha</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary-green hover:underline underline-offset-4 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className="hidden md:flex bg-primary-green hover:bg-secondary-green text-white transition-colors"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-primary-green text-primary-green">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-yellow-gradient text-white relative overflow-hidden">
          <ParticlesBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  >
                    <span className="block">Hi, I'm Anusha Jha</span>
                    <span className="block mt-2">
                      I'm a{" "}
                      <TextCarousel
                        texts={["programmer", "learner", "dancer", "artist"]}
                        typingSpeed={80}
                        deletingSpeed={40}
                        delayBetween={1800}
                      />
                    </span>
                  </h1>
                  <p
                    className={`max-w-[600px] text-white/90 md:text-xl ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.3s" }}
                  >
                    Pre-Final Year B.Tech student passionate about web development, blockchain technology, data
                    analysis, and building innovative solutions.
                  </p>
                </div>
                <div
                  className={`flex flex-col gap-2 min-[400px]:flex-row ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-yellow text-primary-green hover:bg-secondary-yellow font-bold transition-all hover:scale-105"
                  >
                    <Link href="#projects">View My Projects</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
                <div
                  className={`flex items-center gap-4 mt-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.9s" }}
                >
                  <Link
                    href="https://github.com/anugit24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-yellow transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/anusha-jha-8038491ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-yellow transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:jhaanusha133@gmail.com"
                    className="text-white hover:text-primary-yellow transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className={`relative aspect-square overflow-hidden rounded-full border-4 border-primary-yellow shadow-lg shadow-primary-yellow/30 ${isLoaded ? "animate-bounce-in" : "opacity-0"}`}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Anusha Jha"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-light-yellow px-3 py-1 text-sm font-medium text-primary-green border border-primary-yellow">
                    About Me
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-green">Who I Am</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a pre-final year Information Technology student at Usha Mittal Institute of Technology,
                    passionate about creating innovative solutions and continuously expanding my technical skills in web
                    development, blockchain, and data analysis.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimateOnScroll animation="animate-slide-in-left" delay={300}>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-primary-green">Blockchain Enthusiast</h3>
                        <p className="text-muted-foreground">
                          Passionate about decentralized technologies and building on-chain applications, with hands-on
                          experience in NFT marketplaces and smart contracts.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-primary-green">Full-Stack Developer</h3>
                        <p className="text-muted-foreground">
                          Experienced in building end-to-end web applications using modern technologies like React,
                          Node.js, and various databases.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-primary-green">Data-Driven Problem Solver</h3>
                        <p className="text-muted-foreground">
                          I leverage data analysis and visualization tools to extract insights and drive informed
                          decision-making in projects.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="animate-slide-in-right" delay={300}>
                <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border-4 border-primary-green shadow-lg hover:shadow-primary-yellow/30 transition-all duration-500 hover:scale-105">
                  <Image
                    src="/images/about-me.jpg"
                    alt="About me"
                    width={400}
                    height={500}
                    className="object-cover object-top"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-light-yellow">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary-green px-3 py-1 text-sm font-medium text-white">
                    Skills
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-green">
                    Technical Expertise
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My diverse skill set allows me to tackle various aspects of modern software development and emerging
                    technologies.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary-green">Programming Languages</h3>
                    <SkillBar name="C++" percentage={85} delay={100} />
                    <SkillBar name="Python" percentage={80} delay={200} />
                    <SkillBar name="JavaScript" percentage={75} delay={300} />
                    <SkillBar name="SQL" percentage={70} delay={400} />
                    <SkillBar name="Motoko" percentage={65} delay={500} />
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary-green">Web Development</h3>
                    <SkillBar name="HTML/CSS" percentage={90} delay={100} />
                    <SkillBar name="React.js" percentage={80} delay={200} />
                    <SkillBar name="Node.js" percentage={75} delay={300} />
                    <SkillBar name="Next.js" percentage={70} delay={400} />
                  </div>
                </AnimateOnScroll>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mt-8">
                <AnimateOnScroll animation="animate-fade-in-up" delay={600}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary-green">Databases & Cloud</h3>
                    <SkillBar name="MongoDB" percentage={75} delay={100} />
                    <SkillBar name="PostgreSQL" percentage={75} delay={200} />
                    <SkillBar name="Firebase" percentage={70} delay={300} />
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-fade-in-up" delay={800}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary-green">Tools & Technologies</h3>
                    <SkillBar name="GitHub" percentage={85} delay={100} />
                    <SkillBar name="Power BI" percentage={80} delay={200} />
                    <SkillBar name="Figma" percentage={65} delay={300} />
                    <SkillBar name="Vercel" percentage={70} delay={400} />
                  </div>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll animation="animate-fade-in-up" delay={1000}>
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary-green mb-4">Blockchain & Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Internet Computer
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Smart Contracts
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      NFT Development
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Leadership
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Communication
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Problem-Solving
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Database Management
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      OOP
                    </Badge>
                    <Badge className="bg-primary-green text-white hover:bg-secondary-green transition-all hover:scale-105">
                      Software Engineering
                    </Badge>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-light-yellow px-3 py-1 text-sm font-medium text-primary-green border border-primary-yellow">
                    Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-green">
                    Professional Journey
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My work experience and positions of responsibility.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto max-w-5xl py-12">
              <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
                <Card className="mb-8 border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20 overflow-hidden group">
                  <CardHeader className="bg-gradient-to-r from-primary-green/10 to-primary-yellow/10">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-primary-green">Data Analyst Intern</CardTitle>
                        <CardDescription className="text-lg">NoQs Digital</CardDescription>
                      </div>
                      <Badge className="bg-primary-yellow text-primary-green hover:bg-secondary-yellow">
                        Oct - Nov 2024
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary-yellow mr-2 shrink-0 mt-0.5" />
                        <p>
                          Performed data cleaning and preprocessing on large datasets to enhance accuracy and
                          consistency.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary-yellow mr-2 shrink-0 mt-0.5" />
                        <p>
                          Developed interactive dashboards and reports using SQL, Python, and Power BI to drive
                          data-backed decision-making.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary-yellow mr-2 shrink-0 mt-0.5" />
                        <p>Star Intern Award recipient for exceptional performance.</p>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="absolute top-0 right-0 h-full w-1 bg-primary-green transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                </Card>
              </AnimateOnScroll>

              <h3 className="text-2xl font-bold text-primary-green mb-6 mt-12">Positions of Responsibility</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <AnimateOnScroll animation="animate-slide-in-left" delay={300}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-primary-green">General Secretary</CardTitle>
                      <CardDescription>Student Council</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Spearheaded institutional events and meetings, ensured smooth inter-departmental coordination,
                        and maintained critical documentation to facilitate strategic initiatives.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-right" delay={400}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-primary-green">Member</CardTitle>
                      <CardDescription>Writer's Club</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Created both creative and technical content for college events and magazines.</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-light-yellow">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary-green px-3 py-1 text-sm font-medium text-white">
                    Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-green">Featured Work</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A selection of my most impactful projects that demonstrate my technical capabilities across
                    different domains.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="flex justify-center mt-8 mb-12">
              <div className="inline-flex bg-white rounded-lg p-1 border-2 border-primary-green">
                <Button
                  variant={activeTab === "all" ? "default" : "ghost"}
                  className={
                    activeTab === "all" ? "bg-primary-green text-white" : "text-primary-green hover:text-primary-yellow"
                  }
                  onClick={() => setActiveTab("all")}
                >
                  All Projects
                </Button>
                <Button
                  variant={activeTab === "blockchain" ? "default" : "ghost"}
                  className={
                    activeTab === "blockchain"
                      ? "bg-primary-green text-white"
                      : "text-primary-green hover:text-primary-yellow"
                  }
                  onClick={() => setActiveTab("blockchain")}
                >
                  Blockchain
                </Button>
                <Button
                  variant={activeTab === "web" ? "default" : "ghost"}
                  className={
                    activeTab === "web" ? "bg-primary-green text-white" : "text-primary-green hover:text-primary-yellow"
                  }
                  onClick={() => setActiveTab("web")}
                >
                  Web Dev
                </Button>
                <Button
                  variant={activeTab === "data" ? "default" : "ghost"}
                  className={
                    activeTab === "data"
                      ? "bg-primary-green text-white"
                      : "text-primary-green hover:text-primary-yellow"
                  }
                  onClick={() => setActiveTab("data")}
                >
                  Data Analysis
                </Button>
                <Button
                  variant={activeTab === "iot" ? "default" : "ghost"}
                  className={
                    activeTab === "iot" ? "bg-primary-green text-white" : "text-primary-green hover:text-primary-yellow"
                  }
                  onClick={() => setActiveTab("iot")}
                >
                  IoT
                </Button>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <AnimateOnScroll key={project.title} animation="animate-bounce-in" delay={index * 200}>
                  <Card
                    className={`flex flex-col overflow-hidden border-2 border-primary-green hover:border-primary-yellow transition-all duration-500 hover:shadow-lg hover:shadow-primary-yellow/20 hover:-translate-y-2 h-full ${project.featured ? "ring-2 ring-primary-yellow ring-opacity-50" : ""}`}
                  >
                    {project.featured && (
                      <div className="bg-primary-yellow text-primary-green text-xs font-bold px-2 py-1 text-center">
                        FEATURED PROJECT
                      </div>
                    )}
                    <div className="aspect-video overflow-hidden border-b-2 border-primary-green">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={1280}
                        height={720}
                        className="object-cover transition-all hover:scale-110 duration-700"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-primary-green">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary-yellow text-primary-green">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all group"
                      >
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-light-yellow px-3 py-1 text-sm font-medium text-primary-green border border-primary-yellow">
                    Education
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-green">
                    Academic Background
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My educational journey and achievements.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto max-w-3xl py-12">
              <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
                <Card className="border-2 border-primary-green shadow-lg mb-8 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  <CardHeader className="bg-gradient-to-r from-primary-green/10 to-primary-yellow/10">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary-green p-2 text-white">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-primary-green">B.Tech in Information Technology</CardTitle>
                        <CardDescription className="text-lg">
                          Usha Mittal Institute Of Technology, Mumbai
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-primary-yellow mr-2" />
                        <span>Oct 2022 – July 2026</span>
                      </div>
                      <Badge className="bg-primary-green text-white">Current</Badge>
                    </div>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-primary-yellow text-primary-green">
                        Database Management
                      </Badge>
                      <Badge variant="outline" className="border-primary-yellow text-primary-green">
                        OOP
                      </Badge>
                      <Badge variant="outline" className="border-primary-yellow text-primary-green">
                        Software Engineering
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <h3 className="text-2xl font-bold text-primary-green mb-6 mt-12">Extracurricular Activities</h3>

              <div className="space-y-4">
                <AnimateOnScroll animation="animate-slide-in-left" delay={300}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <CardTitle className="text-primary-green">Hacktoberfest</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Successfully completed Hacktoberfest, an international open-source contribution program.</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-right" delay={400}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <CardTitle className="text-primary-green">GirlScript Summer of Code</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Active contributor to GirlScript Summer of Code, collaborating on various open-source projects.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-left" delay={500}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <div>
                        <CardTitle className="text-primary-green">1st Prize - Mock Maestry</CardTitle>
                        <CardDescription>Technical debating event conducted by CSI UMIT</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-right" delay={600}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <div>
                        <CardTitle className="text-primary-green">2nd Runner-Up - Miss Freshers Competition</CardTitle>
                        <CardDescription>Showcasing confidence and stage presence</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-left" delay={700}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <CardTitle className="text-primary-green">AI Agent Hackathon with IBM watsonx.ai</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Demonstrated innovative problem-solving skills in AI applications.</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll animation="animate-slide-in-right" delay={800}>
                  <Card className="border-2 border-primary-green hover:border-primary-yellow transition-all duration-300 hover:shadow-lg hover:shadow-primary-yellow/20">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Award className="h-6 w-6 text-primary-yellow" />
                      <CardTitle className="text-primary-green">Asha AI Hackathon (Hack2Skill)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Participant in building ethical AI chatbots.</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-green-gradient text-white relative">
          <ParticlesBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm font-medium text-primary-green">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                  <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Interested in working together? Let's connect and discuss how I can contribute to your team or
                    project.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <AnimateOnScroll animation="animate-slide-in-left" delay={300}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <p className="text-white/90">Feel free to reach out through any of the following channels:</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary-yellow" />
                      <a
                        href="mailto:jhaanusha133@gmail.com"
                        className="hover:underline hover:text-primary-yellow transition-colors"
                      >
                        jhaanusha133@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary-yellow" />
                      <a
                        href="tel:+918097716024"
                        className="hover:underline hover:text-primary-yellow transition-colors"
                      >
                        +91 8097716024
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary-yellow" />
                      <a
                        href="https://www.linkedin.com/in/anusha-jha-8038491ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-primary-yellow transition-colors"
                      >
                        linkedin.com/in/anusha-jha-8038491ba/
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary-yellow" />
                      <a
                        href="https://github.com/anugit24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-primary-yellow transition-colors"
                      >
                        github.com/anugit24
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Resume</h3>
                    <p className="text-white/90">
                      Download my resume for a detailed overview of my experience and qualifications.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2 bg-primary-yellow text-primary-green border-none hover:bg-secondary-yellow transition-all hover:scale-105"
                    >
                      <a href="/images/resume.pdf" download="Anusha_Jha_Resume.pdf">
                        <Download className="h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-slide-in-right" delay={400}>
                <Card className="border-2 border-primary-yellow bg-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-primary-green">Send Me a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-green"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-primary-green bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-green"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-primary-green bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-green"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-primary-green bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter subject"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-green"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-primary-green bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your message"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary-green hover:bg-secondary-green text-white transition-all hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-primary-green text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Anusha Jha. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anugit24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-yellow hover:text-secondary-yellow transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anusha-jha-8038491ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-yellow hover:text-secondary-yellow transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:jhaanusha133@gmail.com"
              className="text-primary-yellow hover:text-secondary-yellow transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
