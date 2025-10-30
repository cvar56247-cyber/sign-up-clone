import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight">≡Bancolombia</span>
          </div>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        
        <nav className="hidden md:flex items-center gap-6">
          <span className="text-base font-medium cursor-pointer hover:text-primary transition-colors">
            Menú
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
