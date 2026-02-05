/**
 * O Sem Nome - Main JavaScript
 * ============================
 * Interatividade e funcionalidades do site
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initNavigation();
    initScrollEffects();
    initGallery();
    initMenu();
    initReservations();
    initTestimonials();
    initAOS();
    initBackToTop();
    updateCopyrightYear();
    initLanguageSelector();
});

/* ==========================================
   PRELOADER
   ========================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('loaded');
            // Remove from DOM after animation
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });
}

/* ==========================================
   NAVIGATION
   ========================================== */
function initNavigation() {
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href*="' + sectionId + '"]');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });
}

/* ==========================================
   SCROLL EFFECTS
   ========================================== */
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================
   GALLERY
   ========================================== */
function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    let visibleItems = [];

    // Filter functionality
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(function(item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    item.style.display = '';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });

            updateVisibleItems();
        });
    });

    // Update visible items array
    function updateVisibleItems() {
        visibleItems = Array.from(galleryItems).filter(function(item) {
            return !item.classList.contains('hidden');
        });
    }

    // Initial update
    updateVisibleItems();

    // Lightbox functionality
    galleryItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-overlay span');

            currentIndex = visibleItems.indexOf(item);
            openLightbox(img.src, caption ? caption.textContent : '');
        });
    });

    function openLightbox(src, caption) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        const item = visibleItems[currentIndex];
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption ? caption.textContent : '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % visibleItems.length;
        const item = visibleItems[currentIndex];
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption ? caption.textContent : '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrev();
                break;
            case 'ArrowRight':
                showNext();
                break;
        }
    });
}

/* ==========================================
   MENU (with Google Sheets integration)
   ========================================== */
function initMenu() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuPanels = document.querySelectorAll('.menu-panel');

    // Tab switching
    menuTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const targetTab = tab.getAttribute('data-tab');

            // Update active tab
            menuTabs.forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');

            // Show corresponding panel
            menuPanels.forEach(function(panel) {
                panel.classList.remove('active');
                if (panel.id === 'panel-' + targetTab) {
                    panel.classList.add('active');
                }
            });
        });
    });

    // Load menu data
    loadMenuData();
}

// Load menu from Google Sheets via Make webhook
async function loadMenuData() {
    const webhookUrl = CONFIG.webhooks.menuGoogleSheets;

    // Check if webhook is configured
    if (webhookUrl === 'SUBSTITUIR_PELO_URL_DO_WEBHOOK_MENU') {
        console.log('Menu webhook not configured. Loading demo data.');
        loadDemoMenuData();
        return;
    }

    try {
        const response = await fetch(webhookUrl);
        const data = await response.json();
        renderMenuItems(data);
    } catch (error) {
        console.error('Error loading menu:', error);
        loadDemoMenuData();
    }
}

// Demo menu data (used when webhook is not configured)
function loadDemoMenuData() {
    const demoData = {
        peixes: [
            {
                name: "Bacalhau à Brás",
                description: "Tradicional bacalhau desfiado com batata palha, ovos e azeitonas pretas",
                price: "16.50€",
                image: "assets/images/comidas/bacalhau.jpg"
            },
            {
                name: "Bacalhau à Lagareiro",
                description: "Lombo de bacalhau assado no forno com batata a murro e muito azeite",
                price: "18.00€",
                image: "assets/images/comidas/bacalhau-lagareiro.jpg"
            },
            {
                name: "Polvo à Lagareiro",
                description: "Tentáculo de polvo grelhado com batata a murro e azeite de alho",
                price: "22.00€",
                image: "assets/images/comidas/polvo.jpg"
            },
            {
                name: "Robalo Grelhado",
                description: "Robalo fresco grelhado com legumes salteados e batata cozida",
                price: "19.50€",
                image: "assets/images/comidas/robalo.jpg"
            },
            {
                name: "Dourada ao Sal",
                description: "Dourada fresca cozida em crosta de sal, servida com legumes",
                price: "17.50€",
                image: "assets/images/comidas/dourada.jpg"
            },
            {
                name: "Caldeirada de Peixe",
                description: "Estufado tradicional com variedade de peixes frescos e batata",
                price: "15.00€",
                image: "assets/images/comidas/caldeirada.jpg"
            }
        ],
        carnes: [
            {
                name: "Posta Mirandesa",
                description: "Autêntica posta de vitela mirandesa DOP, grelhada na brasa",
                price: "28.00€",
                image: "assets/images/comidas/posta-mirandesa.jpg"
            },
            {
                name: "Maminha Grelhada",
                description: "Corte nobre de maminha grelhada com molho de ervas",
                price: "19.00€",
                image: "assets/images/comidas/maminha.jpg"
            },
            {
                name: "Secretos de Porco Preto",
                description: "Secretos de porco preto alentejano grelhados na perfeição",
                price: "17.50€",
                image: "assets/images/comidas/secretos.jpg"
            },
            {
                name: "Bife à Portuguesa",
                description: "Bife de vaca com ovo a cavalo, batata frita e arroz",
                price: "15.00€",
                image: "assets/images/comidas/bife.jpg"
            },
            {
                name: "Costeletas de Borrego",
                description: "Costeletas de borrego grelhadas com ervas aromáticas",
                price: "18.00€",
                image: "assets/images/comidas/borrego.jpg"
            },
            {
                name: "Febras na Brasa",
                description: "Febras de porco grelhadas na brasa com molho à campino",
                price: "12.50€",
                image: "assets/images/comidas/febras.jpg"
            }
        ],
        sobremesas: [
            {
                name: "Pudim Abade de Priscos",
                description: "O famoso pudim conventual com toucinho e canela",
                price: "5.50€",
                image: "assets/images/comidas/pudim.jpg"
            },
            {
                name: "Leite-creme Queimado",
                description: "Cremoso leite-creme com crosta de açúcar caramelizado",
                price: "4.50€",
                image: "assets/images/comidas/leite-creme.jpg"
            },
            {
                name: "Mousse de Chocolate",
                description: "Mousse de chocolate negro intenso com raspas de chocolate",
                price: "5.00€",
                image: "assets/images/comidas/mousse.jpg"
            },
            {
                name: "Tarte de Amêndoa",
                description: "Tarte tradicional de amêndoa do Algarve",
                price: "5.00€",
                image: "assets/images/comidas/tarte.jpg"
            },
            {
                name: "Arroz Doce",
                description: "Arroz doce cremoso polvilhado com canela",
                price: "4.00€",
                image: "assets/images/comidas/arroz-doce.jpg"
            },
            {
                name: "Pêra Bêbeda",
                description: "Pêra cozida em vinho do Porto com canela",
                price: "5.50€",
                image: "assets/images/comidas/pera.jpg"
            }
        ]
    };

    renderMenuItems(demoData);
}

// Render menu items to DOM
function renderMenuItems(data) {
    const categories = ['peixes', 'carnes', 'sobremesas'];

    categories.forEach(function(category) {
        const container = document.getElementById('menu-items-' + category);
        const loading = document.getElementById('menu-loading-' + category);
        const items = data[category] || [];

        // Hide loading
        if (loading) {
            loading.style.display = 'none';
        }

        // Clear existing items
        if (container) {
            container.innerHTML = '';

            // Render items
            items.forEach(function(item) {
                const itemHtml = `
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy"
                                 onerror="this.src='assets/images/comidas/placeholder.jpg'">
                        </div>
                        <div class="menu-item-content">
                            <div class="menu-item-header">
                                <h3 class="menu-item-name">${item.name}</h3>
                                <span class="menu-item-price">${item.price}</span>
                            </div>
                            <p class="menu-item-description">${item.description}</p>
                        </div>
                    </div>
                `;
                container.innerHTML += itemHtml;
            });
        }
    });
}

/* ==========================================
   RESERVATIONS
   ========================================== */
function initReservations() {
    const form = document.getElementById('reservation-form');
    const dateInput = document.getElementById('res-date');
    const successMsg = document.getElementById('reservation-success');
    const errorMsg = document.getElementById('reservation-error');

    // Set minimum date to today
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

        // Set maximum date (30 days from now)
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + CONFIG.reservaConfig.diasAntecedencia);
        dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('reservation-submit');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Collect form data
            const formData = {
                name: document.getElementById('res-name').value,
                email: document.getElementById('res-email').value,
                phone: document.getElementById('res-phone').value,
                date: document.getElementById('res-date').value,
                time: document.getElementById('res-time').value,
                guests: document.getElementById('res-guests').value,
                message: document.getElementById('res-message').value,
                timestamp: new Date().toISOString()
            };

            try {
                await submitReservation(formData);
                form.style.display = 'none';
                successMsg.style.display = 'block';
            } catch (error) {
                console.error('Reservation error:', error);
                errorMsg.style.display = 'block';
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
}

// Submit reservation to Make webhook
async function submitReservation(data) {
    const webhookUrl = CONFIG.webhooks.reservas;

    // Check if webhook is configured
    if (webhookUrl === 'SUBSTITUIR_PELO_URL_DO_WEBHOOK_RESERVAS') {
        console.log('Reservations webhook not configured. Simulating success.');
        // Simulate API delay
        return new Promise(function(resolve) {
            setTimeout(resolve, 1500);
        });
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Reservation failed');
    }

    return response.json();
}

// Reset reservation form
function resetReservationForm() {
    const form = document.getElementById('reservation-form');
    const successMsg = document.getElementById('reservation-success');

    form.reset();
    form.style.display = '';
    successMsg.style.display = 'none';
}

// Hide reservation error
function hideReservationError() {
    document.getElementById('reservation-error').style.display = 'none';
}

// Make functions globally available
window.resetReservationForm = resetReservationForm;
window.hideReservationError = hideReservationError;

/* ==========================================
   TESTIMONIALS CAROUSEL
   ========================================== */
function initTestimonials() {
    const container = document.getElementById('testimonials-container');
    const dotsContainer = document.getElementById('testimonial-dots');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');

    let currentSlide = 0;
    let autoPlayInterval;

    // Load testimonials from config
    const testimonials = CONFIG.testemunhos;

    // Render testimonials
    testimonials.forEach(function(testimonial, index) {
        // Create card
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-stars">
                    ${generateStars(testimonial.estrelas)}
                </div>
                <p class="testimonial-text">"${testimonial.texto}"</p>
                <div class="testimonial-author">
                    <span class="testimonial-name">${testimonial.nome}</span>
                    <span class="testimonial-date">${testimonial.data}</span>
                </div>
            </div>
        `;
        container.appendChild(card);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    // Generate star icons
    function generateStars(count) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < count) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    }

    // Update carousel position
    function updateCarousel() {
        const cards = container.querySelectorAll('.testimonial-card');
        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        cards.forEach(function(card, index) {
            card.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
        });

        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Pause on hover
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }

    // Start auto-play
    startAutoPlay();

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    if (container) {
        container.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > swipeThreshold) {
            nextSlide();
        } else if (diff < -swipeThreshold) {
            prevSlide();
        }
    }
}

/* ==========================================
   AOS (Animate On Scroll)
   ========================================== */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: function() {
                return window.innerWidth < 768;
            }
        });
    }
}

/* ==========================================
   BACK TO TOP
   ========================================== */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ==========================================
   UTILITIES
   ========================================== */

// Update copyright year
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

/* ==========================================
   GOOGLE SHEETS MENU INTEGRATION
   ========================================== */

/**
 * Como configurar a integração com Google Sheets via Make:
 *
 * 1. Criar uma Google Sheet com o menu:
 *    - Colunas: Categoria, Nome, Descrição, Preço, ImagemURL
 *    - Exemplo de linhas:
 *      | peixes | Bacalhau à Brás | Tradicional bacalhau... | 16.50€ | url_da_imagem |
 *
 * 2. No Make (formerly Integromat):
 *    a) Criar novo scenario
 *    b) Adicionar módulo "Webhooks" > "Custom webhook"
 *    c) Copiar o URL do webhook
 *    d) Adicionar módulo "Google Sheets" > "Search Rows"
 *    e) Conectar à sua sheet
 *    f) Adicionar módulo "Webhooks" > "Webhook response"
 *    g) Configurar para retornar JSON com os dados do menu
 *
 * 3. Atualizar o CONFIG.webhooks.menuGoogleSheets com o URL do webhook
 *
 * O formato esperado do JSON de resposta:
 * {
 *   "peixes": [
 *     { "name": "...", "description": "...", "price": "...", "image": "..." }
 *   ],
 *   "carnes": [...],
 *   "sobremesas": [...]
 * }
 */

/* ==========================================
   RESERVATIONS WEBHOOK INTEGRATION
   ========================================== */

/**
 * Como configurar o sistema de reservas via Make:
 *
 * 1. Criar uma Google Sheet para reservas:
 *    - Colunas: Nome, Email, Telefone, Data, Hora, Pessoas, Observações, Timestamp, Status
 *
 * 2. No Make:
 *    a) Criar novo scenario
 *    b) Adicionar módulo "Webhooks" > "Custom webhook"
 *    c) Copiar o URL do webhook
 *    d) Adicionar módulo "Google Sheets" > "Add a Row"
 *    e) Mapear os campos recebidos do webhook para a sheet
 *    f) (Opcional) Adicionar módulo de email para notificação
 *    g) Adicionar módulo "Webhooks" > "Webhook response" com status de sucesso
 *
 * 3. Atualizar o CONFIG.webhooks.reservas com o URL do webhook
 *
 * O formato enviado pelo formulário:
 * {
 *   "name": "Nome do cliente",
 *   "email": "email@exemplo.pt",
 *   "phone": "912345678",
 *   "date": "2024-01-15",
 *   "time": "20:00",
 *   "guests": "4",
 *   "message": "Observações...",
 *   "timestamp": "2024-01-10T15:30:00.000Z"
 * }
 */

/* ==========================================
   LANGUAGE SELECTOR & TRANSLATION SYSTEM
   ========================================== */

// Current language (default: Portuguese)
let currentLanguage = 'pt';

// Flag URLs mapping
const FLAG_URLS = {
    pt: 'https://flagcdn.com/w20/pt.png',
    en: 'https://flagcdn.com/w20/gb.png',
    fr: 'https://flagcdn.com/w20/fr.png',
    de: 'https://flagcdn.com/w20/de.png'
};

// Language names
const LANG_NAMES = {
    pt: 'PT',
    en: 'EN',
    fr: 'FR',
    de: 'DE'
};

function initLanguageSelector() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    if (!languageBtn || !languageDropdown) return;

    // Load saved language preference
    const savedLang = localStorage.getItem('osemnome-language');
    if (savedLang && TRANSLATIONS[savedLang]) {
        currentLanguage = savedLang;
        applyTranslations(currentLanguage);
        updateLanguageButton(currentLanguage);
        updateActiveOption(currentLanguage);
    }

    // Toggle dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isExpanded = languageBtn.getAttribute('aria-expanded') === 'true';
        languageBtn.setAttribute('aria-expanded', !isExpanded);
        languageDropdown.classList.toggle('active');
    });

    // Language option click
    languageOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const lang = option.getAttribute('data-lang');
            if (lang && TRANSLATIONS[lang]) {
                changeLanguage(lang);
                languageDropdown.classList.remove('active');
                languageBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            languageDropdown.classList.remove('active');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            languageDropdown.classList.remove('active');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

function changeLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

    currentLanguage = lang;
    localStorage.setItem('osemnome-language', lang);

    applyTranslations(lang);
    updateLanguageButton(lang);
    updateActiveOption(lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : lang;

    // Announce language change for screen readers
    announceLanguageChange(lang);
}

function applyTranslations(lang) {
    const translations = TRANSLATIONS[lang];
    if (!translations) return;

    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations, key);

        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations.meta && translations.meta.description) {
        metaDesc.setAttribute('content', translations.meta.description);
    }
}

function getNestedTranslation(obj, path) {
    const keys = path.split('.');
    let result = obj;

    for (let key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return null;
        }
    }

    return typeof result === 'string' ? result : null;
}

function updateLanguageButton(lang) {
    const currentFlag = document.getElementById('current-flag');
    const currentLang = document.getElementById('current-lang');

    if (currentFlag) {
        currentFlag.src = FLAG_URLS[lang];
        currentFlag.alt = LANG_NAMES[lang];
    }

    if (currentLang) {
        currentLang.textContent = LANG_NAMES[lang];
    }
}

function updateActiveOption(lang) {
    const options = document.querySelectorAll('.language-option');

    options.forEach(function(option) {
        const optionLang = option.getAttribute('data-lang');
        option.classList.toggle('active', optionLang === lang);
    });
}

function announceLanguageChange(lang) {
    // Create an aria-live region for screen readers
    let announcer = document.getElementById('language-announcer');

    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'language-announcer';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;';
        document.body.appendChild(announcer);
    }

    const langNames = {
        pt: 'Português',
        en: 'English',
        fr: 'Français',
        de: 'Deutsch'
    };

    announcer.textContent = langNames[lang] || lang;
}

// Get current translation for a key (useful for dynamic content)
function t(key) {
    const translations = TRANSLATIONS[currentLanguage];
    return getNestedTranslation(translations, key) || key;
}

// Make translation function globally available
window.t = t;
window.changeLanguage = changeLanguage;
window.currentLanguage = function() { return currentLanguage; };
