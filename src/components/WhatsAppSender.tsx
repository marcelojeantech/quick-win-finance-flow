import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { AlertTriangle, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Receivable } from '../types/receivables';

interface WhatsAppSenderProps {
  receivable: Receivable;
  variant?: 'collection' | 'reminder';
}

export const WhatsAppSender: React.FC<WhatsAppSenderProps> = ({ 
  receivable, 
  variant = 'collection' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);

  const isCollection = variant === 'collection';

  const getMessagePreview = () => {
    if (isCollection) {
      return `🚨 *COBRANÇA URGENTE* 🚨

Olá *${receivable.cliente}*!

Sua fatura *${receivable.id}* no valor de *R$ ${receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* está em atraso há *${receivable.diasAtraso || 0} ${(receivable.diasAtraso || 0) === 1 ? 'dia' : 'dias'}*.

📅 *Data de vencimento:* ${new Date(receivable.vencimento).toLocaleDateString('pt-BR')}

⚠️ *REGULARIZAÇÃO URGENTE NECESSÁRIA*

Para evitar:
• Inclusão nos órgãos de proteção ao crédito
• Cobrança de juros e multa
• Suspensão dos serviços

💰 *Formas de pagamento:*
• PIX (instantâneo)
• Transferência bancária
• Boleto (solicite nova via)

Se já pagou, envie o comprovante imediatamente.

*Quick Win Finance*
_Mensagem automática de cobrança_`;
    }

    const isOverdue = receivable.diasAtraso && receivable.diasAtraso > 0;
    
    if (isOverdue) {
      return `⚠️ *LEMBRETE DE PAGAMENTO*

Olá *${receivable.cliente}*!

Sua fatura *${receivable.id}* no valor de *R$ ${receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* venceu em *${new Date(receivable.vencimento).toLocaleDateString('pt-BR')}* e está em atraso há *${receivable.diasAtraso} ${receivable.diasAtraso === 1 ? 'dia' : 'dias'}*.

Por favor, regularize o pagamento o mais breve possível.

Se já efetuou o pagamento, desconsidere esta mensagem.

*Quick Win Finance*`;
    } else {
      return `📅 *AVISO DE VENCIMENTO*

Olá *${receivable.cliente}*!

Sua fatura *${receivable.id}* no valor de *R$ ${receivable.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* vence em *${new Date(receivable.vencimento).toLocaleDateString('pt-BR')}*.

Este é um lembrete amigável. Agradecemos sua atenção!

Se já efetuou o pagamento, desconsidere esta mensagem.

*Quick Win Finance*`;
    }
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (xx) xxxxx-xxxx
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSendWhatsApp = async () => {
    if (!phone.trim()) {
      toast.error('Por favor, insira um número de telefone válido');
      return;
    }

    // Remove formatação e adiciona código do país se necessário
    const cleanPhone = phone.replace(/\D/g, '');
    const fullPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

    if (fullPhone.length < 12 || fullPhone.length > 13) {
      toast.error('Número de telefone inválido. Use o formato: (xx) xxxxx-xxxx');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api-r4b9.onrender.com/api/whatsapp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: fullPhone,
          type: variant,
          clientName: receivable.cliente,
          invoiceId: receivable.id,
          amount: receivable.valor,
          dueDate: receivable.vencimento,
          daysOverdue: receivable.diasAtraso,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          isCollection 
            ? `Cobrança urgente enviada via WhatsApp para ${phone}` 
            : `Lembrete enviado via WhatsApp para ${phone}`
        );
        setIsOpen(false);
        setPhone('');
      } else {
        toast.error(`Erro ao enviar WhatsApp: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar WhatsApp:', error);
      toast.error('Erro ao conectar com o servidor');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          {isCollection ? 'WhatsApp urgente' : 'WhatsApp'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            {isCollection ? 'Enviar Cobrança Urgente via WhatsApp' : 'Enviar Lembrete via WhatsApp'}
          </DialogTitle>
        </DialogHeader>

        {isCollection && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Atenção: Esta é uma mensagem urgente de cobrança
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="phone">Número do WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={15}
            />
            <p className="text-xs text-gray-500">
              Digite o número com DDD (será enviado automaticamente com +55)
            </p>
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

          <div className="grid gap-2">
            <Label>Preview da mensagem</Label>
            <Textarea
              value={getMessagePreview()}
              readOnly
              className="resize-none bg-gray-50 text-xs"
              rows={12}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSendWhatsApp}
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
                Enviar {isCollection ? 'Cobrança' : 'Lembrete'}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 