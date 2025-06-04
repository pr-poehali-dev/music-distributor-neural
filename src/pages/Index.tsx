import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsOverview from "@/components/dashboard/StatsOverview";
import RecentTracks from "@/components/dashboard/RecentTracks";
import AIInsights from "@/components/dashboard/AIInsights";
import QuickActions from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <DashboardHeader />
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-8">
          <StatsOverview />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <RecentTracks />
              <AIInsights />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
