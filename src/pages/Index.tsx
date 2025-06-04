import ModernSidebar from "@/components/dashboard/ModernSidebar";
import MainContent from "@/components/dashboard/MainContent";
import { useState } from "react";

const Index = () => {
  const [activeModule, setActiveModule] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex">
        <ModernSidebar
          activeModule={activeModule}
          onModuleChange={setActiveModule}
        />
        <MainContent activeModule={activeModule} />
      </div>
    </div>
  );
};

export default Index;
