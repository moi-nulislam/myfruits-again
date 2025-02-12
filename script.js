const sidebar = document.querySelector('.sidebar');
const sidebarBtns = document.querySelectorAll(".sidebar-btn"); // Both open and close buttons

function toggleSidebar() {
    sidebar.classList.toggle("active");
}

// Attach event listeners to both open and close buttons
sidebarBtns.forEach(btn => btn.addEventListener("click", toggleSidebar));

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !event.target.closest(".menu-button")) {
        sidebar.classList.remove("active");
    }
});
