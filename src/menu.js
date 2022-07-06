export function switchToMenu() {
    const createMain = (() => {


        const addMainContent = (() => {
            let mainContent = document.createElement('section');
            mainContent.classList.add('main-content');
            main.appendChild(mainContent);

            const addMenuTitle = (() => {
                let menuTitle =  document.createElement('div');
                menuTitle.classList.add('title');
                menuTitle.innerText = 'MENU';
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

                    function addDrinkItem(num, name){
                        let drinkItem = document.createElement('div');
                        drinkItem.id = "drink-item-" + num;
                        drinkItem.classList.add('menu-item');
                        drinkItem.innerText = name;

                        let drinkImage = document.createElement('div')
                        drinkImage.id = "drink-image-"+ num;
                        drinkImage.classList.add('menu-image')
                        drinkItem.appendChild(drinkImage);
                        
                        drinkSection.appendChild(drinkItem);
                    }

                    addDrinkItem(1, 'DRINK 1');
                    addDrinkItem(2, 'DRINK 2');
                    addDrinkItem(3, 'DRINK 3')
                })();

                
            })();

            const addMainDishSection = (() => {
                let mainDishSection = document.createElement('div');
                mainDishSection.classList.add('menu-section');
                mainContent.appendChild(mainDishSection);

                let addMainDishSectionTitle = (() => {
                    let mainDishSectionTitle = document.createElement('div');
                    mainDishSectionTitle.classList.add('menu-section-title')  
                    mainDishSectionTitle.innerText = 'Main Dishes';
                    mainDishSection.appendChild(mainDishSectionTitle);
                })();

                const addMainDishItems = (() => {

                    function addMainDishItem(num, name){
                        let mainDishItem = document.createElement('div');
                        mainDishItem.id = "main-dish-item-" + num;
                        mainDishItem.classList.add('menu-item');
                        mainDishItem.innerText = name;

                        let mainDishImage = document.createElement('div')
                        mainDishImage.id = "main-dish-image-"+ num;
                        mainDishImage.classList.add('menu-image')
                        mainDishItem.appendChild(mainDishImage);
                        
                        mainDishSection.appendChild(mainDishItem);
                    }

                    addMainDishItem(1, 'MAIN DISH 1');
                    addMainDishItem(2, 'MAIN DISH 2');
                    addMainDishItem(3, 'MAIN DISH 3');
                    addMainDishItem(4, 'MAIN DISH 4');
                    addMainDishItem(5, 'MAIN DISH 5');
                    addMainDishItem(6, 'MAIN DISH 6');
                    addMainDishItem(7, 'MAIN DISH 7');
                    addMainDishItem(8, 'MAIN DISH 8');

                })();
            })();
        
            const addSideSection = (() => {
                let sideSection = document.createElement('div');
                sideSection.classList.add('menu-section');
                mainContent.appendChild(sideSection);

                let addSideSectionTitle = (() => {
                    let sideSectionTitle = document.createElement('div');
                    sideSectionTitle.classList.add('menu-section-title')  
                    sideSectionTitle.innerText = 'Sides';
                    sideSection.appendChild(sideSectionTitle);
                })();

                const addSideItems = (() => {

                    function addSideItem(num, name){
                        let sideItem = document.createElement('div');
                        sideItem.id = "side-item-" + num;
                        sideItem.classList.add('menu-item');
                        sideItem.innerText = name;
    
                        let sideImage = document.createElement('div')
                        sideImage.id = "side-image-"+ num;
                        sideImage.classList.add('menu-image')
                        sideItem.appendChild(sideImage);
                        
                        sideSection.appendChild(sideItem);
                    }
    
                    addSideItem(1, 'SIDE DISH 1');
                    addSideItem(2, 'SIDE DISH 1');
                    addSideItem(3, 'SIDE DISH 1');
                    addSideItem(4, 'SIDE DISH 1');
    
                })();
            })();  
            
        })();

    })();
};
