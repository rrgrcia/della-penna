(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/WEBSITES/della PENNA/app/components/LanguageProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.company": "The Company",
        "nav.fleet": "Our Fleet",
        "nav.history": "History",
        "nav.contact": "Contact",
        // Hero
        "hero.badge": "SINCE 1946 • PREMIUM EUROPEAN COACHES",
        "hero.subtitle": "European Coaches",
        "hero.tagline": "Your destination is our passion",
        "hero.stat1.value": "15+",
        "hero.stat1.unit": "Countries",
        "hero.stat1.label": "European Coverage",
        "hero.stat2.value": "50+",
        "hero.stat2.unit": "Expert",
        "hero.stat2.label": "Professional Drivers",
        "hero.stat3.value": "40+",
        "hero.stat3.unit": "Coaches",
        "hero.stat3.label": "Fleet Vehicles",
        "hero.scroll": "Discover More",
        // About Us
        "about.title": "About Us",
        "about.p1": "The della PENNA European Coach Company was founded in Naples following World War II by Comm. Emilio della Penna. Later strengthened and reorganized by his son Eng. Aldo Mauro della Penna and today managed and directed by Eng. Carmelo della Penna.",
        "about.p2": "Covering the length and breadth of Italy, as well as routes across the European Union and beyond, della PENNA has one of the most visible profiles of any European coach operator.",
        "about.quote": "The Italian Touring Club in its magazine \"QUI TOURING\", classified della PENNA European Coaches among the top five of 8,000 coach companies in the country.",
        "about.p3": "Leading company in the road transportation segment has obtained The Quality Management certification ISO 9001:2008 and The Environmental Management Systems certification ISO 14001:2004.",
        "about.highlight1.title": "Top 5 in Italy",
        "about.highlight1.desc": "Ranked among top 5 of 8,000 coach companies by Italian Touring Club",
        "about.highlight2.title": "Since 1946",
        "about.highlight2.desc": "Nearly 80 years of excellence in European coach services",
        "about.highlight3.title": "ISO Certified",
        "about.highlight3.desc": "Quality Management ISO 9001:2008 & Environmental ISO 14001:2004",
        "about.highlight4.title": "Premium Service",
        "about.highlight4.desc": "Most visible profile of any European coach operator",
        // The Company
        "company.title": "The Company",
        "company.feature1.title": "Strategic Location",
        "company.feature1.desc": "Close to Naples' major tourist attractions",
        "company.feature2.title": "Expert Guidance",
        "company.feature2.desc": "Drivers with extensive European knowledge",
        "company.feature3.title": "Professional Team",
        "company.feature3.desc": "Rigorously screened and selected drivers",
        "company.feature4.title": "Multilingual",
        "company.feature4.desc": "English, French, Spanish, and German",
        "company.p1": "della PENNA European Coaches is located close to the center of Naples in a strategic position with respect to major tourist attractions such as Pompeii, Mount Vesuvius, the Amalfi Coast, Sorrento and Capri.",
        "company.p2": "Our company is recognized as one of the premier local suppliers of transportation services related to congresses, cruise ships excursions, transfers and bus charters as well as national and international tours on behalf of major European tour operators.",
        "company.p3": "Our drivers are selected from the best in the industry. They are rigorously screened and selected for their expert driving skills and sense of responsibility. They are fully familiar with all EU driving regulations. Most speak English and some also have command of French, Spanish and German. They have good knowledge of hotels, restaurants and tourist attractions throughout the European continent. They are professional, courteous and always available to assist.",
        // Our Fleet
        "fleet.title": "Our Fleet",
        "fleet.p1": "We boast a fleet of 40 vehicles with the majority of very recent construction. Our coaches are predominantly Mercedes Benz, Irisbus-Iveco, MAN and Scania.",
        "fleet.p2": "These manufacturers offer not just the highest standards of mechanics and comfort, but also access to technical assistance and servicing on a 24-hour basis throughout Europe.",
        "fleet.p3": "Our vehicles are fully outfitted with all modern conveniences, including plush or leather reclining seats, electronic air-conditioning, two DVD monitors, stereo system, microphone, refrigeration unit, toilets, GPS, ABS and ASR system, and Wi-Fi on request.",
        "fleet.p4": "Our private coach park has an area of approximately 5,000m² and is equipped with a vehicle washing system.",
        "fleet.amenities": "Premium Amenities",
        "fleet.amenity1": "Air Conditioning",
        "fleet.amenity2": "DVD Monitors",
        "fleet.amenity3": "WiFi Available",
        "fleet.amenity4": "GPS Navigation",
        "fleet.amenity5": "ABS & ASR",
        "fleet.amenity6": "24/7 Service",
        // History
        "history.title": "History",
        // Contact
        "contact.title": "Contact Us",
        "contact.naples": "Naples Office",
        "contact.genova": "Genova Office",
        "contact.vat": "Partita IVA 01158230639",
        // Footer
        "footer.copyright": "Copyright © {year} della PENNA autotrasporti. All Rights Reserved."
    },
    it: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "Chi Siamo",
        "nav.company": "L'Azienda",
        "nav.fleet": "La Nostra Flotta",
        "nav.history": "Storia",
        "nav.contact": "Contatti",
        // Hero
        "hero.badge": "DAL 1946 • AUTOBUS PREMIUM EUROPEI",
        "hero.subtitle": "Autobus Europei",
        "hero.tagline": "La tua destinazione è la nostra passione",
        "hero.stat1.value": "15+",
        "hero.stat1.unit": "Paesi",
        "hero.stat1.label": "Copertura Europea",
        "hero.stat2.value": "50+",
        "hero.stat2.unit": "Esperti",
        "hero.stat2.label": "Autisti Professionali",
        "hero.stat3.value": "40+",
        "hero.stat3.unit": "Autobus",
        "hero.stat3.label": "Veicoli della Flotta",
        "hero.scroll": "Scopri di Più",
        // About Us
        "about.title": "Chi Siamo",
        "about.p1": "L'azienda europea di autobus della PENNA è stata fondata a Napoli dopo la Seconda Guerra Mondiale dal Comm. Emilio della Penna. Successivamente rafforzata e riorganizzata da suo figlio Ing. Aldo Mauro della Penna e oggi gestita e diretta dall'Ing. Carmelo della Penna.",
        "about.p2": "Coprendo l'intera Italia, così come rotte in tutta l'Unione Europea e oltre, della PENNA ha uno dei profili più visibili di qualsiasi operatore di autobus europeo.",
        "about.quote": "Il Touring Club Italiano nella sua rivista \"QUI TOURING\", ha classificato della PENNA European Coaches tra le prime cinque delle 8.000 aziende di autobus nel paese.",
        "about.p3": "L'azienda leader nel segmento del trasporto su strada ha ottenuto la certificazione di Gestione della Qualità ISO 9001:2008 e la certificazione del Sistema di Gestione Ambientale ISO 14001:2004.",
        "about.highlight1.title": "Top 5 in Italia",
        "about.highlight1.desc": "Classificata tra le prime 5 di 8.000 aziende di autobus dal Touring Club Italiano",
        "about.highlight2.title": "Dal 1946",
        "about.highlight2.desc": "Quasi 80 anni di eccellenza nei servizi di autobus europei",
        "about.highlight3.title": "Certificato ISO",
        "about.highlight3.desc": "Gestione Qualità ISO 9001:2008 & Ambientale ISO 14001:2004",
        "about.highlight4.title": "Servizio Premium",
        "about.highlight4.desc": "Il profilo più visibile di qualsiasi operatore di autobus europeo",
        // The Company
        "company.title": "L'Azienda",
        "company.feature1.title": "Posizione Strategica",
        "company.feature1.desc": "Vicino alle principali attrazioni turistiche di Napoli",
        "company.feature2.title": "Guida Esperta",
        "company.feature2.desc": "Autisti con ampia conoscenza europea",
        "company.feature3.title": "Team Professionale",
        "company.feature3.desc": "Autisti rigorosamente selezionati",
        "company.feature4.title": "Multilingue",
        "company.feature4.desc": "Inglese, Francese, Spagnolo e Tedesco",
        "company.p1": "della PENNA European Coaches si trova vicino al centro di Napoli in una posizione strategica rispetto alle principali attrazioni turistiche come Pompei, il Monte Vesuvio, la Costiera Amalfitana, Sorrento e Capri.",
        "company.p2": "La nostra azienda è riconosciuta come uno dei principali fornitori locali di servizi di trasporto relativi a congressi, escursioni di navi da crociera, trasferimenti e noleggi di autobus, nonché tour nazionali e internazionali per conto dei principali tour operator europei.",
        "company.p3": "I nostri autisti sono selezionati tra i migliori del settore. Sono rigorosamente controllati e selezionati per le loro competenze di guida esperte e senso di responsabilità. Conoscono perfettamente tutte le normative di guida dell'UE. La maggior parte parla inglese e alcuni hanno anche padronanza di francese, spagnolo e tedesco. Hanno una buona conoscenza di hotel, ristoranti e attrazioni turistiche in tutto il continente europeo. Sono professionali, cortesi e sempre disponibili ad assistere.",
        // Our Fleet
        "fleet.title": "La Nostra Flotta",
        "fleet.p1": "Vantiamo una flotta di 40 veicoli con la maggior parte di costruzione molto recente. I nostri autobus sono prevalentemente Mercedes Benz, Irisbus-Iveco, MAN e Scania.",
        "fleet.p2": "Questi produttori offrono non solo i più alti standard di meccanica e comfort, ma anche accesso all'assistenza tecnica e manutenzione 24 ore su 24 in tutta Europa.",
        "fleet.p3": "I nostri veicoli sono completamente attrezzati con tutti i comfort moderni, tra cui sedili reclinabili in peluche o pelle, aria condizionata elettronica, due monitor DVD, impianto stereo, microfono, unità di refrigerazione, servizi igienici, GPS, sistema ABS e ASR e Wi-Fi su richiesta.",
        "fleet.p4": "Il nostro parcheggio privato per autobus ha un'area di circa 5.000 m² ed è dotato di un sistema di lavaggio veicoli.",
        "fleet.amenities": "Servizi Premium",
        "fleet.amenity1": "Aria Condizionata",
        "fleet.amenity2": "Monitor DVD",
        "fleet.amenity3": "WiFi Disponibile",
        "fleet.amenity4": "Navigazione GPS",
        "fleet.amenity5": "ABS e ASR",
        "fleet.amenity6": "Servizio 24/7",
        // History
        "history.title": "Storia",
        // Contact
        "contact.title": "Contattaci",
        "contact.naples": "Ufficio di Napoli",
        "contact.genova": "Ufficio di Genova",
        "contact.vat": "Partita IVA 01158230639",
        // Footer
        "footer.copyright": "Copyright © {year} della PENNA autotrasporti. Tutti i diritti riservati."
    },
    pt: {
        // Navbar
        "nav.home": "Início",
        "nav.about": "Sobre Nós",
        "nav.company": "A Empresa",
        "nav.fleet": "Nossa Frota",
        "nav.history": "História",
        "nav.contact": "Contato",
        // Hero
        "hero.badge": "DESDE 1946 • ÔNIBUS PREMIUM EUROPEUS",
        "hero.subtitle": "Ônibus Europeus",
        "hero.tagline": "Seu destino é nossa paixão",
        "hero.stat1.value": "15+",
        "hero.stat1.unit": "Países",
        "hero.stat1.label": "Cobertura Europeia",
        "hero.stat2.value": "50+",
        "hero.stat2.unit": "Especialistas",
        "hero.stat2.label": "Motoristas Profissionais",
        "hero.stat3.value": "40+",
        "hero.stat3.unit": "Ônibus",
        "hero.stat3.label": "Veículos da Frota",
        "hero.scroll": "Descubra Mais",
        // About Us
        "about.title": "Sobre Nós",
        "about.p1": "A Empresa Europeia de Ônibus della PENNA foi fundada em Nápoles após a Segunda Guerra Mundial por Comm. Emilio della Penna. Posteriormente fortalecida e reorganizada por seu filho Eng. Aldo Mauro della Penna e hoje gerenciada e dirigida por Eng. Carmelo della Penna.",
        "about.p2": "Cobrindo toda a extensão da Itália, bem como rotas por toda a União Europeia e além, della PENNA tem um dos perfis mais visíveis de qualquer operadora de ônibus europeia.",
        "about.quote": "O Clube de Turismo Italiano em sua revista \"QUI TOURING\", classificou della PENNA European Coaches entre os cinco primeiros de 8.000 empresas de ônibus no país.",
        "about.p3": "Empresa líder no segmento de transporte rodoviário obteve a certificação de Gestão da Qualidade ISO 9001:2008 e a certificação de Sistemas de Gestão Ambiental ISO 14001:2004.",
        "about.highlight1.title": "Top 5 na Itália",
        "about.highlight1.desc": "Classificada entre os 5 primeiros de 8.000 empresas de ônibus pelo Clube de Turismo Italiano",
        "about.highlight2.title": "Desde 1946",
        "about.highlight2.desc": "Quase 80 anos de excelência em serviços de ônibus europeus",
        "about.highlight3.title": "Certificado ISO",
        "about.highlight3.desc": "Gestão de Qualidade ISO 9001:2008 & Ambiental ISO 14001:2004",
        "about.highlight4.title": "Serviço Premium",
        "about.highlight4.desc": "Perfil mais visível de qualquer operadora de ônibus europeia",
        // The Company
        "company.title": "A Empresa",
        "company.feature1.title": "Localização Estratégica",
        "company.feature1.desc": "Perto das principais atrações turísticas de Nápoles",
        "company.feature2.title": "Orientação Especializada",
        "company.feature2.desc": "Motoristas com amplo conhecimento europeu",
        "company.feature3.title": "Equipe Profissional",
        "company.feature3.desc": "Motoristas rigorosamente selecionados",
        "company.feature4.title": "Multilíngue",
        "company.feature4.desc": "Inglês, Francês, Espanhol e Alemão",
        "company.p1": "della PENNA European Coaches está localizada perto do centro de Nápoles em uma posição estratégica em relação às principais atrações turísticas como Pompeia, Monte Vesúvio, Costa Amalfitana, Sorrento e Capri.",
        "company.p2": "Nossa empresa é reconhecida como um dos principais fornecedores locais de serviços de transporte relacionados a congressos, excursões de navios de cruzeiro, transferências e fretamento de ônibus, bem como passeios nacionais e internacionais em nome dos principais operadores turísticos europeus.",
        "company.p3": "Nossos motoristas são selecionados entre os melhores da indústria. Eles são rigorosamente examinados e selecionados por suas habilidades especializadas de direção e senso de responsabilidade. Eles estão totalmente familiarizados com todos os regulamentos de direção da UE. A maioria fala inglês e alguns também dominam francês, espanhol e alemão. Eles têm bom conhecimento de hotéis, restaurantes e atrações turísticas em todo o continente europeu. Eles são profissionais, corteses e sempre disponíveis para ajudar.",
        // Our Fleet
        "fleet.title": "Nossa Frota",
        "fleet.p1": "Possuímos uma frota de 40 veículos com a maioria de construção muito recente. Nossos ônibus são predominantemente Mercedes Benz, Irisbus-Iveco, MAN e Scania.",
        "fleet.p2": "Esses fabricantes oferecem não apenas os mais altos padrões de mecânica e conforto, mas também acesso à assistência técnica e manutenção 24 horas por dia em toda a Europa.",
        "fleet.p3": "Nossos veículos são totalmente equipados com todas as conveniências modernas, incluindo assentos reclináveis de pelúcia ou couro, ar condicionado eletrônico, dois monitores DVD, sistema estéreo, microfone, unidade de refrigeração, banheiros, GPS, sistema ABS e ASR e Wi-Fi sob solicitação.",
        "fleet.p4": "Nosso estacionamento privado de ônibus tem uma área de aproximadamente 5.000m² e está equipado com um sistema de lavagem de veículos.",
        "fleet.amenities": "Comodidades Premium",
        "fleet.amenity1": "Ar Condicionado",
        "fleet.amenity2": "Monitores DVD",
        "fleet.amenity3": "WiFi Disponível",
        "fleet.amenity4": "Navegação GPS",
        "fleet.amenity5": "ABS e ASR",
        "fleet.amenity6": "Serviço 24/7",
        // History
        "history.title": "História",
        // Contact
        "contact.title": "Entre em Contato",
        "contact.naples": "Escritório de Nápoles",
        "contact.genova": "Escritório de Gênova",
        "contact.vat": "Partita IVA 01158230639",
        // Footer
        "footer.copyright": "Copyright © {year} della PENNA autotrasporti. Todos os direitos reservados."
    },
    es: {
        // Navbar
        "nav.home": "Inicio",
        "nav.about": "Sobre Nosotros",
        "nav.company": "La Empresa",
        "nav.fleet": "Nuestra Flota",
        "nav.history": "Historia",
        "nav.contact": "Contacto",
        // Hero
        "hero.badge": "DESDE 1946 • AUTOBUSES PREMIUM EUROPEOS",
        "hero.subtitle": "Autobuses Europeos",
        "hero.tagline": "Tu destino es nuestra pasión",
        "hero.stat1.value": "15+",
        "hero.stat1.unit": "Países",
        "hero.stat1.label": "Cobertura Europea",
        "hero.stat2.value": "50+",
        "hero.stat2.unit": "Expertos",
        "hero.stat2.label": "Conductores Profesionales",
        "hero.stat3.value": "40+",
        "hero.stat3.unit": "Autobuses",
        "hero.stat3.label": "Vehículos de la Flota",
        "hero.scroll": "Descubre Más",
        // About Us
        "about.title": "Sobre Nosotros",
        "about.p1": "La Compañía Europea de Autobuses della PENNA fue fundada en Nápoles después de la Segunda Guerra Mundial por Comm. Emilio della Penna. Posteriormente fortalecida y reorganizada por su hijo Ing. Aldo Mauro della Penna y hoy gestionada y dirigida por Ing. Carmelo della Penna.",
        "about.p2": "Cubriendo toda Italia, así como rutas a través de la Unión Europea y más allá, della PENNA tiene uno de los perfiles más visibles de cualquier operador de autobuses europeo.",
        "about.quote": "El Club de Turismo Italiano en su revista \"QUI TOURING\", clasificó a della PENNA European Coaches entre los cinco primeros de 8,000 empresas de autobuses en el país.",
        "about.p3": "Empresa líder en el segmento de transporte por carretera ha obtenido la certificación de Gestión de Calidad ISO 9001:2008 y la certificación de Sistemas de Gestión Ambiental ISO 14001:2004.",
        "about.highlight1.title": "Top 5 en Italia",
        "about.highlight1.desc": "Clasificada entre los 5 primeros de 8,000 empresas de autobuses por el Club de Turismo Italiano",
        "about.highlight2.title": "Desde 1946",
        "about.highlight2.desc": "Casi 80 años de excelencia en servicios de autobuses europeos",
        "about.highlight3.title": "Certificado ISO",
        "about.highlight3.desc": "Gestión de Calidad ISO 9001:2008 y Ambiental ISO 14001:2004",
        "about.highlight4.title": "Servicio Premium",
        "about.highlight4.desc": "Perfil más visible de cualquier operador de autobuses europeo",
        // The Company
        "company.title": "La Empresa",
        "company.feature1.title": "Ubicación Estratégica",
        "company.feature1.desc": "Cerca de las principales atracciones turísticas de Nápoles",
        "company.feature2.title": "Orientación Experta",
        "company.feature2.desc": "Conductores con amplio conocimiento europeo",
        "company.feature3.title": "Equipo Profesional",
        "company.feature3.desc": "Conductores rigurosamente seleccionados",
        "company.feature4.title": "Multilingüe",
        "company.feature4.desc": "Inglés, Francés, Español y Alemán",
        "company.p1": "della PENNA European Coaches está ubicada cerca del centro de Nápoles en una posición estratégica con respecto a las principales atracciones turísticas como Pompeya, el Monte Vesubio, la Costa Amalfitana, Sorrento y Capri.",
        "company.p2": "Nuestra empresa es reconocida como uno de los principales proveedores locales de servicios de transporte relacionados con congresos, excursiones de cruceros, traslados y alquiler de autobuses, así como tours nacionales e internacionales en nombre de los principales operadores turísticos europeos.",
        "company.p3": "Nuestros conductores son seleccionados entre los mejores de la industria. Son rigurosamente examinados y seleccionados por sus habilidades expertas de conducción y sentido de responsabilidad. Están completamente familiarizados con todas las regulaciones de conducción de la UE. La mayoría habla inglés y algunos también dominan francés, español y alemán. Tienen buen conocimiento de hoteles, restaurantes y atracciones turísticas en todo el continente europeo. Son profesionales, corteses y siempre están disponibles para ayudar.",
        // Our Fleet
        "fleet.title": "Nuestra Flota",
        "fleet.p1": "Contamos con una flota de 40 vehículos con la mayoría de construcción muy reciente. Nuestros autobuses son predominantemente Mercedes Benz, Irisbus-Iveco, MAN y Scania.",
        "fleet.p2": "Estos fabricantes ofrecen no solo los más altos estándares de mecánica y comodidad, sino también acceso a asistencia técnica y mantenimiento las 24 horas en toda Europa.",
        "fleet.p3": "Nuestros vehículos están completamente equipados con todas las comodidades modernas, incluidos asientos reclinables de felpa o cuero, aire acondicionado electrónico, dos monitores DVD, sistema estéreo, micrófono, unidad de refrigeración, baños, GPS, sistema ABS y ASR, y Wi-Fi bajo petición.",
        "fleet.p4": "Nuestro parque privado de autobuses tiene un área de aproximadamente 5,000m² y está equipado con un sistema de lavado de vehículos.",
        "fleet.amenities": "Comodidades Premium",
        "fleet.amenity1": "Aire Acondicionado",
        "fleet.amenity2": "Monitores DVD",
        "fleet.amenity3": "WiFi Disponible",
        "fleet.amenity4": "Navegación GPS",
        "fleet.amenity5": "ABS y ASR",
        "fleet.amenity6": "Servicio 24/7",
        // History
        "history.title": "Historia",
        // Contact
        "contact.title": "Contáctenos",
        "contact.naples": "Oficina de Nápoles",
        "contact.genova": "Oficina de Génova",
        "contact.vat": "Partita IVA 01158230639",
        // Footer
        "footer.copyright": "Copyright © {year} della PENNA autotrasporti. Todos los derechos reservados."
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const t = (key)=>{
        const translation = translations[language][key];
        if (translation) {
            return translation.replace("{year}", new Date().getFullYear().toString());
        }
        return key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/WEBSITES/della PENNA/app/components/LanguageProvider.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "JgNS4s3wc06/6u6z+Ak7Ai5ELN8=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITES$2f$della__PENNA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/WEBSITES/della PENNA/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_WEBSITES_della%20PENNA_bc5ca813._.js.map