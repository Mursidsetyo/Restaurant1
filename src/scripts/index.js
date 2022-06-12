import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/layout-responsive.css';

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})