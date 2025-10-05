document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navButtons = document.querySelectorAll('nav button');

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    function setActiveButton(buttonId) {
        navButtons.forEach(button => {
            if (button.id === buttonId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.id.replace('-btn', '-section');
            showSection(sectionId);
            setActiveButton(button.id);
        });
    });

    // Show home section by default
    showSection('home-section');
});
