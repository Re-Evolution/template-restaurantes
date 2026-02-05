/**
 * O Sem Nome - Sistema de Traducoes (i18n)
 * ==========================================
 * Traducoes para: Portugues (PT), English (EN), Francais (FR), Deutsch (DE)
 */

const TRANSLATIONS = {
    // ==========================================
    // PORTUGUES (PT) - Idioma padrao
    // ==========================================
    pt: {
        // Navegacao
        nav: {
            home: "Inicio",
            about: "Sobre Nos",
            gallery: "Galeria",
            menu: "Menu",
            reservations: "Reservas",
            testimonials: "Testemunhos",
            location: "Localizacao"
        },

        // Hero Section
        hero: {
            restaurant: "Restaurante",
            subtitle: "Sabores autenticos da cozinha portuguesa",
            description: "Peixe fresco todos os dias • Posta Mirandesa • Maminha",
            sendMessage: "Enviar Mensagem",
            callNow: "Ligar Agora",
            discover: "Descobrir"
        },

        // About Section
        about: {
            subtitle: "Conheca-nos",
            title: "Uma Historia de Sabor e Tradicao",
            paragraph1: "Nascido em 1987, no coracao de Alges, 'O Sem Nome' comecou como um pequeno estabelecimento familiar onde a avo Maria preparava os seus famosos pratos de bacalhau para os vizinhos do bairro.",
            paragraph2: "Tres decadas depois, mantemos viva a mesma filosofia: ingredientes frescos, receitas transmitidas de geracao em geracao.",
            paragraph3: "Hoje, sob a gestao da terceira geracao da familia, continuamos a honrar a tradicao enquanto acolhemos cada cliente como parte da nossa familia.",
            highlights: {
                fish: "Peixe fresco todos os dias",
                steak: "Posta Mirandesa certificada",
                maminha: "Maminha de primeira qualidade",
                tradition: "Receitas tradicionais desde 1987"
            },
            services: {
                lunch: "Almocos",
                lunchDesc: "De segunda a domingo, das 12h as 15h",
                dinner: "Jantares",
                dinnerDesc: "De segunda a sabado, das 19h as 23h",
                terrace: "Esplanada",
                terraceDesc: "Desfrute das refeicoes ao ar livre",
                takeaway: "Take-Away",
                takeawayDesc: "Leve os nossos pratos para casa"
            }
        },

        // Gallery Section
        gallery: {
            subtitle: "Galeria",
            title: "Momentos & Sabores",
            description: "Descubra o nosso espaco e os nossos pratos atraves das imagens",
            filters: {
                all: "Todos",
                restaurant: "Restaurante",
                dishes: "Pratos"
            }
        },

        // Menu Section
        menu: {
            subtitle: "Ementa",
            title: "O Nosso Menu",
            description: "Pratos preparados com amor e os melhores ingredientes",
            updated: "Menu atualizado diariamente",
            categories: {
                fish: "Peixes",
                meat: "Carnes",
                desserts: "Sobremesas"
            },
            cta: "Para alergenios ou pedidos especiais, por favor contacte-nos",
            callRestaurant: "Ligar para o Restaurante"
        },

        // Reservations Section
        reservations: {
            subtitle: "Reserve a sua mesa",
            title: "Faca a Sua Reserva",
            description: "Reserve a sua mesa e garanta uma experiencia gastronomica memoravel. Para grupos com mais de 12 pessoas, por favor contacte-nos diretamente.",
            form: {
                name: "Nome Completo",
                email: "Email",
                phone: "Telefone",
                date: "Data",
                time: "Horario",
                selectTime: "Selecione o horario",
                lunch: "Almoco",
                dinner: "Jantar",
                guests: "Numero de Pessoas",
                selectGuests: "Selecione",
                person: "pessoa",
                people: "pessoas",
                message: "Observacoes",
                messagePlaceholder: "Alguma informacao adicional? (alergias, ocasiao especial, etc.)",
                submit: "Confirmar Reserva",
                submitting: "A enviar..."
            },
            success: {
                title: "Reserva Recebida!",
                message: "Entraremos em contacto brevemente para confirmar a sua reserva.",
                newReservation: "Fazer Nova Reserva"
            },
            error: {
                title: "Ocorreu um erro",
                message: "Por favor, tente novamente ou contacte-nos diretamente.",
                tryAgain: "Tentar Novamente"
            },
            hours: {
                title: "Horario de Funcionamento",
                weekdays: "Segunda a Sabado",
                sunday: "Domingo"
            }
        },

        // Testimonials Section
        testimonials: {
            subtitle: "Testemunhos",
            title: "O Que Dizem os Nossos Clientes",
            cta: "Ja visitou o nosso restaurante?",
            leaveReview: "Deixe a sua avaliacao"
        },

        // Location Section
        location: {
            subtitle: "Onde Estamos",
            title: "Visite-nos",
            address: "Morada",
            hours: "Horario",
            getDirections: "Obter Direcoes"
        },

        // Footer
        footer: {
            navigation: "Navegacao",
            legal: "Legal",
            privacy: "Politica de Privacidade",
            terms: "Termos de Servico",
            rights: "Todos os direitos reservados.",
            contacts: "Contactos",
            hours: "Horario",
            bookTable: "Reservar Mesa",
            description: "Sabores autenticos da cozinha portuguesa desde 1987. Venha descobrir o verdadeiro sabor da tradicao."
        },

        // Common
        common: {
            phone: "Telefone",
            whatsapp: "WhatsApp",
            email: "Email",
            call: "Ligar",
            years: "Anos de tradicao"
        }
    },

    // ==========================================
    // ENGLISH (EN)
    // ==========================================
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            gallery: "Gallery",
            menu: "Menu",
            reservations: "Reservations",
            testimonials: "Reviews",
            location: "Location"
        },

        hero: {
            restaurant: "Restaurant",
            subtitle: "Authentic flavors of Portuguese cuisine",
            description: "Fresh fish daily • Posta Mirandesa • Premium Cuts",
            sendMessage: "Send Message",
            callNow: "Call Now",
            discover: "Discover"
        },

        about: {
            subtitle: "About Us",
            title: "A Story of Flavor and Tradition",
            paragraph1: "Born in 1987, in the heart of Alges, 'O Sem Nome' started as a small family establishment where grandmother Maria prepared her famous codfish dishes for the neighborhood.",
            paragraph2: "Three decades later, we keep the same philosophy alive: fresh ingredients, recipes passed down through generations.",
            paragraph3: "Today, under the management of the third generation of the family, we continue to honor tradition while welcoming each customer as part of our family.",
            highlights: {
                fish: "Fresh fish every day",
                steak: "Certified Posta Mirandesa",
                maminha: "Premium quality Maminha",
                tradition: "Traditional recipes since 1987"
            },
            services: {
                lunch: "Lunch",
                lunchDesc: "Monday to Sunday, 12pm to 3pm",
                dinner: "Dinner",
                dinnerDesc: "Monday to Saturday, 7pm to 11pm",
                terrace: "Terrace",
                terraceDesc: "Enjoy your meal outdoors",
                takeaway: "Take-Away",
                takeawayDesc: "Take our dishes home"
            }
        },

        gallery: {
            subtitle: "Gallery",
            title: "Moments & Flavors",
            description: "Discover our space and our dishes through images",
            filters: {
                all: "All",
                restaurant: "Restaurant",
                dishes: "Dishes"
            }
        },

        menu: {
            subtitle: "Menu",
            title: "Our Menu",
            description: "Dishes prepared with love and the finest ingredients",
            updated: "Menu updated daily",
            categories: {
                fish: "Fish",
                meat: "Meat",
                desserts: "Desserts"
            },
            cta: "For allergens or special requests, please contact us",
            callRestaurant: "Call the Restaurant"
        },

        reservations: {
            subtitle: "Book your table",
            title: "Make a Reservation",
            description: "Book your table and ensure a memorable gastronomic experience. For groups larger than 12 people, please contact us directly.",
            form: {
                name: "Full Name",
                email: "Email",
                phone: "Phone",
                date: "Date",
                time: "Time",
                selectTime: "Select time",
                lunch: "Lunch",
                dinner: "Dinner",
                guests: "Number of Guests",
                selectGuests: "Select",
                person: "person",
                people: "people",
                message: "Notes",
                messagePlaceholder: "Any additional information? (allergies, special occasion, etc.)",
                submit: "Confirm Reservation",
                submitting: "Sending..."
            },
            success: {
                title: "Reservation Received!",
                message: "We will contact you shortly to confirm your reservation.",
                newReservation: "Make New Reservation"
            },
            error: {
                title: "An error occurred",
                message: "Please try again or contact us directly.",
                tryAgain: "Try Again"
            },
            hours: {
                title: "Opening Hours",
                weekdays: "Monday to Saturday",
                sunday: "Sunday"
            }
        },

        testimonials: {
            subtitle: "Reviews",
            title: "What Our Customers Say",
            cta: "Have you visited our restaurant?",
            leaveReview: "Leave a review"
        },

        location: {
            subtitle: "Where We Are",
            title: "Visit Us",
            address: "Address",
            hours: "Hours",
            getDirections: "Get Directions"
        },

        footer: {
            navigation: "Navigation",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            rights: "All rights reserved.",
            contacts: "Contacts",
            hours: "Hours",
            bookTable: "Book a Table",
            description: "Authentic flavors of Portuguese cuisine since 1987. Come discover the true taste of tradition."
        },

        common: {
            phone: "Phone",
            whatsapp: "WhatsApp",
            email: "Email",
            call: "Call",
            years: "Years of tradition"
        }
    },

    // ==========================================
    // FRANCAIS (FR)
    // ==========================================
    fr: {
        nav: {
            home: "Accueil",
            about: "A Propos",
            gallery: "Galerie",
            menu: "Menu",
            reservations: "Reservations",
            testimonials: "Avis",
            location: "Localisation"
        },

        hero: {
            restaurant: "Restaurant",
            subtitle: "Saveurs authentiques de la cuisine portugaise",
            description: "Poisson frais tous les jours • Posta Mirandesa • Viandes Premium",
            sendMessage: "Envoyer Message",
            callNow: "Appeler",
            discover: "Decouvrir"
        },

        about: {
            subtitle: "A Propos de Nous",
            title: "Une Histoire de Saveur et de Tradition",
            paragraph1: "Ne en 1987, au coeur d'Alges, 'O Sem Nome' a commence comme un petit etablissement familial ou grand-mere Maria preparait ses celebres plats de morue pour les voisins du quartier.",
            paragraph2: "Trois decennies plus tard, nous maintenons la meme philosophie: ingredients frais, recettes transmises de generation en generation.",
            paragraph3: "Aujourd'hui, sous la direction de la troisieme generation de la famille, nous continuons a honorer la tradition tout en accueillant chaque client comme membre de notre famille.",
            highlights: {
                fish: "Poisson frais tous les jours",
                steak: "Posta Mirandesa certifiee",
                maminha: "Maminha de premiere qualite",
                tradition: "Recettes traditionnelles depuis 1987"
            },
            services: {
                lunch: "Dejeuners",
                lunchDesc: "Du lundi au dimanche, de 12h a 15h",
                dinner: "Diners",
                dinnerDesc: "Du lundi au samedi, de 19h a 23h",
                terrace: "Terrasse",
                terraceDesc: "Profitez de vos repas en plein air",
                takeaway: "A Emporter",
                takeawayDesc: "Emportez nos plats chez vous"
            }
        },

        gallery: {
            subtitle: "Galerie",
            title: "Moments & Saveurs",
            description: "Decouvrez notre espace et nos plats a travers les images",
            filters: {
                all: "Tous",
                restaurant: "Restaurant",
                dishes: "Plats"
            }
        },

        menu: {
            subtitle: "Carte",
            title: "Notre Menu",
            description: "Plats prepares avec amour et les meilleurs ingredients",
            updated: "Menu mis a jour quotidiennement",
            categories: {
                fish: "Poissons",
                meat: "Viandes",
                desserts: "Desserts"
            },
            cta: "Pour les allergenes ou demandes speciales, veuillez nous contacter",
            callRestaurant: "Appeler le Restaurant"
        },

        reservations: {
            subtitle: "Reservez votre table",
            title: "Faire une Reservation",
            description: "Reservez votre table et assurez-vous une experience gastronomique memorable. Pour les groupes de plus de 12 personnes, veuillez nous contacter directement.",
            form: {
                name: "Nom Complet",
                email: "Email",
                phone: "Telephone",
                date: "Date",
                time: "Heure",
                selectTime: "Selectionnez l'heure",
                lunch: "Dejeuner",
                dinner: "Diner",
                guests: "Nombre de Personnes",
                selectGuests: "Selectionnez",
                person: "personne",
                people: "personnes",
                message: "Observations",
                messagePlaceholder: "Informations supplementaires? (allergies, occasion speciale, etc.)",
                submit: "Confirmer la Reservation",
                submitting: "Envoi en cours..."
            },
            success: {
                title: "Reservation Recue!",
                message: "Nous vous contacterons sous peu pour confirmer votre reservation.",
                newReservation: "Nouvelle Reservation"
            },
            error: {
                title: "Une erreur s'est produite",
                message: "Veuillez reessayer ou nous contacter directement.",
                tryAgain: "Reessayer"
            },
            hours: {
                title: "Heures d'Ouverture",
                weekdays: "Lundi a Samedi",
                sunday: "Dimanche"
            }
        },

        testimonials: {
            subtitle: "Avis",
            title: "Ce Que Disent Nos Clients",
            cta: "Avez-vous visite notre restaurant?",
            leaveReview: "Laissez un avis"
        },

        location: {
            subtitle: "Ou Nous Trouver",
            title: "Visitez-nous",
            address: "Adresse",
            hours: "Horaires",
            getDirections: "Obtenir l'itineraire"
        },

        footer: {
            navigation: "Navigation",
            legal: "Mentions Legales",
            privacy: "Politique de Confidentialite",
            terms: "Conditions d'Utilisation",
            rights: "Tous droits reserves.",
            contacts: "Contacts",
            hours: "Horaires",
            bookTable: "Reserver une Table",
            description: "Saveurs authentiques de la cuisine portugaise depuis 1987. Venez decouvrir le vrai gout de la tradition."
        },

        common: {
            phone: "Telephone",
            whatsapp: "WhatsApp",
            email: "Email",
            call: "Appeler",
            years: "Annees de tradition"
        }
    },

    // ==========================================
    // DEUTSCH (DE)
    // ==========================================
    de: {
        nav: {
            home: "Startseite",
            about: "Uber Uns",
            gallery: "Galerie",
            menu: "Speisekarte",
            reservations: "Reservierungen",
            testimonials: "Bewertungen",
            location: "Standort"
        },

        hero: {
            restaurant: "Restaurant",
            subtitle: "Authentische Aromen der portugiesischen Kuche",
            description: "Taglich frischer Fisch • Posta Mirandesa • Premium-Fleisch",
            sendMessage: "Nachricht Senden",
            callNow: "Jetzt Anrufen",
            discover: "Entdecken"
        },

        about: {
            subtitle: "Uber Uns",
            title: "Eine Geschichte von Geschmack und Tradition",
            paragraph1: "1987 im Herzen von Alges geboren, begann 'O Sem Nome' als kleines Familienbetrieb, in dem Grossmutter Maria ihre beruhmten Kabeljaugerichte fur die Nachbarschaft zubereitete.",
            paragraph2: "Drei Jahrzehnte spater halten wir die gleiche Philosophie am Leben: frische Zutaten, Rezepte, die von Generation zu Generation weitergegeben werden.",
            paragraph3: "Heute, unter der Leitung der dritten Generation der Familie, ehren wir weiterhin die Tradition und heissen jeden Gast als Teil unserer Familie willkommen.",
            highlights: {
                fish: "Taglich frischer Fisch",
                steak: "Zertifizierte Posta Mirandesa",
                maminha: "Erstklassige Maminha",
                tradition: "Traditionelle Rezepte seit 1987"
            },
            services: {
                lunch: "Mittagessen",
                lunchDesc: "Montag bis Sonntag, 12-15 Uhr",
                dinner: "Abendessen",
                dinnerDesc: "Montag bis Samstag, 19-23 Uhr",
                terrace: "Terrasse",
                terraceDesc: "Geniessen Sie Ihre Mahlzeit im Freien",
                takeaway: "Zum Mitnehmen",
                takeawayDesc: "Nehmen Sie unsere Gerichte mit nach Hause"
            }
        },

        gallery: {
            subtitle: "Galerie",
            title: "Momente & Aromen",
            description: "Entdecken Sie unseren Raum und unsere Gerichte durch Bilder",
            filters: {
                all: "Alle",
                restaurant: "Restaurant",
                dishes: "Gerichte"
            }
        },

        menu: {
            subtitle: "Speisekarte",
            title: "Unsere Speisekarte",
            description: "Gerichte zubereitet mit Liebe und den besten Zutaten",
            updated: "Speisekarte taglich aktualisiert",
            categories: {
                fish: "Fisch",
                meat: "Fleisch",
                desserts: "Desserts"
            },
            cta: "Fur Allergene oder besondere Wunsche kontaktieren Sie uns bitte",
            callRestaurant: "Restaurant Anrufen"
        },

        reservations: {
            subtitle: "Reservieren Sie Ihren Tisch",
            title: "Reservierung Vornehmen",
            description: "Reservieren Sie Ihren Tisch und sichern Sie sich ein unvergessliches kulinarisches Erlebnis. Fur Gruppen grosser als 12 Personen kontaktieren Sie uns bitte direkt.",
            form: {
                name: "Vollstandiger Name",
                email: "E-Mail",
                phone: "Telefon",
                date: "Datum",
                time: "Uhrzeit",
                selectTime: "Uhrzeit wahlen",
                lunch: "Mittagessen",
                dinner: "Abendessen",
                guests: "Anzahl der Gaste",
                selectGuests: "Auswahlen",
                person: "Person",
                people: "Personen",
                message: "Anmerkungen",
                messagePlaceholder: "Zusatzliche Informationen? (Allergien, besonderer Anlass, etc.)",
                submit: "Reservierung Bestatigen",
                submitting: "Wird gesendet..."
            },
            success: {
                title: "Reservierung Erhalten!",
                message: "Wir werden Sie in Kurze kontaktieren, um Ihre Reservierung zu bestatigen.",
                newReservation: "Neue Reservierung"
            },
            error: {
                title: "Ein Fehler ist aufgetreten",
                message: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
                tryAgain: "Erneut Versuchen"
            },
            hours: {
                title: "Offnungszeiten",
                weekdays: "Montag bis Samstag",
                sunday: "Sonntag"
            }
        },

        testimonials: {
            subtitle: "Bewertungen",
            title: "Was Unsere Kunden Sagen",
            cta: "Haben Sie unser Restaurant besucht?",
            leaveReview: "Bewertung Abgeben"
        },

        location: {
            subtitle: "Wo Wir Sind",
            title: "Besuchen Sie Uns",
            address: "Adresse",
            hours: "Offnungszeiten",
            getDirections: "Wegbeschreibung"
        },

        footer: {
            navigation: "Navigation",
            legal: "Rechtliches",
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen",
            rights: "Alle Rechte vorbehalten.",
            contacts: "Kontakt",
            hours: "Offnungszeiten",
            bookTable: "Tisch Reservieren",
            description: "Authentische Aromen der portugiesischen Kuche seit 1987. Entdecken Sie den wahren Geschmack der Tradition."
        },

        common: {
            phone: "Telefon",
            whatsapp: "WhatsApp",
            email: "E-Mail",
            call: "Anrufen",
            years: "Jahre Tradition"
        }
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRANSLATIONS;
}
