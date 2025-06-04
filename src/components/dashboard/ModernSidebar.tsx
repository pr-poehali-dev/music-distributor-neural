import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ModernSidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const ModernSidebar = ({
  activeModule,
  onModuleChange,
}: ModernSidebarProps) => {
  const modules = [
    {
      id: "overview",
      label: "Обзор",
      icon: "LayoutDashboard",
      notifications: 0,
    },
    { id: "upload", label: "Загрузка", icon: "Upload", notifications: 0 },
    { id: "releases", label: "Релизы", icon: "Disc3", notifications: 2 },
    {
      id: "analytics",
      label: "Аналитика",
      icon: "BarChart3",
      notifications: 0,
    },
    {
      id: "distribution",
      label: "Дистрибуция",
      icon: "Share2",
      notifications: 1,
    },
    {
      id: "promotion",
      label: "Продвижение",
      icon: "Megaphone",
      notifications: 3,
    },
    { id: "royalties", label: "Роялти", icon: "Banknote", notifications: 5 },
    { id: "ai-assistant", label: "ИИ-Помощник", icon: "Bot", notifications: 0 },
    { id: "social", label: "Соцсети", icon: "Users", notifications: 7 },
    {
      id: "marketplace",
      label: "Маркетплейс",
      icon: "Store",
      notifications: 0,
    },
  ];

  const quickActions = [
    {
      label: "Быстрый релиз",
      icon: "Zap",
      action: () => onModuleChange("upload"),
    },
    {
      label: "Чек роялти",
      icon: "DollarSign",
      action: () => onModuleChange("royalties"),
    },
    {
      label: "ИИ-анализ",
      icon: "Sparkles",
      action: () => onModuleChange("ai-assistant"),
    },
  ];

  return (
    <div className="w-80 bg-slate-800/50 backdrop-blur-xl border-r border-purple-500/20 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Icon name="Music" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SoundFlow
            </h1>
            <p className="text-xs text-slate-400">Pro Distribution</p>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700/50 border border-purple-500/20">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback>МИ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Дмитрий Волков</p>
            <p className="text-xs text-slate-400">Premium Artist</p>
          </div>
          <Icon
            name="Settings"
            size={16}
            className="text-slate-400 hover:text-purple-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-purple-500/20">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Быстрые действия
        </h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-purple-500/20"
              onClick={action.action}
            >
              <Icon name={action.icon as any} size={14} className="mr-2" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 p-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Модули
        </h3>
        <div className="space-y-1">
          {modules.map((module) => (
            <Button
              key={module.id}
              variant="ghost"
              className={`w-full justify-start h-10 transition-all duration-200 ${
                activeModule === module.id
                  ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
              onClick={() => onModuleChange(module.id)}
            >
              <Icon name={module.icon as any} size={16} className="mr-3" />
              <span className="flex-1 text-left">{module.label}</span>
              {module.notifications > 0 && (
                <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs h-5 min-w-[20px]">
                  {module.notifications}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="p-4 border-t border-purple-500/20">
        <div className="bg-gradient-to-r from-slate-700/50 to-purple-700/30 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Месячный лимит</span>
            <span className="text-xs text-purple-400">847GB / 1TB</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1 rounded-full"
              style={{ width: "84.7%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSidebar;
