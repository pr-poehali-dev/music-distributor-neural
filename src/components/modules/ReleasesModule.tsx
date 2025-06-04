import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ReleasesModule = () => {
  const releases = [
    {
      title: "Электронные сны",
      artist: "Дмитрий Волков",
      cover:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=80&h=80&fit=crop",
      status: "live",
      platforms: 12,
      plays: "245K",
      revenue: "₽4,567",
      releaseDate: "15.11.2024",
    },
    {
      title: "Городские огни",
      artist: "Дмитрий Волков",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop",
      status: "processing",
      platforms: 8,
      plays: "12K",
      revenue: "₽234",
      releaseDate: "20.11.2024",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Управление релизами 💿
          </h1>
          <p className="text-slate-400">
            Отслеживайте статус и производительность ваших релизов
          </p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
          <Icon name="Plus" size={16} className="mr-2" />
          Новый релиз
        </Button>
      </div>

      <div className="space-y-6">
        {releases.map((release, index) => (
          <Card
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50"
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {release.title}
                    </h3>
                    <Badge
                      className={
                        release.status === "live"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }
                    >
                      {release.status === "live" ? "В эфире" : "Обработка"}
                    </Badge>
                  </div>
                  <p className="text-slate-400 mb-4">
                    {release.artist} • {release.releaseDate}
                  </p>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {release.platforms}
                      </div>
                      <div className="text-slate-400 text-sm">Платформ</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">
                        {release.plays}
                      </div>
                      <div className="text-slate-400 text-sm">
                        Прослушиваний
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">
                        {release.revenue}
                      </div>
                      <div className="text-slate-400 text-sm">Доход</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button
                    variant="ghost"
                    className="text-slate-300 hover:text-white"
                  >
                    <Icon name="BarChart3" size={16} className="mr-2" />
                    Аналитика
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-slate-300 hover:text-white"
                  >
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReleasesModule;
