import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ExternalLink, Phone, Mail, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Receivable } from "@/types/receivables";
import { EmailSender } from "@/components/EmailSender";
import { WhatsAppSender } from "@/components/WhatsAppSender";

interface ReceivablesTableProps {
  receivables: Receivable[];
  onUpdate: (receivables: Receivable[]) => void;
}

const ReceivablesTable = ({ receivables, onUpdate }: ReceivablesTableProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pago":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Em aberto":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "Atrasado":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pago":
        return "bg-green-100 text-green-800";
      case "Em aberto":
        return "bg-blue-100 text-blue-800";
      case "Atrasado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleMarcarCobrado = (id: string) => {
    const updatedReceivables = receivables.map(r => 
      r.id === id 
        ? { ...r, ultimaAcao: `Marcado como cobrado em ${new Date().toLocaleDateString('pt-BR')}` }
        : r
    );
    onUpdate(updatedReceivables);
    
    toast({
      title: "Marcado como cobrado",
      description: "Título marcado como cobrado com sucesso!",
    });
  };

  const handleEnviarEmail = (receivable: Receivable) => {
    toast({
      title: "E-mail enviado",
      description: `E-mail de cobrança enviado para ${receivable.cliente}`,
    });

    const updatedReceivables = receivables.map(r => 
      r.id === receivable.id 
        ? { ...r, ultimaAcao: `E-mail enviado em ${new Date().toLocaleDateString('pt-BR')}` }
        : r
    );
    onUpdate(updatedReceivables);
  };

  const handleEmailSent = (receivableId: string) => {
    const updatedReceivables = receivables.map(r => 
      r.id === receivableId 
        ? { ...r, ultimaAcao: `E-mail enviado em ${new Date().toLocaleDateString('pt-BR')}` }
        : r
    );
    onUpdate(updatedReceivables);
  };

  const handleWhatsAppSent = (receivableId: string) => {
    const updatedReceivables = receivables.map(r => 
      r.id === receivableId 
        ? { ...r, ultimaAcao: `WhatsApp enviado em ${new Date().toLocaleDateString('pt-BR')}` }
        : r
    );
    onUpdate(updatedReceivables);
  };

  const handleEnviarWhatsApp = (receivable: Receivable) => {
    if (!receivable.telefone) {
      toast({
        title: "Telefone não encontrado",
        description: "Este cliente não possui telefone cadastrado",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "WhatsApp enviado",
      description: `Mensagem enviada para ${receivable.cliente}`,
    });

    const updatedReceivables = receivables.map(r => 
      r.id === receivable.id 
        ? { ...r, ultimaAcao: `WhatsApp enviado em ${new Date().toLocaleDateString('pt-BR')}` }
        : r
    );
    onUpdate(updatedReceivables);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Títulos a Receber</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Cliente</th>
                <th className="text-left p-3">Valor</th>
                <th className="text-left p-3">Vencimento</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Última Ação</th>
                <th className="text-left p-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {receivables.map((receivable) => (
                <tr key={receivable.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div>
                      <div className="font-medium">{receivable.cliente}</div>
                      <div className="text-sm text-gray-500">{receivable.responsavel}</div>
                    </div>
                  </td>
                  <td className="p-3 font-medium">
                    R$ {receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="p-3">
                    <div>
                      {new Date(receivable.vencimento).toLocaleDateString('pt-BR')}
                      {receivable.diasAtraso && (
                        <div className="text-sm text-red-500">
                          {receivable.diasAtraso} dias em atraso
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <Badge className={getStatusColor(receivable.situacao)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(receivable.situacao)}
                        {receivable.situacao}
                      </div>
                    </Badge>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    {receivable.ultimaAcao || "Nenhuma ação"}
                  </td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {receivable.linkNF && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(receivable.linkNF, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      )}
                      
                      {receivable.email && (
                        receivable.situacao === 'Atrasado' || 
                        (receivable.situacao as string) === 'ATRASADO' || 
                        receivable.situacao?.toLowerCase() === 'atrasado' ||
                        (receivable.diasAtraso && receivable.diasAtraso > 0)
                      ) && (
                        <EmailSender 
                          receivable={receivable} 
                          variant="reminder"
                        />
                      )}
                      
                      {/* Botão de WhatsApp urgente para itens atrasados */}
                      {(receivable.situacao === 'Atrasado' || 
                        (receivable.situacao as string) === 'ATRASADO' || 
                        receivable.situacao?.toLowerCase() === 'atrasado' ||
                        (receivable.diasAtraso && receivable.diasAtraso > 0)
                      ) && (
                        <WhatsAppSender 
                          receivable={receivable} 
                          variant="collection"
                        />
                      )}
                      
                      {receivable.telefone && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEnviarWhatsApp(receivable)}
                        >
                          <Phone className="h-3 w-3" />
                        </Button>
                      )}
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleMarcarCobrado(receivable.id)}
                      >
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReceivablesTable;
