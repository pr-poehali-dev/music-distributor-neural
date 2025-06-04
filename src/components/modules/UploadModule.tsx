import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const UploadModule = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Загрузка треков 🎵
        </h1>
        <p className="text-slate-400">
          Загрузите свою музыку и настройте дистрибуцию
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Быстрая загрузка</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-purple-500/50 rounded-xl p-12 text-center hover:border-purple-400 transition-colors">
              <Icon
                name="Upload"
                size={48}
                className="text-purple-400 mx-auto mb-4"
              />
              <h3 className="text-white font-medium mb-2">
                Перетащите файлы сюда
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Поддерживаются WAV, MP3, FLAC до 100MB
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                Выбрать файлы
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Настройки релиза</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <Icon
                  name="Calendar"
                  size={20}
                  className="text-cyan-400 mb-2"
                />
                <h4 className="text-white font-medium">Дата релиза</h4>
                <p className="text-slate-400 text-sm">
                  Автоматически через 48 часов
                </p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <Icon name="Globe" size={20} className="text-green-400 mb-2" />
                <h4 className="text-white font-medium">Платформы</h4>
                <p className="text-slate-400 text-sm">
                  Все 150+ площадок включены
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadModule;
