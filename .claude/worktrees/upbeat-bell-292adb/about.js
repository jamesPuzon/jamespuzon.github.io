loadContent(function(data) {
    const firstName = data.header.name ? data.header.name.split(' ')[0] : 'James';
    document.getElementById('page-title').textContent = `About ${firstName} - ${data.header.name}`;
    document.getElementById('header-name').textContent = `About ${firstName}`;
    document.getElementById('header-name-fallback').textContent = `About ${firstName}`;

    const container = document.getElementById('about-container');
    container.innerHTML = '';

    let alternationCounter = 0;

    function createImg(src, alt, lazy) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.className = 'section-image';
        if (lazy) img.loading = 'lazy';
        img.onerror = function() { this.parentElement.style.display = 'none'; };
        return img;
    }

    function createRegularSubsection(subsection, counter) {
        const el = document.createElement('div');
        el.className = 'subsection';

        const hasImage = subsection.image && subsection.image.trim() !== '';

        if (hasImage) {
            el.classList.add(counter % 2 === 0 ? 'content-section-left' : 'content-section-right');

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            imageContainer.appendChild(createImg(subsection.image, subsection.title, true));
            el.appendChild(imageContainer);

            const contentContainer = document.createElement('div');
            contentContainer.className = 'content-container';

            const subTitle = document.createElement('h3');
            subTitle.textContent = subsection.title;
            contentContainer.appendChild(subTitle);

            if (subsection.content) {
                const p = document.createElement('p');
                p.textContent = subsection.content;
                contentContainer.appendChild(p);
            }

            if (subsection.details && subsection.details.length > 0) {
                const ul = document.createElement('ul');
                subsection.details.forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                contentContainer.appendChild(ul);
            }

            el.appendChild(contentContainer);
        } else {
            const subTitle = document.createElement('h3');
            subTitle.textContent = subsection.title;
            el.appendChild(subTitle);

            if (subsection.content) {
                const p = document.createElement('p');
                p.textContent = subsection.content;
                el.appendChild(p);
            }

            if (subsection.details && subsection.details.length > 0) {
                const ul = document.createElement('ul');
                subsection.details.forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                el.appendChild(ul);
            }
        }

        return el;
    }

    data.about.sections.forEach(function(section) {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'content-section';

        const isAboutMe = section.title.toLowerCase() === 'about me';
        const isEducation = section.title.toLowerCase() === 'education';
        if (isAboutMe) sectionElement.classList.add('about-me-section');

        const hasImage = section.image && section.image.trim() !== '';
        const imgSrc = hasImage
            ? (section.image.startsWith('images/') ? section.image : `images/${section.image}`)
            : '';

        if ((isEducation || isAboutMe) && hasImage) {
            const title = document.createElement('h2');
            title.textContent = section.title;
            sectionElement.appendChild(title);

            const flexContainer = document.createElement('div');
            flexContainer.className = isEducation ? 'education-flex-container' : 'aboutme-flex-container';

            const imageContainer = document.createElement('div');
            imageContainer.className = isEducation ? 'education-image-container' : 'aboutme-image-container';
            imageContainer.appendChild(createImg(imgSrc, section.title, true));
            flexContainer.appendChild(imageContainer);

            const detailsContainer = document.createElement('div');
            detailsContainer.className = isEducation ? 'education-details-container' : 'aboutme-details-container';

            if (section.content) {
                const p = document.createElement('p');
                p.textContent = section.content;
                detailsContainer.appendChild(p);
            }

            if (section.details && section.details.length > 0) {
                const ul = document.createElement('ul');
                section.details.forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                detailsContainer.appendChild(ul);
            }

            flexContainer.appendChild(detailsContainer);
            sectionElement.appendChild(flexContainer);
        } else if (hasImage && !isEducation && !isAboutMe) {
            sectionElement.classList.add(alternationCounter % 2 === 0 ? 'content-section-left' : 'content-section-right');
            alternationCounter++;

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            imageContainer.appendChild(createImg(imgSrc, section.title, true));
            sectionElement.appendChild(imageContainer);

            const contentContainer = document.createElement('div');
            contentContainer.className = 'content-container';

            const title = document.createElement('h2');
            title.textContent = section.title;
            contentContainer.appendChild(title);

            const p = document.createElement('p');
            p.textContent = section.content;
            contentContainer.appendChild(p);

            if (section.details && section.details.length > 0) {
                const ul = document.createElement('ul');
                section.details.forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                contentContainer.appendChild(ul);
            }

            sectionElement.appendChild(contentContainer);
        } else {
            const title = document.createElement('h2');
            title.textContent = section.title;
            sectionElement.appendChild(title);

            const p = document.createElement('p');
            p.textContent = section.content;
            sectionElement.appendChild(p);

            if (section.details && section.details.length > 0) {
                const ul = document.createElement('ul');
                section.details.forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                sectionElement.appendChild(ul);
            }
        }

        if (section.subsections && section.subsections.length > 0) {
            const hasIntramuralsAndClubs =
                section.subsections.some(function(s) { return s.title === 'Intramurals'; }) &&
                section.subsections.some(function(s) { return s.title === 'Other Clubs'; });

            if (hasIntramuralsAndClubs) {
                const gridContainer = document.createElement('div');
                gridContainer.className = 'subsection-grid';

                section.subsections.forEach(function(subsection) {
                    if (subsection.title === 'Intramurals' || subsection.title === 'Other Clubs') {
                        const subsectionElement = document.createElement('div');
                        subsectionElement.className = 'subsection';

                        const subTitle = document.createElement('h3');
                        subTitle.textContent = subsection.title;
                        subsectionElement.appendChild(subTitle);

                        if (subsection.items && subsection.items.length > 0) {
                            const itemsGrid = document.createElement('div');
                            itemsGrid.className = 'items-grid';

                            subsection.items.forEach(function(item) {
                                const itemElement = document.createElement('div');
                                itemElement.className = 'item';

                                const itemText = document.createElement('div');
                                itemText.className = 'item-text';
                                itemText.textContent = item.text;
                                itemElement.appendChild(itemText);

                                if (item.image && item.image.trim() !== '') {
                                    const img = document.createElement('img');
                                    img.src = item.image;
                                    img.alt = item.text;
                                    img.className = 'item-image';
                                    img.loading = 'lazy';
                                    img.onerror = function() { this.style.display = 'none'; };
                                    itemElement.appendChild(img);
                                }

                                itemsGrid.appendChild(itemElement);
                            });

                            subsectionElement.appendChild(itemsGrid);
                        } else if (subsection.details && subsection.details.length > 0) {
                            const ul = document.createElement('ul');
                            subsection.details.forEach(function(detail) {
                                const li = document.createElement('li');
                                li.textContent = detail;
                                ul.appendChild(li);
                            });
                            subsectionElement.appendChild(ul);
                        }

                        if (subsection.content) {
                            const p = document.createElement('p');
                            p.textContent = subsection.content;
                            subsectionElement.appendChild(p);
                        }

                        gridContainer.appendChild(subsectionElement);
                    } else {
                        const subsectionElement = createRegularSubsection(subsection, alternationCounter);
                        if (subsectionElement.classList.contains('content-section-left') ||
                            subsectionElement.classList.contains('content-section-right')) {
                            alternationCounter++;
                        }
                        if (hasImage && !isEducation) {
                            sectionElement.querySelector('.content-container').appendChild(subsectionElement);
                        } else {
                            sectionElement.appendChild(subsectionElement);
                        }
                    }
                });

                if (hasImage && !isEducation) {
                    sectionElement.querySelector('.content-container').appendChild(gridContainer);
                } else {
                    sectionElement.appendChild(gridContainer);
                }
            } else {
                section.subsections.forEach(function(subsection) {
                    const subsectionElement = createRegularSubsection(subsection, alternationCounter);
                    if (subsectionElement.classList.contains('content-section-left') ||
                        subsectionElement.classList.contains('content-section-right')) {
                        alternationCounter++;
                    }
                    if (hasImage && !isEducation) {
                        sectionElement.querySelector('.content-container').appendChild(subsectionElement);
                    } else {
                        sectionElement.appendChild(subsectionElement);
                    }
                });
            }
        }

        container.appendChild(sectionElement);
    });
});
