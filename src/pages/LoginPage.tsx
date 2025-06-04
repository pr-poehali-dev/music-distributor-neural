import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/App";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const LoginPage = () => {
  const { login } = useAuth();

  const handleSocialLogin = (provider: string) => {
    // Симуляция авторизации через соцсети
    toast.success(`Авторизация через ${provider} успешна!`);

    const mockUser = {
      id: "user_123",
      name: "Дмитрий Волков",
      email: "dmitry@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      subscription: "free" as const,
    };

    login(mockUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border-purple-500/20">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Music" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SoundFlow
          </CardTitle>
          <p className="text-slate-400">Дистрибуция музыки нового поколения</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => handleSocialLogin("Telegram")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Войти через Telegram
          </Button>

          <Button
            onClick={() => handleSocialLogin("Google")}
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            <Icon name="Mail" size={20} className="mr-2" />
            Войти через Google
          </Button>

          <Button
            onClick={() => handleSocialLogin("VK")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Icon name="Users" size={20} className="mr-2" />
            Войти через VK
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-800 px-2 text-slate-400">или</span>
            </div>
          </div>

          <Button
            onClick={() => handleSocialLogin("Email")}
            variant="outline"
            className="w-full border-purple-500/50 text-white hover:bg-purple-500/20"
          >
            <Icon name="Mail" size={20} className="mr-2" />
            Войти по Email
          </Button>

          <p className="text-xs text-slate-400 text-center mt-4">
            Авторизуясь, вы соглашаетесь с{" "}
            <a href="#" className="text-purple-400 hover:underline">
              правилами сервиса
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
