export function switchToContact() {
    const createMain = (() => {
        const addMainContent = (() => {
            let mainContent = document.createElement('section');
            mainContent.classList.add('main-content');
            mainContent.classList.add('contact-main');
            main.appendChild(mainContent);

            const addContactTitle = (() => {
                let contactTitle =  document.createElement('div');
                contactTitle.classList.add('title');
                contactTitle.innerText = 'Location';
                mainContent.appendChild(contactTitle);
            })();

            // const addDrinkSection = (() => {
            //     let drinkSection = document.createElement('div');
            //     drinkSection.classList.add('menu-section');
            //     mainContent.appendChild(drinkSection);

            const addContactSection = (() => {
                let contactSection = document.createElement('div');
                contactSection.classList.add('contact-section');
                mainContent.appendChild(contactSection);

                const addContacts = (() => {

                    function addContact(num){
                        let contact = document.createElement('div');
                        contact.id = "contact-" + num;
                        contact.classList.add('menu-item');
                        contact.classList.add('contact-item');
                        contact.classList.add('contact');

                        let contactImage = document.createElement('div')
                        contactImage.id = "contact-image-"+ num;
                        contactImage.classList.add('menu-image')
                        contact.appendChild(contactImage);
                        
                        contactSection.appendChild(contact);
                    }

                    addContact(1);
                })();
            })();
        })();
    })();
}