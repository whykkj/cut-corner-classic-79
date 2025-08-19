import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, DollarSign, Clock, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const agendamentosHoje = [
    {
      id: 1,
      cliente: "João Silva",
      telefone: "(11) 99999-9999",
      servico: "Corte + Barba",
      horario: "09:00",
      status: "confirmado",
      valor: 45
    },
    {
      id: 2,
      cliente: "Pedro Santos",
      telefone: "(11) 98888-8888",
      servico: "Corte Masculino",
      horario: "10:30",
      status: "confirmado",
      valor: 30
    },
    {
      id: 3,
      cliente: "Carlos Oliveira",
      telefone: "(11) 97777-7777",
      servico: "Corte + Barba",
      horario: "14:00",
      status: "pendente",
      valor: 45
    },
    {
      id: 4,
      cliente: "Rafael Costa",
      telefone: "(11) 96666-6666",
      servico: "Apenas Barba",
      horario: "16:30",
      status: "confirmado",
      valor: 20
    }
  ];

  const metricas = {
    agendamentosHoje: agendamentosHoje.length,
    receitaDia: agendamentosHoje.reduce((acc, ag) => acc + ag.valor, 0),
    clientesAtivos: 45,
    avaliacaoMedia: 4.8,
    receitaMes: 3250,
    agendamentosMes: 87
  };

  const formatMoney = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado": return "success";
      case "pendente": return "secondary";
      case "cancelado": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Painel Administrativo
          </h1>
          <p className="text-muted-foreground">
            Visão geral da barbearia - {new Date().toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>

        {/* Métricas Principais */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricas.agendamentosHoje}</div>
              <p className="text-xs text-muted-foreground">
                +2 em relação a ontem
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatMoney(metricas.receitaDia)}</div>
              <p className="text-xs text-muted-foreground">
                Meta diária: R$ 200
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricas.clientesAtivos}</div>
              <p className="text-xs text-muted-foreground">
                +8 este mês
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricas.avaliacaoMedia}</div>
              <p className="text-xs text-muted-foreground">
                ⭐⭐⭐⭐⭐ (28 avaliações)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Mensal */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Performance do Mês
              </CardTitle>
              <CardDescription>
                Janeiro 2025 - Comparativo com dezembro
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Receita Total</span>
                <div className="text-right">
                  <div className="font-bold">{formatMoney(metricas.receitaMes)}</div>
                  <div className="text-xs text-success">+15% vs mês anterior</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total de Agendamentos</span>
                <div className="text-right">
                  <div className="font-bold">{metricas.agendamentosMes}</div>
                  <div className="text-xs text-success">+12% vs mês anterior</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Ticket Médio</span>
                <div className="text-right">
                  <div className="font-bold">{formatMoney(metricas.receitaMes / metricas.agendamentosMes)}</div>
                  <div className="text-xs text-success">+3% vs mês anterior</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Serviços Mais Populares</CardTitle>
              <CardDescription>
                Ranking dos serviços mais agendados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Corte + Barba</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm font-medium">42</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Corte Masculino</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm font-medium">28</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Apenas Barba</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sobrancelha</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm font-medium">5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agendamentos de Hoje */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Agendamentos de Hoje</CardTitle>
              <CardDescription>
                Gerencie os atendimentos do dia
              </CardDescription>
            </div>
            <Button asChild>
              <Link to="/admin/agenda">
                Ver Agenda Completa
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agendamentosHoje.map((agendamento) => (
                <div key={agendamento.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{agendamento.cliente}</div>
                      <div className="text-sm text-muted-foreground">
                        {agendamento.telefone}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {agendamento.servico}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-lg">{agendamento.horario}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatMoney(agendamento.valor)}
                      </div>
                    </div>
                    <Badge variant={getStatusColor(agendamento.status) as any}>
                      {agendamento.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;