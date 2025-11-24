import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Clock, Youtube, Instagram } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-ptz-leiloes.jpg" 
              alt="PTZ Leilões" 
              className="h-16 w-auto object-contain"
            />
            <h1 className="text-xl font-bold text-yellow-700">PTZ Leilões</h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition">Serviços</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition">Contato</a>
          </nav>

          <div className="flex gap-4">
            <a 
              href="https://www.youtube.com/@potenzacred" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/potenzacred" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: 'url(/logo-potenza-fundo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Assessoria em Leilões Imobiliários
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Encontre as melhores oportunidades de imóveis em leilão com segurança e transparência
            </p>
            <Button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'https://wa.me/555430458042'}
            >
              FALE CONOSCO
            </Button>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sobre a PTZ Leilões
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  A PTZ Leilões é uma assessoria especializada em leilões imobiliários, 
                  oferecendo suporte completo para quem deseja investir em imóveis 
                  através de leilões judiciais com segurança e economia.
                </p>
                <p className="text-gray-700 mb-4">
                  Com experiência consolidada no mercado, ajudamos clientes a encontrar 
                  as melhores oportunidades de investimento imobiliário com segurança e 
                  transparência.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">✓</span>
                    <span className="text-gray-700">Processo rápido e eficiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">✓</span>
                    <span className="text-gray-700">Segurança garantida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">✓</span>
                    <span className="text-gray-700">Equipe especializada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">✓</span>
                    <span className="text-gray-700">Atendimento personalizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Como Funciona
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-700">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Antes</h3>
                <p className="text-gray-700">
                  Análise completa de sua situação e apresentação das melhores oportunidades 
                  de leilões imobiliários disponíveis.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-700">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Durante</h3>
                <p className="text-gray-700">
                  Acompanhamento completo do processo de leilão com suporte especializado 
                  em todas as etapas.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-700">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Após</h3>
                <p className="text-gray-700">
                  Finalização segura da operação com toda a documentação necessária 
                  e suporte pós-venda.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Benefícios de Investir em Leilões Imobiliários
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">💰</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Preços Reduzidos</h4>
                    <p className="text-gray-700">Imóveis com descontos de até 50% do valor de mercado</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">📋</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Documentação Clara</h4>
                    <p className="text-gray-700">Todos os imóveis com documentação completa e verificada</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Processo Rápido</h4>
                    <p className="text-gray-700">Conclusão da operação em prazos reduzidos</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">🔒</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Segurança Total</h4>
                    <p className="text-gray-700">Operações acompanhadas por profissionais especializados</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">🏠</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Variedade de Imóveis</h4>
                    <p className="text-gray-700">Diversas opções de propriedades em diferentes regiões</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-yellow-600">👥</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Suporte Especializado</h4>
                    <p className="text-gray-700">Equipe dedicada para orientar em cada etapa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investimento Section */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por Que Investir em Leilões Imobiliários?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Oportunidades de Mercado</h3>
                <p className="text-gray-700">
                  Os leilões imobiliários oferecem oportunidades únicas de adquirir propriedades 
                  com preços significativamente abaixo do valor de mercado, gerando excelentes 
                  retornos para investidores.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Jurídica</h3>
                <p className="text-gray-700">
                  As operações em leilões são reguladas por lei, garantindo segurança jurídica 
                  total aos compradores. Todos os imóveis têm documentação verificada e clara.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que Escolher Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por Que Escolher a PTZ Leilões?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência Comprovada</h3>
                <p className="text-gray-700">
                  Anos de atuação no mercado de leilões imobiliários com centenas de 
                  operações bem-sucedidas.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe Especializada</h3>
                <p className="text-gray-700">
                  Profissionais qualificados com conhecimento profundo do mercado imobiliário 
                  e leilões judiciais.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-700">
                  Cada cliente recebe acompanhamento dedicado com soluções customizadas 
                  para suas necessidades.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparência Total</h3>
                <p className="text-gray-700">
                  Comunicação clara e honesta em todas as etapas do processo, sem surpresas 
                  ou custos ocultos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-left font-semibold text-gray-900">
                      Como funciona o processo de compra em um leilão imobiliário?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <div className="flex gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <p>
                      O processo começa com o cadastro e análise de documentação. Depois, você 
                      participa do leilão (presencialmente ou online), faz a proposta e, se 
                      vencer, realiza o pagamento e recebe a documentação do imóvel. Nossa equipe 
                      acompanha cada etapa para garantir segurança.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-left font-semibold text-gray-900">
                      Qual é o valor mínimo para participar de um leilão?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <div className="flex gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <p>
                      O valor mínimo varia conforme o imóvel e o leilão específico. Cada leilão 
                      tem suas próprias regras e valores de entrada. Entramos em contato com você 
                      para apresentar as oportunidades disponíveis dentro de seu orçamento.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-left font-semibold text-gray-900">
                      É seguro comprar imóvel em leilão?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <div className="flex gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <p>
                      Sim, é muito seguro! Os leilões imobiliários são regulados por lei e 
                      supervisionados pelo Poder Judiciário. Todos os imóveis têm documentação 
                      completa e verificada. A Potenza Cred oferece suporte especializado para 
                      garantir sua segurança em toda operação.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-left font-semibold text-gray-900">
                      Quanto tempo leva para finalizar a compra?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <div className="flex gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <p>
                      O tempo varia conforme o leilão e a documentação do imóvel. Geralmente, 
                      o processo leva entre 30 a 90 dias após a vitória no leilão. Nossa equipe 
                      trabalha para agilizar todas as etapas e manter você informado do progresso.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-left font-semibold text-gray-900">
                      Quais são os custos envolvidos?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <div className="flex gap-4">
                    <img 
                      src="/logo-ptz-faq-answer.jpg" 
                      alt="Ícone" 
                      className="h-8 w-8 object-contain flex-shrink-0"
                    />
                    <p>
                      Os custos incluem o valor do imóvel, taxas do leilão, impostos e despesas 
                      cartoriais. Apresentamos um orçamento detalhado antes de você participar 
                      de qualquer leilão, sem custos ocultos. Somos transparentes em todas as 
                      operações.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Mapa Section */}
        <section id="contato" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Visite
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5789!2d-52.40949!3d-28.2597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f7a8c8c8c8c8c9%3A0x1234567890abcdef!2sR.%20Gen.%20Os%C3%B3rio%2C%201197%20-%20Centro%2C%20Passo%20Fundo%20-%20RS%2C%2099010-140!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PTZ Leilões</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Endereço:
                    </p>
                    <p className="text-gray-700">R. Gen. Osório, 1197 - Centro</p>
                    <p className="text-gray-700">Passo Fundo - RS, 99010-140</p>
                    <p className="text-gray-700 text-sm">(em frente ao INSS Passo Fundo)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      Telefone:
                    </p>
                    <p className="text-gray-700">(54) 3045-8042 ou (54) 3045-7044</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Horário de Funcionamento:
                    </p>
                    <p className="text-gray-700">Segunda a Sexta</p>
                    <p className="text-gray-700">08:30 - 12:00</p>
                    <p className="text-gray-700">13:30 - 17:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 font-semibold">
            © 2025 PTZ Leilões - Assessoria em Leilões Imobiliários. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/555430458042"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all hover:scale-110 z-40"
        title="Fale conosco no WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.119-2.259 3.357-.606 1.605-.949 3.362-.949 5.209 0 1.551.215 3.081.645 4.566.19.658.381 1.289.645 1.871l-1.708 5.133 5.133-1.708c.582.264 1.213.455 1.871.645 1.485.43 3.015.645 4.566.645 1.847 0 3.604-.343 5.209-.949 1.238-.503 2.335-1.236 3.357-2.259 1.02-1.02 1.756-2.119 2.259-3.357.606-1.605.949-3.362.949-5.209 0-1.847-.343-3.604-.949-5.209-.503-1.238-1.236-2.335-2.259-3.357-1.02-1.02-2.119-1.756-3.357-2.259-1.605-.606-3.362-.949-5.209-.949z" />
        </svg>
      </a>
    </div>
  );
}
