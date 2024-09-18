document.addEventListener("DOMContentLoaded", function() {
    const collapsibleHeaders = document.querySelectorAll('.category, .subcategory');
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Field toggles
    const fieldToggles = document.querySelectorAll('.field-toggle');
    fieldToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});
