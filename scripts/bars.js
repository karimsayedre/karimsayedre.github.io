
function addCopyBehaviour() {
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const text = button.dataset.text;
            try {
                await navigator.clipboard.writeText(text);
                const toast = button.parentElement.querySelector('.copy-toast');

                // Calculate positions
                const buttonRect = button.getBoundingClientRect();
                const toastWidth = toast.offsetWidth;
                const toastHeight = toast.offsetHeight;
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                // Vertical positioning (2rem = 32px)
                let verticalPosition;
                if (viewportHeight - buttonRect.bottom > toastHeight + 32) {
                    verticalPosition = buttonRect.bottom + 16; // Below button
                } else {
                    verticalPosition = buttonRect.top - toastHeight - 16; // Above button
                }

                // Horizontal positioning (centered with edge margins)
                let horizontalPosition = buttonRect.left + (buttonRect.width / 2) - (toastWidth / 2);
                horizontalPosition = Math.max(32, Math.min(horizontalPosition, viewportWidth - toastWidth - 32));

                // Apply positions
                toast.style.left = `${horizontalPosition}px`;
                toast.style.top = `${verticalPosition}px`;

                // Show toast
                const bsToast = new bootstrap.Toast(toast, {
                    animation: true,
                    autohide: true,
                    delay: 2000
                });
                bsToast.show();
            } catch (error) {
                console.error('Copy failed:', error);
            }
        });
    });
}

function navbar() {
    let navbarHTML = /*html*/`
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand homepage-link">
            <a href="index.html" class="navbar-icons mb-0 h1" id="my-name">
                <img src="icons/Beyond.png" class="Beyond-logo" alt="Homepage">
                Karim Sayed
            </a>
        </span>
        <div class="navbar-icons-div">
            <a href="resumes/Karim Sayed - Graphics Resume.pdf" target="_blank">
                <img src="icons/resume.png" class="navbar-icons" alt="Resume">
            </a>

            <div class="position-relative">
                <a href="#" class="copy-btn" data-text="karimsayedib">
                    <img src="icons/discord.png" class="navbar-icon" alt="Discord">
                </a>
                <div class="toast copy-toast" style="min-width: 150px;">
                    Copied Discord account to clipboard!
                </div>
            </div>

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

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    addCopyBehaviour();
}

function footer() {

    let footerHTML = /*html*/`
    <footer>
        <div class="footer-icons text-center">

            <a href="resumes/Karim Sayed - Graphics Resume.pdf" target="_blank">
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

            <div class="position-relative">
                <a href="#" class="copy-btn" data-text="karimsayedib">
                    <img src="icons/discord.png" class="navbar-icon" alt="Discord">
                </a>
                <div class="toast copy-toast">
                    Copied Discord account to clipboard!
                </div>
            </div>
        </div>
        <p class="text-center">© 2025 Karim Sayed. All rights reserved.</p>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
    addCopyBehaviour();
}

