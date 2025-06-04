import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Music" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MusicFlow
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="Home" size={18} className="mr-2" />
              Дашборд
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="Upload" size={18} className="mr-2" />
              Загрузить
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="BarChart3" size={18} className="mr-2" />
              Аналитика
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="Bot" size={18} className="mr-2" />
              ИИ-Помощник
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} className="mr-2" />3
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>МИ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
