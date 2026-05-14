loadContent(function(data) {
    document.getElementById('page-title').textContent = `${data.portfolio.title} - ${data.header.name}`;
    document.getElementById('header-name').textContent = data.portfolio.title;
    document.getElementById('header-name-fallback').textContent = data.portfolio.title;
    document.getElementById('portfolio-title').textContent = data.portfolio.title;
    document.getElementById('portfolio-description').textContent = data.portfolio.description;

    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    if (data.portfolio.projects && data.portfolio.projects.length > 0) {
        data.portfolio.projects.forEach(function(project) {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project-item';

            const imageUrl = project.image || (project.items && project.items[0] && project.items[0].image);
            if (imageUrl) {
                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'project-card-image';
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = project.title;
                img.loading = 'lazy';
                img.onerror = function() { imgWrapper.style.display = 'none'; };
                imgWrapper.appendChild(img);
                projectDiv.appendChild(imgWrapper);
            }

            const cardBody = document.createElement('div');
            cardBody.className = 'project-card-body';

            const cardContent = document.createElement('div');
            cardContent.className = 'project-card-content';

            const title = document.createElement('h3');
            title.textContent = project.title;
            cardContent.appendChild(title);

            const description = document.createElement('p');
            description.innerHTML = project.description;
            cardContent.appendChild(description);

            cardBody.appendChild(cardContent);

            const linkHref = project.link || `portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`;
            const link = document.createElement('a');
            link.href = linkHref;
            link.textContent = 'View Project';
            link.className = 'project-link';
            cardBody.appendChild(link);

            projectDiv.appendChild(cardBody);
            projectDiv.setAttribute('tabindex', '0');
            projectDiv.setAttribute('aria-expanded', 'false');

            projectsContainer.appendChild(projectDiv);
        });

        function toggleProjectCard(projectItem) {
            var isExpanded = projectItem.classList.contains('expanded');
            document.querySelectorAll('.project-item.expanded').forEach(function(item) {
                item.classList.remove('expanded');
                item.setAttribute('aria-expanded', 'false');
            });
            if (!isExpanded) {
                projectItem.classList.add('expanded');
                projectItem.setAttribute('aria-expanded', 'true');
            }
        }

        projectsContainer.addEventListener('click', function(e) {
            if (e.target.closest('.project-link')) return;
            var projectItem = e.target.closest('.project-item');
            if (projectItem) toggleProjectCard(projectItem);
        });

        projectsContainer.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            var projectItem = e.target.closest('.project-item');
            if (!projectItem || e.target.closest('.project-link')) return;
            e.preventDefault();
            toggleProjectCard(projectItem);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.innerHTML = '<em>More projects and detailed case studies coming soon!</em>';
        projectsContainer.appendChild(emptyMessage);
    }
});
