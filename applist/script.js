const appListingsContainer = document.getElementById("app-listings-container");

// fetch app data
fetch("/applist/app-data.json", 
        { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}}
    )
    .then((response) => response.json())
    .then((data) => {
        // populate new apps section
        const newAppsSection = createAppListingsSection(
            data.collections[0].name,
            data.collections[0].apps
        );
        appListingsContainer.appendChild(newAppsSection);

        // populate popular apps section
        const popularAppsSection = createAppListingsSection(
            data.collections[1].name,
            data.collections[1].apps
        );
        appListingsContainer.appendChild(popularAppsSection);

        // populate popular apps section
        const gamingAppsSection = createAppListingsSection(
            data.collections[2].name,
            data.collections[2].apps
        );
        appListingsContainer.appendChild(gamingAppsSection);

        // populate popular apps section
        const financeAppsSection = createAppListingsSection(
            data.collections[3].name,
            data.collections[3].apps
        );
        appListingsContainer.appendChild(financeAppsSection);
        
    })
    .catch((error) => console.error(error));

// function to create app listings section
function createAppListingsSection(title, apps) {
    const section = document.createElement("section");
    section.classList.add("app-listings-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    const appListings = document.createElement("div");
    appListings.classList.add("app-listings");
    section.appendChild(appListings);

    apps.forEach((app) => {
        const appListing = document.createElement("div");
        appListing.classList.add("app-listing");

        const appIcon = document.createElement("img");
        appIcon.src = app.icon;
        appIcon.alt = `${app.name} icon`;
        appListing.appendChild(appIcon);

        const appInfo = document.createElement("div");
        appListing.appendChild(appInfo);

        const appTitle = document.createElement("h4");
        appTitle.textContent = app.name;
        appInfo.appendChild(appTitle);


        appIcon.addEventListener("click", () => {
            showAppDetailsModal(app);
        });

        appListings.appendChild(appListing);
    });

    return section;
}

// function to show app details modal
function showAppDetailsModal(app) {
    // const appDetailsModal = document.getElementById("app-details-modal");
    // appDetailsModal.style.display = "block";

    // const appDetailsTitle = document.getElementById("app-details-title");
    // appDetailsTitle.textContent = app.title;

    // const appDetailsIcon = document.getElementById("app-details-icon");
    // appDetailsIcon.src = app.icon;
    // appDetailsIcon.alt = `${app.title} icon`;

    // const closeModalButton = document.getElementsByClassName("close")[0];
    // closeModalButton.addEventListener("click", () => {
    //     appDetailsModal.style.display = "none";
    // });

    // window.addEventListener("click", (event) => {
    //     if (event.target == appDetailsModal) {
    //         appDetailsModal.style.display = "none";
    //     }
    // });

    window.location.href = app.page;
}