import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/App";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const DistributionModule = () => {
  const { user } = useAuth();

  const platforms = [
    {
      name: "Spotify",
      status: "active",
      listeners: "2.4M",
      revenue: "₽45,234",
      logo: "Music",
    },
    {
      name: "Apple Music",
      status: "active",
      listeners: "1.8M",
      revenue: "₽32,567",
      logo: "Play",
    },
    {
      name: "Yandex Music",
      status: "active",
      listeners: "1.2M",
      revenue: "₽18,345",
      logo: "Disc",
    },
    {
      name: "VK Music",
      status: "pending",
      listeners: "—",
      revenue: "—",
      logo: "Users",
    },
    {
      name: "YouTube Music",
      status: "active",
      listeners: "890K",
      revenue: "₽12,456",
      logo: "Video",
    },
    {
      name: "Deezer",
      status: "inactive",
      listeners: "—",
      revenue: "—",
      logo: "Headphones",
    },
  ];

  const distributionStats = {
    totalPlatforms:
      user?.subscription === "free"
        ? 8
        : user?.subscription === "artist"
          ? 25
          : 50,
    activePlatforms: 5,
    totalRevenue: "₽108,602",
    monthlyGrowth: "+23.5%",
  };

  const handlePlatformToggle = (platform: any) => {
    if (user?.subscription === "free" && platform.status === "inactive") {
      toast.error("Улучшите тариф для доступа к дополнительным площадкам");
      return;
    }

    toast.success(
      `${platform.name} ${platform.status === "active" ? "деактивирована" : "активирована"}`,
    );
  };

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Дистрибуция музыки 🌍
        </h1>
        <p className="text-slate-400">
          Управляйте размещением на стриминговых платформах
        </p>
      </div>

      {/* Статистика */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Globe" size={24} className="text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {distributionStats.activePlatforms}/
              {distributionStats.totalPlatforms}
            </div>
            <div className="text-slate-400 text-sm">Активных площадок</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Banknote" size={24} className="text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {distributionStats.totalRevenue}
            </div>
            <div className="text-slate-400 text-sm">Общий доход</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="TrendingUp" size={24} className="text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {distributionStats.monthlyGrowth}
            </div>
            <div className="text-slate-400 text-sm">Рост за месяц</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Clock" size={24} className="text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">24-48ч</div>
            <div className="text-slate-400 text-sm">Время публикации</div>
          </CardContent>
        </Card>
      </div>

      {/* Платформы */}
      <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50 mb-8">
        <CardHeader>
          <CardTitle className="text-white">Стриминговые платформы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon
                      name={platform.logo as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {platform.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {platform.listeners} слушателей • {platform.revenue}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    className={
                      platform.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : platform.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-slate-500/20 text-slate-400"
                    }
                  >
                    {platform.status === "active"
                      ? "Активна"
                      : platform.status === "pending"
                        ? "Ожидание"
                        : "Неактивна"}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handlePlatformToggle(platform)}
                    className="text-slate-300 hover:text-white"
                  >
                    <Icon name="Settings" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Прогресс дистрибуции */}
      <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Охват тарифа</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Доступно площадок</span>
              <span className="text-purple-400">
                {distributionStats.activePlatforms}/
                {distributionStats.totalPlatforms}
              </span>
            </div>
            <Progress
              value={
                (distributionStats.activePlatforms /
                  distributionStats.totalPlatforms) *
                100
              }
              className="h-2"
            />
            <p className="text-slate-400 text-sm">
              {user?.subscription === "free"
                ? "Улучшите до тарифа Артист для доступа к 25+ площадкам"
                : user?.subscription === "artist"
                  ? "Улучшите до тарифа Лейбл для доступа ко всем 50+ площадкам"
                  : "У вас доступ ко всем площадкам!"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DistributionModule;
