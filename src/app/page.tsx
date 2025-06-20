"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Instagram, MessageCircle, Shield, Award, Moon, Home, Waves, Ruler, Wrench, PencilRuler, Truck, ShieldCheck, LayoutDashboard } from "lucide-react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [cortina, setCortina] = useState("")
  const [message, setMessage] = useState("")
  const errors = useRef<string[]>([])

  const curtainsimg = [
    { type: 'Blackout', src: '/assets/blackout.jpeg' },
    { type: 'Persiana', src: '/assets/persiana.jpeg' },
    { type: 'Cortina Wave', src: '/assets/wave.jpeg' },
    { type: 'Varão', src: '/assets/varao.jpeg' },
    { type: 'Trilho Suíço', src: '/assets/suico.jpeg' },
    { type: 'Double vision', src: '/assets/double-vision.jpeg' },
  ]

  const testimonials = [
    {
      name: "Juliana Andrade",
      city: "São Paulo, SP",
      comment: "As cortinas transformaram meu apartamento! Atendimento excelente e execução impecável.",
    },
    {
      name: "Carlos Mendes",
      city: "Recife, PE",
      comment: "A equipe foi muito profissional do começo ao fim. Recomendo fortemente",
    },
    {
      name: "Fernanda Lima",
      city: "Belo Horizonte, MG",
      comment: "Nunca imaginei que cortinas fariam tanta diferença! Trabalho lindo e personalizado.",
    },
    {
      name: "Ricardo Torres",
      city: "Curitiba, PR",
      comment: "Muito além das expectativas. Desde o projeto até a instalação, foi tudo perfeito.",
    },
    {
      name: "Amanda Souza",
      city: "Fortaleza, CE",
      comment: "Design moderno, material de qualidade e uma entrega super rápida. Obrigada!",
    },
  ]

  const duplicatedTestimonials = testimonials.concat(testimonials)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWppMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !cortina) {
      errors.current = []
      if (!name) errors.current.push("Nome é obrigatório.")
      if (!phone) errors.current.push("Telefone é obrigatório.")
      if (!cortina) errors.current.push("Tipo de cortina é obrigatório.")

      return
    }

    const text = `Olá, meu nome é ${name}
Meu telefone é ${phone}
Tenho interesse em ${cortina}

${message}

vim pelo site!`

    const url = `https://wa.me/5585992295470?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="object-cover bg-[url('/assets/curtain.jpg')] bg-fixed bg-center bg-no-repeat bg-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="w-full flex justify-center mb-6 leading-tight">
            <div className="p-5 rounded-full aspect-square flex items-center justify-center bg-zinc-950">
              {/* <Image
                src="/assets/logo-amoura.png"
                alt="Showroom A.Moura Cortinas"
                width={200}
                height={200}
              /> */}

              logo da empresa
            </div>
          </div>
          <p className="text-xl px-7 md:text-2xl mb-8 font-light leading-relaxed">
            Transformamos ambientes com cortinas sob medida de alta qualidade. Sofisticação e conforto para o seu lar.
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = "#orçamento"}
            className="bg-amber-400 hover:bg-amber-500 cursor-pointer font-semibold px-5 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <section className="py-20 px-7">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl border border-zinc-300 rounded-full p-4 font-bold text-gray-800 mb-4">
              Porque <span className="text-amber-500">Nos Escolher?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fique por dentro dos nossos diferenciais e descubra por que somos a escolha certa para suas cortinas sob medida.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
              {[
                {
                  title: "Qualidade Superior",
                  description: "Tecidos e acessórios selecionados.",
                  icon: <Shield className="w-6 h-6 text-amber-500" />,
                },
                {
                  title: "Atendimento Personalizado",
                  description: "Soluções sob medida pra você.",
                  icon: <Award className="w-6 h-6 text-amber-500" />,
                },
                {
                  title: "Entrega Rápida",
                  description: "Prazos cumpridos, sempre.",
                  icon: <Truck className="w-6 h-6 text-amber-500" />,
                },
                {
                  title: "Instalação Especializada",
                  description: "Montagem precisa e profissional.",
                  icon: <Wrench className="w-6 h-6 text-amber-500" />,
                },
                {
                  title: "Garantia Estendida",
                  description: "Produtos com cobertura extra.",
                  icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
                },
                {
                  title: "Design Sob Medida",
                  description: "Projetos únicos para seu espaço.",
                  icon: <LayoutDashboard className="w-6 h-6 text-amber-500" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:border-amber-500 transition-all"
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão abaixo do grid */}
            <div className="text-center mt-6">
              <button className="text-sm cursor-pointer px-5 py-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition">
                Fale com um Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-7 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-amber-500">Sobre Nós</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Com mais de 15 anos de experiência no mercado, somos especialistas em soluções
                personalizadas para decoração de ambientes. Nossa missão é transformar espaços através de cortinas sob
                medida que combinam funcionalidade, beleza e qualidade superior.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trabalhamos com os melhores tecidos e acessórios do mercado, garantindo durabilidade e elegância em cada
                projeto. Nossa equipe de profissionais qualificados oferece atendimento personalizado desde a consulta
                inicial até a instalação final.
              </p>

              <div className="flex flex-wrap gap-4 justify-between text-nowrap">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-md text-gray-800">15+ Anos</h3>
                    <p className="text-xs text-gray-600">de Experiência</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-md text-gray-800">Garantia</h3>
                    <p className="text-xs text-gray-600">de Qualidade</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-md text-gray-800">Entrega Rápida</h3>
                    <p className="text-xs text-gray-600">em Todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <Image
                src="/assets/sobre-amoura.png"
                alt="Showroom A.Moura Cortinas"
                width={500}
                height={600}
                className="rounded-4xl shadow-2xl object-center object-cover"
              /> */}
              <div className="w-full h-[400px] rounded-2xl bg-gray-200 flex justify-center items-center">imagem aqui</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-7">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl border border-zinc-300 rounded-full p-4 font-bold text-gray-800 mb-4">
              Nossa <span className="text-amber-500">Galeria</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos e inspire-se com ambientes únicos decorados com nossas cortinas sob
              medida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curtainsimg.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={`Projeto ${item.type} - Cortinas A.Moura`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 justify-between w-[90%]">
                    <div>
                      <h3 className="font-semibold text-lg">Projeto {item.type}</h3>
                      <p className="text-sm opacity-90">Design sob medida</p>
                    </div>
                    <div className="text-center mt-1">
                      <button className="text-sm cursor-pointer px-5 py-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition">
                        Peça já!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-7 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl border border-zinc-300 rounded-full p-4 font-bold text-gray-800 mb-4">
              Nossos <span className="text-amber-500">Serviços</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de soluções em cortinas e acessórios para atender todas as suas necessidades de
              decoração.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blackout",
                description: "Cortinas que bloqueiam completamente a luz, ideais para quartos e home theaters.",
                icon: <Moon className="w-8 h-8 mx-auto" />,
              },
              {
                title: "Persiana",
                description: "Persianas modernas em diversos materiais e cores para controle de luz.",
                icon: <Home className="w-8 h-8 mx-auto" />,
              },
              {
                title: "Cortina Wave",
                description: "Sistema de ondas perfeitas que proporciona elegância e sofisticação.",
                icon: <Waves className="w-8 h-8 mx-auto" />,
              },
              {
                title: "Varão",
                description: "Varões decorativos em diversos acabamentos para complementar sua decoração.",
                icon: <Ruler className="w-8 h-8 mx-auto" />,
              },
              {
                title: "Trilho Suíço",
                description: "Sistema de trilhos discretos e funcionais para cortinas modernas.",
                icon: <Wrench className="w-8 h-8 mx-auto" />,
              },
              {
                title: "Medidas Personalizadas",
                description: "Cortinas sob medida para janelas e ambientes com dimensões especiais.",
                icon: <PencilRuler className="w-8 h-8 mx-auto" />,
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-5 transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:-translate-y-2 transition-all duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-500 group-hover:-translate-y-2 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:-translate-y-2 transition-all duration-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] px-7 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="object-cover bg-[url('/assets/curtain-gold.jpg')] bg-fixed bg-center bg-no-repeat bg-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Transforme seu espaço</h2>
          <p className="text-lg text-center text-white max-w-2xl mx-auto">
            Descubra como nossas cortinas podem realçar a beleza e o conforto de sua casa.
          </p>
          <div className="text-center mt-6">
            <button className="text-sm cursor-pointer px-5 py-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition">
              Entre já em contato
            </button>
          </div>
        </div>
      </section>

      <section className="py-18 bg-white">
        <div className="max-w-6xl px-3 mx-auto max-lg:scroll-hide">
          <h2 className="text-3xl text-center border border-zinc-300 rounded-full p-4 font-bold text-gray-800 mb-4">
            Nossos <span className="text-amber-500">Depoimentos</span>
          </h2>

          <div
            ref={containerRef}
            className="overflow-x-auto max-lg:scroll-hide p-6"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="flex gap-6"
              style={{
                scrollSnapAlign: "start",
              }}
            >
              {duplicatedTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[200px] max-w-[340px] bg-gray-50 border border-gray-200 rounded-2xl shadow-md px-3 py-4 flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="mb-4">
                    <p className="text-gray-700 text-base leading-relaxed italic">“{item.comment}”</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {item.name.split(" ")[0][0]}{item.name.split(" ")[1][0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50 px-3" id="orçamento">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl border border-zinc-300 rounded-full p-4 font-bold text-gray-800 mb-4">
              Solicite seu <span className="text-amber-400">Orçamento</span>
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar a melhor solução para seu
              projeto.
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-3">
              <form className="space-y-6" onSubmit={handleWppMessage}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                    {errors.current.includes("Nome é obrigatório.") && !name && (
                      <p className="text-red-500 text-sm mt-1">
                        Nome é obrigatório.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                    {errors.current.includes("Telefone é obrigatório.") && !phone &&(
                      <p className="text-red-500 text-sm mt-1">
                        Telefone é obrigatório.
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700 font-medium">
                    Tipo de Cortina
                  </Label>
                  <Select onValueChange={(value) => setCortina(value)}>
                    <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                      <SelectValue placeholder="Selecione o tipo de cortina" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Blackout">Blackout</SelectItem>
                      <SelectItem value="Persiana">Persiana</SelectItem>
                      <SelectItem value="Cortina Wave">Cortina Wave</SelectItem>
                      <SelectItem value="Varão">Varão</SelectItem>
                      <SelectItem value="Trilho Suíço">Trilho Suíço</SelectItem>
                      <SelectItem value="Medidas Personalizadas">Medidas Personalizadas</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.current.includes("Tipo de cortina é obrigatório.") && !cortina && (
                    <p className="text-red-500 text-sm mt-1">
                      Tipo de cortina é obrigatório.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Mensagem (Opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto ou dúvidas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cursor-pointer bg-amber-400 hover:bg-amber-500 text-black font-semibold py-4 text-lg rounded-full transition-all duration-300"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5585992295470"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-7 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white flex justify-center py-12 px-7">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">Nome da</span> Sua Empresa
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Especialistas em cortinas sob medida há mais de 15 anos. Qualidade, elegância e atendimento
                personalizado.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/amouracortinas"
                  className="bg-gray-800 hover:bg-amber-500 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5585992295470"
                  className="bg-gray-800 hover:bg-green-500 p-3 rounded-full transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">
                    Rua das Cortinas, 123
                    <br />
                    Centro - São Paulo, SP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Horário de Funcionamento</h4>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">©Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}