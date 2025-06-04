import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const AIInsights = () => {
  const insights = [
    {
      type: "recommendation",
      title: "Оптимальное время для релиза",
      description:
        "Анализ показывает, что релиз в пятницу в 15:00 увеличит прослушивания на 23%",
      confidence: 87,
      action: "Запланировать релиз",
      icon: "Calendar",
      color: "text-blue-600",
    },
    {
      type: "analysis",
      title: 'Потенциал трека "Летние Ночи"',
      description:
        "Высокий потенциал вирусности. Рекомендуем увеличить бюджет на продвижение",
      confidence: 92,
      action: "Посмотреть детали",
      icon: "TrendingUp",
      color: "text-green-600",
    },
    {
      type: "warning",
      title: "Снижение активности аудитории",
      description:
        "Активность слушателей снизилась на 12%. Попробуйте новый контент или коллаборации",
      confidence: 78,
      action: "Получить советы",
      icon: "AlertTriangle",
      color: "text-yellow-600",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center">
            <Icon name="Brain" size={20} className="mr-2 text-purple-600" />
            ИИ-Аналитика
          </CardTitle>
          <Button variant="outline" size="sm">
            <Icon name="Zap" size={16} className="mr-2" />
            Полный анализ
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${insight.color}`}>
                  <Icon name={insight.icon as any} size={16} />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {insight.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        Уверенность:
                      </span>
                      <Progress
                        value={insight.confidence}
                        className="w-20 h-2"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {insight.confidence}%
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      {insight.action}
                      <Icon name="ArrowRight" size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                <Icon name="Sparkles" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Персональный ИИ-коуч готов помочь
                </h3>
                <p className="text-sm text-gray-600">
                  Получите персонализированные рекомендации по развитию карьеры
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Начать диалог
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
