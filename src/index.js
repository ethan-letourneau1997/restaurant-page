import './style.css';
import { restaurantHome } from './home';
import { tabToHome } from './home';
import { switchToMenu } from './menu';
import { switchToContact } from './contact';

restaurantHome();



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
            removeAllChildNodes(main);
            tabToHome();
        }
    })();

    const menuButtonLogic = (() => {
        document.getElementById('menu').addEventListener('click', testPrint);
        function testPrint(){
            removeAllChildNodes(main);
            switchToMenu();
            
        }
    })();

    const contactButtonLogic = (() => {
        document.getElementById('contact').addEventListener('click', testPrint);
        function testPrint(){
            console.log('contact');
            removeAllChildNodes(main);
            switchToContact();
        }
    })();

    
})();
