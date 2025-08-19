import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Calendar, User, Settings, Home, LogOut } from "lucide-react";
import barberProLogo from "@/assets/barberpro-logo.png";

interface NavigationProps {
  userType?: "client" | "admin" | null;
}

export const Navigation = ({ userType }: NavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  if (!userType) {
    return (
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={barberProLogo} alt="BarberPro" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-primary">BarberPro</span>
          </Link>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/cadastro">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={barberProLogo} alt="BarberPro" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-primary">BarberPro</span>
          </Link>
          
          <div className="flex items-center gap-6">
            {userType === "client" && (
              <>
                <Link
                  to="/dashboard"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  to="/agendar"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/agendar") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Calendar className="w-4 h-4" />
                  Agendar
                </Link>
                <Link
                  to="/perfil"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/perfil") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <User className="w-4 h-4" />
                  Perfil
                </Link>
              </>
            )}
            
            {userType === "admin" && (
              <>
                <Link
                  to="/admin"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/admin") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  to="/admin/agenda"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/admin/agenda") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Calendar className="w-4 h-4" />
                  Agenda
                </Link>
                <Link
                  to="/admin/configuracoes"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive("/admin/configuracoes") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Settings className="w-4 h-4" />
                  Configurações
                </Link>
              </>
            )}
            
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};