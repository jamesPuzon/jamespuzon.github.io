loadContent(function(data) {
    document.getElementById('page-title').textContent = `${data.contact.title} - ${data.header.name}`;
    document.getElementById('header-name').textContent = data.contact.title;
    document.getElementById('header-name-fallback').textContent = data.contact.title;
    document.getElementById('contact-title').textContent = data.contact.title;
    document.getElementById('contact-description').textContent = data.contact.description;

    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = '';

    if (data.contact.email) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Email:</strong> <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
        contactInfo.appendChild(li);
    }

    if (data.contact.phone) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Phone:</strong> <a href="tel:${data.contact.phone}">${data.contact.phone}</a>`;
        contactInfo.appendChild(li);
    }

    const social = data.contact.social;

    if (social.linkedin) {
        const li = document.createElement('li');
        const url = social.linkedin.startsWith('http') ? social.linkedin : `https://linkedin.com/in/${social.linkedin}`;
        const display = social.linkedin.replace(/^https?:\/\/(www\.)?/, '');
        li.innerHTML = `<strong>LinkedIn:</strong> <a href="${url}" target="_blank">${display}</a>`;
        contactInfo.appendChild(li);
    }

    if (social.github) {
        const li = document.createElement('li');
        const url = social.github.startsWith('http') ? social.github : `https://github.com/${social.github}`;
        const display = social.github.replace(/^https?:\/\/(www\.)?/, '');
        li.innerHTML = `<strong>GitHub:</strong> <a href="${url}" target="_blank">${display}</a>`;
        contactInfo.appendChild(li);
    }

    if (social.twitter) {
        const li = document.createElement('li');
        const url = social.twitter.startsWith('http') ? social.twitter : `https://twitter.com/${social.twitter}`;
        const display = social.twitter.replace(/^https?:\/\/(www\.)?/, '');
        li.innerHTML = `<strong>Twitter:</strong> <a href="${url}" target="_blank">${display}</a>`;
        contactInfo.appendChild(li);
    }

    if (data.contact.additionalInfo) {
        document.getElementById('additional-info').textContent = data.contact.additionalInfo;
    }
});
