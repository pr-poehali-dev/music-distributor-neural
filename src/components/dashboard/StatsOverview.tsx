import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsOverview = () => {
  const stats = [
    {
      title: "Общие прослушивания",
      value: "1,247,890",
      change: "+12.5%",
      trend: "up",
      icon: "Play",
      color: "text-green-600",
    },
    {
      title: "Активные треки",
      value: "23",
      change: "+2",
      trend: "up",
      icon: "Music",
      color: "text-blue-600",
    },
    {
      title: "Месячный доход",
      value: "₽24,567",
      change: "+8.2%",
      trend: "up",
      icon: "DollarSign",
      color: "text-purple-600",
    },
    {
      title: "Рейтинг ИИ",
      value: "8.7/10",
      change: "+0.3",
      trend: "up",
      icon: "Brain",
      color: "text-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-200 border-purple-100"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
              <Icon name={stat.icon as any} size={16} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <Icon name="TrendingUp" size={12} className="mr-1" />
              {stat.change} за месяц
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
