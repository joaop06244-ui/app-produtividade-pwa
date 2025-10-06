"use client";

import { useState, useEffect } from "react";
import { 
  Crown, 
  Target, 
  Brain, 
  Zap, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star,
  Trophy,
  Flame,
  Heart,
  BookOpen,
  Calendar,
  BarChart3,
  Sparkles,
  Download,
  Menu,
  X,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Trash2,
  ChevronRight,
  Award,
  Shield,
  Lightbulb,
  Rocket,
  Video,
  ThumbsUp,
  MessageCircle,
  Share,
  Bookmark,
  Upload,
  Send,
  MoreHorizontal,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  User
} from "lucide-react";
import { motivationalQuotes, powerfulAffirmations, wealthPrinciples, spiritualPractices, habitTechniques, biblicalVerses, millionaireMindsetPrinciples } from "@/lib/constants";

export default function MindSetPro() {
  const [activeSection, setActiveSection] = useState("home");
  const [habits, setHabits] = useState([
    { id: 1, name: "Meditação Matinal", completed: false, streak: 7, category: "spiritual" },
    { id: 2, name: "Leitura 30min", completed: true, streak: 12, category: "mental" },
    { id: 3, name: "Exercício Físico", completed: false, streak: 5, category: "physical" },
    { id: 4, name: "Gratidão Diária", completed: true, streak: 15, category: "spiritual" },
    { id: 5, name: "Planejamento Financeiro", completed: false, streak: 3, category: "financial" }
  ]);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Video Feed States
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState([
    {
      id: 1,
      author: "Carlos Mentalidade",
      username: "@carlosmentalidade",
      description: "3 hábitos que mudaram minha vida financeira 💰 #mindset #riqueza #habitos",
      likes: 1247,
      comments: 89,
      shares: 156,
      isLiked: false,
      isBookmarked: false,
      category: "wealth",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      author: "Ana Espiritual",
      username: "@anaespiritual",
      description: "Oração poderosa para começar o dia com gratidão 🙏 #fe #oracao #gratidao",
      likes: 892,
      comments: 134,
      shares: 78,
      isLiked: true,
      isBookmarked: false,
      category: "spiritual",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      author: "Pedro Foco",
      username: "@pedrofoco",
      description: "Como usar a técnica Pomodoro para 10x sua produtividade ⚡ #foco #produtividade",
      likes: 2156,
      comments: 267,
      shares: 445,
      isLiked: false,
      isBookmarked: true,
      category: "focus",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      author: "Maria Hábitos",
      username: "@mariahabitos",
      description: "21 dias para criar um hábito que vai transformar sua vida 🔥 #habitos #transformacao",
      likes: 1834,
      comments: 198,
      shares: 312,
      isLiked: true,
      isBookmarked: false,
      category: "habits",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      author: "João Mindset",
      username: "@joaomindset",
      description: "A diferença entre mentalidade de pobre e rico explicada em 60s 💎 #mindset #riqueza",
      likes: 3421,
      comments: 456,
      shares: 789,
      isLiked: false,
      isBookmarked: true,
      category: "mindset",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else {
          setIsTimerRunning(false);
          // Timer finished - could add notification here
        }
      }, 1000);
    } else if (!isTimerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerMinutes, timerSeconds]);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 12000); // Change quote every 12 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 }
        : habit
    ));
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit = {
        id: Date.now(),
        name: newHabitName,
        completed: false,
        streak: 0,
        category: "mental"
      };
      setHabits([...habits, newHabit]);
      setNewHabitName("");
    }
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const resetTimer = () => {
    setTimerMinutes(25);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  // Video Feed Functions
  const toggleLike = (videoId) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { 
            ...video, 
            isLiked: !video.isLiked,
            likes: video.isLiked ? video.likes - 1 : video.likes + 1
          }
        : video
    ));
  };

  const toggleBookmark = (videoId) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, isBookmarked: !video.isBookmarked }
        : video
    ));
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const addComment = (videoId) => {
    if (newComment.trim()) {
      setVideos(videos.map(video => 
        video.id === videoId 
          ? { ...video, comments: video.comments + 1 }
          : video
      ));
      setNewComment("");
    }
  };

  const sections = [
    { id: "home", name: "Início", icon: Crown, gradient: "from-amber-400 to-yellow-600" },
    { id: "videos", name: "Vídeos", icon: Video, gradient: "from-pink-400 to-red-600" },
    { id: "habits", name: "Hábitos", icon: Target, gradient: "from-blue-400 to-cyan-600" },
    { id: "mindset", name: "Mindset", icon: Brain, gradient: "from-purple-400 to-pink-600" },
    { id: "spiritual", name: "Espiritual", icon: Heart, gradient: "from-red-400 to-rose-600" },
    { id: "wealth", name: "Riqueza", icon: TrendingUp, gradient: "from-green-400 to-emerald-600" },
    { id: "focus", name: "Foco", icon: Clock, gradient: "from-indigo-400 to-blue-600" }
  ];

  const renderHome = () => (
    <div className={`space-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-8 border border-[#D4AF37]/20 shadow-2xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#B8860B] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl shadow-lg">
              <Crown className="w-10 h-10 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                MindSet Pro
              </h1>
              <p className="text-gray-400 text-sm font-medium tracking-wide">ELITE DEVELOPMENT SYSTEM</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light leading-relaxed">
            Transforme sua vida com disciplina, fé e mentalidade milionária
          </p>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Flame, label: "Streak Máximo", value: `${Math.max(...habits.map(h => h.streak))} dias`, color: "from-orange-500 to-red-500" },
              { icon: Trophy, label: "Nível Atual", value: "Guerreiro", color: "from-yellow-500 to-amber-500" },
              { icon: Target, label: "Hábitos Hoje", value: `${habits.filter(h => h.completed).length}/${habits.length}`, color: "from-blue-500 to-cyan-500" },
              { icon: Star, label: "Pontos XP", value: habits.reduce((acc, h) => acc + h.streak, 0), color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm" style={{background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`}}></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-gradient-to-r ${stat.color} rounded-xl`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-sm text-gray-300">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Shield, label: "Consistente", desc: "7+ dias seguidos" },
              { icon: Award, label: "Dedicado", desc: "50+ pontos XP" },
              { icon: Rocket, label: "Focado", desc: "Timer ativo" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 px-4 py-2 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm">
                <badge.icon className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#D4AF37]">{badge.label}</span>
                <span className="text-xs text-gray-400">• {badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Install PWA Prompt with Enhanced Design */}
      {showInstallPrompt && (
        <div className="relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#FFD700] p-6 rounded-2xl shadow-2xl animate-slide-down">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-black/20 rounded-xl">
                <Download className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-bold text-black text-lg">📱 Instalar Aplicativo</p>
                <p className="text-black/80 text-sm">Acesse offline e tenha uma experiência nativa</p>
              </div>
            </div>
            <button
              onClick={handleInstallClick}
              className="bg-black text-[#D4AF37] px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Instalar Agora
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { icon: Video, label: "Feed de Vídeos", desc: "Conteúdo inspirador", color: "from-pink-500 to-red-500", action: () => setActiveSection("videos") },
          { icon: Target, label: "Hábitos Diários", desc: "Construa sua rotina", color: "from-blue-500 to-cyan-500", action: () => setActiveSection("habits") },
          { icon: Brain, label: "Mindset Milionário", desc: "Mentalidade de sucesso", color: "from-purple-500 to-pink-500", action: () => setActiveSection("mindset") },
          { icon: Heart, label: "Vida Espiritual", desc: "Conexão divina", color: "from-red-500 to-orange-500", action: () => setActiveSection("spiritual") },
          { icon: TrendingUp, label: "Construir Riqueza", desc: "Liberdade financeira", color: "from-green-500 to-emerald-500", action: () => setActiveSection("wealth") },
          { icon: Clock, label: "Timer Pomodoro", desc: "Foco profundo", color: "from-indigo-500 to-blue-500", action: () => setActiveSection("focus") }
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm" style={{background: `linear-gradient(to bottom right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`}}></div>
            <div className={`relative bg-gradient-to-br ${item.color} p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-xl border border-white/10`}>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-xs opacity-90 font-medium">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Enhanced Dynamic Quote */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-[#D4AF37]/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent"></div>
        <div className="relative flex items-start gap-6">
          <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl shadow-lg flex-shrink-0">
            <Sparkles className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <div className="text-4xl text-[#D4AF37] mb-2">"</div>
              <p className="text-xl md:text-2xl italic font-light text-gray-100 leading-relaxed transition-all duration-500">
                {motivationalQuotes[currentQuoteIndex].text}
              </p>
              <div className="text-4xl text-[#D4AF37] text-right">"</div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#D4AF37] font-bold text-lg">— {motivationalQuotes[currentQuoteIndex].author}</p>
              <div className="flex space-x-1">
                {motivationalQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuoteIndex ? 'bg-[#D4AF37] w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Progress Overview */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Calendar className="w-7 h-7 text-[#D4AF37]" />
          Progresso de Hoje
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-3">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
                <circle 
                  cx="40" 
                  cy="40" 
                  r="36" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  fill="transparent" 
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - habits.filter(h => h.completed).length / habits.length)}`}
                  className="text-[#D4AF37] transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-[#D4AF37]">
                  {Math.round((habits.filter(h => h.completed).length / habits.length) * 100)}%
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-medium">Hábitos Completos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {habits.filter(h => h.completed).length}
            </div>
            <p className="text-gray-300 font-medium">Tarefas Concluídas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {Math.max(...habits.map(h => h.streak))}
            </div>
            <p className="text-gray-300 font-medium">Melhor Sequência</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVideos = () => {
    const currentVideo = videos[currentVideoIndex];
    
    return (
      <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl shadow-lg">
            <Video className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Feed de Vídeos</h2>
            <p className="text-gray-400">Conteúdo inspirador da comunidade</p>
          </div>
        </div>

        {/* Mobile-First Video Feed (TikTok Style) */}
        <div className="max-w-md mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
          {/* Video Container */}
          <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black">
            {/* Video Thumbnail/Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentVideo.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white border ${
                    currentVideo.category === 'wealth' ? 'bg-green-500/20 border-green-500' :
                    currentVideo.category === 'spiritual' ? 'bg-red-500/20 border-red-500' :
                    currentVideo.category === 'focus' ? 'bg-blue-500/20 border-blue-500' :
                    currentVideo.category === 'habits' ? 'bg-purple-500/20 border-purple-500' :
                    'bg-pink-500/20 border-pink-500'
                  }`}>
                    {currentVideo.category}
                  </span>
                </div>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-black/50 rounded-full backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-6 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Play className="w-12 h-12 text-white ml-1" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              <button 
                onClick={prevVideo}
                className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <ChevronUp className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextVideo}
                className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300"
              >
                <ChevronDown className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-white">{currentVideo.author}</p>
                  <p className="text-gray-300 text-sm">{currentVideo.username}</p>
                </div>
                <button className="ml-auto px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full text-sm hover:scale-105 transition-all duration-300">
                  Seguir
                </button>
              </div>

              {/* Description */}
              <p className="text-white mb-4 leading-relaxed">
                {currentVideo.description}
              </p>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => toggleLike(currentVideo.id)}
                    className="flex items-center gap-2 group"
                  >
                    <div className={`p-3 rounded-full transition-all duration-300 ${
                      currentVideo.isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-red-500/20'
                    }`}>
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">{currentVideo.likes}</span>
                  </button>

                  <button className="flex items-center gap-2">
                    <div className="p-3 bg-white/20 rounded-full hover:bg-blue-500/20 transition-all duration-300">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{currentVideo.comments}</span>
                  </button>

                  <button className="flex items-center gap-2">
                    <div className="p-3 bg-white/20 rounded-full hover:bg-green-500/20 transition-all duration-300">
                      <Share className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{currentVideo.shares}</span>
                  </button>
                </div>

                <button 
                  onClick={() => toggleBookmark(currentVideo.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    currentVideo.isBookmarked 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-white/20 text-white hover:bg-yellow-500/20'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-black" />
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Adicione um comentário..."
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 focus:border-[#D4AF37] focus:outline-none text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && addComment(currentVideo.id)}
                />
                <button
                  onClick={() => addComment(currentVideo.id)}
                  className="p-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid for Desktop */}
        <div className="hidden lg:block mt-12">
          <h3 className="text-2xl font-bold mb-6 text-white">Explorar Mais Vídeos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                onClick={() => setCurrentVideoIndex(index)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[9/16] bg-gradient-to-br from-gray-900 to-black hover:scale-105 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-sm mb-2 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-xs">{video.author}</p>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-gray-300" />
                      <span className="text-gray-300 text-xs">{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="group p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
            <Upload className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    );
  };

  const renderHabits = () => (
    <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
          <Target className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Hábitos Diários</h2>
          <p className="text-gray-400">Construa sua rotina de excelência</p>
        </div>
      </div>

      {/* Enhanced Add New Habit */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              placeholder="Qual hábito você quer desenvolver?"
              className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl border border-gray-600 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 text-lg"
              onKeyPress={(e) => e.key === 'Enter' && addHabit()}
            />
            <Lightbulb className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button
            onClick={addHabit}
            className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4 rounded-xl font-bold hover:from-[#B8860B] hover:to-[#D4AF37] transition-all duration-300 flex items-center gap-3 shadow-lg hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Enhanced Habits List */}
      <div className="grid gap-4">
        {habits.map((habit, index) => (
          <div
            key={habit.id}
            className={`group relative overflow-hidden p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
              habit.completed 
                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/40 shadow-green-500/20" 
                : "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600"
            } shadow-xl`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`relative w-8 h-8 rounded-full border-3 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    habit.completed 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 shadow-lg shadow-green-500/30" 
                      : "border-gray-400 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20"
                  }`}
                >
                  {habit.completed && <CheckCircle className="w-5 h-5 text-white" />}
                </button>
                <div>
                  <span className={`font-semibold text-lg transition-all duration-300 ${habit.completed ? "line-through opacity-70 text-gray-400" : "text-white"}`}>
                    {habit.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      habit.category === 'spiritual' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      habit.category === 'physical' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      habit.category === 'mental' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {habit.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-lg font-bold text-orange-400">{habit.streak}</span>
                  <span className="text-sm text-gray-400">dias</span>
                </div>
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Habit Techniques */}
      <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/10 p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-[#D4AF37]" />
          Técnicas Comprovadas de Hábitos
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {habitTechniques.slice(0, 4).map((technique, index) => (
            <div key={index} className="group bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <h4 className="font-bold text-[#D4AF37] text-lg">{technique.name}</h4>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed">{technique.description}</p>
              <div className="bg-[#D4AF37]/10 p-3 rounded-lg border border-[#D4AF37]/20">
                <p className="text-xs font-semibold text-[#D4AF37] mb-1">APLICAÇÃO:</p>
                <p className="text-sm text-gray-300">{technique.application}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMindset = () => (
    <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Mentalidade Milionária</h2>
          <p className="text-gray-400">Desenvolva a mente de um vencedor</p>
        </div>
      </div>

      {/* Enhanced Millionaire Mindset Principles */}
      <div className="grid md:grid-cols-2 gap-6">
        {millionaireMindsetPrinciples.slice(0, 4).map((item, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{item.principle}</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20">
                <p className="text-sm font-bold text-[#D4AF37] mb-2">💡 AÇÃO PRÁTICA:</p>
                <p className="text-sm text-gray-300">{item.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Powerful Affirmations */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-[#D4AF37]" />
          Afirmações Poderosas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {powerfulAffirmations.map((affirmation, index) => (
            <div key={index} className="group bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="text-center">
                <p className="text-lg font-medium text-white mb-3 leading-relaxed">{affirmation.text}</p>
                <div className="flex justify-center">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                    affirmation.category === 'abundance' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                    affirmation.category === 'strength' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                    affirmation.category === 'faith' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                  }`}>
                    {affirmation.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Success Mindset Tips */}
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-green-400" />
          Mentalidade de Sucesso
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Pense Grande", desc: "Seus pensamentos determinam seus resultados", icon: Rocket },
            { title: "Ação Massiva", desc: "Conhecimento sem ação é inútil", icon: Zap },
            { title: "Persistência", desc: "O sucesso está do outro lado do medo", icon: Shield },
            { title: "Aprendizado", desc: "Falhas são feedback, não fracassos", icon: BookOpen },
            { title: "Networking", desc: "Seu network é seu net worth", icon: Heart },
            { title: "Valor", desc: "Foque em agregar valor, não em ganhar dinheiro", icon: Star }
          ].map((tip, index) => (
            <div key={index} className="group bg-black/30 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
                <tip.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[#D4AF37] mb-2 text-lg">{tip.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpiritual = () => (
    <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Desenvolvimento Espiritual</h2>
          <p className="text-gray-400">Fortaleça sua conexão com o divino</p>
        </div>
      </div>

      {/* Enhanced Spiritual Practices */}
      <div className="grid md:grid-cols-2 gap-6">
        {spiritualPractices.map((practice, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-2xl border border-red-500/30 shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{practice.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-[#D4AF37] text-black px-3 py-1 rounded-full font-bold">
                      {practice.duration} min
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{practice.description}</p>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-red-500/20">
                <p className="text-sm font-bold text-[#D4AF37] mb-3">🌟 BENEFÍCIOS:</p>
                <ul className="space-y-2">
                  {practice.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <Star className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Biblical Verses */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-[#D4AF37]" />
          Versículos Motivacionais
        </h3>
        <div className="space-y-6">
          {biblicalVerses.map((item, index) => (
            <div key={index} className="group bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[#D4AF37] font-serif">"</div>
                <div className="flex-1">
                  <p className="text-lg italic text-gray-100 mb-4 leading-relaxed">{item.verse}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#D4AF37] font-bold">— {item.reference}</p>
                    <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30 font-medium">
                      {item.theme}
                    </span>
                  </div>
                </div>
                <div className="text-4xl text-[#D4AF37] font-serif self-end">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Daily Spiritual Checklist */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle className="w-7 h-7 text-blue-400" />
          Checklist Espiritual Diário
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Oração matinal de gratidão",
            "Leitura bíblica (1 capítulo)",
            "Momento de meditação silenciosa",
            "Oração pelos outros",
            "Reflexão sobre o dia",
            "Oração noturna de entrega"
          ].map((item, index) => (
            <div key={index} className="group flex items-center gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWealth = () => (
    <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Construção de Riqueza</h2>
          <p className="text-gray-400">Domine as leis da prosperidade</p>
        </div>
      </div>

      {/* Enhanced Wealth Principles */}
      <div className="grid md:grid-cols-2 gap-6">
        {wealthPrinciples.map((principle, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{principle.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{principle.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-[#D4AF37] font-bold">— {principle.author}</p>
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                  principle.category === 'investment' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                  principle.category === 'strategy' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                  principle.category === 'mindset' ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
                  'bg-orange-500/20 text-orange-300 border-orange-500/30'
                }`}>
                  {principle.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Financial Rules */}
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Clock className="w-7 h-7 text-blue-400" />
          Regra 50/30/20 - Gestão Inteligente
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { percentage: "50%", label: "Necessidades", desc: "Moradia, alimentação, transporte", color: "from-red-500 to-pink-500", icon: Shield },
            { percentage: "30%", label: "Desejos", desc: "Entretenimento, hobbies, luxos", color: "from-yellow-500 to-orange-500", icon: Heart },
            { percentage: "20%", label: "Poupança", desc: "Investimentos e emergência", color: "from-green-500 to-emerald-500", icon: TrendingUp }
          ].map((rule, index) => (
            <div key={index} className="group bg-black/30 backdrop-blur-sm p-6 rounded-xl text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <div className={`p-4 bg-gradient-to-r ${rule.color} rounded-xl w-fit mx-auto mb-4`}>
                <rule.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-[#D4AF37] mb-2">{rule.percentage}</h4>
              <p className="text-lg font-bold text-white mb-2">{rule.label}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Investment Types */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-[#D4AF37]" />
          Tipos de Investimento
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Renda Fixa", desc: "CDB, Tesouro Direto, LCI/LCA", risk: "Baixo", return: "6-12% a.a.", color: "from-green-500 to-emerald-500" },
            { name: "Ações", desc: "Participação em empresas", risk: "Alto", return: "10-15% a.a.", color: "from-blue-500 to-cyan-500" },
            { name: "Fundos Imobiliários", desc: "Investimento em imóveis", risk: "Médio", return: "8-12% a.a.", color: "from-purple-500 to-pink-500" },
            { name: "Criptomoedas", desc: "Moedas digitais", risk: "Muito Alto", return: "Variável", color: "from-orange-500 to-red-500" }
          ].map((investment, index) => (
            <div key={index} className="group bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${investment.color} rounded-xl`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#D4AF37] text-lg mb-1">{investment.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{investment.desc}</p>
                </div>
              </div>
              <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">RISCO</p>
                  <span className={`text-sm font-bold ${
                    investment.risk === 'Baixo' ? 'text-green-400' :
                    investment.risk === 'Médio' ? 'text-yellow-400' :
                    investment.risk === 'Alto' ? 'text-orange-400' : 'text-red-400'
                  }`}>{investment.risk}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">RETORNO</p>
                  <span className="text-sm font-bold text-[#D4AF37]">{investment.return}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFocus = () => (
    <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl shadow-lg">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Timer de Foco</h2>
          <p className="text-gray-400">Maximize sua produtividade</p>
        </div>
      </div>

      {/* Enhanced Pomodoro Timer */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-12 rounded-2xl border border-indigo-500/30 text-center shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl">
              <Clock className="w-8 h-8 text-white" />
            </div>
            Técnica Pomodoro
          </h3>
          
          {/* Timer Display */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-[#D4AF37] mb-4 font-mono tracking-wider">
              {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((25 * 60 - (timerMinutes * 60 + timerSeconds)) / (25 * 60)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Timer Controls */}
          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl ${
                isTimerRunning 
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white" 
                  : "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#B8860B] hover:to-[#D4AF37] text-black"
              }`}
            >
              {isTimerRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              <span className="text-lg">{isTimerRunning ? "Pausar" : "Iniciar"}</span>
            </button>
            <button
              onClick={resetTimer}
              className="flex items-center gap-3 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <RotateCcw className="w-6 h-6" />
              <span className="text-lg">Reset</span>
            </button>
          </div>

          {/* Timer Presets */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { time: 25, label: "Foco Intenso", desc: "Trabalho profundo", color: "from-green-500 to-emerald-500" },
              { time: 15, label: "Pausa Longa", desc: "Descanso ativo", color: "from-blue-500 to-cyan-500" },
              { time: 5, label: "Pausa Curta", desc: "Respirar fundo", color: "from-purple-500 to-pink-500" }
            ].map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  setTimerMinutes(preset.time);
                  setTimerSeconds(0);
                  setIsTimerRunning(false);
                }}
                className={`group bg-gradient-to-r ${preset.color} p-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">{preset.time}min</div>
                  <div className="text-sm font-medium mb-1">{preset.label}</div>
                  <div className="text-xs opacity-80">{preset.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Focus Tips */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Target className="w-7 h-7 text-[#D4AF37]" />
          Dicas de Foco Profundo
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { tip: "Elimine Distrações", desc: "Desligue notificações e organize seu ambiente", icon: Shield },
            { tip: "Uma Tarefa por Vez", desc: "Multitasking reduz a produtividade em 40%", icon: Target },
            { tip: "Defina Objetivos Claros", desc: "Saiba exatamente o que quer alcançar", icon: Lightbulb },
            { tip: "Faça Pausas Regulares", desc: "Seu cérebro precisa descansar para manter o foco", icon: Clock },
            { tip: "Hidrate-se", desc: "Desidratação reduz a concentração", icon: Heart },
            { tip: "Ambiente Organizado", desc: "Espaço limpo = mente clara", icon: Sparkles }
          ].map((item, index) => (
            <div key={index} className="group bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-xl">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-[#D4AF37] mb-2 text-lg">{item.tip}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Deep Work Principles */}
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Brain className="w-7 h-7 text-purple-400" />
          Princípios do Trabalho Profundo
        </h3>
        <div className="space-y-6">
          {[
            { title: "Trabalho Profundo vs Superficial", desc: "Foque em atividades que geram valor real e exigem concentração total" },
            { title: "Blocos de Tempo Sagrados", desc: "Reserve períodos longos e ininterruptos para trabalho concentrado" },
            { title: "Rituais de Foco", desc: "Crie rotinas específicas que preparam sua mente para o estado de flow" },
            { title: "Métricas de Produtividade", desc: "Meça resultados e impacto, não apenas tempo trabalhado ou tarefas concluídas" }
          ].map((principle, index) => (
            <div key={index} className="group flex items-start gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">{principle.title}</h4>
                <p className="text-gray-300 leading-relaxed">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home": return renderHome();
      case "videos": return renderVideos();
      case "habits": return renderHabits();
      case "mindset": return renderMindset();
      case "spiritual": return renderSpiritual();
      case "wealth": return renderWealth();
      case "focus": return renderFocus();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] text-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-black/50 backdrop-blur-xl border-b border-gray-800/50 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-xl">
              <Crown className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className="font-bold text-lg">MindSet Pro</span>
              <p className="text-xs text-gray-400">Elite Development</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800/50 p-4 animate-slide-down">
          <div className="grid grid-cols-2 gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMobileMenuOpen(false);
                }}
                className={`group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${section.gradient} text-white shadow-lg`
                    : "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex">
        {/* Enhanced Desktop Sidebar */}
        <div className="hidden md:block w-80 bg-black/30 backdrop-blur-xl border-r border-gray-800/50 min-h-screen sticky top-0">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl shadow-lg">
                <Crown className="w-10 h-10 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  MindSet Pro
                </h1>
                <p className="text-gray-400 text-sm font-medium tracking-wide">ELITE DEVELOPMENT</p>
              </div>
            </div>
            
            <nav className="space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`group w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${section.gradient} text-white shadow-xl scale-105`
                      : "hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50"
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    activeSection === section.id 
                      ? "bg-white/20" 
                      : "bg-gray-800/50 group-hover:bg-gray-700/50"
                  }`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">{section.name}</span>
                  {activeSection === section.id && (
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}