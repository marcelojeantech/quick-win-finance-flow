
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Bot, Mail, Phone, Settings } from "lucide-react";
import { Receivable, CobrancaTemplate } from "@/types/receivables";

interface CobrancaAutomaticaProps {
  receivables: Receivable[];
}

const CobrancaAutomatica = ({ receivables }: CobrancaAutomaticaProps) => {
  const [automaticaAtiva, setAutomaticaAtiva] = useState(false);
  const [templates] = useState<CobrancaTemplate[]>([
    {
      diasAtraso: 1,
      tipo: "email",
      titulo: "Lembrete amigável",
      mensagem: "Olá! Só um lembrete amigável sobre o vencimento de sua fatura..."
    },
    {
      diasAtraso: 3,
      tipo: "whatsapp",
      titulo: "Primeira cobrança",
      mensagem: "Oi! Sua fatura venceu há 3 dias. Poderia verificar?"
    },
    {
      diasAtraso: 7,
      tipo: "whatsapp",
      titulo: "Cobrança urgente",
      mensagem: "Olá! Sua fatura está em atraso há 7 dias. É importante regularizarmos..."
    }
  ]);

  const handleToggleAutomatica = () => {
    setAutomaticaAtiva(!automaticaAtiva);
    toast({
      title: automaticaAtiva ? "Cobrança automática desativada" : "Cobrança automática ativada",
      description: automaticaAtiva 
        ? "As cobranças automáticas foram pausadas" 
        : "As cobranças serão enviadas automaticamente conforme configurado",
    });
  };

  const handleCobrancaManual = (receivable: Receivable) => {
    const template = templates.find(t => 
      (receivable.diasAtraso || 0) >= t.diasAtraso
    ) || templates[0];

    toast({
      title: "Cobrança enviada",
      description: `${template.tipo === 'email' ? 'E-mail' : 'WhatsApp'} enviado para ${receivable.cliente}`,
    });
  };

  const getProximaAcao = (diasAtraso: number) => {
    if (diasAtraso >= 7) return "WhatsApp urgente";
    if (diasAtraso >= 3) return "WhatsApp";
    if (diasAtraso >= 1) return "E-mail";
    return "Aguardando";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Cobrança Automática
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Switch
            checked={automaticaAtiva}
            onCheckedChange={handleToggleAutomatica}
          />
          <span className="text-sm">
            {automaticaAtiva ? "Ativa" : "Inativa"}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Templates de Cobrança */}
        <div>
          <h4 className="font-medium mb-2">Régua de Cobrança</h4>
          <div className="space-y-2">
            {templates.map((template, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  {template.tipo === 'email' ? 
                    <Mail className="h-4 w-4 text-blue-500" /> : 
                    <Phone className="h-4 w-4 text-green-500" />
                  }
                  <span className="text-sm">
                    {template.diasAtraso} dia(s) - {template.titulo}
                  </span>
                </div>
                <Badge variant="outline">
                  {template.tipo}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Títulos Atrasados */}
        <div>
          <h4 className="font-medium mb-2">Títulos em Atraso ({receivables.length})</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {receivables.map((receivable) => (
              <div key={receivable.id} className="flex items-center justify-between p-3 border rounded">
                <div className="flex-1">
                  <div className="font-medium text-sm">{receivable.cliente}</div>
                  <div className="text-xs text-gray-500">
                    {receivable.diasAtraso} dias em atraso • R$ {receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {getProximaAcao(receivable.diasAtraso || 0)}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCobrancaManual(receivable)}
                  >
                    Cobrar
                  </Button>
                </div>
              </div>
            ))}
            {receivables.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Nenhum título em atraso! 🎉
              </div>
            )}
          </div>
        </div>

        <Button variant="outline" className="w-full">
          <Settings className="h-4 w-4 mr-2" />
          Configurar Templates
        </Button>
      </CardContent>
    </Card>
  );
};

export default CobrancaAutomatica;
