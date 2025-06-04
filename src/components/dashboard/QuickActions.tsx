import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const QuickActions = () => {
  const actions = [
    {
      title: "Загрузить новый трек",
      description: "Добавьте музыку и метаданные",
      icon: "Upload",
      color: "bg-blue-500",
      urgent: false,
    },
    {
      title: "Проверить выплаты",
      description: "Новые поступления: ₽1,247",
      icon: "CreditCard",
      color: "bg-green-500",
      urgent: true,
    },
    {
      title: "Анализ конкурентов",
      description: "ИИ-отчет готов",
      icon: "Users",
      color: "bg-purple-500",
      urgent: true,
    },
    {
      title: "Настроить кампанию",
      description: "Автопродвижение в соцсетях",
      icon: "Target",
      color: "bg-orange-500",
      urgent: false,
    },
    {
      title: "Обновить профиль",
      description: "Добавьте био и фото",
      icon: "User",
      color: "bg-gray-500",
      urgent: false,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-4 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className={`p-2 rounded-lg ${action.color} text-white`}>
                    <Icon name={action.icon as any} size={16} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {action.title}
                      </span>
                      {action.urgent && (
                        <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                  <Icon
                    name="ChevronRight"
                    size={16}
                    className="text-gray-400"
                  />
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Прогресс цели</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Месячная цель прослушиваний
                </span>
                <span className="text-sm text-gray-500">847K / 1M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "84.7%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Активные платформы</span>
                <span className="text-sm text-gray-500">8 / 12</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "66.7%" }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
