// Inicializa os ícones Lucide
lucide.createIcons();

// --- MULTILINGUAL SUPPORT ---
const translations = {
    pt: {
        header_title: "PLINIO MABESI | DEV PORTFOLIO",
        nav_contact: "CONTATO",
        menu_home: "INÍCIO",
        menu_skills: "SKILLS",
        menu_experience: "EXPERIÊNCIA",
        menu_education: "FORMAÇÃO",
        menu_projects: "PROJETOS",
        menu_events: "EVENTOS",
        menu_contact: "CONTATO",
        status_active: "[STATUS: DISPONÍVEL]",
        role_title: "Blockchain & Web3 Full-Stack Developer",
        about_title: "Sobre mim",
        about_text_1: "Desenvolvedor Full-Stack especializado em Blockchain e Web3, criando soluções que combinam smart contracts, DApps, automações on-chain e integrações Web2 + Web3. Experiência prática em projetos pessoais e protótipos avançados envolvendo contratos Solidity, aplicações React/Next, integração com carteiras e arquitetura descentralizada.",
        about_text_2: "Construo smart contracts, dApps, APIs e interfaces de usuário usando Solidity, Hardhat, Node.js, React e fluxos de trabalho assistidos por IA.",
        btn_view_projects: "VER PROJETOS",
        skills_title: "Competências Técnicas",
        skill_blockchain: "Blockchain & Smart Contracts",
        skill_web3: "Desenvolvimento Web3",
        skill_fullstack: "Full-Stack JavaScript",
        exp_title: "Experiência Profissional",
        exp_1_role: "Blockchain / Web3 Full-Stack Developer",
        exp_1_company: "Self-Employed",
        exp_1_desc: "Desenvolvimento independente de projetos blockchain pessoais e didáticos. Foco em contratos inteligentes Solidity, testes com Hardhat e desenvolvimento full-stack de dApps usando React e Next.js.",
        exp_2_role: "Especialista em Comunicações de Dados",
        exp_2_company: "Força Aérea Brasileira - FAB",
        exp_2_desc: "Operador de rádio e sistemas de comunicação de voz e dados aeroembarcados. Transmissão de dados e sistemas de telecomunicações.",
        exp_3_role: "Administrador de Rede",
        exp_3_company: "Força Aérea Brasileira - FAB",
        exp_3_desc: "Administração de rede, servidores Linux Debian virtualizados e suporte a estações de trabalho. Manutenção de sistemas PHP/MySQL.",
        education_title: "Formação Acadêmica & Certificações",
        edu_1_course: "Especialização em Desenvolvimento Web",
        edu_1_desc: "Foco em tecnologias web modernas, arquitetura de software e melhores práticas de engenharia.",
        edu_2_course: "Tecnólogo em Gestão de TI",
        edu_2_desc: "Gestão de sistemas de informação, processos de negócios e infraestrutura de TI.",
        edu_3_course: "Bacharelado em Sistemas de Informação",
        edu_3_desc: "Fundamentos de ciência da computação, desenvolvimento de sistemas e administração.",
        cert_title: "Certificações / Cursos de Extensão",
        projects_title: "Projetos em Destaque",
        proj_cerberus_desc: "Plataforma SaaS educacional para automação de operações em DEX. Web2 + Web3, autenticação segura e monitoramento de mercado.",
        proj_mysplit_desc: "App de divisão de despesas compartilhadas. Lógica de tempo real com Firebase, autenticação e estrutura completa.",
        proj_rcomp_desc: "Biblioteca abrangente de componentes React de alta qualidade, personalizáveis e acessíveis, desenvolvida para acelerar o desenvolvimento de aplicações web modernas.",
        proj_geana_desc: "Sistema de Análise de Sinais Eletrônicos. Interfaces para filtragem, análise e relatório de dados de radar.",
        proj_rdsim_desc: "Simulador de Painel de Controle de Rádio e Data Link. Componentes interativos para treinamento operacional.",
        proj_view_all: "VER TODOS OS PROJETOS",
        proj_view_all_desc: "Acesse o portfólio completo em apps.mabesi.dev",
        events_title: "Participação em Eventos",
        event_1_desc: "Terceira edição do maior evento de blockchain e finanças digitais da América Latina. Reuniu milhares de participantes, empresas e palestrantes para discutir Web3, tokenização, DeFi, NFTs, regulamentação e inovação em ativos digitais.",
        event_2_desc: "Edição ampliada do maior encontro Web3 da América Latina, reunindo empresas, investidores, desenvolvedores e reguladores. Aborda tokenização, IA aplicada a blockchain, finanças digitais, segurança, infraestrutura Web3 e tendências globais.",
        event_3_desc: "Principal conferência de Ethereum da América Latina. Inclui hackathon, workshops, palestras e atividades focadas em desenvolvedores e builders do ecossistema EVM. Reúne profissionais, empresas e comunidade global do Ethereum.",
        contact_title: "Entre em Contato",
        contact_subtitle: "Preencha o formulário abaixo para iniciar uma conversa.",
        form_name: "Nome",
        form_email: "Email",
        form_message: "Mensagem",
        form_submit: "ENVIAR MENSAGEM",
        form_success: "[SUCCESS] Mensagem enviada com sucesso.",
        form_processing: "PROCESSANDO..."
    },
    en: {
        header_title: "PLINIO MABESI | DEV PORTFOLIO",
        nav_contact: "CONTACT",
        menu_home: "HOME",
        menu_skills: "SKILLS",
        menu_experience: "EXPERIENCE",
        menu_education: "EDUCATION",
        menu_projects: "PROJECTS",
        menu_events: "EVENTS",
        menu_contact: "CONTACT",
        status_active: "[STATUS: OPEN TO WORK]",
        role_title: "Blockchain & Web3 Full-Stack Developer",
        about_title: "About Me",
        about_text_1: "Full-Stack Developer specializing in Blockchain and Web3, creating solutions that combine smart contracts, DApps, on-chain automation, and Web2 + Web3 integrations. Practical experience in personal projects and advanced prototypes involving Solidity contracts, React/Next applications, wallet integration, and decentralized architecture.",
        about_text_2: "I build smart contracts, dApps, APIs, and user interfaces using Solidity, Hardhat, Node.js, React, and AI-assisted workflows.",
        btn_view_projects: "VIEW PROJECTS",
        skills_title: "Technical Skills",
        skill_blockchain: "Blockchain & Smart Contracts",
        skill_web3: "Web3 Development",
        skill_fullstack: "Full-Stack JavaScript",
        exp_title: "Professional Experience",
        exp_1_role: "Blockchain / Web3 Full-Stack Developer",
        exp_1_company: "Self-Employed",
        exp_1_desc: "Independent development of personal and didactic blockchain projects. Focus on Solidity smart contracts, Hardhat testing, and full-stack dApp development using React and Next.js.",
        exp_2_role: "Data Communications Specialist",
        exp_2_company: "Brazilian Air Force - FAB",
        exp_2_desc: "Radio operator and airborne voice and data communication systems. Data transmission and telecommunications systems.",
        exp_3_role: "Network Administrator",
        exp_3_company: "Brazilian Air Force - FAB",
        exp_3_desc: "Network administration, virtualized Debian Linux servers, and workstation support. Maintenance of PHP/MySQL systems.",
        education_title: "Academic Background & Certifications",
        edu_1_course: "Specialization in Web Development",
        edu_1_desc: "Focus on modern web technologies, software architecture, and engineering best practices.",
        edu_2_course: "Technologist in IT Management",
        edu_2_desc: "Management of information systems, business processes, and IT infrastructure.",
        edu_3_course: "Bachelor in Information Systems",
        edu_3_desc: "Fundamentals of computer science, systems development, and administration.",
        cert_title: "Certifications / Extension Courses",
        projects_title: "Featured Projects",
        proj_cerberus_desc: "Educational SaaS platform for DEX operation automation. Web2 + Web3, secure authentication, and market monitoring.",
        proj_mysplit_desc: "Shared expense splitting app. Real-time logic using Firebase, authentication, and complete structure.",
        proj_rcomp_desc: "Biblioteca completa de componentes React de alta calidad, personalizables y accesibles, diseñada para acelerar el desarrollo de aplicaciones web modernas.",
        proj_geana_desc: "Electronic Signal Analysis System. Interfaces for filtering, analyzing, and reporting radar data.",
        proj_rdsim_desc: "Radio Control Panel & Data Link Simulator. Interactive components for operational training.",
        proj_view_all: "VIEW ALL PROJECTS",
        proj_view_all_desc: "Access the complete portfolio at apps.mabesi.dev",
        events_title: "Events Participation",
        event_1_desc: "Third edition of the largest blockchain and digital finance event in Latin America. Gathered thousands of participants, companies, and speakers to discuss Web3, tokenization, DeFi, NFTs, regulation, and innovation in digital assets.",
        event_2_desc: "Expanded edition of the largest Web3 meeting in Latin America, bringing together companies, investors, developers, and regulators. Covers tokenization, AI applied to blockchain, digital finance, security, Web3 infrastructure, and global trends.",
        event_3_desc: "Main Ethereum conference in Latin America. Includes hackathon, workshops, talks, and activities focused on developers and builders of the EVM ecosystem. Gathers professionals, companies, and the global Ethereum community.",
        contact_title: "Get in Touch",
        contact_subtitle: "Fill out the form below to start a conversation.",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "SEND MESSAGE",
        form_success: "[SUCCESS] Message sent successfully.",
        form_processing: "PROCESSING..."
    }
};

let currentLang = 'pt';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Persist preference
    localStorage.setItem('preferredLang', lang);

    // Update language button styles
    updateLanguageButtons(lang);

    // Re-render project cards with new language
    renderFeaturedProjects();
}

// Update language buttons visual state
function updateLanguageButtons(lang) {
    const ptBtn = document.getElementById('lang-pt');
    const enBtn = document.getElementById('lang-en');

    if (ptBtn && enBtn) {
        const ptFlag = ptBtn.querySelector('.lang-flag');
        const enFlag = enBtn.querySelector('.lang-flag');

        if (lang === 'pt') {
            // PT active
            ptBtn.classList.remove('text-text-muted');
            ptBtn.classList.add('text-white');
            ptFlag?.classList.remove('grayscale');

            // EN inactive
            enBtn.classList.remove('text-white');
            enBtn.classList.add('text-text-muted');
            enFlag?.classList.add('grayscale');
        } else {
            // EN active
            enBtn.classList.remove('text-text-muted');
            enBtn.classList.add('text-white');
            enFlag?.classList.remove('grayscale');

            // PT inactive
            ptBtn.classList.remove('text-white');
            ptBtn.classList.add('text-text-muted');
            ptFlag?.classList.add('grayscale');
        }
    }
}

// Load saved language or default to PT
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    changeLanguage(savedLang);
});

// --- FORM HANDLING ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitButton = document.getElementById('submit-button');
        const formMessage = document.getElementById('form-message');
        const processingText = translations[currentLang].form_processing;
        const successText = translations[currentLang].form_success;

        submitButton.disabled = true;
        submitButton.innerHTML = `<i data-lucide="loader-2" class="w-6 h-6 animate-spin"></i> ${processingText}`;
        lucide.createIcons();

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = `<i data-lucide="send" class="w-6 h-6"></i> <span>${translations[currentLang].form_submit}</span>`;
            lucide.createIcons();

            const txID = 'MSG-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            formMessage.classList.remove('hidden');
            formMessage.textContent = `${successText} ID: ${txID}.`;
            contactForm.reset();

            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 7000);
        }, 2000);
    });
}

// --- SCROLL & NAV ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight - 30,
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('.dashboard-section');
const navLinks = document.querySelectorAll('#floating-menu a');

function updateFloatingMenu() {
    let current = 'intro-module';
    const headerHeight = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Remove text-accent-yellow from icon if not active
        const icon = link.querySelector('i');
        if (icon) icon.classList.remove('text-accent-yellow');

        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
            // Add text-accent-yellow to icon if active
            if (icon) icon.classList.add('text-accent-yellow');
        }
    });
}

window.addEventListener('scroll', updateFloatingMenu);
updateFloatingMenu();

// --- PROJECTS API INTEGRATION ---

// Category gradient mapping (subtle gradients with increased contrast)
const categoryGradients = {
    'finance': 'linear-gradient(135deg, #b45309 0%, #fbbf24 100%)',      // 💰 Amarelo/Laranja
    'utilities': 'linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)',    // 🎖️ Azul
    'productivity': 'linear-gradient(135deg, #059669 0%, #34d399 100%)', // 🚀 Verde claro
    'education': 'linear-gradient(135deg, #9333ea 0%, #c084fc 100%)',    // 📚 Roxo claro
    'tools': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',        // 🔧 Verde escuro
    'health': 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',       // 💊 Rosa escuro
    'games': 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',        // 🎮 Roxo
    'blockchain': 'linear-gradient(135deg, #501b1b 0%, #9b6767 100%)',   // 🔗 Marrom/Terra
    'library': 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)'      // 📦 Rosa
};

// Category solid colors for text highlights
const categoryColors = {
    'finance': '#fbbf24',      // 💰 Amarelo/Laranja
    'utilities': '#60a5fa',    // 🎖️ Azul
    'productivity': '#34d399', // 🚀 Verde claro
    'education': '#c084fc',    // 📚 Roxo claro
    'tools': '#22c55e',        // 🔧 Verde escuro
    'health': '#f472b6',       // 💊 Rosa escuro
    'games': '#a78bfa',        // 🎮 Roxo
    'blockchain': '#9b6767',   // 🔗 Marrom/Terra
    'library': '#ec4899'       // 📦 Rosa
};

// Build complete URL from link value and pattern
function buildLink(linkValue, patternKey, linkPatterns) {
    if (!linkValue) return null;
    // If link starts with http, use it as-is (complete URL)
    if (linkValue.startsWith('http')) {
        return linkValue;
    }
    // Otherwise, concatenate with pattern
    return linkPatterns[patternKey] + linkValue;
}

// Get icon markup for link type
function getLinkIcon(linkType) {
    const icons = {
        'github': '<i data-lucide="github" class="w-5 h-5"></i>',
        'website': '<i data-lucide="external-link" class="w-5 h-5"></i>',
        'npm': '<img src="img/npm.png" alt="npm" class="w-6 h-6 opacity-70 hover:opacity-100 transition" />',
        'playstore': '<svg class="w-5 h-5 opacity-70 hover:opacity-100 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#34A853" d="M3.609 1.814L13.792 12 3.609 22.186a1.966 1.966 0 01-.071-1.493V3.307c-.007-.522.154-1.032.428-1.493z"/><path fill="#FBBC04" d="M3.609 22.186L13.792 12l4.393 4.393-13.637 7.88a1.966 1.966 0 01-.939-.087z"/><path fill="#EA4335" d="M18.185 16.393l3.91-2.256c.538-.311.905-.885.905-1.537 0-.652-.367-1.226-.905-1.537l-3.91-2.256L13.792 12l4.393 4.393z"/><path fill="#4285F4" d="M3.609 1.814l13.637 7.88-4.454 2.306L3.609 1.814z"/></svg>',
        'appstore': '<svg class="w-5 h-5 opacity-70 hover:opacity-100 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>'
    };
    return icons[linkType] || '';
}

// Get link class based on type
function getLinkClass(linkType) {
    if (linkType === 'npm' || linkType === 'playstore' || linkType === 'appstore') {
        return 'transform hover:scale-125 transition duration-300';
    }
    return 'text-accent-lime hover:text-white transition';
}

// Create project card HTML
function createProjectCard(project, linkPatterns, categories, currentLang) {
    const description = project.description[currentLang] || project.description.pt || project.description.en;

    // Get category info from API
    const category = categories[project.categoryId];
    const categoryName = category ? (category.name[currentLang] || category.name.pt) : 'Projeto';
    const categoryIcon = category ? category.icon : '📁';
    const categoryGradient = categoryGradients[project.categoryId] || 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)';
    const categoryColor = categoryColors[project.categoryId] || '#6B7280';

    // Build all available links
    const links = {};
    if (project.links) {
        Object.keys(project.links).forEach(linkType => {
            links[linkType] = buildLink(project.links[linkType], linkType, linkPatterns);
        });
    }

    // Create links HTML
    let linksHtml = '';
    ['github', 'npm', 'website', 'playstore', 'appstore'].forEach(linkType => {
        if (links[linkType]) {
            linksHtml += `
                <a href="${links[linkType]}" target="_blank" rel="noopener noreferrer"
                    class="${getLinkClass(linkType)}">
                    ${getLinkIcon(linkType)}
                </a>
            `;
        }
    });

    return `
        <div class="data-card group overflow-hidden">
            <div class="h-48 relative overflow-hidden flex items-center justify-center" style="background-image: ${categoryGradient};">
                <h3 class="text-4xl font-black text-white uppercase tracking-wider z-10 text-center px-4">${project.image || project.name}</h3>
                <div class="absolute top-3 right-3 bg-black bg-opacity-90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                    <span class="text-base">${categoryIcon}</span>
                    <span>${categoryName}</span>
                </div>
            </div>
            <div class="p-6 bg-[#1a1d29]">
                <h4 class="text-xl font-bold mb-3" style="color: ${categoryColor};">${project.name}</h4>
                <p class="text-gray-400 text-sm mb-4 h-24 overflow-hidden leading-relaxed">
                    ${description}
                </p>
                <div class="flex space-x-3 pt-2 border-t border-gray-700">
                    ${linksHtml}
                </div>
            </div>
        </div>
    `;
}

// Global storage for API data
let projectsData = null;

// Load and render featured projects
async function loadFeaturedProjects() {
    try {
        const response = await fetch('https://apps.mabesi.dev/projects.json');
        const data = await response.json();

        // Store data globally for language switching
        projectsData = data;

        // Filter only featured projects and limit to first 5
        const featuredProjects = data.projects.filter(p => p.featured).slice(0, 5);

        if (featuredProjects.length === 0) {
            console.warn('No featured projects found');
            return;
        }

        // Render projects
        renderFeaturedProjects();

    } catch (error) {
        console.error('Error loading featured projects:', error);
        // Keep the page as-is if API fails
    }
}

// Render featured projects with current language
function renderFeaturedProjects() {
    if (!projectsData) return;

    const featuredProjects = projectsData.projects.filter(p => p.featured).slice(0, 5);
    const currentLang = localStorage.getItem('preferredLang') || 'pt';

    // Get the grid container
    const grid = document.getElementById('featured-projects-grid');
    const viewAllCard = grid.querySelector('a[href="https://apps.mabesi.dev"]');

    // Remove only project cards (not the "View All" link)
    const existingCards = grid.querySelectorAll('.data-card:not(a)');
    existingCards.forEach(card => card.remove());

    // Render each project card
    featuredProjects.forEach(project => {
        const cardHtml = createProjectCard(project, projectsData.linkPatterns, projectsData.categories, currentLang);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHtml.trim();
        const cardElement = tempDiv.firstChild;

        // Insert before the "View All" card
        grid.insertBefore(cardElement, viewAllCard);
    });

    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
}

// Load projects when page loads
loadFeaturedProjects();
