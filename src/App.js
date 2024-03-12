import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
    isPinned: true,
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
    isPinned: true,
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
    isPinned: false,
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
    isPinned: true,
  },
];

// Yalnızca pinli projeleri görüntülemek için filter ve map kullanın
export default function PinnedProjects() {
  const pinned = projects
    .filter((project) => {
      return project.isPinned;
    })
    .map((item) => {
      const liClass = "project-list-item " + item.bgColor
      return (
        <li className={liClass}>
          <div className={` project-initials`}>{item.initials}</div>
          <div className="project-content-wrapper">
            <div className="project-content">
              <a href={item.href} className="project-link">
                {item.name}
              </a>
              <p className="project-members">{item.members} Üye</p>
            </div>
            <div className="project-button-wrapper">
              <button type="button" className="project-button">
                <EllipsisVerticalIcon className="project-icon" />
              </button>
            </div>
          </div>
        </li>
      );
    });

  console.log(pinned);
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Pinlenmiş Projeler</h2>
      <ul className="projects-list">{pinned}</ul>
    </div>
  );
}
