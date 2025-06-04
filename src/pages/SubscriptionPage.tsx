import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/App";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const SubscriptionPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      id: "free",
      name: "Бесплатный",
      price: "0₽",
      period: "навсегда",
      features: [
        "Базовая аналитика",
        "Вывод средств от 500₽",
        "Загрузка до 5 треков/месяц",
        "Дистрибуция на основные площадки",
        "Стандартная поддержка",
      ],
      color: "from-slate-600 to-slate-700",
      popular: false,
    },
    {
      id: "artist",
      name: "Артист",
      price: "990₽",
      period: "в месяц",
      features: [
        "Расширенная аналитика",
        "Вывод средств от 100₽",
        "Безлимитная загрузка",
        "Все площадки + эксклюзивные",
        "Приоритетная поддержка",
        "Продвижение в плейлистах",
        "Персональный менеджер",
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: "label",
      name: "Лейбл",
      price: "2990₹",
      period: "в месяц",
      features: [
        "Полная аналитика + API",
        "Мгновенный вывод средств",
        "Мульти-артист управление",
        "Все площадки + early access",
        "VIP поддержка 24/7",
        "Массовое продвижение",
        "Персональная команда",
        "Брендинг и кастомизация",
      ],
      color: "from-cyan-400 to-blue-500",
      popular: false,
    },
  ];

  const handleSubscription = async (planId: string) => {
    if (planId === "free") {
      toast.success("Вы используете бесплатный тариф!");
      navigate("/");
      return;
    }

    // Интеграция с ЮKassa
    const payment = {
      amount: planId === "artist" ? 990 : 2990,
      currency: "RUB",
      description: `Подписка SoundFlow - ${plans.find((p) => p.id === planId)?.name}`,
      confirmation: {
        type: "redirect",
        return_url: `${window.location.origin}/subscription/success`,
      },
    };

    toast.loading("Переходим к оплате...");

    // Симуляция запроса к ЮKassa API
    setTimeout(() => {
      toast.success("Платеж успешно обработан!");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Выберите тариф для вашего творчества
          </h1>
          <p className="text-xl text-slate-400">
            Лучшие условия дистрибуции на рынке
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Популярный
                </Badge>
              )}

              <CardHeader>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={
                      plan.id === "free"
                        ? "User"
                        : plan.id === "artist"
                          ? "Star"
                          : "Crown"
                    }
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-center text-white text-2xl">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-slate-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mr-3"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSubscription(plan.id)}
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                  disabled={user?.subscription === plan.id}
                >
                  {user?.subscription === plan.id
                    ? "Текущий тариф"
                    : "Выбрать тариф"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="border-purple-500/50 text-white hover:bg-purple-500/20"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться в дашборд
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
