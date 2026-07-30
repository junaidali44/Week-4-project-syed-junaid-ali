const toggleBtn = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        function toggleSidebar() {
            sidebar.classList.toggle('sidebar--open');
            overlay.classList.toggle('sidebar-overlay--active');
            document.body.style.overflow = sidebar.classList.contains('sidebar--open') ? 'hidden' : '';
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleSidebar);
        }

        if (overlay) {
            overlay.addEventListener('click', toggleSidebar);
        }

        // Close sidebar on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('sidebar--open')) {
                toggleSidebar();
            }
        });

        // Auto-close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && sidebar.classList.contains('sidebar--open')) {
                toggleSidebar();
            }
        });