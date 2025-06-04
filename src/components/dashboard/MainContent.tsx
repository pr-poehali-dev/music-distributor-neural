import OverviewModule from "@/components/modules/OverviewModule";
import UploadModule from "@/components/modules/UploadModule";
import ReleasesModule from "@/components/modules/ReleasesModule";
import AnalyticsModule from "@/components/modules/AnalyticsModule";
import RoyaltiesModule from "@/components/modules/RoyaltiesModule";

interface MainContentProps {
  activeModule: string;
}

const MainContent = ({ activeModule }: MainContentProps) => {
  const renderModule = () => {
    switch (activeModule) {
      case "overview":
        return <OverviewModule />;
      case "upload":
        return <UploadModule />;
      case "releases":
        return <ReleasesModule />;
      case "analytics":
        return <AnalyticsModule />;
      case "royalties":
        return <RoyaltiesModule />;
      default:
        return <OverviewModule />;
    }
  };

  return <div className="flex-1 overflow-auto">{renderModule()}</div>;
};

export default MainContent;
