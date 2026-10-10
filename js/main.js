/**
 * MALEMI Tech & Data — Interações & Lógica do Site Estático
 * Sem dependência de React/Next.js. 100% Vanilla JS puro.
 */

// ==============================================================================
// 1. Dados das Soluções e Planos
// ==============================================================================
const SOLUTIONS_DATA = {
  sites: {
    id: 'sites',
    name: 'MALEMI Sites',
    tagline: 'Presença Digital de Alta Performance',
    description: 'Soluções para criação de sites institucionais e plataformas digitais com design refinado, arquitetura escalável e máxima velocidade de carregamento.',
    problemSolved: 'Supera a baixa taxa de conversão e a falta de autoridade de páginas lentas ou genéricas, criando canais digitais que transmitem credibilidade imediata.',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    highlightFeatures: [
      'Engenharia moderna e design responsivo fluido',
      'Otimização avançada para motores de busca (SEO)',
      'Arquitetura segura com tempo de resposta ultrarrápido',
      'Integração facilitada com canais de atendimento'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Ideal para empresas que buscam estabelecer uma presença online profissional, segura e veloz.',
        features: [
          'Site institucional estruturado',
          'Design responsivo para desktop e mobile',
          'Otimização básica de SEO e metadados',
          'Botão direto para contato e WhatsApp',
          'Arquitetura estática veloz e segura'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Mais Procurado',
        recommended: true,
        shortDescription: 'Para empresas que necessitam de mais páginas institucionais, captação ativa de leads e integrações.',
        features: [
          'Múltiplas páginas dedicadas e arquitetura ampliada',
          'Formulários de contato avançados com validação',
          'Integrações com ferramentas de mensageria e CRM',
          'Recursos adicionais e seções dinâmicas',
          'SEO técnico aprofundado e Core Web Vitals otimizados'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Para negócios que demandam plataformas digitais exclusivas, com sistemas sob medida e banco de dados.',
        features: [
          'Plataforma ou aplicação web totalmente personalizada',
          'Funcionalidades avançadas sob demanda',
          'Integrações completas com APIs de terceiros',
          'Estrutura com banco de dados dedicado',
          'Acompanhamento técnico prioritário'
        ]
      }
    ]
  },
  bi: {
    id: 'bi',
    name: 'MALEMI BI',
    tagline: 'Inteligência Estratégica & Análise de Dados',
    description: 'Soluções de Business Intelligence projetadas para organizar dados dispersos e transformá-los em indicadores visuais claros para tomadas de decisão assertivas.',
    problemSolved: 'Elimina a dependência de planilhas desorganizadas e reuniões baseadas em achismos, fornecendo uma visão unificada e em tempo real da saúde da empresa.',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
    highlightFeatures: [
      'Centralização de métricas e indicadores-chave (KPIs)',
      'Painéis visuais intuitivos com filtros interativos',
      'Visão consolidada da operação e finanças',
      'Tomada de decisão ágil baseada em fatos'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Indicado para visualizar os indicadores fundamentais do negócio de forma clara e objetiva.',
        features: [
          'Dashboard centralizado com indicadores principais',
          'Visualização executiva de métricas essenciais',
          'Interface limpa de fácil leitura',
          'Exportação de relatórios resumidos',
          'Configuração inicial guiada'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Recomendado',
        recommended: true,
        shortDescription: 'Para empresas que operam com múltiplos setores e precisam de cruzamento de dados analítico.',
        features: [
          'Dashboards completos e dinâmicos',
          'Conexão com múltiplas fontes de dados',
          'Filtros analíticos por período, setor e categorias',
          'Análises de tendências e variações históricas',
          'Acessos segmentados por permissão'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Estrutura corporativa completa com ingestão de dados contínua e modelagem profunda.',
        features: [
          'Solução de BI corporativo sob medida',
          'Atualização automatizada em tempo real ou quase real',
          'Indicadores avançados e modelagem estatística',
          'Pipelines de dados resilientes',
          'Acompanhamento e evolução contínua dos painéis'
        ]
      }
    ]
  },
  'automacao-ia': {
    id: 'automacao-ia',
    name: 'MALEMI Automação & IA',
    tagline: 'Eficiência Operacional & Agentes Inteligentes',
    description: 'Automação inteligente de processos e conexões de sistemas que reduzem gargalos manuais, aceleram fluxos e potencializam a produtividade da sua equipe.',
    problemSolved: 'Libera seus colaboradores de tarefas manuais e repetitivas que geram erros e lentidão, conectando sistemas em fluxos contínuos e inteligentes.',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>`,
    highlightFeatures: [
      'Eliminação de etapas manuais repetitivas',
      'Integração fluida entre ferramentas e APIs corporativas',
      'Redução drástica de falhas e tempo de resposta',
      'Adoção prática e mensurável de inteligência artificial'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Automações pontuais para otimizar rotinas operacionais simples e recorrentes.',
        features: [
          'Mapeamento e automação de fluxos simples',
          'Disparos de alertas e notificações automáticas',
          'Redução de trabalho manual em tarefas-chave',
          'Padronização de rotinas diárias',
          'Documentação objetiva do fluxo'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Alta Eficiência',
        recommended: true,
        shortDescription: 'Integração de ponta a ponta entre sistemas internos, plataformas de terceiros e APIs.',
        features: [
          'Automações integradas entre múltiplos softwares',
          'Conexão estável com APIs externas e webhooks',
          'Sincronização de dados entre CRM, ERP e mensageria',
          'Fluxos condicionais com tratamento de exceções',
          'Monitoramento de integridade dos processos'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Arquiteturas avançadas de automação com agentes de IA personalizados e orquestração de processos.',
        features: [
          'Soluções de automação altamente personalizadas',
          'Desenvolvimento e integração de agentes inteligentes (IA)',
          'Pipelines de processos operacionais completos',
          'Orquestração de tarefas complexas e regras de negócio',
          'Suporte técnico e refinamento contínuo dos modelos'
        ]
      }
    ]
  }
};

// ==============================================================================
// 2. Canvas Animado de Arquitetura de Dados (TechNetworkCanvas)
// ==============================================================================
function initTechCanvas() {
  const canvas = document.getElementById('tech-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

  const handleResize = () => {
    width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
  };
  window.addEventListener('resize', handleResize, { passive: true });

  const nodeCount = Math.min(Math.max(Math.floor((width * height) / 16000), 25), 65);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.2,
      isAccent: Math.random() < 0.22 // 22% dos nós com destaque esmeralda
    });
  }

  const packets = [];
  const maxPackets = 6;
  let lastTime = performance.now();

  function render(time) {
    const dt = Math.min((time - lastTime) / 1000, 0.1);
    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    // Atualiza posições dos nós
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    }

    // Desenha linhas conectivas
    const maxDistance = 140;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.18;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          if (nodes[i].isAccent || nodes[j].isAccent) {
            ctx.strokeStyle = `rgba(9, 204, 162, ${alpha * 1.5})`;
          } else {
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.9})`;
          }
          ctx.lineWidth = 1;
          ctx.stroke();

          // Gera pacote de dados pulsante
          if (packets.length < maxPackets && Math.random() < 0.002) {
            packets.push({
              fromIndex: i,
              toIndex: j,
              progress: 0,
              speed: 0.8 + Math.random() * 0.6
            });
          }
        }
      }
    }

    // Animação dos pacotes de dados
    for (let p = packets.length - 1; p >= 0; p--) {
      const pkt = packets[p];
      pkt.progress += pkt.speed * dt;

      if (pkt.progress >= 1) {
        packets.splice(p, 1);
        continue;
      }

      const from = nodes[pkt.fromIndex];
      const to = nodes[pkt.toIndex];
      if (!from || !to) {
        packets.splice(p, 1);
        continue;
      }

      const px = from.x + (to.x - from.x) * pkt.progress;
      const py = from.y + (to.y - from.y) * pkt.progress;

      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#09CCA2';
      ctx.shadowColor = '#09CCA2';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Desenha os pontos (nós)
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

      if (node.isAccent) {
        ctx.fillStyle = `rgba(9, 204, 162, ${node.baseAlpha + 0.3})`;
      } else {
        ctx.fillStyle = `rgba(226, 232, 240, ${node.baseAlpha})`;
      }
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// ==============================================================================
// 3. Gerenciador de Abas e Soluções
// ==============================================================================
let currentActiveSolutionId = 'sites';
let currentSelectedTier = 'Profissional';

function renderSolutionDetails(solutionId) {
  const data = SOLUTIONS_DATA[solutionId];
  if (!data) return;
  currentActiveSolutionId = solutionId;

  // Atualiza classes dos botões das abas
  document.querySelectorAll('.tab-solution-btn').forEach((btn) => {
    const isSelected = btn.getAttribute('data-solution') === solutionId;
    btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isSelected) {
      btn.className = 'tab-solution-btn flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer border bg-[#0F1728] border-[#09CCA2] text-white shadow-[0_0_20px_rgba(9,204,162,0.15)]';
      btn.querySelector('.tab-icon').className = 'tab-icon text-[#09CCA2]';
    } else {
      btn.className = 'tab-solution-btn flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer border bg-[#0A0F1A]/80 border-white/10 text-slate-400 hover:text-white hover:border-white/20';
      btn.querySelector('.tab-icon').className = 'tab-icon text-slate-400';
    }
  });

  // Atualiza Card de Visão Geral
  const iconContainer = document.getElementById('solution-icon-container');
  if (iconContainer) iconContainer.innerHTML = data.iconSvg;

  const nameEl = document.getElementById('solution-title');
  if (nameEl) nameEl.textContent = data.name;

  const taglineEl = document.getElementById('solution-tagline');
  if (taglineEl) taglineEl.textContent = data.tagline;

  const descEl = document.getElementById('solution-desc');
  if (descEl) descEl.textContent = data.description;

  const probEl = document.getElementById('solution-problem');
  if (probEl) probEl.textContent = data.problemSolved;

  const featuresList = document.getElementById('solution-features-list');
  if (featuresList) {
    featuresList.innerHTML = data.highlightFeatures
      .map(
        (feat) => `
        <li class="flex items-start gap-2.5 text-sm text-slate-300">
          <span class="text-[#09CCA2] mt-0.5 shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span>${feat}</span>
        </li>`
      )
      .join('');
  }

  // Atualiza botão "Conheça a solução"
  const ctaBtn = document.getElementById('solution-cta-btn');
  if (ctaBtn) {
    ctaBtn.onclick = () => selectSolutionAndScroll(solutionId, 'Geral');
  }

  // Atualiza título da seção de planos
  const plansSolutionName = document.getElementById('plans-solution-name');
  if (plansSolutionName) plansSolutionName.textContent = data.name;

  // Renderiza os 3 Planos
  renderPlans(data.plans, solutionId);
}

function renderPlans(plans, solutionId) {
  const container = document.getElementById('plans-container');
  if (!container) return;

  container.innerHTML = plans
    .map((plan) => {
      const isSelected = plan.id === currentSelectedTier;
      const cardClasses = isSelected
        ? 'rounded-xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between border focus:outline-none focus:ring-2 focus:ring-[#09CCA2] bg-[#0F1728] border-[#09CCA2] shadow-[0_0_25px_rgba(9,204,162,0.15)] ring-1 ring-[#09CCA2]'
        : 'rounded-xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between border focus:outline-none focus:ring-2 focus:ring-[#09CCA2] bg-[#0A0F1A]/80 border-white/10 hover:border-white/20';

      const btnClasses = isSelected
        ? 'btn-primary w-full text-xs py-2'
        : 'btn-secondary w-full text-xs py-2';

      return `
      <div class="${cardClasses}" onclick="selectPlanCard('${plan.id}')">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">
              ${plan.id}
            </span>
            ${
              plan.badge
                ? `<span class="badge-pill text-[10px] py-0.5 px-2">${plan.badge}</span>`
                : ''
            }
          </div>
          <h5 class="text-xl font-bold text-white mb-2">${plan.name}</h5>
          <p class="text-xs text-slate-400 leading-relaxed mb-6">
            ${plan.shortDescription}
          </p>

          <div class="space-y-2.5 pt-4 border-t border-white/10">
            ${plan.features
              .map(
                (f) => `
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-[#09CCA2] mt-0.5 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span class="leading-snug">${f}</span>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="pt-6 mt-6 border-t border-white/10">
          <button
            type="button"
            class="${btnClasses}"
            onclick="selectSolutionAndScroll('${solutionId}', '${plan.id}'); event.stopPropagation();"
          >
            Solicitar Proposta
          </button>
        </div>
      </div>`;
    })
    .join('');
}

function selectPlanCard(tierId) {
  currentSelectedTier = tierId;
  const currentData = SOLUTIONS_DATA[currentActiveSolutionId];
  if (currentData) {
    renderPlans(currentData.plans, currentActiveSolutionId);
  }
}

function selectSolutionAndScroll(solutionId, planTier) {
  const selectEl = document.getElementById('solution');
  if (selectEl) {
    selectEl.value = solutionId;
  }
  const messageEl = document.getElementById('message');
  if (messageEl && planTier && planTier !== 'Geral' && !messageEl.value) {
    messageEl.value = `Olá! Gostaria de receber uma proposta para a solução ${SOLUTIONS_DATA[solutionId]?.name || ''} no plano ${planTier}.`;
  }
  const contactSection = document.getElementById('contato');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==============================================================================
// 4. Manipulação do Formulário de Contato Estático
// ==============================================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Para sites puramente estáticos:
    // Se estiver hospedado no Netlify e tiver data-netlify="true", o envio POST é aceito.
    // Para garantir funcionamento 100% sem servidor ou falha de entrega:
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const solution = document.getElementById('solution')?.value || 'sites';
    const message = document.getElementById('message')?.value || '';

    const solutionLabel = {
      sites: 'MALEMI Sites (Web & Plataformas)',
      bi: 'MALEMI BI (Dados & Dashboards)',
      'automacao-ia': 'MALEMI Automação & IA',
      multiplas: 'Múltiplas Soluções / Diagnóstico Geral'
    }[solution] || solution;

    // Se houver atributo data-netlify e estiver em produção Netlify:
    if (window.location.hostname.includes('netlify') || form.hasAttribute('data-netlify')) {
      // Deixa o form enviar ou envia via fetch
      const formData = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => {
          showFormSuccess(name);
        })
        .catch(() => {
          // Fallback para e-mail
          openMailClient(name, email, company, solutionLabel, message);
        });
      e.preventDefault();
      return;
    }

    e.preventDefault();
    // Execução local ou estática pura: abre o cliente de e-mail com os dados preenchidos
    openMailClient(name, email, company, solutionLabel, message);
    showEmailRedirectNotice(name);
  });
}

function openMailClient(name, email, company, solutionLabel, message) {
  const subject = encodeURIComponent(`Contato MALEMI — ${solutionLabel}`);
  const body = encodeURIComponent(
    `Nome: ${name}\nE-mail: ${email}\nEmpresa: ${company || 'Não informada'}\nSolução de Interesse: ${solutionLabel}\n\nMensagem:\n${message}\n`
  );
  window.location.href = `mailto:contato@malemi.com.br?subject=${subject}&body=${body}`;
}

function showFormSuccess(name) {
  const formCard = document.getElementById('form-container');
  if (!formCard) return;

  formCard.innerHTML = `
    <div class="text-center py-10 space-y-4">
      <div class="w-14 h-14 rounded-full bg-[#09CCA2]/20 border border-[#09CCA2]/50 text-[#09CCA2] flex items-center justify-center mx-auto mb-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h4 class="text-2xl font-bold text-white">Mensagem Enviada com Sucesso!</h4>
      <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
        Agradecemos seu contato${name ? `, ${name}` : ''}. Nossa equipe técnica analisará sua solicitação e retornará em breve.
      </p>
      <div class="pt-4">
        <button type="button" class="btn-secondary text-sm" onclick="location.reload()">
          Enviar outra mensagem
        </button>
      </div>
    </div>
  `;
}

function showEmailRedirectNotice(name) {
  const formCard = document.getElementById('form-container');
  if (!formCard) return;

  formCard.innerHTML = `
    <div class="text-center py-8 space-y-4">
      <div class="w-14 h-14 rounded-full bg-[#09CCA2]/20 border border-[#09CCA2]/50 text-[#09CCA2] flex items-center justify-center mx-auto mb-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h4 class="text-2xl font-bold text-white">Solicitação Encaminhada!</h4>
      <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
        Seu aplicativo de e-mail foi aberto com os dados preenchidos para envio direto a <strong class="text-white">contato@malemi.com.br</strong>.
      </p>
      <p class="text-xs text-slate-400">
        Caso seu cliente de e-mail não tenha aberto automaticamente, você também pode nos contatar diretamente em <strong>contato@malemi.com.br</strong>.
      </p>
      <div class="pt-4 flex justify-center gap-3">
        <button type="button" class="btn-secondary text-xs" onclick="copyEmailToClipboard()">
          Copiar E-mail
        </button>
        <button type="button" class="btn-primary text-xs" onclick="location.reload()">
          Voltar ao formulário
        </button>
      </div>
    </div>
  `;
}

// Copiar e-mail para a área de transferência
function copyEmailToClipboard() {
  navigator.clipboard.writeText('contato@malemi.com.br').then(() => {
    const feedback = document.getElementById('copy-feedback');
    if (feedback) {
      feedback.textContent = 'E-mail copiado com sucesso!';
      feedback.classList.remove('hidden');
      setTimeout(() => feedback.classList.add('hidden'), 3000);
    } else {
      alert('E-mail copiado: contato@malemi.com.br');
    }
  });
}

// ==============================================================================
// 5. Header Scroll & Menu Mobile
// ==============================================================================
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener(
    'scroll',
    () => {
      if (!header) return;
      if (window.scrollY > 20) {
        header.classList.add('bg-[#05070B]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3.5', 'shadow-2xl');
        header.classList.remove('bg-transparent', 'py-5');
      } else {
        header.classList.remove('bg-[#05070B]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3.5', 'shadow-2xl');
        header.classList.add('bg-transparent', 'py-5');
      }
    },
    { passive: true }
  );

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// ==============================================================================
// 6. Modais Institucionais (Termos & Privacidade)
// ==============================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Fecha modais com tecla ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach((modal) => {
      modal.classList.remove('active');
    });
  }
});

// ==============================================================================
// 7. Inicialização no DOMContentLoaded
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTechCanvas();
  initNavigation();
  initContactForm();
  renderSolutionDetails('sites');
});
