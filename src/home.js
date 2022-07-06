

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
                    homeButton.id = 'home';
                    navigation.appendChild(homeButton);

                    const homeButtonIcons = (() => {
                        let buttonLeft = document.createElement('span');
                        buttonLeft.classList.add('button-left');
                        buttonLeft.id = 'button-left';
                        buttonLeft.innerText = 'Home';
                        homeButton.appendChild(buttonLeft);

                        let buttonRight = document.createElement('span');
                        buttonRight.classList.add('button-right');
                        buttonRight.id = 'button-right';
                        homeButton.appendChild(buttonRight);

                        let homeIcon = document.createElement('i');
                        homeIcon.id = 'home-icon';
                        homeIcon.classList.add('coffee-icon');
                        buttonRight.appendChild(homeIcon);

                        })();
                        

                    let menuButton = document.createElement('button');
                    menuButton.classList.add('nav-button');
                    menuButton.id = 'menu';
                    navigation.appendChild(menuButton);

                    const menuButtonIcons = (() => {
                        let buttonLeft = document.createElement('span');
                        buttonLeft.classList.add('button-left');
                        buttonLeft.id = 'button-left';
                        buttonLeft.innerText = 'Menu';
                        menuButton.appendChild(buttonLeft);

                        let buttonRight = document.createElement('span');
                        buttonRight.classList.add('button-right');
                        buttonRight.id = 'button-right';
                        menuButton.appendChild(buttonRight);

                        let menuIcon = document.createElement('i');
                        menuIcon.id = 'menu-icon';
                        buttonRight.appendChild(menuIcon);

                        })();                   
                        
                    let contactButton = document.createElement('button');
                    contactButton.classList.add('nav-button');
                    contactButton.id = 'contact';
                    navigation.appendChild(contactButton);

                    const contactButtonIcons = (() => {
                        let buttonLeft = document.createElement('span');
                        buttonLeft.classList.add('button-left');
                        buttonLeft.id = 'button-left';
                        buttonLeft.innerText = 'Location';
                        contactButton.appendChild(buttonLeft);
    
                        let buttonRight = document.createElement('span');
                        buttonRight.classList.add('button-right');
                        buttonRight.id = 'button-right';
                        contactButton.appendChild(buttonRight);
    
                        let contactIcon = document.createElement('i');
                        contactIcon.id = 'contact-icon';
                        buttonRight.appendChild(contactIcon);
    
                        })();    
    
                })();

                
        })();


    })();

    const createMain = (() => {

        let main = document.createElement('div');
        main.classList.add('main');
        main.id = 'main';
        content.appendChild(main);

        
        
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
            restaurantName.innerText = 'Morning Joe Coffee Co.';
            mainContent.appendChild(restaurantName);
        })();

        

        const addHours = (() => {
            let hours = document.createElement('div');
            hours.classList.add('hours');
            mainContent.appendChild(hours);

            let hoursHeading = document.createElement('span');
            hoursHeading.classList.add('hours-head');
            hours.innerText = 'Hours';
            hours.appendChild(hoursHeading);

            let sunday = document.createElement('p');
            sunday.classList.add('day');
            sunday.innerText = 'Sunday: 7am - 8pm'
            hours.appendChild(sunday);

            let monday = document.createElement('p');
            monday.classList.add('day');
            monday.innerText = 'Monday: 6am - 8pm'
            hours.appendChild(monday);

            let tuesday = document.createElement('p');
            tuesday.classList.add('day');
            tuesday.innerText = 'Tuesday: 6am - 8pm'
            hours.appendChild(tuesday);

            let wednesday = document.createElement('p');
            wednesday.classList.add('day');
            wednesday.innerText = 'Wednesday: 6am - 8pm'
            hours.appendChild(wednesday);

            let thursday = document.createElement('p');
            thursday.classList.add('day');
            thursday.innerText = 'Thursday: 6am - 8pm'
            hours.appendChild(thursday);

            let friday = document.createElement('p');
            friday.classList.add('day');
            friday.innerText = 'Friday: 6am - 9pm'
            hours.appendChild(friday);

            let saturday = document.createElement('p');
            saturday.classList.add('day');
            saturday.innerText = 'Saturday: 6am - 9pm'
            hours.appendChild(saturday);

            const addReview = (() => {
                let review = document.createElement('div');
                review.classList.add('review');
                mainContent.appendChild(review);
    
                let reviewText = document.createElement('p');
                reviewText.classList.add('review-text');
                reviewText.innerText = 'Morning Joe Coffee has the best cup in town! The atmosphere and customer service make you have been transported to paris! This is exactly the kind of place that I like to return to again and again.';
                review.appendChild(reviewText);
    
                let reviewer = document.createElement('span');
                reviewer.classList.add('reviewer');
                reviewer.innerText = '- Happy Customer';
                review.appendChild(reviewer);
    
                
            })();

            
        })();

    })();
};

export function addHomeIcon() {

    let icon = document.getElementById('home-icon');
    icon.classList.add('coffee-icon');
    };

export function removeHomeIcon() {
    let icon = document.getElementById('home-icon');
    icon.classList.remove('coffee-icon');
};

export function addMenuIcon () {
    let icon = document.getElementById('menu-icon');
    icon.classList.add('coffee-icon');
};

export function removeMenuIcon() {
    let icon = document.getElementById('menu-icon');
    icon.classList.remove('coffee-icon');
};

export function addContactIcon () {
    let icon = document.getElementById('contact-icon');
    icon.classList.add('coffee-icon');
};

export function removeContactIcon() {
    let icon = document.getElementById('contact-icon');
    icon.classList.remove('coffee-icon');
};