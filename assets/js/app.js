/**
 * Dra. Daniela Carmona G. - Aesthetic Surgery Website
 * Minimalist and premium logic inspired by Aesthetics Clinic.
 */

const CONFIG = {
  whatsappNumberE164: "+525540172431",
  whatsappDefaultMessage: "Hola Dra. Daniela, me gustaría solicitar una valoración para cirugía estética.",
  locationText: "Tuxpan 10, Col. Roma Sur, Cuauhtémoc, CDMX. Piso 2, consultorio 204.",
  scheduleText: "Lun–Sáb 9:00–18:00",
  emailText: "contacto@daniela-carmona.com"
};

const SURGERY_SERVICES = [
  {
    id: "rostro",
    title: "Cirugía Facial",
    category: "Rostro",
    items: [
      "Rinoplastia Estética y Funcional.",
      "Blefaroplastia (Cirugía de párpados).",
      "Ritidectomía (Lifting facial).",
      "Bichectomía (Afinamiento de mejillas).",
      "Mentoplastia."
    ],
    thumb: "https://images.unsplash.com/photo-1514834742825-f5bb62c7e983?q=80&w=800"
  },
  {
    id: "mamas",
    title: "Cirugía de Mamas",
    category: "Cuerpo",
    items: [
      "Aumento Mamario con Implantes.",
      "Mastopexia (Levantamiento mamario).",
      "Reducción Mamaria.",
      "Ginecomastia (Cirugía mamaria masculina)."
    ],
    thumb: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800"
  },
  {
    id: "contorno",
    title: "Contorno Corporal",
    category: "Cuerpo",
    items: [
      "Liposucción y Lipoescultura HD.",
      "Abdominoplastia (Tummy Tuck).",
      "Aumento de Glúteos (Lipofilling).",
      "Lifting de Brazos y Muslos."
    ],
    thumb: "https://images.unsplash.com/photo-1579154235602-3c2cfa99e16d?q=80&w=800"
  },
  {
    id: "estetica",
    title: "Medicina Estética Avanzada",
    category: "No Invasivo",
    items: [
      "Aplicación de Toxina Botulínica.",
      "Rellenos con Ácido Hialurónico.",
      "Bioestimuladores de Colágeno.",
      "Peelings Químicos Médicos."
    ],
    thumb: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"
  }
];

const ESTETICA_SERVICES = [
  {
    id: "toxina",
    title: "Aplicación de toxina botulínica",
    desc: "Información clara • Protocolos personalizados",
    items: [
      "Corrección de líneas de expresión (frente, entrecejo, patas de gallo).",
      "Tratamientos de sonrisa gingival, bruxismo y afinamiento del rostro.",
      "Microtox en piel para poros finos y efecto “glass skin”."
    ],
    tags: ["Evaluación", "Protocolo", "Seguimiento"],
    thumb: "assets/img/icon-toxina.png"
  },
  {
    id: "peelings",
    title: "Quimioexfoliaciones (peelings químicos)",
    desc: "Información clara • Protocolos personalizados",
    items: [
      "Tratamiento de manchas y fotoenvejecimiento.",
      "Protocolos para acné activo y cicatrices residuales.",
      "Esquemas combinados según tipo de piel y necesidad estética."
    ],
    tags: ["Evaluación", "Protocolo", "Seguimiento"],
    thumb: "assets/img/icon-peelings.png"
  },
  {
    id: "dermapen",
    title: "Tratamientos con Dermapen",
    desc: "Información clara • Protocolos personalizados",
    items: [
      "Inducción de colágeno para rejuvenecimiento facial global.",
      "Manejo de cicatrices de acné.",
      "Rejuvenecimiento periocular dirigido."
    ],
    tags: ["Evaluación", "Protocolo", "Seguimiento"],
    thumb: "assets/img/icon-dermapen.png"
  }
];

const PRODUCT_CATEGORIES = [
  {
    title: "Dermocosmética",
    desc: "Líneas de cuidado de piel, hidratación, antioxidantes y rutinas.",
    tag: "Próximamente"
  },
  {
    title: "Belleza íntima",
    desc: "Productos para higiene íntima, cuidado y protocolos.",
    tag: "Activo"
  },
  {
    title: "Accesorios & cuidado",
    desc: "Complementos, kits y productos de apoyo para tratamientos.",
    tag: "Editable"
  },
  {
    title: "Farmacia",
    desc: "Surtido de medicamentos y atención especializada.",
    tag: "Activo"
  }
];

const PROCESOS = [
  {
    title: "Excelencia Clínica",
    desc: "Instalaciones vanguardistas diseñadas para tu seguridad y confort.",
    src: "assets/videos/hospital.mp4",
    cta: "Conocer Clínica"
  },
  {
    title: "Procedimientos en Quirófano",
    desc: "Técnicas avanzadas y precisión quirúrgica de primer nivel.",
    src: "assets/videos/proceso_1.mp4",
    cta: "Ver Procesos"
  },
  {
    title: "Valoración Especializada",
    desc: "Consulta personalizada para definir el mejor plan para ti.",
    src: "assets/videos/proceso_2.mp4",
    cta: "Agendar Cita"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initUI();
  initAnimations();
});

function initUI() {
  // Brand name update
  document.querySelectorAll('.brand-name').forEach(el => el.textContent = 'Dra. Daniela Carmona G.');
  
  // WhatsApp links
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = el.getAttribute('data-wa') || CONFIG.whatsappDefaultMessage;
      window.open(`https://wa.me/${CONFIG.whatsappNumberE164.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });

  // Render Procesos
  const procesosGrid = document.getElementById('procesosGrid');
  if (procesosGrid) {
    PROCESOS.forEach(p => {
      const card = document.createElement('div');
      card.className = 'proceso-card reveal';
      card.innerHTML = `
        <video src="${p.src}" muted loop playsinline></video>
        <div class="proceso-card__content">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <a href="#" class="btn glass small" data-wa="Información sobre ${p.title}">${p.cta}</a>
        </div>
      `;
      card.addEventListener('mouseenter', () => card.querySelector('video').play());
      card.addEventListener('mouseleave', () => card.querySelector('video').pause());
      procesosGrid.appendChild(card);
    });
  }

  // Render Estetica Accordion
  const accordionContainer = document.getElementById('esteticaAccordion');
  if (accordionContainer) {
    ESTETICA_SERVICES.forEach((s, idx) => {
      const item = document.createElement('div');
      item.className = 'accordion-item reveal';
      item.innerHTML = `
        <button class="accordion-header">
          <div class="header-content">
            <div class="svc-icon-wrap">
              <img src="${s.thumb}" alt="${s.title}" class="svc-icon">
            </div>
            <div class="svc-text">
              <span class="svc-title">${s.title}</span>
              <span class="svc-desc">${s.desc}</span>
            </div>
          </div>
          <span class="toggle-icon">+</span>
        </button>
        <div class="accordion-panel">
          <div class="panel-inner">
            <ul class="svc-list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <div class="svc-tags">${s.tags.map(t => `<span class="svc-tag">${t}</span>`).join('')}</div>
            <div class="svc-actions">
              <a class="btn primary small" data-wa="Hola, quiero información sobre ${s.title}">Solicitar por WhatsApp</a>
              <a class="btn small" data-wa="Quiero agendar ${s.title}">Agendar</a>
            </div>
          </div>
        </div>
      `;
      accordionContainer.appendChild(item);

      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('active');
        header.querySelector('.toggle-icon').textContent = isOpen ? '−' : '+';
        const panel = item.querySelector('.accordion-panel');
        panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : null;
      });
    });
  }

  // Render Product Categories Grid
  const productGrid = document.getElementById('productGrid');
  if (productGrid) {
    PRODUCT_CATEGORIES.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      card.innerHTML = `
        <div class="card-icon">✦</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="badge">${p.tag}</span>
      `;
      productGrid.appendChild(card);
    });
  }

  // Interactive Face Logic
  const slider = document.getElementById('beforeAfterSlider');
  if (slider) {
    const handle = slider.querySelector('.slider-handle');
    const beforeImg = slider.querySelector('.img-before');
    
    const move = (e) => {
      const rect = slider.getBoundingClientRect();
      let x = (e.pageX || e.touches[0].pageX) - rect.left - window.scrollX;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      const percent = (x / rect.width) * 100;
      handle.style.left = `${percent}%`;
      beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    };

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);
  }

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('active');
      menuBtn.textContent = open ? '✕' : '≡';
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuBtn.textContent = '≡';
        document.body.style.overflow = '';
      });
    });
  }
}

function initAnimations() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".parallax-text", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      opacity: 0.1
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      });
    });

    gsap.from(".heroTitle", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3
    });
    
    gsap.from(".heroSubtitle", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.8
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }
}
