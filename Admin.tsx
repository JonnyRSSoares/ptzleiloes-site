import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Loader2, Settings, FileText, Image, HelpCircle, Phone, Award } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Admin() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redirecionar se não estiver autenticado
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      window.location.href = getLoginUrl();
    }
  }, [loading, isAuthenticated]);

  // Verificar se é admin
  const isAdmin = user?.role === 'admin';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Vai redirecionar
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Acesso Negado</CardTitle>
            <CardDescription>
              Você não tem permissão para acessar o painel administrativo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/")}>
              Voltar para o site
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Olá, <strong>{user.name || user.email}</strong>
            </span>
            <Button variant="outline" size="sm" onClick={() => setLocation("/")}>
              Ver Site
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Conteúdo</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Imagens</span>
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Benefícios</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contato</span>
            </TabsTrigger>
          </TabsList>

          {/* Conteúdo Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Editar Conteúdo do Site</CardTitle>
                <CardDescription>
                  Edite os textos das principais seções do site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Editor de conteúdo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Imagens Tab */}
          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Imagens</CardTitle>
                <CardDescription>
                  Faça upload e gerencie as imagens do site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gerenciador de imagens em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefícios Tab */}
          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Benefícios</CardTitle>
                <CardDescription>
                  Adicione, edite ou remova benefícios e características
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Editor de benefícios em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar FAQ</CardTitle>
                <CardDescription>
                  Adicione, edite ou remova perguntas frequentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Editor de FAQ em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contato Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Edite telefones, endereço, redes sociais e horários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Editor de contato em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
