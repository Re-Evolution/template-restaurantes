/**
 * Configuração do Restaurante "O Sem Nome"
 * =========================================
 * Este ficheiro contém todos os dados do restaurante.
 * Edita as variáveis abaixo para personalizar o site.
 */

const CONFIG = {
    // ==========================================
    // INFORMAÇÕES BÁSICAS DO RESTAURANTE
    // ==========================================
    restaurante: {
        nome: "O Sem Nome",
        slogan: "Sabores autênticos da cozinha portuguesa",
        descricao: "Restaurante de comida tradicional portuguesa em Algés, com peixe fresco todos os dias e as melhores carnes regionais.",
        palavrasChave: "restaurante português, comida tradicional, peixe fresco, posta mirandesa, Algés, Lisboa"
    },

    // ==========================================
    // CONTACTOS
    // ==========================================
    contactos: {
        telefone: "+351 213 011 958",
        telefoneDisplay: "213 011 958",
        telemovel: "+351 964 121 279",
        telemovelDisplay: "964 121 279",
        whatsappLink: "https://wa.me/351964121279",
        whatsappMensagem: "?text=Olá! Gostaria de saber mais informações sobre o restaurante O Sem Nome.",
        email: "geral@osemnome.pt" // Atualizar com email real
    },

    // ==========================================
    // MORADA E LOCALIZAÇÃO
    // ==========================================
    localizacao: {
        morada: "Rua Damião de Góis",
        codigoPostal: "1400-087",
        localidade: "Algés",
        concelho: "Oeiras",
        distrito: "Lisboa",
        pais: "Portugal",
        moradaCompleta: "Rua Damião de Góis, 1400-087 Algés, Portugal",
        googleMapsLink: "https://maps.app.goo.gl/B93SZPkyh4K3XNy58",
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-9.23!3d38.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQyJzAwLjAiTiA5wrAxMycwMC4wIlc!5e0!3m2!1spt-PT!2spt!4v1234567890",
        coordenadas: {
            latitude: 38.7,
            longitude: -9.23
        }
    },

    // ==========================================
    // SERVIÇOS
    // ==========================================
    servicos: [
        {
            icon: "🍽️",
            titulo: "Almoços",
            descricao: "De segunda a domingo, das 12h às 15h"
        },
        {
            icon: "🌙",
            titulo: "Jantares",
            descricao: "De segunda a sábado, das 19h às 23h"
        },
        {
            icon: "☀️",
            titulo: "Esplanada",
            descricao: "Desfrute das refeições ao ar livre"
        },
        {
            icon: "📦",
            titulo: "Take-Away",
            descricao: "Leve os nossos pratos para casa"
        }
    ],

    // ==========================================
    // HORÁRIO DE FUNCIONAMENTO
    // ==========================================
    horario: {
        segunda: "12:00 - 15:00 | 19:00 - 23:00",
        terca: "12:00 - 15:00 | 19:00 - 23:00",
        quarta: "12:00 - 15:00 | 19:00 - 23:00",
        quinta: "12:00 - 15:00 | 19:00 - 23:00",
        sexta: "12:00 - 15:00 | 19:00 - 23:00",
        sabado: "12:00 - 15:00 | 19:00 - 23:00",
        domingo: "12:00 - 15:00 | Encerrado"
    },

    // ==========================================
    // HISTÓRIA DO RESTAURANTE (ABOUT)
    // ==========================================
    historia: {
        titulo: "Uma História de Sabor e Tradição",
        paragrafo1: "Nascido em 1987, no coração de Algés, 'O Sem Nome' começou como um pequeno estabelecimento familiar onde a avó Maria preparava os seus famosos pratos de bacalhau para os vizinhos do bairro. O nome peculiar surgiu porque, durante anos, os clientes simplesmente chamavam-lhe 'aquele restaurante' - e assim ficou.",
        paragrafo2: "Três décadas depois, mantemos viva a mesma filosofia: ingredientes frescos, receitas transmitidas de geração em geração, e aquele toque caseiro que só a verdadeira cozinha portuguesa consegue oferecer. O peixe chega todas as manhãs diretamente da lota, e a nossa famosa Posta Mirandesa continua a ser preparada segundo a receita original.",
        paragrafo3: "Hoje, sob a gestão da terceira geração da família, continuamos a honrar a tradição enquanto acolhemos cada cliente como parte da nossa família.",
        destaques: [
            "Peixe fresco todos os dias",
            "Posta Mirandesa certificada",
            "Maminha de primeira qualidade",
            "Receitas tradicionais desde 1987"
        ]
    },

    // ==========================================
    // ESPECIALIDADES
    // ==========================================
    especialidades: {
        peixes: [
            "Bacalhau à Brás",
            "Bacalhau à Lagareiro",
            "Robalo Grelhado",
            "Dourada ao Sal",
            "Polvo à Lagareiro"
        ],
        carnes: [
            "Posta Mirandesa",
            "Maminha Grelhada",
            "Secretos de Porco Preto",
            "Bife à Portuguesa"
        ],
        sobremesas: [
            "Pudim Abade de Priscos",
            "Leite-creme queimado",
            "Mousse de Chocolate",
            "Tarte de Amêndoa"
        ]
    },

    // ==========================================
    // TESTEMUNHOS
    // ==========================================
    testemunhos: [
        {
            nome: "Maria Santos",
            texto: "O melhor bacalhau que já comi em Lisboa! O ambiente é acolhedor e o serviço impecável. Voltarei com certeza!",
            estrelas: 5,
            data: "Janeiro 2024"
        },
        {
            nome: "João Ferreira",
            texto: "A Posta Mirandesa derrete na boca. Preços justos para a qualidade que oferecem. Recomendo vivamente!",
            estrelas: 5,
            data: "Dezembro 2023"
        },
        {
            nome: "Ana Rodrigues",
            texto: "Fomos jantar em família e foi uma experiência maravilhosa. O peixe estava fresquíssimo e as sobremesas divinas.",
            estrelas: 5,
            data: "Novembro 2023"
        },
        {
            nome: "Pedro Costa",
            texto: "Ambiente familiar, comida caseira de qualidade. A esplanada é perfeita para os dias de sol. Top!",
            estrelas: 4,
            data: "Outubro 2023"
        },
        {
            nome: "Sofia Martins",
            texto: "Descobri este restaurante por acaso e que sorte! O polvo à lagareiro estava espetacular. Já é o meu favorito em Algés.",
            estrelas: 5,
            data: "Setembro 2023"
        }
    ],

    // ==========================================
    // REDES SOCIAIS
    // ==========================================
    redesSociais: {
        facebook: "https://facebook.com/osemnome", // Atualizar com link real
        instagram: "https://instagram.com/osemnome", // Atualizar com link real
        tripadvisor: "https://tripadvisor.com/osemnome", // Atualizar com link real
        google: "https://g.page/osemnome" // Atualizar com link real
    },

    // ==========================================
    // WEBHOOKS DO MAKE (INTEGRAÇÃO)
    // ==========================================
    webhooks: {
        // URL do webhook para receber dados do menu do Google Sheets
        // Configurar no Make: Google Sheets → Webhook Response
        menuGoogleSheets: "SUBSTITUIR_PELO_URL_DO_WEBHOOK_MENU",

        // URL do webhook para enviar reservas
        // Configurar no Make: Webhook → Google Sheets
        reservas: "SUBSTITUIR_PELO_URL_DO_WEBHOOK_RESERVAS"
    },

    // ==========================================
    // CONFIGURAÇÕES DO MENU
    // ==========================================
    menuConfig: {
        // ID da Google Sheet com o menu (para referência)
        googleSheetId: "SUBSTITUIR_PELO_ID_DA_SHEET",

        // Categorias do menu
        categorias: ["Entradas", "Peixes", "Carnes", "Sobremesas", "Bebidas"],

        // Intervalo de atualização em milissegundos (5 minutos)
        intervaloAtualizacao: 300000
    },

    // ==========================================
    // SEO E METADATA
    // ==========================================
    seo: {
        tituloSite: "O Sem Nome | Restaurante de Comida Tradicional Portuguesa em Algés",
        descricaoMeta: "Descubra o autêntico sabor da cozinha portuguesa no restaurante O Sem Nome em Algés. Peixe fresco diário, Posta Mirandesa, Maminha e muito mais. Reserve já!",
        ogImage: "assets/images/restaurante/og-image.jpg",
        twitterHandle: "@osemnome",
        lingua: "pt-PT",
        regiao: "PT-11" // Lisboa
    },

    // ==========================================
    // CONFIGURAÇÕES DE RESERVA
    // ==========================================
    reservaConfig: {
        // Número mínimo de pessoas
        minPessoas: 1,
        // Número máximo de pessoas (grupos maiores contactar por telefone)
        maxPessoas: 12,
        // Horários disponíveis para almoço
        horariosAlmoco: ["12:00", "12:30", "13:00", "13:30", "14:00"],
        // Horários disponíveis para jantar
        horariosJantar: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
        // Dias de antecedência máxima para reserva
        diasAntecedencia: 30,
        // Mensagem após reserva
        mensagemSucesso: "Reserva recebida com sucesso! Entraremos em contacto para confirmar."
    }
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
