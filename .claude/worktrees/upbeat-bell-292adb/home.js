loadContent(function(data) {
    document.getElementById('page-title').textContent = data.header.title;
    document.getElementById('header-name').textContent = data.header.name;
    document.getElementById('header-name-fallback').textContent = data.header.name;

    const home = data.home;
    const profileImg = document.getElementById('profile-img');
    if (home.profileImage) {
        profileImg.src = home.profileImage;
        profileImg.alt = data.header.name;
    }

    document.getElementById('welcome-text').textContent = home.welcomeText;
    document.getElementById('explore-title').textContent = home.exploreTitle;
    document.getElementById('explore-description').textContent = home.exploreDescription;
});
