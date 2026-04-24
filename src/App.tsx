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
  ArrowDown,
  UserCheck,
  Store
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Rede Cadastrada', value: '26.169', sub: 'Lotéricas em base', icon: MapPin, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { label: 'Participantes Ativos', value: '585', sub: 'Engajamento atual', icon: Users, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { label: 'Volume de Vendas', value: '110.631', sub: 'Total processado', icon: BarChart3, iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { label: 'Vendas Validadas', value: '110', sub: 'Apenas 0.09% do total', icon: CheckCircle, iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
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

  const operators = [
    { name: 'Operador prd', cpf: '***.682.410-**', sales: 23, prizes: 3 },
    { name: 'Mário Hugo Gael Aragão', cpf: '***.240.812-**', sales: 22, prizes: 3 },
    { name: 'Thaina Santos', cpf: '***.311.308-**', sales: 12, prizes: 2 },
    { name: 'Leando Monteiro de Souza', cpf: '***.002.759-**', sales: 11, prizes: 1 },
    { name: 'Taiany Costa Santos', cpf: '***.164.368-**', sales: 11, prizes: 1 },
    { name: 'Vitor Brito', cpf: '***.617.348-**', sales: 8, prizes: 1 },
    { name: 'Katharina Buratto', cpf: '***.546.608-**', sales: 6, prizes: 1 },
    { name: 'Caixa Trinta e Dois', cpf: '***.597.470-**', sales: 6, prizes: 1 },
    { name: 'Mateus Silva', cpf: '***.506.180-**', sales: 6, prizes: 1 },
    { name: 'Andrezza Silva', cpf: '***.731.358-**', sales: 6, prizes: 1 },
  ];

  const owners = [
    { name: 'Dono Lotérica (Cód. 33024187)', cpf: '***.561.398-**', sales: 25, prizes: 1 },
    { name: 'Dono Lotérica (Cód. 01008043)', cpf: '***.001.564-**', sales: 23, prizes: 1 },
  ];

  const rejectionDetails = [
    {
      label: 'NSU não encontrado (PEC)',
      qty: 1444,
      pct: 81.6,
      subtext: 'O NSU informado na venda não existe na base de transações PEC'
    },
    {
      label: 'Divergência de Código',
      qty: 192,
      pct: 10.9,
      subtext: 'Truncamento do último dígito (Padrão: 9 dígitos esperados vs 8 encontrados). Ex: 200190040 → 20019004'
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
            <a href="#context" className="hover:text-slate-800 transition-colors">Contexto</a>
            <a href="#growth" className="hover:text-slate-800 transition-colors">Crescimento</a>
            <a href="#failures" className="hover:text-slate-800 transition-colors">Falhas</a>
            <a href="#winners" className="hover:text-slate-800 transition-colors">Resultados</a>
            <a href="#plan" className="text-blue-600">Plano de Ação</a>
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
              Uma investigação profunda sobre as inconsistências entre o dashboard do Databricks e as informações contidas no banco de dados + identificação de gargalos que impedem a validação de 94% das vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#failures" className="px-8 py-4 bg-[#0f172a] text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex justify-center items-center gap-2 text-center">
                Ver Diagnóstico <ArrowDown className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-700">Dashboard V2 em Revisão</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background gradients from original design */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* STATS GRID */}
      <section className="pb-24 pt-8 bg-white relative z-20 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
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
          </div>
        </div>
      </section>

      {/* ORIGEM DA INCONSISTÊNCIA */}
      <section id="context" className="py-24 bg-white border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start w-full">

            {/* Left Column - Text */}
            <div className="w-full xl:w-1/2 shrink-0">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 mb-8 tracking-tight leading-tight">A Origem da Inconsistência</h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  Após análise técnica, confirmamos que a divergência visual no dashboard Databricks não é um erro de dados no banco, mas sim o <span className="font-bold text-slate-900">caminho de busca das informações</span>.
                </p>
                <div className="p-6 md:p-8 bg-blue-50/80 rounded-3xl">
                  <p className="text-blue-800 font-medium italic text-base md:text-lg leading-relaxed">
                    "As informações de cargo e UF estão integras no banco. O time de dados já possui uma versão V2 do dashboard que reflete corretamente estes dados e aguarda publicação"
                  </p>
                </div>
                <p>
                  O problema central reside no processamento do campo <code className="bg-rose-50 text-rose-600 px-2 py-1 rounded-md font-mono text-sm font-bold break-all">codigoLoterica</code>, onde inconsistências de formatação impedem o vínculo entre participante e unidade.
                </p>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="w-full xl:w-1/2 min-w-0">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1 p-6 md:p-8 bg-[#0f172a] rounded-[32px] text-white flex flex-col justify-center min-h-[220px] min-w-0">
                  <p className="text-blue-400 font-bold text-[10px] md:text-xs uppercase mb-4 tracking-widest truncate">Participantes</p>
                  <p className="text-5xl md:text-[56px] font-black mb-2 leading-none tracking-tight truncate">375</p>
                  <p className="text-slate-400 text-xs md:text-sm font-medium">Operadores ativos no projeto.</p>
                </div>
                <div className="flex-1 p-6 md:p-8 bg-blue-600 rounded-[32px] text-white flex flex-col justify-center min-h-[220px] min-w-0">
                  <p className="text-blue-200 font-bold text-[10px] md:text-xs uppercase mb-4 tracking-widest truncate">Donos</p>
                  <p className="text-5xl md:text-[56px] font-black mb-2 leading-none tracking-tight truncate">196</p>
                  <p className="text-blue-100 text-xs md:text-sm font-medium">Responsáveis engajados.</p>
                </div>
              </div>
              <div className="w-full p-6 md:p-8 bg-slate-50 rounded-[32px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border border-slate-100 min-w-0">
                <div className="min-w-0">
                  <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase mb-2 tracking-widest truncate">Registros Incorretos</p>
                  <p className="text-4xl md:text-[40px] font-black text-slate-900 leading-none mb-2 tracking-tight">12</p>
                  <p className="text-slate-500 text-xs md:text-sm font-medium truncate">Gerentes e Superintendentes</p>
                </div>
                <div className="flex -space-x-4 shrink-0">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-slate-200 shadow-sm"></div>)}
                </div>
              </div>
            </div>

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

          <div className="bg-white p-6 md:p-10 rounded-[48px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-slate-100 w-full overflow-hidden">
            {/* Top Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10 w-full">
              {monthlyData.map((m, i) => (
                <div key={i} className="flex flex-col items-center p-4 md:p-6 bg-slate-50 rounded-3xl group transition-all w-full min-w-0">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 mb-2 uppercase truncate">{m.month}</span>
                  <span className="text-2xl md:text-[28px] font-black text-slate-900 tracking-tight truncate">{m.qty}</span>
                  <div className="mt-6 w-1 h-12 md:h-16 bg-blue-100 rounded-full relative overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-blue-500 rounded-full" style={{ height: m.pct }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="pt-8 md:pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-2 md:px-4">
              <div className="flex items-center gap-4 md:gap-5 min-w-0">
                <div className="p-3 md:p-4 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-black text-slate-900 text-base md:text-lg truncate">Pico de Adesão: Outubro/2025</p>
                  <p className="text-slate-500 text-xs md:text-sm font-medium truncate">247 novos cadastros em um único mês (42% do total).</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-5 min-w-0">
                <div className="p-3 md:p-4 bg-amber-50 text-amber-600 rounded-2xl shrink-0">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-black text-slate-900 text-base md:text-lg truncate">Reaquecimento: Março/2026</p>
                  <p className="text-slate-500 text-xs md:text-sm font-medium truncate">84 novos registros após período de estabilidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE: ONDE FALHAMOS */}
      <section id="failures" className="py-24 bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl min-w-0">
              <h2 className="text-4xl md:text-[48px] font-black mb-6 tracking-tight leading-none break-words">
                Deep Dive: <span className="text-rose-500">Onde Falhamos</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                A taxa de rejeição de 94,1% é composta por quatro pilares críticos. O principal vilão é o descasamento com a base PEC.
              </p>
            </div>
            <div className="bg-rose-50 px-6 py-4 md:px-8 md:py-5 rounded-3xl border border-rose-100 flex flex-col items-center shrink-0">
              <p className="text-rose-600 font-black text-3xl md:text-[40px] leading-none mb-1">1.769</p>
              <p className="text-rose-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center">Total de Rejeições</p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 w-full">

            {/* Left Column - Progress Bars */}
            <div className="w-full xl:w-5/12 space-y-4 shrink-0">
              {rejectionDetails.map((item, idx) => (
                <div key={idx} className="p-5 md:p-6 bg-slate-50/50 rounded-3xl border border-slate-100 w-full">
                  <div className="flex justify-between items-end mb-3 gap-4">
                    <span className="font-bold text-slate-800 text-base md:text-lg">{item.label}</span>
                    <span className="text-rose-600 font-black text-lg md:text-xl shrink-0">{item.pct}%</span>
                  </div>

                  {item.subtext && (
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-4 italic font-medium">
                      {item.subtext}
                    </p>
                  )}

                  <div className="w-full bg-slate-200 h-2 md:h-2.5 rounded-full overflow-hidden mt-auto">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Table Card */}
            <div className="w-full xl:w-7/12 min-w-0">
              <div className="bg-[#0f172a] rounded-[32px] md:rounded-[48px] p-6 md:p-12 text-white overflow-hidden relative h-full flex flex-col w-full">
                <div className="absolute top-12 right-12 opacity-[0.03] pointer-events-none">
                  <ShieldAlert className="w-48 h-48 md:w-64 md:h-64" />
                </div>

                <h3 className="text-xl md:text-2xl font-black mb-8 md:mb-10 tracking-tight relative z-10">
                  Amostragem de Erros no Cadastro
                </h3>

                <div className="overflow-x-auto relative z-10 flex-1 -mx-6 md:mx-0 px-6 md:px-0">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest border-b border-white/10">
                      <tr>
                        <th className="pb-4 font-bold">Cargo</th>
                        <th className="pb-4 font-bold">Código Inserido</th>
                        <th className="pb-4 font-bold">Natureza do Erro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { role: 'Operador', code: '01005486', err: 'Zero à esquerda forçado' },
                        { role: 'Gerente', code: '030068592', err: 'Prefixo 030 indevido' },
                        { role: 'Geral', code: '20019004', err: 'Dígito truncado (Falta o 0)' },
                      ].map((row, i) => (
                        <tr key={i} className="group">
                          <td className="py-4 md:py-6 font-medium text-slate-300 text-sm md:text-base">{row.role}</td>
                          <td className="py-4 md:py-6 font-mono text-blue-400 text-sm md:text-base">{row.code}</td>
                          <td className="py-4 md:py-6 text-rose-400 font-bold text-sm md:text-base">{row.err}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm relative z-10">
                  <p className="text-xs md:text-sm text-slate-300 italic font-medium leading-relaxed">
                    Impacto direto: Apenas em Abril/26, 59 novos erros foram gerados devido a divergência de código de lotéricas, impedindo que participantes recebessem seus prêmios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MURO DOS GANHADORES */}
      <section id="winners" className="py-24 bg-slate-50 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start w-full">

            {/* Left Column */}
            <div className="w-full xl:w-1/3 xl:sticky xl:top-32 shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <Award className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h2 className="text-4xl md:text-[48px] font-black mb-6 italic leading-none tracking-tight">
                Muro dos <br /><span className="text-amber-500">Ganhadores</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
                Identificamos um total de <span className="text-slate-900 font-black">12 participantes</span> com vendas validadas. Apesar das barreiras sistêmicas, estes perfis atingiram as metas de premiação.
              </p>

              <div className="p-8 md:p-10 bg-[#0f172a] rounded-[32px] md:rounded-[40px] text-white">
                <p className="text-blue-400 font-bold text-[10px] md:text-[11px] uppercase mb-6 tracking-widest">Total de Ganhadores</p>
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <span className="text-6xl md:text-[72px] font-black leading-none tracking-tight">12</span>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm md:text-base font-bold text-white leading-tight">Perfis</p>
                    <p className="text-xs md:text-sm text-slate-400 font-medium">Validados</p>
                  </div>
                </div>
                <div className="pt-6 md:pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl md:text-[32px] font-black leading-none mb-1">10</p>
                    <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest">Operadores</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-[32px] font-black leading-none mb-1">02</p>
                    <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest">Donos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full xl:w-2/3 space-y-12 md:space-y-16 min-w-0">

              {/* Donos */}
              <div className="w-full min-w-0">
                <h3 className="flex items-center gap-2 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                  <Store className="w-4 h-4" /> Donos de Lotérica (02)
                </h3>
                <div className="space-y-4 w-full">
                  {owners.map((w, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-amber-200 transition-all gap-4 min-w-0">
                      <div className="flex items-center gap-4 md:gap-6 min-w-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-2xl flex items-center justify-center font-black text-amber-500 text-base md:text-lg shrink-0">
                          {i + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-slate-900 text-base md:text-lg truncate">{w.name}</p>
                          <p className="text-xs md:text-sm text-slate-400 font-mono mt-0.5 truncate">CPF: {w.cpf}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 md:gap-8 text-right sm:shrink-0">
                        <div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Vendas</p>
                          <p className="font-black text-slate-900 text-lg md:text-xl leading-none">{w.sales}</p>
                        </div>
                        <div className="px-4 py-2 md:px-5 md:py-3 bg-amber-50 rounded-xl">
                          <p className="text-[9px] md:text-[10px] text-amber-600 uppercase font-bold tracking-widest mb-1">Prêmios</p>
                          <p className="font-black text-amber-600 text-lg md:text-xl leading-none text-center">{w.prizes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operadores */}
              <div className="w-full min-w-0">
                <h3 className="flex items-center gap-2 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                  <UserCheck className="w-4 h-4" /> Operadores Destaque (10)
                </h3>
                <div className="space-y-4 w-full">
                  {operators.slice(0, 3).map((w, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-white rounded-3xl shadow-sm border border-slate-100 border-l-4 border-l-blue-500 transition-all gap-4 min-w-0">
                      <div className="flex items-center gap-4 md:gap-6 min-w-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-2xl flex items-center justify-center font-black text-blue-600 text-base md:text-lg shrink-0">
                          {i + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-slate-900 text-base md:text-lg truncate">{w.name}</p>
                          <p className="text-xs md:text-sm text-slate-400 font-mono mt-0.5 truncate">CPF: {w.cpf}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 md:gap-12 text-right sm:pr-4 sm:shrink-0">
                        <div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Vendas</p>
                          <p className="font-black text-slate-900 text-lg md:text-xl leading-none">{w.sales}</p>
                        </div>
                        <div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Prêmios</p>
                          <p className="font-black text-slate-900 text-lg md:text-xl leading-none text-center">{w.prizes}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="relative py-6 md:py-8 flex items-center justify-center">
                    <div className="absolute w-full h-px bg-slate-200"></div>
                    <div className="relative px-4 py-1.5 md:px-6 md:py-2 bg-slate-50 border border-slate-200 rounded-full text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-center">
                      + 6 Operadores Ganhadores
                    </div>
                  </div>

                  {operators.slice(-1).map((w, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-white rounded-3xl shadow-sm border border-slate-100 border-l-4 border-l-slate-200 transition-all opacity-70 gap-4 min-w-0">
                      <div className="flex items-center gap-4 md:gap-6 min-w-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-400 text-base md:text-lg shrink-0">
                          10
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-slate-900 text-base md:text-lg truncate">{w.name}</p>
                          <p className="text-xs md:text-sm text-slate-400 font-mono mt-0.5 truncate">CPF: {w.cpf}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 md:gap-12 text-right sm:pr-4 sm:shrink-0">
                        <div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Vendas</p>
                          <p className="font-black text-slate-900 text-lg md:text-xl leading-none">{w.sales}</p>
                        </div>
                        <div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Prêmios</p>
                          <p className="font-black text-slate-900 text-lg md:text-xl leading-none text-center">{w.prizes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PLANO DE AÇÃO */}
      <section id="plan" className="py-24 bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-[48px] font-black mb-6 italic text-slate-900 tracking-tight leading-none">
              <span className="underline decoration-blue-600 decoration-[4px] md:decoration-[6px] underline-offset-[8px] md:underline-offset-[12px]">Caminho para Solução</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium tracking-tight mt-8 md:mt-10">
              Não basta identificar os erros; precisamos de um roadmap de correção estrutural.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-start w-full">

            {/* Left Card */}
            <div className="w-full xl:w-1/2 p-8 md:p-12 bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-w-0">
              <h3 className="text-2xl md:text-[28px] font-black mb-8 md:mb-10 flex items-center gap-3 md:gap-4 text-slate-900 tracking-tight">
                <Search className="w-6 h-6 md:w-8 md:h-8 text-blue-600 shrink-0" /> Diagnóstico Conclusivo
              </h3>
              <div className="space-y-8 md:space-y-10">
                {[
                  { title: 'Rejeição Massiva (94%)', text: '' },
                  { title: 'Truncamento de Dados', text: 'O processo de cadastro está permitindo inputs sem validação de máscara, gerando códigos de lotérica inválidos para cruzamento.' },
                  { title: 'Vendas Órfãs', text: '' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6">
                    <div className="mt-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-500 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-slate-900 text-xl md:text-2xl mb-2 md:mb-3 tracking-tight break-words">{item.title}</p>
                      {item.text && <p className="text-slate-500 leading-relaxed font-medium text-base md:text-lg">{item.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full xl:w-1/2 p-8 md:p-12 bg-blue-600 rounded-[32px] md:rounded-[48px] text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] min-w-0">
              <h3 className="text-2xl md:text-[28px] font-black mb-8 md:mb-10 flex items-center gap-3 md:gap-4 tracking-tight">
                <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-blue-200 shrink-0" /> Ações Prioritárias
              </h3>
              <div className="space-y-4">
                {[
                  { level: 'URGENTE', task: 'Investigar Integração PEC (NSU)', impact: 'Recupera 81,6% das rejeições' },
                  { level: 'ALTA', task: 'Implementar Máscaras no Cadastro', impact: 'Estanca a geração de novos erros' },
                  { level: 'MÉDIA', task: 'Vincular Operadores a Lotéricas', impact: 'Libera 31 prêmios pendentes' },
                  { level: 'ESTRATÉGICA', task: 'Publicação do Dashboard V2', impact: 'Alinhamento de expectativas executivas' },
                ].map((action, i) => (
                  <div key={i} className="group p-5 md:p-6 bg-white/10 rounded-[20px] md:rounded-[24px] border border-white/10 hover:bg-white hover:text-blue-600 transition-all duration-300 min-w-0">
                    <div className="flex flex-wrap justify-between items-center mb-2 md:mb-3 gap-2">
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-70 group-hover:text-blue-400">{action.level}</span>
                      <span className="text-[10px] md:text-xs font-bold opacity-90 group-hover:opacity-100">{action.impact}</span>
                    </div>
                    <p className="font-black text-xl md:text-2xl leading-tight tracking-tight break-words">{action.task}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 md:py-24 bg-[#0f172a] text-white text-center relative overflow-hidden shrink-0">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-[40px] font-black mb-10 md:mb-12 tracking-tight leading-tight italic break-words">
            Deseja o relatório técnico completo em PDF?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-blue-600 rounded-[16px] md:rounded-[20px] font-black text-base md:text-lg hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40">
              Exportar Dados Raw (.xlsx)
            </button>
            <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white/5 rounded-[16px] md:rounded-[20px] font-black text-base md:text-lg hover:bg-white/10 transition-all border border-white/10 hover:scale-105 active:scale-95">
              Solicitar Revisão PEC
            </button>
          </div>
          <div className="mt-16 md:mt-24 flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 text-slate-500 font-bold text-[10px] md:text-[11px] uppercase tracking-widest">
            <span>Dados Atualizados: 23/04/2026</span>
            <span>ID Projeto: 401-LOT</span>
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