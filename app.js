
import Router from './services/Router.js';

// Link my Web Components
import { HomePage } from './components/HomePage.js';


window.app = {}
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {

    app.router.init();
});







