import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/App";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const PromotionModule = () => {
  const { user } = useAuth();

  const promotionOptions = [
    {
      title: "Плейлисты Spotify",
      description: "Продвижение в кураторских плейлистах",
      price: "от 1,990₽",
      features: ["5-10 плейлистов", "До 50К охват", "Гарантия размещения"],
      available: ["artist", "label"],
      icon: "Music",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Радио промо",
      description: "Размещение на интернет-радиостанциях",
      price: "от 2,500₽",
      features: ["20+ радиостанций", "Эфирное время", "Отчет о ротации"],
      available: ["artist", "label"],
      icon: "Radio",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Соцсети",
      description: "Продвижение в TikTok, Instagram, YouTube",
      price: "от 990₽",
      features: ["Вирусные тренды", "Влиятели", "Таргетинг"],
      available: ["free", "artist", "label"],
      icon: "Share2",
      color: "from-pink-400 to-purple-500",
    },
    {
      title: "PR кампания",
      description: "Полноценная PR поддержка релиза",
      price: "от 15,000₽",
      features: ["Пресс-релизы", "Интервью", "Медиа покрытие"],
      available: ["label"],
      icon: "Megaphone",
      color: "from-orange-400 to-red-500",
    },
  ];

  const handleStartPromotion = (option: any) => {
    if (!option.available.includes(user?.subscription)) {
      toast.error("Улучшите тариф для доступа к этой функции");
      return;
    }

    toast.success(`Запущена промо кампания: ${option.title}`);
  };

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Продвижение треков 📈
        </h1>
        <p className="text-slate-400">
          Эффективные инструменты для продвижения вашей музыки
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {promotionOptions.map((option, index) => (
          <Card
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon
                      name={option.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-white">{option.title}</CardTitle>
                    <p className="text-slate-400 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
                <Badge
                  className={
                    option.available.includes(user?.subscription || "free")
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                >
                  {option.available.includes(user?.subscription || "free")
                    ? "Доступно"
                    : "Недоступно"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-cyan-400">
                  {option.price}
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleStartPromotion(option)}
                  className={`w-full ${
                    option.available.includes(user?.subscription || "free")
                      ? `bg-gradient-to-r ${option.color} hover:opacity-90`
                      : "bg-slate-600 cursor-not-allowed"
                  }`}
                  disabled={
                    !option.available.includes(user?.subscription || "free")
                  }
                >
                  {option.available.includes(user?.subscription || "free")
                    ? "Запустить промо"
                    : "Недоступно"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Активные кампании</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Icon
              name="Activity"
              size={48}
              className="text-slate-600 mx-auto mb-4"
            />
            <p className="text-slate-400">У вас пока нет активных кампаний</p>
            <p className="text-slate-500 text-sm">
              Запустите первую промо кампанию выше
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromotionModule;
