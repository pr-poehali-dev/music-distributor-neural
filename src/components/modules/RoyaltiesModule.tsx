import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RoyaltiesModule = () => {
  const transactions = [
    {
      date: "15.11.2024",
      amount: "₽4,567",
      source: "Spotify",
      track: "Электронные сны",
      status: "completed",
    },
    {
      date: "10.11.2024",
      amount: "₽2,345",
      source: "Apple Music",
      track: "Городские огни",
      status: "pending",
    },
    {
      date: "05.11.2024",
      amount: "₽1,234",
      source: "Yandex Music",
      track: "Электронные сны",
      status: "completed",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Управление роялти 💰
          </h1>
          <p className="text-slate-400">
            Отслеживайте доходы и управляйте выплатами
          </p>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
          <Icon name="Download" size={16} className="mr-2" />
          Запросить выплату
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Wallet" size={24} className="text-green-400" />
              <Badge className="bg-green-500/20 text-green-400">Доступно</Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">₽12,456</div>
            <div className="text-slate-400 text-sm">К выплате</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Clock" size={24} className="text-yellow-400" />
              <Badge className="bg-yellow-500/20 text-yellow-400">
                Ожидание
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">₽3,789</div>
            <div className="text-slate-400 text-sm">В обработке</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="TrendingUp" size={24} className="text-cyan-400" />
              <Badge className="bg-cyan-500/20 text-cyan-400">Всего</Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">₽89,234</div>
            <div className="text-slate-400 text-sm">За все время</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Последние транзакции</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Icon name="Banknote" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {transaction.amount}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {transaction.source} • {transaction.track}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      transaction.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  >
                    {transaction.status === "completed"
                      ? "Завершено"
                      : "Ожидание"}
                  </Badge>
                  <div className="text-slate-400 text-sm mt-1">
                    {transaction.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyaltiesModule;
