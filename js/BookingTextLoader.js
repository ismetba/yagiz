fetch('../js/text.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('discordLink').setAttribute("href",json.discordLink);
        document.getElementById('instagramLink').setAttribute("href",json.instagramLink);
        document.getElementById('youtubeLink').setAttribute("href",json.youtubeLink);

        document.getElementById('brandName').innerHTML = json.brandName;
        document.getElementById('headerHome').innerHTML = json.headerHome;
        document.getElementById('headerBookAFree').innerHTML = json.headerBookAFree;
        document.getElementById('headerContact').innerHTML = json.headerContact;
        document.getElementById('headerAbout').innerHTML = json.headerAbout;
        //document.getElementById('').innerHTML = json.;
    });

