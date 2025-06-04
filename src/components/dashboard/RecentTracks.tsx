import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const RecentTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Летние Ночи",
      artist: "Дмитрий Волков",
      cover:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&h=60&fit=crop",
      plays: 45672,
      revenue: "₽1,234",
      aiScore: 8.9,
      status: "published",
      platforms: ["spotify", "apple", "yandex"],
    },
    {
      id: 2,
      title: "Городские Огни",
      artist: "Анна Петрова",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
      plays: 23891,
      revenue: "₽678",
      aiScore: 7.2,
      status: "processing",
      platforms: ["spotify", "apple"],
    },
    {
      id: 3,
      title: "Морской Бриз",
      artist: "Группа Горизонт",
      cover:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=60&h=60&fit=crop",
      plays: 67234,
      revenue: "₽1,789",
      aiScore: 9.1,
      status: "published",
      platforms: ["spotify", "apple", "yandex", "vk"],
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <Badge className="bg-green-100 text-green-800">Опубликован</Badge>
        );
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Обработка</Badge>
        );
      default:
        return <Badge variant="secondary">Черновик</Badge>;
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 8.5) return "text-green-600";
    if (score >= 7) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Последние треки</CardTitle>
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Загрузить трек
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-12 h-12 rounded-lg object-cover"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 truncate">
                      {track.title}
                    </h3>
                    <p className="text-sm text-gray-500">{track.artist}</p>
                  </div>
                  {getStatusBadge(track.status)}
                </div>

                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Icon name="Play" size={14} className="mr-1" />
                    {track.plays.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Icon name="DollarSign" size={14} className="mr-1" />
                    {track.revenue}
                  </span>
                  <span
                    className={`flex items-center font-medium ${getAIScoreColor(track.aiScore)}`}
                  >
                    <Icon name="Brain" size={14} className="mr-1" />
                    {track.aiScore}/10
                  </span>
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  {track.platforms.map((platform) => (
                    <div
                      key={platform}
                      className="w-5 h-5 rounded-sm bg-gray-200 flex items-center justify-center"
                    >
                      <Icon name="Music" size={12} />
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="ghost" size="sm">
                <Icon name="MoreHorizontal" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTracks;
