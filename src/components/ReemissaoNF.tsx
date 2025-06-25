
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { FileText, Upload, ExternalLink } from "lucide-react";

const ReemissaoNF = () => {
  const [formData, setFormData] = useState({
    cliente: "",
    valor: "",
    servico: "",
    vencimento: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReemitirNF = async () => {
    if (!formData.cliente || !formData.valor) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos cliente e valor",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular reemissão
    setTimeout(() => {
      const nfNumber = Math.floor(Math.random() * 1000000);
      const linkNF = `https://nf.omie.com.br/${nfNumber}`;
      
      toast({
        title: "NF reemitida com sucesso!",
        description: `Nota fiscal #${nfNumber} gerada`,
        action: (
          <Button
            size="sm"
            onClick={() => window.open(linkNF, '_blank')}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Ver NF
          </Button>
        ),
      });

      // Reset form
      setFormData({
        cliente: "",
        valor: "",
        servico: "",
        vencimento: ""
      });
      
      setIsLoading(false);
    }, 2000);
  };

  const handleEnviarCreatorPay = () => {
    toast({
      title: "Enviando para Creator Pay",
      description: "Dados da NF estão sendo enviados para o Creator Pay...",
    });

    setTimeout(() => {
      toast({
        title: "Enviado com sucesso!",
        description: "NF foi adicionada ao Creator Pay automaticamente",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Reemissão de NF
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="cliente">Cliente *</Label>
            <Input
              id="cliente"
              placeholder="Nome ou razão social do cliente"
              value={formData.cliente}
              onChange={(e) => handleInputChange("cliente", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="valor">Valor *</Label>
              <Input
                id="valor"
                type="number"
                placeholder="0,00"
                value={formData.valor}
                onChange={(e) => handleInputChange("valor", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vencimento">Vencimento</Label>
              <Input
                id="vencimento"
                type="date"
                value={formData.vencimento}
                onChange={(e) => handleInputChange("vencimento", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="servico">Serviço/Produto</Label>
            <Select onValueChange={(value) => handleInputChange("servico", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultoria">Consultoria</SelectItem>
                <SelectItem value="desenvolvimento">Desenvolvimento</SelectItem>
                <SelectItem value="manutencao">Manutenção</SelectItem>
                <SelectItem value="treinamento">Treinamento</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleReemitirNF} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Reemitindo..." : "Reemitir NF"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleEnviarCreatorPay}
            className="w-full"
          >
            <Upload className="h-4 w-4 mr-2" />
            Enviar para Creator Pay
          </Button>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p>• A NF será gerada automaticamente via API do Omie</p>
          <p>• Link será atualizado na planilha de controle</p>
          <p>• Dados podem ser enviados para Creator Pay</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReemissaoNF;
