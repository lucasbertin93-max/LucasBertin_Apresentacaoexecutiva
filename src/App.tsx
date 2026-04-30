import { useState, useEffect } from 'react';
import {
  CheckCircle,
  BarChart3,
  Users,
  Database,
  TrendingUp,
  MapPin,
  ClipboardList,
  ShieldAlert,
  Info,
  Award,
  Calendar,
  Search,
  ArrowDown
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const networkStats = [
    { label: 'Rede Cadastrada', value: '26.169', sub: 'Lotéricas em base', icon: MapPin, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { label: 'Participantes Ativos', value: '585', sub: 'Engajamento atual', icon: Users, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  ];

  const salesStats = [
    { label: 'Assinaturas Vendidas', value: '110.631', sub: 'Volume total comercializado', icon: BarChart3, iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { label: 'Vendas Cadastradas', value: '1.879', sub: 'Registros recebidos no projeto', icon: ClipboardList, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  ];

  const monthlyData = [
    { month: 'Set/25', qty: 6, cum: 6, pct: '5%' },
    { month: 'Out/25', qty: 247, cum: 253, pct: '100%' },
    { month: 'Nov/25', qty: 126, cum: 379, pct: '50%' },
    { month: 'Dez/25', qty: 49, cum: 428, pct: '20%' },
    { month: 'Jan/26', qty: 21, cum: 449, pct: '8%' },
    { month: 'Fev/26', qty: 12, cum: 461, pct: '5%' },
    { month: 'Mar/26', qty: 84, cum: 545, pct: '35%' },
    { month: 'Abr/26', qty: 40, cum: 585, pct: '15%' },
  ];

  type ItemType = 'fix' | 'improve' | 'fix-improve';
  const journeyCategories: { title: string; count: number; items: { type: ItemType; text: string }[] }[] = [
    {
      title: 'Cadastro',
      count: 6,
      items: [
        { type: 'fix', text: 'Remoção do modal institucional no front (primeiro acesso na home)' },
        { type: 'fix', text: 'Validação de código de lotérica e bloqueio de código inexistente na fase cadastral' },
        { type: 'fix', text: '912 cadastros duplicados com mesmo CPF e DigitalAccount (API Segmentation Vertem)' },
        { type: 'fix', text: 'Mesmo usuário conseguindo se cadastrar com mais de um segmento (Hype/Vertem)' },
        { type: 'fix', text: 'FAQ abrindo com qualquer clique no modal de cadastro no front PRD' },
        { type: 'fix', text: 'Termo de privacidade não atualizado e regulamento não aparece no front' },
      ],
    },
    {
      title: 'Autenticação (OTP)',
      count: 1,
      items: [
        { type: 'fix', text: 'Problema no envio de OTP impedindo autenticação do usuário' },
      ],
    },
    {
      title: 'Registro de Vendas (NSU)',
      count: 5,
      items: [
        { type: 'fix', text: 'Validação de bloqueio de NSU com código de lotérica diferente do cadastro' },
        { type: 'improve', text: 'Validação de NSU via código NSU_CAIXA' },
        { type: 'improve', text: 'Corrigir status de observação com justificativa no front quando a mesma NSU for inserida (Hype/Vertem)' },
        { type: 'improve', text: 'Incluir status de rejeição quando operador inserir NSU com código errado' },
        { type: 'improve', text: 'Tagueamento de cadastros e vendas registradas via bot, separado por canal (Hype/Vertem)' },
      ],
    },
    {
      title: 'Segmentação de Participantes',
      count: 5,
      items: [
        { type: 'fix-improve', text: 'Erro de segmentação no bot Smarters' },
        { type: 'fix', text: 'Problema ao vincular segmentação a participantes — há dependência do time de produtos Vertem' },
        { type: 'fix', text: 'Teste de normalidade dos endpoints de segmentação no Hotsite' },
        { type: 'fix', text: 'Teste de normalidade dos endpoints de segmentação no Bot' },
        { type: 'fix-improve', text: 'Geração de base de benefícios dos donos de lotérica' },
      ],
    },
    {
      title: 'Painel do Dono de Lotérica',
      count: 2,
      items: [
        { type: 'fix', text: 'Correção front Dono de Lotérica (home, metas e performance)' },
        { type: 'fix', text: 'Modal de vendas registradas com tamanho distorcido' },
      ],
    },
  ];

  const itemBadgeStyles: Record<ItemType, string> = {
    'fix': 'bg-rose-100 text-rose-700 border-rose-200',
    'improve': 'bg-blue-100 text-blue-700 border-blue-200',
    'fix-improve': 'bg-purple-100 text-purple-700 border-purple-200',
  };
  const itemBadgeLabels: Record<ItemType, string> = {
    'fix': 'Correção',
    'improve': 'Melhoria',
    'fix-improve': 'Correção → Melhoria',
  };

  const rejectionDetails = [
    {
      label: 'NSU não encontrado (PEC)',
      qty: 1444,
      pct: 81.6,
      subtext: 'O NSU informado na venda não existe na base de transações PEC',
      link: '#nsu-reasons'
    },
    {
      label: 'Divergência de Código',
      qty: 192,
      pct: 10.9,
      subtext: 'Truncamento do último dígito (Padrão: 9 dígitos esperados vs 8 encontrados). Ex: 200190040 → 20019004',
      link: '#code-divergence'
    },
    { label: 'Erro de Segmentação', qty: 122, pct: 6.9 },
    { label: 'Outros', qty: 11, pct: 0.6 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth flex flex-col relative overflow-x-hidden">

      {/* HEADER */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2 bg-blue-600 rounded-xl">
              <Database className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-xl md:text-2xl tracking-tighter text-slate-900">
              DATAVIEW <span className="text-blue-600">EXECUTIVE</span>
            </span>
          </div>
          <div className="hidden lg:flex gap-8 text-[13px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#growth" className="hover:text-slate-800 transition-colors">Crescimento</a>
            <a href="#eligibility" className="hover:text-slate-800 transition-colors">Aderência</a>
            <a href="#failures" className="hover:text-slate-800 transition-colors">Falhas</a>
            <a href="#audit" className="text-blue-600">Auditoria</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-8">
              <Info className="w-3.5 h-3.5" /> ANÁLISE TÉCNICA ABRIL 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight break-words">
              Diagnóstico de <br />
              <span className="text-blue-600">Performance e<br />Dados.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
              Uma investigação sobre as inconsistências dos dados relacionados à base de ganhadores e indicadores do programa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#failures" className="px-8 py-4 bg-[#0f172a] text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex justify-center items-center gap-2 text-center">
                Ver Diagnóstico <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Subtle background gradients from original design */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* STATS GRID */}
      <section className="pb-24 pt-8 bg-white relative z-20 shrink-0">
        <div className="max-w-7xl mx-auto px-6 space-y-6">

          {/* Linha 1 — Rede & Participantes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {networkStats.map((s, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all flex flex-col min-h-[200px] w-full min-w-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${s.iconBg} ${s.iconColor}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-3 tracking-tight truncate">{s.value}</h3>
                  <p className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mb-1 truncate">{s.label}</p>
                  <p className="text-slate-400 text-xs truncate">{s.sub}</p>
                </div>
              </div>
            ))}

            {/* Destaque: Premiados */}
            <a
              href="#eligibility"
              className="group p-8 bg-amber-50 border border-amber-100 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.18)] hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col min-h-[200px] w-full min-w-0 cursor-pointer relative"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 bg-amber-500 text-white">
                <Award className="w-6 h-6" />
              </div>
              <span className="absolute top-6 right-6 inline-flex items-center gap-1 text-[10px] font-black text-amber-700 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                Ver Aderência <ArrowDown className="w-3 h-3 -rotate-[135deg]" />
              </span>
              <div className="mt-auto">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-3 tracking-tight truncate">66</h3>
                <p className="text-amber-700 font-bold text-[11px] uppercase tracking-widest mb-1 truncate">Premiados</p>
                <p className="text-amber-600/80 text-xs truncate">Total de elegíveis identificados</p>
              </div>
            </a>
          </div>

          {/* Linha 2 — Vendas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {salesStats.map((s, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all flex flex-col min-h-[200px] w-full min-w-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${s.iconBg} ${s.iconColor}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-3 tracking-tight truncate">{s.value}</h3>
                  <p className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mb-1 truncate">{s.label}</p>
                  <p className="text-slate-400 text-xs truncate">{s.sub}</p>
                </div>
              </div>
            ))}

            {/* Destaque: Vendas Validadas */}
            <a
              href="#failures"
              className="group p-8 bg-emerald-50 border border-emerald-100 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.18)] hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col min-h-[200px] w-full min-w-0 cursor-pointer relative"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 bg-emerald-600 text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="absolute top-6 right-6 inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                Deep Dive <ArrowDown className="w-3 h-3 -rotate-[135deg]" />
              </span>
              <div className="mt-auto">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-3 tracking-tight truncate">110</h3>
                <p className="text-emerald-700 font-bold text-[11px] uppercase tracking-widest mb-1 truncate">Vendas Validadas</p>
                <p className="text-emerald-600/80 text-xs truncate">Apenas 0,09% do volume total</p>
              </div>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="p-5 md:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              <span className="font-black text-slate-900 uppercase tracking-widest text-[10px] md:text-[11px]">Ponto de Atenção · </span>
              Por solicitação do cliente, foram consideradas vendas válidas a totalidade das <span className="font-black text-slate-900">1.879 vendas cadastradas</span> no programa, independentemente do resultado do cruzamento técnico com a base PEC.
            </p>
          </div>

        </div>
      </section>

      {/* CRESCIMENTO DE CADASTROS */}
      <section id="growth" className="py-24 bg-slate-50 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black mb-4 tracking-tight text-slate-900">Crescimento de Cadastros</h2>
            <p className="text-slate-500 text-base md:text-lg font-medium">Histórico de adesão ao projeto desde o lançamento.</p>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-slate-100 w-full overflow-hidden">
            {/* Top Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8 w-full">
              {monthlyData.map((m, i) => (
                <div key={i} className="flex flex-col items-center p-3 md:p-4 bg-slate-50 rounded-2xl group transition-all w-full min-w-0">
                  <span className="text-[9px] md:text-[10px] font-bold text-slate-500 mb-1.5 uppercase truncate">{m.month}</span>
                  <span className="text-lg md:text-xl font-black text-slate-900 tracking-tight truncate">{m.qty}</span>
                  <div className="mt-4 w-1 h-8 md:h-10 bg-blue-100 rounded-full relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-blue-500 rounded-full" style={{ height: m.pct }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="pt-6 md:pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              {/* Pico (compacto) */}
              <div className="md:col-span-2 flex items-center gap-3 md:gap-4 min-w-0 px-2">
                <div className="p-2.5 md:p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Pico de Adesão</p>
                  <p className="font-black text-slate-900 text-sm md:text-base truncate">Outubro/2025</p>
                  <p className="text-slate-500 text-[11px] md:text-xs font-medium truncate">247 cadastros (42% do total).</p>
                </div>
              </div>

              {/* Reaquecimento (destaque) */}
              <div className="md:col-span-3 flex items-stretch gap-4 md:gap-5 min-w-0 p-4 md:p-5 bg-gradient-to-br from-amber-50 to-amber-100/40 rounded-2xl border border-amber-200/60 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500 text-white rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                    <TrendingUp className="w-2.5 h-2.5" /> Destaque
                  </span>
                </div>
                <div className="p-3 md:p-3.5 bg-amber-500 text-white rounded-2xl shrink-0 self-start shadow-lg shadow-amber-500/30">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-[11px] font-bold text-amber-700 uppercase tracking-widest mb-0.5">Reaquecimento</p>
                  <p className="font-black text-slate-900 text-lg md:text-xl tracking-tight leading-tight">Março/2026</p>
                  <p className="text-slate-700 text-xs md:text-sm font-medium mt-1">
                    <span className="font-black text-amber-700">84 novos registros</span> após o período de estabilidade — sinal positivo de reengajamento da rede.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDAÇÃO DE ELEGIBILIDADE */}
      <section id="eligibility" className="py-24 bg-white border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
              <CheckCircle className="w-3.5 h-3.5" /> ANÁLISE DE ADERÊNCIA · CORTE 13/01/2026
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black mb-6 tracking-tight leading-tight text-slate-900">
              Validação da Base de <span className="text-emerald-600">Elegíveis</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
              Cruzamos a base real de ganhadores com a lista oficial comunicada, validando cada CPF.
              O resultado consolida <span className="font-bold text-slate-700">87,9% de acurácia</span> — uma base sólida com ajustes pontuais já mapeados.
            </p>
          </div>

          {/* Container principal unificado */}
          <div className="bg-slate-50/70 p-6 md:p-10 rounded-[40px] border border-slate-100">

            {/* Bloco superior: comparação cruzada */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-6">

              {/* Esquerda: Base Real */}
              <div className="bg-white p-7 rounded-[28px] border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Base real de ganhadores</p>
                </div>
                <p className="text-5xl md:text-[56px] font-black text-slate-900 leading-none mb-3 tracking-tight">66</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5">Ganhadores identificados após aplicação integral das regras de elegibilidade.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-bold text-slate-600">
                    65 Operadores
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-bold text-slate-600">
                    1 Proprietário
                  </span>
                </div>
              </div>

              {/* Centro: Match (destaque) */}
              <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 p-7 rounded-[28px] text-white shadow-[0_8px_32px_rgba(16,185,129,0.25)] overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5"></div>
                <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/5"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur mb-5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Correspondência por CPF</p>
                  </div>
                  <p className="text-5xl md:text-[56px] font-black leading-none mb-3 tracking-tight">58</p>
                  <p className="text-emerald-50/90 text-sm font-medium leading-relaxed mb-6">CPFs validados em ambas as bases — premiação correta confirmada.</p>
                  <div className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Acurácia</span>
                      <span className="text-2xl font-black">87,9%</span>
                    </div>
                    <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: '87.9%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direita: Lista Comunicada */}
              <div className="bg-white p-7 rounded-[28px] border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Lista oficial comunicada</p>
                </div>
                <p className="text-5xl md:text-[56px] font-black text-slate-900 leading-none mb-3 tracking-tight">71</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5">Participantes incluídos na lista de premiação enviada aos canais.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-bold text-slate-600">
                    Validação por CPF
                  </span>
                </div>
              </div>
            </div>

            {/* Bloco inferior: ajustes mapeados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

              {/* Inclusões pendentes */}
              <div className="bg-white p-6 rounded-[24px] border border-slate-100 flex items-start gap-5 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <Award className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="text-3xl md:text-4xl font-black text-slate-900 leading-none tracking-tight">8</p>
                    <p className="text-amber-600 font-black text-sm">12,1%</p>
                  </div>
                  <p className="text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-2">Inclusões pendentes</p>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Ganhadores elegíveis sem correspondência na lista — passíveis de inclusão retroativa.</p>
                </div>
              </div>

              {/* Em verificação */}
              <div className="bg-white p-6 rounded-[24px] border border-slate-100 flex items-start gap-5 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 border border-slate-200">
                  <Search className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="text-3xl md:text-4xl font-black text-slate-900 leading-none tracking-tight">14</p>
                    <p className="text-slate-500 font-black text-sm">em revisão</p>
                  </div>
                  <p className="text-slate-600 font-bold text-[10px] uppercase tracking-widest mb-2">Notificações sob verificação</p>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Constam na lista comunicada sem premiação registrada — regularização em curso.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leitura executiva */}
          <div className="mt-6 p-8 md:p-10 bg-slate-900 rounded-[32px] text-white">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 md:p-4 bg-white/5 text-emerald-400 rounded-2xl shrink-0 border border-white/10">
                <ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-black text-white text-lg md:text-xl mb-2 tracking-tight">Leitura executiva</p>
                <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">
                  O cruzamento por CPF confirma <span className="font-black text-white">87,9% de acurácia</span> — 58 dos 66 ganhadores reais foram corretamente identificados e comunicados. Os <span className="font-black text-white">8 elegíveis não notificados</span> têm perfil mapeado e são passíveis de inclusão retroativa, e as <span className="font-black text-white">14 notificações sob verificação</span> seguem em regularização. Trata-se de um ajuste fino de processo, com a validade da premiação já realizada plenamente preservada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE: ONDE FALHAMOS */}
      <section id="failures" className="py-16 bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div className="max-w-2xl min-w-0">
              <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight leading-none break-words">
                Deep Dive: <span className="text-rose-500">Rejeições</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium leading-snug">
                A taxa de rejeição de 94,1% é composta por quatro pilares críticos. O principal vilão é o descasamento com a base PEC.
              </p>
            </div>
            <div className="bg-rose-50 px-5 py-3 md:px-6 md:py-4 rounded-2xl border border-rose-100 flex flex-col items-center shrink-0">
              <p className="text-rose-600 font-black text-2xl md:text-3xl leading-none mb-1">1.769</p>
              <p className="text-rose-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center">Total de Rejeições</p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 w-full">

            {/* Left Column - Progress Bars */}
            <div className="w-full xl:w-5/12 space-y-3 shrink-0">
              {rejectionDetails.map((item, idx) => {
                const Wrapper = item.link ? 'a' : 'div';
                const wrapperProps = item.link
                  ? { href: item.link, className: 'group block p-4 md:p-5 bg-slate-50/50 rounded-2xl border border-slate-100 w-full hover:border-rose-300 hover:bg-rose-50/40 hover:shadow-[0_8px_24px_rgba(244,63,94,0.12)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative' }
                  : { className: 'p-4 md:p-5 bg-slate-50/50 rounded-2xl border border-slate-100 w-full' };
                return (
                  <Wrapper key={idx} {...wrapperProps}>
                    <div className="flex justify-between items-end mb-2 gap-4">
                      <span className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                        {item.label}
                        {item.link && (
                          <span className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-black text-rose-600 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                            ver motivos <ArrowDown className="w-3 h-3 -rotate-[135deg]" />
                          </span>
                        )}
                      </span>
                      <span className="text-rose-600 font-black text-base md:text-lg shrink-0">{item.pct}%</span>
                    </div>

                    {item.subtext && (
                      <p className="text-[11px] md:text-xs text-slate-500 leading-snug mb-2.5 italic font-medium">
                        {item.subtext}
                      </p>
                    )}

                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-auto">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Right Column - Table Card */}
            <div className="w-full xl:w-7/12 min-w-0">
              <div className="bg-[#0f172a] rounded-[24px] md:rounded-[32px] p-5 md:p-8 text-white overflow-hidden relative h-full flex flex-col w-full">
                <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none">
                  <ShieldAlert className="w-40 h-40 md:w-52 md:h-52" />
                </div>

                <h3 className="text-lg md:text-xl font-black mb-5 md:mb-6 tracking-tight relative z-10">
                  Amostragem de Erros no Cadastro
                </h3>

                <div className="overflow-x-auto relative z-10 flex-1 -mx-5 md:mx-0 px-5 md:px-0">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest border-b border-white/10">
                      <tr>
                        <th className="pb-3 font-bold">Cargo</th>
                        <th className="pb-3 font-bold">Código Inserido</th>
                        <th className="pb-3 font-bold">Natureza do Erro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { role: 'Operador', code: '01005486', err: 'Zero à esquerda forçado' },
                        { role: 'Gerente', code: '030068592', err: 'Prefixo 030 indevido' },
                        { role: 'Geral', code: '20019004', err: 'Dígito truncado (Falta o 0)' },
                      ].map((row, i) => (
                        <tr key={i} className="group">
                          <td className="py-3 md:py-4 font-medium text-slate-300 text-xs md:text-sm">{row.role}</td>
                          <td className="py-3 md:py-4 font-mono text-blue-400 text-xs md:text-sm">{row.code}</td>
                          <td className="py-3 md:py-4 text-rose-400 font-bold text-xs md:text-sm">{row.err}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 p-4 md:p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative z-10">
                  <p className="text-xs md:text-sm text-slate-300 italic font-medium leading-snug">
                    Impacto direto: Apenas em Abril/26, 59 novos erros foram gerados devido a divergência de código de lotéricas, impedindo que participantes recebessem seus prêmios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSSÍVEIS MOTIVOS - NSU PEC */}
      <section id="nsu-reasons" className="py-16 bg-white border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold mb-4">
              <Search className="w-3 h-3" /> ANÁLISE DE CAUSA-RAIZ · NSU PEC
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight leading-tight text-slate-900">
              Possíveis <span className="text-rose-500">Motivos</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-snug">
              Investigação detalhada das <span className="font-black text-slate-900">1.444 rejeições</span> por NSU não encontrado: identificamos quatro categorias de causa, com estimativa de incidência relativa.
            </p>
          </div>

          {/* Cards 4 categorias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* 1. Erro de Digitação */}
            <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-sm shrink-0">1</div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">Erro de Digitação</h3>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] md:text-[11px] font-black tracking-widest shrink-0">~20-30%</span>
              </div>
              <ul className="space-y-1 text-xs md:text-sm text-slate-600 font-medium mb-4 leading-snug">
                <li className="flex gap-2"><span className="text-amber-500 shrink-0">•</span> Zero à esquerda removido ou adicionado incorretamente</li>
                <li className="flex gap-2"><span className="text-amber-500 shrink-0">•</span> Dígitos trocados de posição</li>
                <li className="flex gap-2"><span className="text-amber-500 shrink-0">•</span> Falta de um dígito (8 ao invés de 9)</li>
              </ul>
              <div className="mt-auto pt-3 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Exemplos</p>
                <p className="font-mono text-xs md:text-sm text-slate-800">045932896 · 011926822 · 04565654</p>
              </div>
            </div>

            {/* 2. NSU Teste/Fictício */}
            <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-black text-sm shrink-0">2</div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">NSU de Teste/Fictício</h3>
                </div>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] md:text-[11px] font-black tracking-widest shrink-0">~5-10%</span>
              </div>
              <ul className="space-y-1 text-xs md:text-sm text-slate-600 font-medium leading-snug">
                <li className="flex gap-2"><span className="text-slate-400 shrink-0">•</span> Sequências óbvias: <span className="font-mono text-slate-800">12345678, 987654321</span></li>
                <li className="flex gap-2"><span className="text-slate-400 shrink-0">•</span> Repetições: <span className="font-mono text-slate-800">99999999, 89898989</span></li>
                <li className="flex gap-2"><span className="text-slate-400 shrink-0">•</span> Zeros: <span className="font-mono text-slate-800">000000001, 000000002</span></li>
              </ul>
            </div>

            {/* 3. Inexistente PEC - DESTAQUE */}
            <div className="md:col-span-2 p-5 md:p-7 bg-[#0f172a] rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-5 right-5 opacity-[0.04] pointer-events-none">
                <ShieldAlert className="w-32 h-32 md:w-44 md:h-44" />
              </div>
              <div className="flex items-start justify-between mb-3 gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black text-sm shrink-0">3</div>
                  <div>
                    <p className="text-rose-400 font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-0.5">Maior incidência</p>
                    <h3 className="text-base md:text-lg font-black tracking-tight">Inexistente na Base PEC</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-rose-500/20 text-rose-300 rounded-full text-[10px] md:text-[11px] font-black tracking-widest shrink-0">~60-70%</span>
              </div>
              <ul className="space-y-1 text-xs md:text-sm text-slate-300 font-medium relative z-10 leading-snug">
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">•</span> NSU digitado corretamente, mas não existe no sistema PEC</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">•</span> Pode ser de outra lotérica</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">•</span> Transação ainda não processada no PEC</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">•</span> NSU de produto/serviço não elegível</li>
              </ul>
            </div>

            {/* 4. Formatação */}
            <div className="md:col-span-2 p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm shrink-0">4</div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">Formatação Incorreta</h3>
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-[11px] font-black tracking-widest shrink-0">~5%</span>
              </div>
              <ul className="space-y-1 text-xs md:text-sm text-slate-600 font-medium leading-snug">
                <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span> Zeros à esquerda adicionados/removidos</li>
                <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span> Espaços ou caracteres especiais</li>
              </ul>
            </div>
          </div>

          {/* Problema Adicional - Código Lotérica */}
          <div className="bg-white rounded-2xl md:rounded-[28px] p-5 md:p-7 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-start">
              <div className="p-2.5 md:p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-rose-600 font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-1">Problema Adicional Identificado</p>
                <h3 className="text-lg md:text-xl font-black tracking-tight text-slate-900">Código de Lotérica</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium leading-snug">
                  <span className="font-black text-slate-900">161 rejeições</span> por código de lotérica divergente — sempre por 1 dígito faltando ou adicionado.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-left min-w-[480px]">
                <thead className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-widest border-b border-slate-200">
                  <tr>
                    <th className="pb-2.5 font-black">Esperado</th>
                    <th className="pb-2.5 font-black">Encontrado</th>
                    <th className="pb-2.5 font-black">Diferença</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { expected: '1008043', found: '01008043', diff: 'Zero à esquerda adicionado' },
                    { expected: '200190040', found: '20019004', diff: 'Último dígito cortado' },
                    { expected: '190032944', found: '19003294', diff: 'Último dígito cortado' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 md:py-3 font-mono text-blue-600 text-xs md:text-sm font-bold">{row.expected}</td>
                      <td className="py-2.5 md:py-3 font-mono text-rose-500 text-xs md:text-sm font-bold">{row.found}</td>
                      <td className="py-2.5 md:py-3 text-slate-700 text-xs md:text-sm font-medium">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSA-RAIZ - DIVERGÊNCIA DE CÓDIGO */}
      <section id="code-divergence" className="py-16 bg-white border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold mb-4">
              <Search className="w-3 h-3" /> ANÁLISE DE CAUSA-RAIZ · CÓDIGO DE LOTÉRICA
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight leading-tight text-slate-900">
              Divergência de <span className="text-rose-500">Código</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-snug">
              Análise das <span className="font-black text-slate-900">192 rejeições</span> por divergência de código de lotérica. O padrão é claro: truncamento do último dígito.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Card destaque - causa principal */}
            <div className="lg:col-span-1 p-5 md:p-6 bg-[#0f172a] rounded-2xl text-white relative overflow-hidden flex flex-col">
              <div className="absolute top-5 right-5 opacity-[0.04] pointer-events-none">
                <ShieldAlert className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <p className="text-rose-400 font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-2">Padrão Identificado</p>
                <h3 className="text-lg md:text-xl font-black tracking-tight mb-3">Truncamento do Último Dígito</h3>
                <div className="inline-flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-black leading-none">~95%</span>
                  <span className="text-xs md:text-sm text-slate-400 font-medium">dos casos</span>
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-medium leading-snug">
                  Em praticamente todas as ocorrências, o sistema recebe <span className="font-black text-white">8 dígitos</span> quando o esperado seriam <span className="font-black text-white">9 dígitos</span> — sempre o último é cortado.
                </p>
              </div>
            </div>

            {/* Tabela de exemplos */}
            <div className="lg:col-span-2 p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <p className="text-rose-600 font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-3">Amostragem de Casos</p>
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left min-w-[480px]">
                  <thead className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-widest border-b border-slate-200">
                    <tr>
                      <th className="pb-2.5 font-black">Esperado</th>
                      <th className="pb-2.5 font-black">Encontrado</th>
                      <th className="pb-2.5 font-black">Diferença</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { expected: '200190040', found: '20019004', diff: 'Falta 1 dígito' },
                      { expected: '190032944', found: '19003294', diff: 'Falta 1 dígito' },
                      { expected: '190067039', found: '19006703', diff: 'Falta 1 dígito' },
                      { expected: '210010401', found: '21001040', diff: 'Falta 1 dígito' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-2.5 md:py-3 font-mono text-blue-600 text-xs md:text-sm font-bold">{row.expected}</td>
                        <td className="py-2.5 md:py-3 font-mono text-rose-500 text-xs md:text-sm font-bold">{row.found}</td>
                        <td className="py-2.5 md:py-3 text-slate-700 text-xs md:text-sm font-medium">{row.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITORIA DA JORNADA */}
      <section id="audit" className="py-24 bg-slate-50 border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6">
              <ClipboardList className="w-3.5 h-3.5" /> AUDITORIA DA JORNADA · 19 ITENS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black mb-6 tracking-tight leading-tight text-slate-900">
              Correções & Melhorias <span className="text-blue-600">Aplicadas</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
              Diagnóstico end-to-end da jornada do usuário, com classificação por natureza da intervenção e priorização por etapa.
            </p>
          </div>

          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-rose-50 rounded-[28px] border border-rose-100">
              <p className="text-rose-600 font-bold text-[10px] uppercase mb-3 tracking-widest">Correções</p>
              <p className="text-5xl md:text-[56px] font-black mb-2 leading-none tracking-tight text-slate-900">13</p>
              <p className="text-rose-700 text-sm font-medium">Bugs e inconsistências que precisam ser sanados.</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-[28px] border border-blue-100">
              <p className="text-blue-600 font-bold text-[10px] uppercase mb-3 tracking-widest">Melhorias</p>
              <p className="text-5xl md:text-[56px] font-black mb-2 leading-none tracking-tight text-slate-900">4</p>
              <p className="text-blue-700 text-sm font-medium">Refinamentos da experiência e da rastreabilidade.</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-[28px] border border-purple-100">
              <p className="text-purple-600 font-bold text-[10px] uppercase mb-3 tracking-widest">Correção + Melhoria</p>
              <p className="text-5xl md:text-[56px] font-black mb-2 leading-none tracking-tight text-slate-900">2</p>
              <p className="text-purple-700 text-sm font-medium">Itens com fix imediato e ganho estrutural.</p>
            </div>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            {journeyCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-3 gap-4 flex-wrap">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#0f172a] text-white flex items-center justify-center font-black text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="min-w-0 flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">{cat.title}</h3>
                      <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{cat.count} itens</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2 md:px-4 md:py-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className={`shrink-0 inline-flex items-center self-start px-2.5 py-0.5 rounded-full border text-[9px] md:text-[10px] font-black uppercase tracking-widest ${itemBadgeStyles[item.type]}`}>
                        {itemBadgeLabels[item.type]}
                      </span>
                      <p className="text-slate-700 text-xs md:text-sm font-medium flex-1 leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leitura cruzada */}
          <div className="mt-12 p-8 md:p-12 bg-[#0f172a] rounded-[32px] md:rounded-[48px] text-white relative overflow-hidden">
            <div className="absolute top-8 right-8 opacity-[0.04] pointer-events-none">
              <Search className="w-40 h-40 md:w-56 md:h-56" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="p-3 md:p-4 bg-blue-500/20 text-blue-400 rounded-2xl shrink-0">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-blue-400 font-bold text-[10px] uppercase mb-2 tracking-widest">Leitura cruzada</p>
                <h3 className="text-xl md:text-2xl font-black mb-6 tracking-tight">Onde a jornada concentra risco</h3>
                <ul className="space-y-3 text-sm md:text-base text-slate-300 font-medium">
                  <li className="flex gap-3"><span className="text-blue-400 shrink-0">•</span><span><span className="font-black text-white">Cadastro</span> é a etapa mais frágil (6 correções), com vulnerabilidades de validação na API Vertem — destaque para cadastros duplicados e multi-segmentação.</span></li>
                  <li className="flex gap-3"><span className="text-blue-400 shrink-0">•</span><span><span className="font-black text-white">Autenticação (OTP)</span> tem apenas 1 item, mas é de altíssimo impacto: bloqueia 100% dos usuários já cadastrados.</span></li>
                  <li className="flex gap-3"><span className="text-blue-400 shrink-0">•</span><span><span className="font-black text-white">Registro de Vendas (NSU)</span> concentra o maior volume de melhorias — a mecânica funciona, mas falta feedback ao operador e rastreabilidade por canal.</span></li>
                  <li className="flex gap-3"><span className="text-blue-400 shrink-0">•</span><span><span className="font-black text-white">Segmentação</span> apresenta gargalo operacional: há dependência do time de produtos Vertem.</span></li>
                  <li className="flex gap-3"><span className="text-blue-400 shrink-0">•</span><span><span className="font-black text-white">Painel do Dono</span> são ajustes de UI — menor prioridade funcional, mas afetam diretamente a percepção de quem precisa enxergar metas e performance.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <footer className="py-8 md:py-10 bg-black text-slate-600 border-t border-white/5 shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[9px] md:text-[10px] tracking-widest uppercase font-black">© 2026 DataInsights Executive Reporting System</p>
          <div className="flex gap-4 md:gap-8">
            <span className="text-rose-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Confidencial</span>
            <span className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Uso Restrito - Board</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;