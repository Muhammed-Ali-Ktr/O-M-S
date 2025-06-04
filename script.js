document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                    
                    // For mobile menu, hide after click
                    if (window.innerWidth < 768) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Set active state
                    document.querySelectorAll('.nav-item').forEach(item => {
                        item.classList.remove('active', 'bg-red-600');
                    });
                    this.classList.add('active', 'bg-red-600');
                });
            });
            
            // Navigation active state based on scroll position
            function setActiveNavigation() {
                const sections = document.querySelectorAll('div[id]');
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelectorAll('.nav-item').forEach(item => {
                            item.classList.remove('active', 'bg-red-600');
                            if (item.getAttribute('href') === '#' + sectionId) {
                                item.classList.add('active', 'bg-red-600');
                            }
                        });
                    }
                });
            }
            
            window.addEventListener('scroll', setActiveNavigation);
            
            // Modals functionality
            function setupModal(openBtns, modal, closeBtn) {
                if (Array.isArray(openBtns)) {
                    openBtns.forEach(btn => {
                        if (btn) {
                            btn.addEventListener('click', () => {
                                modal.style.display = 'flex';
                            });
                        }
                    });
                } else if (openBtns) {
                    openBtns.addEventListener('click', () => {
                        modal.style.display = 'flex';
                    });
                }
                
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
                
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        modal.style.display = 'none';
                    }
                });
            }
            
            // Appointment Modal
            const appointmentModal = document.getElementById('appointmentModal');
            const appointmentBtns = [
                document.getElementById('appointmentBtn'),
                document.getElementById('heroAppointmentBtn')
            ];
            const closeAppointmentModal = document.getElementById('closeModal');
            setupModal(appointmentBtns, appointmentModal, closeAppointmentModal);
            
            // Chat Modal
            const chatModal = document.getElementById('chatModal');
            const chatBtn = document.getElementById('chatButton');
            const closeChatModal = document.getElementById('closeChatModal');
            setupModal(chatBtn, chatModal, closeChatModal);
            
            // Review Modal
            const reviewModal = document.getElementById('reviewModal');
            const reviewBtn = document.getElementById('reviewBtn');
            const closeReviewModal = document.getElementById('closeReviewModal');
            setupModal(reviewBtn, reviewModal, closeReviewModal);
            
            // Service Modal
            const serviceModal = document.getElementById('serviceModal');
            const closeServiceModal = document.getElementById('closeServiceModal');
            const serviceModalButton = document.getElementById('serviceModalButton');
            const serviceItems = document.querySelectorAll('.service-item');
            
            closeServiceModal.addEventListener('click', () => {
                serviceModal.style.display = 'none';
            });
            
            serviceModalButton.addEventListener('click', () => {
                serviceModal.style.display = 'none';
                appointmentModal.style.display = 'flex';
            });
            
            // Service content mapping
            const serviceDetails = {
                engine: {
                    title: "Motor Bakımı",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Motor bakımı, aracınızın performansını ve uzun ömürlü olmasını sağlayan en önemli bakım işlemidir. Düzenli motor bakımı ile yakıt tasarrufu sağlayabilir ve beklenmedik arızaların önüne geçebilirsiniz.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Motor yağı ve filtre değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Hava ve yakıt filtresi değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Buji ve buji kablosu kontrolü ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Triger kayışı/zinciri kontrolü ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Motor performans testi</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Genellikle her 10.000-15.000 km'de bir veya yılda bir kez yapılması önerilir.</p>
                        </div>
                    `
                },
                brake: {
                    title: "Fren Sistemi",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Fren sistemi, araç güvenliğinin en kritik parçalarından biridir. Düzenli kontrol ve bakım, fren performansını en üst düzeyde tutmak için gereklidir.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Fren balataları kontrol ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Fren diskleri kontrol ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Fren hidroliği kontrolü ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>ABS sistemi kontrolü ve arıza giderme</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>El freni ayarı</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Fren sistemi bakımı genellikle her 20.000 km'de bir veya fren performansında azalma hissedildiğinde yapılmalıdır.</p>
                        </div>
                     `
                },
                electric: {
                    title: "Elektrik Sistemleri",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Araç elektrik sistemleri, aracınızın çalışması ve güvenliği için kritik öneme sahiptir. Akü, marş motoru, alternatör ve aydınlatma sistemlerinin düzenli kontrolü gereklidir.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Akü kontrolü ve değişimi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Marş motoru ve alternatör testi</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Aydınlatma sistemlerinin kontrolü ve onarımı</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Elektrik sistemi kontrolleri yılda bir kez veya aracınızda elektriksel sorunlar fark edildiğinde yapılmalıdır.</p>
                        </div>
                    `
                },
                ac: {
                    title: "Klima Servisi",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Klima sisteminizin sağlıklı çalışması için düzenli bakım şarttır. Klima gazı dolumu, temizlik ve arıza tespiti hizmetlerimizle konforunuz garanti altındadır.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Klima gazı dolumu ve kaçak kontrolü</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Klima filtresi değişimi ve temizliği</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Klima sisteminde arıza tespiti ve tamiri</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Klima bakımı yılda bir kez yapılması önerilir, özellikle yaz ayları öncesinde kontrol edilmelidir.</p>
                        </div>
                    `
                },
                tire: {
                    title: "Lastik Hizmetleri",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Lastiklerinizin durumu sürüş güvenliğiniz için hayati önem taşır. Lastik değişimi, rotasyon ve balans hizmetlerimizle yol tutuşunuzu artırıyoruz.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Lastik değişimi ve montajı</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Rotasyon ve balans ayarı</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Lastik tamiri ve basınç kontrolü</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Lastiklerinizi her 10.000 km'de bir kontrol ettirmeniz ve mevsim koşullarına göre değiştirmeniz önerilir.</p>
                        </div>
                    `
                },
                diagnostic: {
                    title: "Arıza Teşhisi",
                    content: `
                        <div class="text-gray-300">
                            <p class="mb-3">Bilgisayarlı arıza teşhis sistemimizle aracınızdaki tüm elektronik ve mekanik sorunları hızlıca tespit ediyoruz.</p>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Hizmetlerimiz:</h4>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Arıza kodu okuma ve analiz</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Elektronik sistem kontrolü</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Motor ve performans testleri</span>
                                </li>
                            </ul>
                            
                            <h4 class="text-white font-bold mt-4 mb-2">Bakım Periyodu:</h4>
                            <p>Arıza teşhisi araçta herhangi bir sorun hissedildiğinde veya periyodik bakımlar sırasında yapılmalıdır.</p>
                        </div>
                    `
                }
            };

            // Add click event to service items
            serviceItems.forEach(item => {
                item.addEventListener('click', function() {
                    const serviceType = this.getAttribute('data-service');
                    const service = serviceDetails[serviceType];
                    
                    document.getElementById('serviceModalTitle').textContent = service.title;
                    document.getElementById('serviceModalContent').innerHTML = service.content;
                    serviceModal.style.display = 'flex';
                });
            });

            // Carousel functionality
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.carousel-dot');
            let currentSlide = 0;

            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    showSlide(parseInt(this.getAttribute('data-slide')));
                });
            });

            // Auto-rotate carousel
            let slideInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);

            // Pause on hover
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });

            carouselContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 5000);
            });

            // Rating stars in review modal
            const stars = document.querySelectorAll('.rating-stars i');
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.getAttribute('data-rating'));
                    
                    stars.forEach((s, index) => {
                        if (index < rating) {
                            s.classList.remove('far');
                            s.classList.add('fas');
                        } else {
                            s.classList.remove('fas');
                            s.classList.add('far');
                        }
                    });
                });
            });

            // Form submissions
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Show toast notification
                    const toast = document.getElementById('toast');
                    toast.classList.add('show');
                    
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 3000);
                    
                    // Close modal if form is in a modal
                    const modal = this.closest('.modal');
                    if (modal) {
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 1000);
                    }
                    
                    // Reset form
                    this.reset();
                    
                    // Reset stars in review form
                    if (this.id === 'reviewForm') {
                        stars.forEach(star => {
                            star.classList.remove('fas');
                            star.classList.add('far');
                        });
                    }
                });
            });

            // Chat functionality
            const chatForm = document.getElementById('chatForm');
            const chatMessages = document.getElementById('chatMessages');
            
            if (chatForm) {
                chatForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const input = this.querySelector('input');
                    const message = input.value.trim();
                    
                    if (message) {
                        // Add user message
                        const userMsg = document.createElement('div');
                        userMsg.className = 'flex justify-end mb-3';
                        userMsg.innerHTML = `
                            <div class="bg-red-600 rounded-lg p-2 max-w-xs">
                                <div class="text-xs text-gray-300 text-right">Siz</div>
                                <div class="text-white">${message}</div>
                            </div>
                        `;
                        chatMessages.appendChild(userMsg);
                        
                        // Clear input
                        input.value = '';
                        
                        // Scroll to bottom
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                        
                        // Simulate response after delay
                        setTimeout(() => {
                            const responses = [
                                "Anladım, size nasıl yardımcı olabilirim?",
                                "Bu konuda ekibimizden bilgi alıyorum, lütfen bekleyiniz.",
                                "Randevu oluşturmamı ister misiniz?",
                                "Daha fazla bilgi için 0555 123 4567'yi arayabilirsiniz."
                            ];
                            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                            
                            const botMsg = document.createElement('div');
                            botMsg.className = 'flex justify-start mb-3';
                            botMsg.innerHTML = `
                                <div class="bg-gray-700 rounded-lg p-2 max-w-xs">
                                    <div class="text-xs text-gray-400">Destek Ekibi</div>
                                    <div class="text-white">${randomResponse}</div>
                                </div>
                            `;
                            chatMessages.appendChild(botMsg);
                            
                            // Scroll to bottom
                            chatMessages.scrollTop = chatMessages.scrollHeight;
                        }, 1000);
                    }
                });
            }

            // Initialize active navigation
            setActiveNavigation();
        });