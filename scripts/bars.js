function navbar() {
    let navbarHTML = `
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1"> <a id="my-name" href="index.html">Karim Sayed</a> </span>
        <div class="navbar-icons">
            <a href="KarimSayedResume.pdf" target="_blank">
                <img src="icons/resume.png" class="navbar-icons" alt="Resume">
            </a>
            <a href="mailto:karimsayedre@gmail.com" target="_blank">
                <img src="icons/email.png" class="navbar-icons" alt="Email Address">
            </a>
            <a href="https://www.linkedin.com/in/karimsayedre/" target="_blank">
                <img src="icons/linkedin.png" class="navbar-icons" alt="LinkedIn Account">
            </a>
            <a href="https://github.com/karimsayedre" target="_blank">
                <img src="icons/github.png" class="navbar-icons" alt="Github Account">
            </a>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('beforeend', navbarHTML);
}

function footer() {
    let footerHTML = `
    <footer>
        <div class="navbar-icons text-center">
            <a href="KarimSayedResume.pdf" target="_blank">
                <img src="icons/resume.png" class="navbar-icons" alt="Resume">
            </a>
            <a href="mailto:karimsayedre@gmail.com" target="_blank">
                <img src="icons/email.png" class="navbar-icons" alt="Email Address">
            </a>
            <a href="https://www.linkedin.com/in/karimsayedre/" target="_blank">
                <img src="icons/linkedin.png" class="navbar-icons" alt="LinkedIn Account">
            </a>
            <a href="https://github.com/karimsayedre" target="_blank">
                <img src="icons/github.png" class="navbar-icons" alt="Github Account">
            </a>
        </div>
        <p class="text-center">© 2024 Karim Sayed. All rights reserved.</p>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}