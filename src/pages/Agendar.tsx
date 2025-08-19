import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, DollarSign, CheckCircle } from "lucide-react";

const Agendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const servicos = [
    {
      id: "corte",
      nome: "Corte Masculino",
      preco: 30,
      duracao: "30 min",
      descricao: "Corte tradicional com acabamento"
    },
    {
      id: "corte-barba",
      nome: "Corte + Barba",
      preco: 45,
      duracao: "45 min",
      descricao: "Corte completo com barba aparada"
    },
    {
      id: "barba",
      nome: "Apenas Barba",
      preco: 20,
      duracao: "20 min",
      descricao: "Aparar e fazer a barba"
    },
    {
      id: "sobrancelha",
      nome: "Sobrancelha",
      preco: 15,
      duracao: "15 min",
      descricao: "Aparar sobrancelha masculina"
    }
  ];

  const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    const dayOfWeek = date.getDay();
    // Desabilita domingos (0) e datas passadas
    return dayOfWeek === 0 || date < today;
  };

  const handleConfirmarAgendamento = async () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, selecione serviço, data e horário.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulação de confirmação
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Agendamento confirmado! ✅",
        description: "Você receberá uma confirmação no WhatsApp em breve.",
      });
      navigate("/dashboard");
    }, 2000);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const servicoSelecionado = servicos.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="client" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Agendar Serviço
          </h1>
          <p className="text-muted-foreground">
            Escolha o serviço, data e horário desejados
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Seleção de Serviço */}
          <Card>
            <CardHeader>
              <CardTitle>1. Escolha o Serviço</CardTitle>
              <CardDescription>
                Selecione o tipo de serviço desejado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all hover:border-primary ${
                    selectedService === servico.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border"
                  }`}
                  onClick={() => setSelectedService(servico.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{servico.nome}</h3>
                    <Badge variant="secondary">R$ {servico.preco}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {servico.duracao}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {servico.descricao}
                  </p>
                  {selectedService === servico.id && (
                    <CheckCircle className="w-5 h-5 text-primary mt-2" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Seleção de Data */}
          <Card>
            <CardHeader>
              <CardTitle>2. Escolha a Data</CardTitle>
              <CardDescription>
                Selecione o melhor dia para você
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={isDateDisabled}
                className="rounded-md border"
              />
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">Funcionamento:</p>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sábado: 8h às 19h<br />
                  Domingo: Fechado
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seleção de Horário */}
          <Card>
            <CardHeader>
              <CardTitle>3. Escolha o Horário</CardTitle>
              <CardDescription>
                {selectedDate 
                  ? `Horários disponíveis para ${formatDate(selectedDate)}`
                  : "Selecione uma data primeiro"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDate ? (
                <div className="grid grid-cols-2 gap-2">
                  {horariosDisponiveis.map((horario) => (
                    <Button
                      key={horario}
                      variant={selectedTime === horario ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(horario)}
                      className="justify-center"
                    >
                      {horario}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Selecione uma data para ver os horários
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Resumo e Confirmação */}
        {(selectedService || selectedDate || selectedTime) && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Resumo do Agendamento</CardTitle>
              <CardDescription>
                Confirme os detalhes antes de finalizar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Serviço</p>
                    <p className="text-sm text-muted-foreground">
                      {servicoSelecionado?.nome || "Não selecionado"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Data</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedDate ? formatDate(selectedDate) : "Não selecionada"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Horário</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedTime || "Não selecionado"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Valor</p>
                    <p className="text-sm text-muted-foreground">
                      {servicoSelecionado ? `R$ ${servicoSelecionado.preco}` : "R$ 0"}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button 
                  className="flex-1" 
                  onClick={handleConfirmarAgendamento}
                  disabled={!selectedDate || !selectedTime || !selectedService || isLoading}
                >
                  {isLoading ? "Confirmando..." : "Confirmar Agendamento"}
                </Button>
                <Button variant="outline" onClick={() => navigate("/dashboard")}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Agendar;