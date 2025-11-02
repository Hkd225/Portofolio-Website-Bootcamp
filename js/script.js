// Script untuk efek scroll halus dan highlight navbar
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hapus kelas aktif dari semua item navbar
                document.querySelectorAll('nav a').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Tambahkan kelas aktif ke item yang diklik
                this.classList.add('active');
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Script untuk mengubah navbar aktif saat scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    