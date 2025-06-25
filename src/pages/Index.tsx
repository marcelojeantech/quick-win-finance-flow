import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { FileText, Phone, Mail, AlertCircle, Clock, CheckCircle, DollarSign } from "lucide-react";
import { Receivable } from "@/types/receivables";
import ReceivablesTable from "@/components/ReceivablesTable";
import CobrancaAutomatica from "@/components/CobrancaAutomatica";
import ReemissaoNF from "@/components/ReemissaoNF";
import { getReceivables } from '@/actions/omie';
import { isMockMode } from '@/config/api';

const Index = () => {
  const [receivables, setReceivables] = useState<Receivable[]>([]);
  const [filteredReceivables, setFilteredReceivables] = useState<Receivable[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);

  // Função para buscar dados do Omie
  const fetchOmieData = async () => {
    setIsLoading(true);
    try {
      const { receivables: omieReceivables } = await getReceivables();
      
      setReceivables(omieReceivables);
      setFilteredReceivables(omieReceivables);
      
      toast({
        title: "Dados carregados com sucesso!",
        description: `${omieReceivables.length} recebíveis importados do Omie.`,
      });
    } catch (error) {
      console.error('Erro ao buscar dados do Omie:', error);
      toast({
        title: "Erro na sincronização",
        description: "Não foi possível conectar com o Omie. Verifique sua conexão.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados iniciais
  useEffect(() => {
    fetchOmieData();
    
    // Show mock mode notification if enabled
    if (isMockMode()) {
      toast({
        title: "Modo Mock Ativo",
        description: "Aplicação rodando com dados simulados do Omie.",
      });
    }
  }, []);

  // Filtros
  useEffect(() => {
    let filtered = receivables;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.cliente.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedStatus !== "all") {
      filtered = filtered.filter(item => item.situacao === selectedStatus);
    }
    
    setFilteredReceivables(filtered);
  }, [searchTerm, selectedStatus, receivables]);

  // Calcular estatísticas
  const stats = {
    total: receivables.length,
    emAberto: receivables.filter(r => r.situacao === "Em aberto").length,
    atrasados: receivables.filter(r => r.situacao === "Atrasado").length,
    pagos: receivables.filter(r => r.situacao === "Pago").length,
    valorTotal: receivables.reduce((sum, r) => sum + r.valor, 0),
    valorAtrasado: receivables.filter(r => r.situacao === "Atrasado").reduce((sum, r) => sum + r.valor, 0)
  };

  const handleSyncOmie = () => {
    fetchOmieData();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contas a Receber</h1>
            <p className="text-gray-600">Controle centralizado de faturamento e cobrança</p>
            {isMockMode() && (
              <Badge variant="secondary" className="mt-2">
                🧪 Modo Mock - Dados Simulados
              </Badge>
            )}
          </div>
          <Button 
            onClick={handleSyncOmie} 
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            {isLoading ? "Sincronizando..." : "Sincronizar Omie"}
          </Button>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Títulos</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Em Aberto</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.emAberto}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atrasados</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.atrasados}</div>
              <p className="text-xs text-muted-foreground">
                R$ {stats.valorAtrasado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                R$ {stats.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Pesquisar por cliente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedStatus === "all" ? "default" : "outline"}
                  onClick={() => setSelectedStatus("all")}
                >
                  Todos
                </Button>
                <Button
                  variant={selectedStatus === "Em aberto" ? "default" : "outline"}
                  onClick={() => setSelectedStatus("Em aberto")}
                >
                  Em Aberto
                </Button>
                <Button
                  variant={selectedStatus === "Atrasado" ? "default" : "outline"}
                  onClick={() => setSelectedStatus("Atrasado")}
                >
                  Atrasados
                </Button>
                <Button
                  variant={selectedStatus === "Pago" ? "default" : "outline"}
                  onClick={() => setSelectedStatus("Pago")}
                >
                  Pagos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Recebíveis */}
        <ReceivablesTable 
          receivables={filteredReceivables} 
          onUpdate={setReceivables}
        />

        {/* Módulos do MVP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CobrancaAutomatica receivables={receivables.filter(r => r.situacao === "Atrasado")} />
          <ReemissaoNF />
        </div>
      </div>
    </div>
  );
};

export default Index;
