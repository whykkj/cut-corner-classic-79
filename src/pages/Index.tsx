import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Calendar, Clock, MapPin, Star, Scissors, Phone, CheckCircle } from "lucide-react";
import barberProLogo from "@/assets/barberpro-logo.png";

const Index = () => {
  const servicos = [
    {
      nome: "Corte Masculino",
      preco: 30,
      duracao: "30 min",
      descricao: "Corte tradicional com acabamento profissional"
    },
    {
      nome: "Corte + Barba",
      preco: 45,
      duracao: "45 min",
      descricao: "Serviço completo com corte e barba aparada"
    },
    {
      nome: "Apenas Barba",
      preco: 20,
      duracao: "20 min",
      descricao: "Aparar e fazer a barba com navalha"
    },
    {
      nome: "Sobrancelha",
      preco: 15,
      duracao: "15 min",
      descricao: "Aparar sobrancelha masculina"
    }
  ];

  const avaliacoes = [
    {
      nome: "João Silva",
      nota: 5,
      comentario: "Excelente atendimento! Corte perfeito, ambiente acolhedor e profissionalismo excepcional.",
      data: "Há 2 dias",
      avatar: "J"
    },
    {
      nome: "Pedro Santos", 
      nota: 5,
      comentario: "Melhor barbearia da região. Sempre saio satisfeito, recomendo a todos!",
      data: "Há 1 semana",
      avatar: "P"
    },
    {
      nome: "Carlos Oliveira",
      nota: 5,
      comentario: "Profissional top, sempre corto aqui. Atendimento de primeira qualidade.",
      data: "Há 2 semanas",
      avatar: "C"
    },
    {
      nome: "Ricardo Costa",
      nota: 5,
      comentario: "Ambiente incrível e corte perfeito. Vale cada centavo investido!",
      data: "Há 3 semanas", 
      avatar: "R"
    },
    {
      nome: "Lucas Miranda",
      nota: 4,
      comentario: "Muito bom! Só o tempo de espera que poderia ser menor.",
      data: "Há 1 mês",
      avatar: "L"
    },
    {
      nome: "André Ferreira",
      nota: 5,
      comentario: "Simplesmente o melhor! Sempre venho aqui e nunca me decepciono.",
      data: "Há 1 mês",
      avatar: "A"
    }
  ];

  const horariosFuncionamento = [
    { dia: "Segunda a Sexta", horario: "8h às 19h" },
    { dia: "Sábado", horario: "8h às 17h" },
    { dia: "Domingo", horario: "Fechado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-card text-foreground py-20 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
            <img src={barberProLogo} alt="BarberPro Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">
            BarberPro
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-muted-foreground">
            A melhor experiência em cortes masculinos. Agende seu horário de forma simples e rápida.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link to="/cadastro">Agendar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/login">Já sou cliente</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para cuidar do seu visual com qualidade e profissionalismo.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{servico.nome}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold">
                      R$ {servico.preco}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{servico.duracao}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {servico.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground">
              Em apenas 3 passos simples você agenda seu corte
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Escolha o Serviço</h3>
              <p className="text-muted-foreground">
                Selecione o tipo de serviço que deseja realizar
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Marque Data e Hora</h3>
              <p className="text-muted-foreground">
                Escolha o melhor horário na nossa agenda disponível
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Confirme</h3>
              <p className="text-muted-foreground">
                Receba a confirmação no WhatsApp e compareça no horário
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xl font-bold text-primary">4.9/5</span>
              <span className="text-muted-foreground">(127 avaliações)</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais de 127 clientes satisfeitos confiam na qualidade do nosso trabalho
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {avaliacoes.map((avaliacao, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{avaliacao.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{avaliacao.nome}</CardTitle>
                      <p className="text-sm text-muted-foreground">{avaliacao.data}</p>
                    </div>
                    <div className="flex">
                      {[...Array(avaliacao.nota)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic leading-relaxed">"{avaliacao.comentario}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações e Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {horariosFuncionamento.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.dia}</span>
                    <span className="text-muted-foreground">{item.horario}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Localização e Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-muted-foreground">
                    Rua das Flores, 123 - Centro<br />
                    São Paulo, SP - CEP: 01234-567
                  </p>
                </div>
                <div>
                  <p className="font-medium">Contato</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/cadastro">Agendar Seu Horário</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scissors className="w-6 h-6" />
            <span className="text-xl font-bold">BarberPro</span>
          </div>
          <p className="text-background/80">
            © 2025 BarberPro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
