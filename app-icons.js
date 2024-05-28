document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("apps-container");

    // Manually defined array of app data
    const appData = [
          {
            appId: "6471625886",
            appName: "Smart AI Girlfriend Dating",
            sellerName: "Habib ur Rehman",
            description: "An AI Girlfriend application is a sophisticated virtual companion simulator that leverages advanced artificial intelligence to offer a lifelike and interactive user experience.",
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b0/fc/a7/b0fca743-91a2-2883-f60b-08f3210fc10c/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/246x0w.png",
            trackViewUrl: "https://apps.apple.com/ro/app/smart-ai-girlfriend-dating/id6471625886"
        },
        {
            appId: "6471625837",
            appName: "Vibzz : Photo Frame Editor",
            sellerName: "Habib ur Rehman",
            description: "Vibzz: Photo Frame Editor – Unleash Your Creativity Transform your memories into masterpieces with Vibzz, the ultimate photo frame editor designed for storytellers, creatives, and anyone looking to add a touch of magic to their photos. Whether you're looking to encapsulate moments in stunning frames, create expressive collages, edit photos with precision, or craft and share captivating stories, Vibzz has got you covered.",
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/97/a9/97/97a99747-af18-8366-67cd-d5ccdab82dcd/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/246x0w.png",
            trackViewUrl: "https://apps.apple.com/ro/app/vibzz-photo-frame-editor/id6471625837"
        },
        {
            appId: "6471626000",
            appName: "PDF Generator Document Scanner",
            sellerName: "Habib ur Rehman",
            description: "Introducing PDF Generator Document Scanner: Elevate your document management experience with our all-in-one iOS app. Designed for professionals and students alike, our app streamlines your workflow by providing powerful tools right at your fingertips.",
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/48/f3/cf48f3da-9a39-c330-a886-87cb747f2f29/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/246x0w.png",
            trackViewUrl: "https://apps.apple.com/ng/app/pdf-generator-document-scanner/id6471626000"
        },
        {
            appId: "6462698248",
            appName: "Signature Quotable: Picframe",
            sellerName: "Habib ur Rehman",
            description: "Signature Quotable: Picframe. Showcase your creativity and allow your loved ones to join in your moments of joy. Introducing Signature Quotable: Picframe, an innovative mobile application that empowers users to transform their cherished moments into captivating visual narratives. Seamlessly combining creativity and convenience, Signature Quotable: Picframe offers a comprehensive suite of features including collage creation, photo framing, and quote integration, providing an all-inclusive platform for users to express themselves and commemorate their memories in unique ways.",
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/8b/f9/0b/8bf90b2a-be28-5c4e-a558-4b5e11bf0d4d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png",
            trackViewUrl: "https://apps.apple.com/ng/app/signature-quotable-picframe/id6462698248"
        },
        {
            appId: "6474639191",
            appName: "HashTTag Pic Editor",
            sellerName: "Habib ur Rehman",
            description: "Unlock the creativity with HashTTag Pic Editor, the ultimate tool to transform your photos into captivating visual stories. Seamlessly merge innovation and convenience with our diverse suite of features designed to elevate your editing experience. Discover the art of hashtagging effortlessly! Our advanced hashtag suggestion and generation feature ensures your posts receive the attention they deserve, expanding your reach across social platforms with targeted and trending tags.",
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7e/6e/e4/7e6ee447-77c2-2db7-a774-9b9d4a044f2c/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/246x0w.png",
            trackViewUrl: "https://apps.apple.com/ng/app/hashttag-pic-editor/id6474639191"
        },
    ];

    // Function to render app items
    function renderAppItems(apps) {
        apps.forEach(app => {
            const appItem = document.createElement("div");
            appItem.className = "app-item";

            appItem.innerHTML = `
                <img src="${app.artworkUrl100}" style="height: 100px; width: 100px; border-radius: 20px;" alt="${app.appName}">
                <h3>${app.appName}</h3>
                <h6>${app.sellerName}</h6>
                <p>${app.description}</p>
                <a href="${app.trackViewUrl}" class="button">Download on App Store</a>
            `;

            container.appendChild(appItem);
        });
    }

    // Render app items using manually defined app data
    renderAppItems(appData);
});
