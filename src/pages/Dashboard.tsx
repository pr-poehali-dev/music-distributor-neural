import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ModernSidebar from "@/components/dashboard/ModernSidebar";
import MainContent from "@/components/dashboard/MainContent";
import PromotionModule from "@/components/modules/PromotionModule";
import DistributionModule from "@/components/modules/DistributionModule";
import AIAssistantModule from "@/components/modules/AIAssistantModule";
import SocialModule from "@/components/modules/SocialModule";
import MarketplaceModule from "@/components/modules/MarketplaceModule";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("overview");

  return (
    <div className="flex">
      <ModernSidebar
        activeModule={activeModule}
        onModuleChange={setActiveModule}
      />
      <Routes>
        <Route path="/" element={<MainContent activeModule={activeModule} />} />
        <Route path="/promotion" element={<PromotionModule />} />
        <Route path="/distribution" element={<DistributionModule />} />
        <Route path="/ai-assistant" element={<AIAssistantModule />} />
        <Route path="/social" element={<SocialModule />} />
        <Route path="/marketplace" element={<MarketplaceModule />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
