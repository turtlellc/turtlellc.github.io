document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("apps-container");
    const endpoint = "https://itunes.apple.com/lookup";

    // Function to fetch app data from iTunes Search API by app ID
    async function fetchAppData(appIds) {
        const allApps = [];
        for (const appId of appIds) {
            const url = new URL(endpoint);
            url.searchParams.append("id", appId);

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.results.length > 0) {
                    allApps.push(data.results[0]); // Push the first result
                }
            } catch (error) {
                console.error("Error fetching app data:", error);
            }
        }
        return allApps;
    }

    // Function to render app items
    function renderAppItems(apps) {
        apps.forEach(app => {
            const appItem = document.createElement("div");
            appItem.className = "app-item";

            appItem.innerHTML = `
                <img src="${app.artworkUrl100}" style="height: 100px; width: 100px; border-radius: 20px;" alt="${app.trackName}">
                <h3>${app.trackName}</h3>
                <h6>${app.sellerName}</h6>
                <p>${app.description}</p>
                <a href="${app.trackViewUrl}" class="button">Download on App Store</a>
            `;

            container.appendChild(appItem);
        });
    }

    // Array of app IDs
    const appIds = [
        "6471625886", // Smart AI Girlfriend Dating
        // Add more app IDs here
    ];

    // Fetch app data for each app ID and render app items
    fetchAppData(appIds)
        .then(apps => renderAppItems(apps))
        .catch(error => console.error("Error:", error));
});
