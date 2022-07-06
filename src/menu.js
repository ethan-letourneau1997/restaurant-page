export function switchToMenu() {
    const createMain = (() => {


        const addMainContent = (() => {
            let mainContent = document.createElement('section');
            mainContent.classList.add('main-content');
            main.appendChild(mainContent);

            const addMenuTitle = (() => {
                let menuTitle =  document.createElement('div');
                menuTitle.classList.add('title');
                menuTitle.innerText = 'Menu';
                mainContent.appendChild(menuTitle);
            })();

            const addDrinkSection = (() => {
                let drinkSection = document.createElement('div');
                drinkSection.classList.add('menu-section');
                mainContent.appendChild(drinkSection);

                const addDrinkSectionTitle = (() => {
                    let drinkSectionTitle = document.createElement('div');
                    drinkSectionTitle.classList.add('menu-section-title')  
                    drinkSectionTitle.innerText = 'Drinks';
                    drinkSection.appendChild(drinkSectionTitle);


                })();

                const addDrinkItems = (() => {

                    function addDrinkItem(num, name, text, price){
                        let drinkItem = document.createElement('div');
                        drinkItem.id = "drink-item-" + num;
                        drinkItem.classList.add('menu-item');
                        drinkItem.innerText = name;

                        let drinkImage = document.createElement('div')
                        drinkImage.id = "drink-image-"+ num;
                        drinkImage.classList.add('menu-image')
                        drinkItem.appendChild(drinkImage);
                        
                        drinkSection.appendChild(drinkItem);

                        let drinkText = document.createElement('p');
                        drinkText.classList.add('menu-text');
                        drinkText.innerText = text;
                        drinkItem.appendChild(drinkText);

                        let drinkPrice = document.createElement('span');
                        drinkPrice.classList.add('menu-price');
                        drinkPrice.innerText = price;
                        drinkItem.appendChild(drinkPrice);    
                    }

                    addDrinkItem(1, 'Americano','Excepteur cupidatat qui velit et pariatur ut occaecat.', '$5');
                    addDrinkItem(2, 'Latte','Aute Lorem proident veniam aliquip elit reprehenderit ea.', '$7');
                    addDrinkItem(3, 'Cappuccinno', 'Laborum ut exercitation adipisicing id enim culpa irure do.', '$7');
                })();

                
            })();

            const addMainDishSection = (() => {
                let mainDishSection = document.createElement('div');
                mainDishSection.classList.add('menu-section');
                mainContent.appendChild(mainDishSection);

                let addMainDishSectionTitle = (() => {
                    let mainDishSectionTitle = document.createElement('div');
                    mainDishSectionTitle.classList.add('menu-section-title')  
                    mainDishSectionTitle.innerText = 'Sandwiches';
                    mainDishSection.appendChild(mainDishSectionTitle);
                })();

                const addMainDishItems = (() => {

                    function addMainDishItem(num, name, text, price){
                        let mainDishItem = document.createElement('div');
                        mainDishItem.id = "main-dish-item-" + num;
                        mainDishItem.classList.add('menu-item');
                        mainDishItem.innerText = name;

                        let mainDishImage = document.createElement('div')
                        mainDishImage.id = "main-dish-image-"+ num;
                        mainDishImage.classList.add('menu-image')
                        mainDishItem.appendChild(mainDishImage);
                        
                        mainDishSection.appendChild(mainDishItem);

                        let mainDishText = document.createElement('p');
                        mainDishText.classList.add('menu-text');
                        mainDishText.innerText = text;
                        mainDishItem.appendChild(mainDishText);

                        let mainDishPrice = document.createElement('span');
                        mainDishPrice.classList.add('menu-price');
                        mainDishPrice.innerText = price;
                        mainDishItem.appendChild(mainDishPrice);                        
                    }

                    addMainDishItem(1, 'BLT', 'Irure dolor cillum quis ut fugiat amet occaecat dolor esse qui ea.', '$10');
                    addMainDishItem(2, 'Panini', 'Irure dolor cillum quis ut fugiat amet occaecat dolor esse qui ea.', '$12');
                    addMainDishItem(3, 'Grilled Cheese', 'Irure dolor cillum quis ut fugiat amet occaecat dolor esse qui ea.', '$8' );

                })();
            })();
        
            const addSideSection = (() => {
                let sideSection = document.createElement('div');
                sideSection.classList.add('menu-section');
                mainContent.appendChild(sideSection);

                let addSideSectionTitle = (() => {
                    let sideSectionTitle = document.createElement('div');
                    sideSectionTitle.classList.add('menu-section-title')  
                    sideSectionTitle.innerText = 'Snacks';
                    sideSection.appendChild(sideSectionTitle);
                })();

                const addSideItems = (() => {

                    function addSideItem(num, name, text, price){
                        let sideItem = document.createElement('div');
                        sideItem.id = "side-item-" + num;
                        sideItem.classList.add('menu-item');
                        sideItem.innerText = name;
    
                        let sideImage = document.createElement('div')
                        sideImage.id = "side-image-"+ num;
                        sideImage.classList.add('menu-image')
                        sideItem.appendChild(sideImage);
                        
                        sideSection.appendChild(sideItem);

                        let sideText = document.createElement('p');
                        sideText.classList.add('menu-text');
                        sideText.innerText = text;
                        sideItem.appendChild(sideText);

                        let sidePrice = document.createElement('span');
                        sidePrice.classList.add('menu-price');
                        sidePrice.innerText = price;
                        sideItem.appendChild(sidePrice);     
                    }
    
                    addSideItem(1, 'Bagel', 'Eiusmod incididunt labore et eu labore nostrud ipsum.', '$7' );
                    addSideItem(2, 'Chips', 'Eiusmod incididunt labore et eu labore nostrud ipsum.', '$5');
                })();
            })();  
            
        })();

    })();
};
