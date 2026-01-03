import { useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import TerminalWindow from '@/components/TerminalWindow';
import TypingText from '@/components/TypingText';
import Quiz from '@/components/Quiz';
import Results from '@/components/Results';
import { Shield, Terminal, Lock, ChevronRight } from 'lucide-react';

type GameState = 'home' | 'quiz' | 'results';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; userAnswer: string | boolean; isCorrect: boolean }[]>([]);
  const [showStartButton, setShowStartButton] = useState(false);

  const handleStartQuiz = () => {
    setGameState('quiz');
    setScore(0);
    setAnswers([]);
  };

  const handleQuizComplete = (finalScore: number, finalAnswers: typeof answers) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    setGameState('results');
  };

  const handleRestart = () => {
    setGameState('home');
    setShowStartButton(false);
  };

  if (gameState === 'quiz') {
    return (
      <div className="min-h-screen bg-background matrix-bg scanline">
        <MatrixRain />
        <div className="relative z-10 container mx-auto px-4 py-8">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    return (
      <div className="min-h-screen bg-background matrix-bg scanline">
        <MatrixRain />
        <div className="relative z-10 container mx-auto px-4 py-8">
          <Results score={score} answers={answers} onRestart={handleRestart} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background matrix-bg scanline flex flex-col">
      <MatrixRain />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary glow-text">
                CyberSec<span className="text-secondary">Quiz</span>
              </h1>
              <p className="text-xs text-muted-foreground">v1.0.0</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
              <Lock className="w-4 h-4" />
              <span>Axborot Xavfsizligi Testi</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary glow-text">Xakerlik</span>
              <span className="text-foreground"> darajangizni</span>
              <br />
              <span className="text-secondary">aniqlang</span>
            </h2>
          </div>

          {/* Terminal Card */}
          <TerminalWindow title="security_test.sh" className="animate-fade-in">
            <div className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-terminal-cyan">$</span>
                  <TypingText 
                    text="./initialize_security_assessment.sh" 
                    speed={40}
                    onComplete={() => setShowStartButton(true)}
                  />
                </div>
                
                {showStartButton && (
                  <div className="space-y-2 animate-fade-in">
                    <div className="text-success">[OK] Tizim tayyor</div>
                    <div className="text-muted-foreground">[INFO] 20 ta savol yuklandi</div>
                    <div className="text-muted-foreground">[INFO] Har bir to'g'ri javob: +5 ball</div>
                    <div className="text-muted-foreground">[INFO] Maksimal ball: 100</div>
                    <div className="text-terminal-yellow">[READY] Testni boshlashga tayyor...</div>
                  </div>
                )}
              </div>

              {/* Features Grid */}
              {showStartButton && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border animate-fade-in">
                  <div className="flex items-center gap-2 text-sm">
                    <Terminal className="w-4 h-4 text-terminal-cyan" />
                    <span className="text-muted-foreground">20 ta savol</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-terminal-purple" />
                    <span className="text-muted-foreground">Aralash format</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="w-4 h-4 text-terminal-yellow" />
                    <span className="text-muted-foreground">Reyting tizimi</span>
                  </div>
                </div>
              )}

              {/* Start Button */}
              {showStartButton && (
                <div className="pt-4 animate-fade-in">
                  <button
                    onClick={handleStartQuiz}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg transition-all duration-300 hover:bg-primary/90 animate-pulse-glow"
                  >
                    <span>&gt;_ TESTNI BOSHLASH</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </TerminalWindow>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              System Online
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-terminal-cyan rounded-full animate-pulse" />
              Secure Connection
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-terminal-purple rounded-full animate-pulse" />
              Encrypted
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          <span className="text-primary">&gt;_</span> CyberSecQuiz © 2026 | Axborot xavfsizligi bo'yicha bilimingizni sinang
        </div>
      </footer>
    </div>
  );
};

export default Index;
