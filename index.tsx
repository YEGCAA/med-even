
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- SVGs for Icons ---
const CheckIcon = () => (
  <svg className="w-6 h-6 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const FilterIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);

const PhoneCallIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const StarIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
);

const TrendUpIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);

const MegaphoneIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
);


// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-center items-center">
        {/* Logo - Centered and resized */}
        <div className="h-10 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="https://i.ibb.co/nsjrqxz4/Design-sem-nome-1.png" alt="Even Med Logo" className="h-full w-auto object-contain" />
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden" id="hero">

      {/* Background Decor - Animated Moving Light */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[1400px] h-[1400px] rounded-full blur-3xl opacity-70 animated-light"
          style={{
            background: 'radial-gradient(circle, rgba(22, 147, 227, 0.9) 0%, rgba(22, 147, 227, 0.5) 40%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-black/40 z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl mb-16">

        {/* Fixed Light Point on Hero Title */}
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30 z-0"
          style={{
            background: 'radial-gradient(circle, rgba(22, 147, 227, 0.6) 0%, transparent 70%)',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl uppercase tracking-tight">
          Agenda cheia começa com <span className="text-even-primary">estratégia</span>
        </h1>

        <p className="text-xl md:text-2xl text-white font-semibold mb-6 max-w-4xl">
          Medical<span className="text-[#5992dc]">.</span>Growth: o método que une marketing de autoridade e inteligência comercial para transformar seu consultório em um negócio previsível, lucrativo e escalável.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <CheckIcon /> <span className="text-sm md:text-base font-medium">Visibilidade que atrai pacientes ideais</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <CheckIcon /> <span className="text-sm md:text-base font-medium">Processo que converte leads em agendamentos</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <CheckIcon /> <span className="text-sm md:text-base font-medium">Crescimento ético e 100% alinhado ao CFM</span>
          </div>
        </div>

        <p className="text-gray-400 text-lg mb-10 italic">
          Sem estratégia, a agenda depende da sorte. <br className="hidden md:block" />
          <span className="text-white font-bold not-italic">Com estratégia, ela se torna previsível.</span>
        </p>

        <button onClick={scrollToForm} className="bg-even-primary hover:bg-blue-600 text-white font-black py-5 px-12 rounded-full shadow-[0_0_40px_rgba(22,147,227,0.5)] transform hover:scale-105 transition-all duration-300 uppercase tracking-widest text-lg md:text-xl">
          Quero Construir Minha Estratégia
        </button>
      </div>


    </section>
  );
};

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden border-t border-gray-900 relative" id="clientes">
      {/* Animated Light Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[1400px] h-[1400px] rounded-full blur-3xl opacity-70 animated-light"
          style={{
            background: 'radial-gradient(circle, rgba(22, 147, 227, 0.9) 0%, rgba(22, 147, 227, 0.5) 40%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-black/40 z-0"></div>

      <div className="container mx-auto px-6 text-center max-w-4xl mb-16 relative z-10">
        <h2 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Nós entendemos de crescimento</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">Nossas estratégias já geraram resultados sólidos e consistentes para nossos parceiros.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-black text-white"><span className="text-2xl md:text-3xl">+ R$</span> <span className="text-even-primary">19,36</span></span>
            <span className="text-gray-400 font-bold uppercase tracking-wide text-sm mt-2">Milhões Gerados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-black text-white">+<span className="text-even-primary">500</span></span>
            <span className="text-gray-400 font-bold uppercase tracking-wide text-sm mt-2">Clientes Satisfeitos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-black text-white"><span className="text-even-primary">05</span></span>
            <span className="text-gray-400 font-bold uppercase tracking-wide text-sm mt-2">Estados Atendidos</span>
          </div>
        </div>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto italic">
          "Agora, trazemos toda essa bagagem para impulsionar a sua carreira médica com previsibilidade e escala."
        </p>
      </div>

      {/* States Carousel */}
      <div className="relative w-full overflow-hidden opacity-30">
        <div className="flex w-[200%] animate-scroll">
          {["Bahia", "Rio de Janeiro", "Santa Catarina", "Rio Grande do Sul", "Paraíba", "Bahia", "Rio de Janeiro", "Santa Catarina", "Rio Grande do Sul", "Paraíba"].map((state, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 flex items-center justify-center mx-8">
              <span className="text-2xl font-bold text-gray-400 uppercase tracking-tight">{state}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MethodologySection = () => {
  const steps = [
    { icon: SearchIcon, title: "Posicionamento", fullTitle: "1. Estudo de Posicionamento", desc: "Análise da sua especialidade e do perfil de paciente ideal." },
    { icon: StarIcon, title: "Autoridade", fullTitle: "2. Construção de Autoridade", desc: "Definição de mensagens e conteúdo que geram confiança e atraem." },
    { icon: MegaphoneIcon, title: "Atração", fullTitle: "3. Campanhas de Atração", desc: "Produção e otimização de tráfego pago para alcançar o público certo." },
    { icon: ChartIcon, title: "Inteligência", fullTitle: "4. Inteligência Comercial", desc: "Treinamento e estruturação do atendimento para pré-qualificar contatos." },
    { icon: FilterIcon, title: "Agendamento", fullTitle: "5. Funil de Agendamento", desc: "Configuração de funil e automações para gerenciar o fluxo de pacientes." },
    { icon: CheckIcon, title: "Qualificação", fullTitle: "6. Qualificação", desc: "Agendamento de consultas somente com pacientes dentro do perfil ideal." },
    { icon: TrendUpIcon, title: "Otimização", fullTitle: "7. Otimização Contínua", desc: "Ajustes estratégicos semanais para escalar os agendamentos." }
  ];

  return (
    <section className="py-24 bg-black text-white relative" id="metodologia">
      {/* Animated Light Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[1400px] h-[1400px] rounded-full blur-3xl opacity-70 animated-light"
          style={{
            background: 'radial-gradient(circle, rgba(22, 147, 227, 0.9) 0%, rgba(22, 147, 227, 0.5) 40%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-black/40 z-0"></div>

      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight uppercase">
          Como funciona a metodologia
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mb-16 text-xl">
          Criamos um novo fluxo de pacientes para sua clínica, integrando estratégia, marketing de autoridade e inteligência comercial em um único processo.
        </p>

        {/* Central Diagram */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] mb-20 flex items-center justify-center scale-[0.55] md:scale-100 origin-center -my-20 md:my-0">
          <div className="absolute z-20 text-center">
            <span className="text-gray-500 uppercase tracking-widest text-sm mb-2 block">MÉTODO</span>
            <h3 className="text-4xl font-black text-white leading-tight">Medical<span className="text-[#5992dc]">.</span>Growth</h3>
          </div>

          {/* Fixed Light Point on Logo/Text */}
          <div className="absolute w-[300px] h-[300px] rounded-full blur-2xl opacity-40 z-10"
            style={{
              background: 'radial-gradient(circle, rgba(22, 147, 227, 0.8) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
          </div>

          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-gray-800 rounded-full z-0"></div>

          {/* SVG Arrows around the circle */}
          <svg className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-5" viewBox="0 0 500 500">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <polygon points="0 0, 10 3, 0 6" fill="#1693e3" />
              </marker>
            </defs>
            {[...Array(7)].map((_, i) => {
              const startAngle = (i * (360 / 7)) - 90;
              const endAngle = ((i + 1) * (360 / 7)) - 90;
              const radius = 250;

              const startX = 250 + Math.cos((startAngle * Math.PI) / 180) * radius;
              const startY = 250 + Math.sin((startAngle * Math.PI) / 180) * radius;
              const endX = 250 + Math.cos((endAngle * Math.PI) / 180) * radius;
              const endY = 250 + Math.sin((endAngle * Math.PI) / 180) * radius;

              const largeArcFlag = 0;
              const sweepFlag = 1;

              return (
                <path
                  key={i}
                  d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
                  fill="none"
                  stroke="#1693e3"
                  strokeWidth="2"
                  opacity="0.4"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
          </svg>

          {steps.map((step, index) => {
            const totalSteps = steps.length;
            const angle = (index * (360 / totalSteps)) - 90;
            const radius = 250;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div key={index} className="absolute flex flex-col items-center justify-center w-28 transform transition-all hover:scale-110 cursor-default group"
                style={{ transform: `translate(${x}px, ${y}px)` }}>
                <div className="bg-[#111] p-5 rounded-full border border-gray-800 shadow-xl mb-3 group-hover:border-even-primary transition-all relative">
                  <div className="absolute -inset-1 bg-even-primary rounded-full opacity-0 group-hover:opacity-20 blur-md"></div>
                  <step.icon />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase text-center group-hover:text-white transition-colors w-32 leading-tight">
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Steps Description Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-even-primary transition-all duration-300 shadow-lg group">
              <h4 className="text-even-primary font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors">
                {step.fullTitle}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-4xl border-l-4 border-even-primary pl-8 py-4">
          <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
            "Este sistema adiciona um fluxo de pacientes previsível e qualificado, orientado a dados, aumentando seus resultados sem alterar a estrutura da sua clínica."
          </p>
        </div>
      </div>
    </section>
  );
};

const FinalBox = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative" id="contato">
      {/* Animated Light Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[1400px] h-[1400px] rounded-full blur-3xl opacity-70 animated-light"
          style={{
            background: 'radial-gradient(circle, rgba(22, 147, 227, 0.9) 0%, rgba(22, 147, 227, 0.5) 40%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-black/40 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Form Section */}
        <div id="formulario" className="w-full">
          <div className="bg-[#111] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 max-w-6xl mx-auto flex flex-col lg:flex-row">

            {/* Left Side: Steps */}
            <div className="w-full lg:w-5/12 p-8 md:p-12 bg-[#161616] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                Dê o primeiro passo para transformar seus resultados
              </h3>

              <div className="space-y-10">
                <div className="relative">
                  <div className="flex">
                    <div className="mr-5 mt-1">
                      <div className="w-12 h-12 bg-even-primary rounded-lg flex items-center justify-center shadow-lg">
                        <UserIcon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Informações de Contato</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Preencha os campos ao lado. Seus dados estão seguros e serão usados exclusivamente para nossa reunião.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex">
                    <div className="mr-5 mt-1">
                      <div className="w-12 h-12 bg-even-primary rounded-lg flex items-center justify-center shadow-lg">
                        <PhoneCallIcon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Contato Especialista</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Um de nossos consultores entrará em contato em poucas horas para confirmar o melhor horário da sua sessão.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-7/12 p-8 md:p-12 bg-[#1a1a1a]">
              <Form />
            </div>
          </div>

          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-8 opacity-60 text-center">Vagas limitadas para acompanhamento individual.</p>
        </div>
      </div>
    </section>
  );
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    segmento: '',
    faturamento: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://n8n.agenteeven.com.br/webhook/3306a8ce-0b43-421f-9ab2-8553a7ab2975', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro de conexão. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Obrigado!</h3>
        <p className="text-gray-400">Em breve nosso comercial vai entrar em contato.</p>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome completo"
        required
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white focus:border-even-primary focus:ring-1 focus:ring-even-primary outline-none"
      />
      <input
        type="email"
        placeholder="E-mail profissional"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white focus:border-even-primary focus:ring-1 focus:ring-even-primary outline-none"
      />
      <input
        type="tel"
        placeholder="Telefone / WhatsApp"
        required
        value={formData.whatsapp}
        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white focus:border-even-primary focus:ring-1 focus:ring-even-primary outline-none"
      />


      <select
        required
        value={formData.segmento}
        onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
        className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-gray-400 focus:border-even-primary focus:ring-1 focus:ring-even-primary outline-none"
      >
        <option value="">Seu Segmento</option>
        <option value="Médicos">Médicos (cirurgiões plásticos, dermatologistas, ortopedistas, etc.)</option>
        <option value="Dentistas">Dentistas (com foco em estética, implantes, ortodontia)</option>
        <option value="Biomédicos">Biomédicos estetas</option>
        <option value="Clínicas Estética">Clínicas de estética e harmonização</option>
        <option value="Clínicas Multidisciplinares">Clínicas multidisciplinares de saúde</option>
        <option value="Oftalmologistas">Oftalmologistas e demais especialidades da saúde</option>
        <option value="Outros">Outros</option>
      </select>

      <select
        required
        value={formData.faturamento}
        onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
        className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-gray-400 focus:border-even-primary focus:ring-1 focus:ring-even-primary outline-none"
      >
        <option value="">Faturamento Mensal Médio</option>
        <option value="Abaixo de R$30.000">Abaixo de R$30.000</option>
        <option value="Entre R$50.000 e R$80.000">Entre R$50.000 e R$80.000</option>
        <option value="Entre R$80.000 e R$100.000">Entre R$80.000 e R$100.000</option>
        <option value="Entre R$100.000 e R$200.000">Entre R$100.000 e R$200.000</option>
        <option value="Acima de R$200.000">Acima de R$200.000</option>
      </select>

      <button disabled={loading} type="submit" className="w-full bg-even-primary hover:bg-blue-600 text-white font-extrabold py-5 rounded-lg shadow-lg transform transition-all duration-300 uppercase tracking-widest mt-2 disabled:bg-blue-900">
        {loading ? 'Enviando...' : 'Iniciar minha estratégia'}
      </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-600 py-10 text-center text-sm border-t border-gray-900">
      <div className="container mx-auto px-6">
        <img src="https://i.ibb.co/nsjrqxz4/Design-sem-nome-1.png" alt="Logo" className="h-8 mx-auto mb-6 opacity-50 grayscale" />
        <div className="mb-6 space-y-2">
          <p className="text-gray-400">R. Sd. Luiz Gonzaga das Virgens, 138 - Sala 404 - Caminho das Árvores, Salvador - BA, 41820-560</p>
          <p className="text-gray-400 font-medium">WhatsApp: (71) 99657-4653</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Medical<span className="text-[#5992dc]">.</span>Growth by EVEN. Todos os direitos reservados.</p>
        <p className="mt-2 text-[10px] opacity-40 uppercase tracking-widest">Publicidade Médica em conformidade com as normas éticas do CFM.</p>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <div className="antialiased bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <MethodologySection />
      <FinalBox />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
