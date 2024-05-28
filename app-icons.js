document.addEventListener("DOMContentLoaded", function() {
    const apps = [
        { id: '6471625886', link: 'https://apps.apple.com/ro/app/smart-ai-girlfriend-dating/id6471625886' },
        { id: '6471625837', link: 'https://apps.apple.com/ro/app/vibzz-photo-frame-editor/id6471625837' },
        { id: '6471626000', link: 'https://apps.apple.com/ng/app/pdf-generator-document-scanner/id6471626000' },
        { id: '6474639191', link: 'https://apps.apple.com/ng/app/hashttag-pic-editor/id6474639191' },
        { id: '6462698248', link: 'https://apps.apple.com/ng/app/signature-quotable-picframe/id6462698248' }
    ];

    const apiUrlBase = 'https://apps.apple.com/ng/app/signature-quotable-picframe/id';

    const fetchAppData = (app) => {
        return fetch(apiUrlBase + app.id)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    return {
                        id: app.id,
                        link: app.link,
                        iconUrl: data.results[0].artworkUrl100,
                        appName: data.results[0].trackName,
                        description: data.results[0].description
                    };
                } else {
                    console.error(`App with ID ${app.id} not found`);
                    return null;
                }
            })
            .catch(error => {
                console.error('Error fetching app metadata:', error);
                return null;
            });
    };

    const loadAppItems = async () => {
        const container = document.getElementById('apps-container');

        for (const app of apps) {
            const appData = await fetchAppData(app);

            if (appData) {
                const appElement = document.createElement('div');
                appElement.className = 'app-item';

                const img = document.createElement('img');
                img.src = appData.iconUrl;
                img.alt = appData.appName;

                const h3 = document.createElement('h3');
                h3.innerText = appData.appName;

                const h6 = document.createElement('h6');
                h6.innerText = 'IOS Mobile App';

                const p = document.createElement('p');
                p.innerText = appData.description;

                const a = document.createElement('a');

                const space = document.createElement('br');

                a.href = appData.link;
                a.className = 'button';
                a.innerText = 'Download on App Store';

                appElement.appendChild(img);
                appElement.appendChild(h3);
                appElement.appendChild(h6);
                appElement.appendChild(space);
                appElement.appendChild(space);
                appElement.appendChild(a);
                appElement.appendChild(p);
                container.appendChild(appElement);
            }
        }
    };

    loadAppItems();
});
