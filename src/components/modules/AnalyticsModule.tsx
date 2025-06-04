import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AnalyticsModule = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Продвинутая аналитика 📊
        </h1>
        <p className="text-slate-400">
          Глубокий анализ производительности и аудитории
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Icon
                name="TrendingUp"
                size={20}
                className="mr-2 text-cyan-400"
              />
              Рост аудитории
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  +23.5%
                </div>
                <p className="text-slate-400">Рост за месяц</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Icon name="Users" size={20} className="mr-2 text-purple-400" />
              География слушателей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Globe"
                  size={48}
                  className="text-purple-400 mx-auto mb-4"
                />
                <p className="text-white font-medium">47 стран</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsModule;
