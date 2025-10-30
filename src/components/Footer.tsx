import { Bell, ArrowRight, FileText, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="h-6 w-6" />
          </button>
          
          <button className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowRight className="h-6 w-6" />
          </button>
          
          <button className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="h-6 w-6" />
          </button>
          
          <button className="flex flex-col items-center gap-2 bg-primary rounded-full p-3 text-primary-foreground hover:bg-primary/90 transition-colors">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
