

export function restaurantHome () {

    let content = document.getElementById('content');

    const createHeader = (() => {

        let header = document.createElement('header');
        header.classList.add('header');
        content.appendChild(header);

        const addNavigation = (() => {
            let navigation =  document.createElement('nav');
            navigation.classList.add('nav');
            header.appendChild(navigation);

                const addNavigationButtons = (() => {

                    let homeButton = document.createElement('button');
                    homeButton.classList.add('nav-button');
                    homeButton.innerText = 'Home';
                    homeButton.id = 'home';
                    navigation.appendChild(homeButton);

                    let menuButton = document.createElement('button');
                    menuButton.classList.add('nav-button');
                    menuButton.innerText = 'Menu';
                    menuButton.id = 'menu';
                    navigation.appendChild(menuButton);
                    
                    let contactButton = document.createElement('button');
                    contactButton.classList.add('nav-button');
                    contactButton.innerText = 'Contact';
                    contactButton.id = 'contact';
                    navigation.appendChild(contactButton);
                })();

        })();


    })();

    const createMain = (() => {

        let main = document.createElement('div');
        main.classList.add('main');
        main.id = 'main';
        content.appendChild(main);

        const addMainContent = (() => {
            let mainContent = document.createElement('section');
            mainContent.classList.add('main-content');
            main.appendChild(mainContent);

            const addRestaurantName = (() => {
                let restaurantName =  document.createElement('div');
                restaurantName.classList.add('title');
                restaurantName.innerText = 'RESTAURANT NAME';
                mainContent.appendChild(restaurantName);
            })();

            const addReview = (() => {
                let review = document.createElement('div');
                review.classList.add('review');
                mainContent.appendChild(review);
            })();

            const addHours = (() => {
                let hours = document.createElement('div');
                hours.classList.add('hours');
                mainContent.appendChild(hours);
            })();

            const addLocation = (() => {
                let location = document.createElement('div');
                location.classList.add('location');
                mainContent.appendChild(location);
            })();

    

        })();
        
            

        
        
    })();

    const createFooter = (() => {
        let footer = document.createElement('footer');
        footer.classList.add('footer');
        content.appendChild(footer);
    })();
    
};

export function tabToHome () {

    const addMainContent = (() => {
        let mainContent = document.createElement('section');
        mainContent.classList.add('main-content');
        main.appendChild(mainContent);

        const addRestaurantName = (() => {
            let restaurantName =  document.createElement('div');
            restaurantName.classList.add('title');
            restaurantName.innerText = 'RESTAURANT NAME';
            mainContent.appendChild(restaurantName);
        })();

        const addReview = (() => {
            let review = document.createElement('div');
            review.classList.add('review');
            mainContent.appendChild(review);
        })();

        const addHours = (() => {
            let hours = document.createElement('div');
            hours.classList.add('hours');
            mainContent.appendChild(hours);
        })();

        const addLocation = (() => {
            let location = document.createElement('div');
            location.classList.add('location');
            mainContent.appendChild(location);
        })();



    })();
};

