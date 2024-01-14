
import Router from './services/Router.js';
import higlihgt from './services/NavBarHiglight.js';

// Link my Web Components
import { HomePage } from './components/HomePage.js';
import { AboutMe } from './components/AboutMe.js';


window.app = {}
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {

    app.router.init();
    higlihgt();
});








