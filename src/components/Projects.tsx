import hostelMateImg from "../assets/images/hostel-mate.png";
import oxikartImg from "../assets/images/oxikart.png";
import hungryHubImg from "../assets/images/hungry-hub.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hostel Mate",
    description:
      "A mobile app built to simplify hostel management by handling student registrations, room allocations, attendance, fee tracking, and announcements — all in one place.",
    technologies: ["React Native", "Expo", "TypeScript"],
    liveLink: "https://play.google.com/store/apps/details?id=com.hostelmate",
    image: hostelMateImg,
  },
  {
    id: 2,
    title: "Oxikart",
    description:
      "A modern e-commerce mobile app that allows users to browse products, add items to their cart, and place secure online orders with a smooth and intuitive shopping experience.",
    technologies: ["React Native", "Tailwind", "Redux"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.woodenclouds.oxikart",
    image: oxikartImg,
  },
  {
    id: 3,
    title: "Hungry Hub",
    description:
      "A food delivery mobile app that lets users browse nearby restaurants, explore menus, place orders.",
    technologies: ["React Native", "Django", "PostgreSQL"],
    liveLink: "",
    image: hungryHubImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6"
            >
              <div className="h-40 bg-gradient-to-br flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-3/5 object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <span className="text-gray-700 text-sm font-medium">
                        {tech}
                      </span>
                      {index < project.technologies.length - 1 && (
                        <span>|</span>
                      )}
                    </div>
                  ))}
                </div>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
