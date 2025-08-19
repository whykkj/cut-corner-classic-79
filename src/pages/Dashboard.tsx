import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Star, Plus } from "lucide-react";

const Dashboard = () => {
  const proximosAgendamentos = [
    {
      id: 1,
      data: "2025-02-05",
      hora: "14:30",
      servico: "Corte + Barba",
      preco: "R$ 45,00",
      status: "confirmado"
    },
    {
      id: 2,
      data: "2025-02-12",
      hora: "16:00",
      servico: "Corte Masculino",
      preco: "R$ 30,00",
      status: "confirmado"
    }
  ];

  const historicoRecente = [
    {
      id: 1,
      data: "2025-01-28",
      servico: "Corte + Barba",
      avaliacao: 5,
      comentario: "Excelente atendimento!"
    },
    {
      id: 2,
      data: "2025-01-15",
      servico: "Corte Masculino",
      avaliacao: 5,
      comentario: "Muito bom, recomendo!"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="client" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Olá, João! 👋
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus agendamentos e histórico de serviços
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Agendamento</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 de Fev</div>
              <p className="text-xs text-muted-foreground">às 14:30</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Cortes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">este ano</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.0</div>
              <p className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Próximos Agendamentos</CardTitle>
                <CardDescription>
                  Seus serviços agendados
                </CardDescription>
              </div>
              <Button asChild>
                <Link to="/agendar">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Agendamento
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {proximosAgendamentos.map((agendamento) => (
                <div key={agendamento.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">
                        {formatDate(agendamento.data)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{agendamento.hora}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{agendamento.servico}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{agendamento.preco}</div>
                    <Badge variant="secondary">
                      {agendamento.status}
                    </Badge>
                  </div>
                </div>
              ))}
              
              {proximosAgendamentos.length === 0 && (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Nenhum agendamento futuro</p>
                  <Button asChild className="mt-4">
                    <Link to="/agendar">Agendar Agora</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico Recente</CardTitle>
              <CardDescription>
                Seus últimos serviços realizados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {historicoRecente.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">{item.servico}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(item.data)}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.avaliacao 
                              ? "fill-secondary text-secondary" 
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right max-w-[200px]">
                    <p className="text-sm text-muted-foreground italic">
                      "{item.comentario}"
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;