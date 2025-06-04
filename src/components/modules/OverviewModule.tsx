import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const OverviewModule = () => {
  const stats = [
    {
      title: "Общие прослушивания",
      value: "2.4M",
      change: "+23.5%",
      icon: "Play",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Активные релизы",
      value: "47",
      change: "+8",
      icon: "Disc3",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Доход за месяц",
      value: "₽89,234",
      change: "+18.7%",
      icon: "Banknote",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "ИИ Рейтинг",
      value: "9.2/10",
      change: "+0.5",
      icon: "Brain",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  const recentActivity = [
    {
      action: "Новый релиз",
      track: "Электронные сны",
      platform: "Spotify",
      time: "2 мин назад",
      status: "success",
    },
    {
      action: "Выплата роялти",
      track: "Все релизы",
      platform: "SoundFlow",
      time: "1 час назад",
      status: "pending",
    },
    {
      action: "ИИ-анализ готов",
      track: "Городские огни",
      platform: "AI Assistant",
      time: "3 часа назад",
      status: "info",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Добро пожаловать обратно, Дмитрий! 🚀
        </h1>
        <p className="text-slate-400">
          Ваша музыка набрала +247K прослушиваний за последние 24 часа
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient}`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
                <span className="text-green-400 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Real-time Analytics */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon
                  name="Activity"
                  size={20}
                  className="mr-2 text-cyan-400"
                />
                Аналитика в реальном времени
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-slate-700/30 to-purple-700/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="TrendingUp"
                    size={48}
                    className="text-cyan-400 mx-auto mb-4"
                  />
                  <p className="text-white font-medium">График прослушиваний</p>
                  <p className="text-slate-400 text-sm">
                    Интерактивная визуализация данных
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div>
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Bell" size={20} className="mr-2 text-purple-400" />
                Последняя активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-700/30"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === "success"
                          ? "bg-green-400"
                          : activity.status === "pending"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {activity.action}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {activity.track} • {activity.platform}
                      </p>
                      <p className="text-slate-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewModule;
