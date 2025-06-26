import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { AlertTriangle, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Receivable } from '../types/receivables';

interface EmailSenderProps {
  receivable: Receivable;
  variant?: 'collection' | 'reminder';
}

export const EmailSender: React.FC<EmailSenderProps> = ({ 
  receivable, 
  variant = 'reminder' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [responsiblePerson, setResponsiblePerson] = useState('');
  const [isSending, setIsSending] = useState(false);

  const isCollection = variant === 'collection';

  const getEmailSubject = () => {
    if (isCollection) {
      return `🚨 COBRANÇA OFICIAL - Fatura ${receivable.id} - ${receivable.diasAtraso} dias em atraso`;
    }
    return receivable.diasAtraso && receivable.diasAtraso > 0 
      ? `Lembrete de Pagamento - Fatura ${receivable.id}`
      : `Aviso de Vencimento - Fatura ${receivable.id}`;
  };

  const getEmailType = () => {
    return isCollection ? 'cobrança oficial' : 'lembrete';
  };

  const handleSendEmail = async () => {
    if (!email.trim()) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api-r4b9.onrender.com/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          type: variant,
          clientName: receivable.cliente,
          invoiceId: receivable.id,
          amount: receivable.valor,
          dueDate: receivable.vencimento,
          daysOverdue: receivable.diasAtraso,
          responsiblePerson: responsiblePerson || undefined,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          isCollection 
            ? `Cobrança oficial enviada com sucesso para ${email}` 
            : `Lembrete enviado com sucesso para ${email}`
        );
        setIsOpen(false);
        setEmail('');
        setResponsiblePerson('');
      } else {
        toast.error(`Erro ao enviar email: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error('Erro ao conectar com o servidor');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={isCollection ? "destructive" : "outline"} 
          size="sm"
          className="gap-2"
        >
          <Mail className="h-4 w-4" />
          {isCollection ? 'Cobrar' : 'Lembrete'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {isCollection ? 'Enviar Cobrança Oficial' : 'Enviar Lembrete'}
          </DialogTitle>
        </DialogHeader>

        {isCollection && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Atenção: Este é um email oficial de cobrança
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email do destinatário</Label>
            <Input
              id="email"
              type="email"
              placeholder="cliente@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="responsible">Responsável (opcional)</Label>
            <Input
              id="responsible"
              placeholder="Seu nome"
              value={responsiblePerson}
              onChange={(e) => setResponsiblePerson(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Assunto do email</Label>
            <Textarea
              value={getEmailSubject()}
              readOnly
              className="resize-none bg-gray-50"
              rows={2}
            />
          </div>

          <div className="grid gap-2">
            <Label>Informações da fatura</Label>
            <div className="text-sm space-y-1 p-3 bg-gray-50 rounded-md">
              <p><strong>Cliente:</strong> {receivable.cliente}</p>
              <p><strong>Fatura:</strong> {receivable.id}</p>
              <p><strong>Valor:</strong> R$ {receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <p><strong>Vencimento:</strong> {new Date(receivable.vencimento).toLocaleDateString('pt-BR')}</p>
              {receivable.diasAtraso && receivable.diasAtraso > 0 && (
                <p className="text-red-600"><strong>Dias em atraso:</strong> {receivable.diasAtraso}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSendEmail}
            disabled={isSending}
            className="gap-2"
          >
            {isSending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Enviar {getEmailType()}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 