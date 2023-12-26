document.addEventListener('DOMContentLoaded', function () {

const yamlContent = `
projects:
  project1:
    title: hello1
    desc: this is project1 desc
  project2:
    title: hello2
    desc: this is project2 desc
`;

    // Parse YAML to JSON
    const projects = jsyaml.load(yamlContent);

    // Get the container to display projects
    const projectsContainer = document.getElementById('projectsContainer');

    // Iterate over projects and display them
    for (const [projectId, project] of Object.entries(projects.projects)) {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.desc}</p>
            <hr>
        `;
        projectsContainer.appendChild(projectElement);
    }
});