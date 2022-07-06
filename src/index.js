import './style.css';
import { addHomeButtonIcon, restaurantHome } from './home';
import { tabToHome } from './home';
import { switchToMenu } from './menu';
import { switchToContact } from './contact';
import { addHomeIcon } from './home'
import { removeHomeIcon } from './home';
import { addMenuIcon } from './home';
import { removeMenuIcon } from './home'
import { addContactIcon } from './home';
import { removeContactIcon } from './home'

restaurantHome();
tabToHome();



const main = document.getElementById('main');


const buttonLogic = (() => {

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const homeButtonLogic = (() => {
        
        document.getElementById('home').addEventListener('click', testPrint);
        function testPrint(){
            addHomeIcon();
            removeContactIcon();
            removeMenuIcon();
            removeAllChildNodes(main);
            tabToHome();
        }
    })();

    const menuButtonLogic = (() => {
        document.getElementById('menu').addEventListener('click', testPrint);
        function testPrint(){
            addMenuIcon();
            removeHomeIcon();
            removeContactIcon();
            removeAllChildNodes(main);
            switchToMenu();
            
        }
    })();

    const contactButtonLogic = (() => {
        document.getElementById('contact').addEventListener('click', testPrint);
        function testPrint(){
            addContactIcon();
            removeHomeIcon();
            removeMenuIcon();
            removeAllChildNodes(main);
            switchToContact();
        }
    })();

    
})();
