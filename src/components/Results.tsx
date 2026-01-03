import { questions, getSecurityLevel } from '@/data/questions';
import TerminalWindow from './TerminalWindow';
import { Check, X, RotateCcw, Share2, Trophy, Shield, Target } from 'lucide-react';

interface ResultsProps {
  score: number;
  answers: { questionId: number; userAnswer: string | boolean; isCorrect: boolean }[];
  onRestart: () => void;
}

const Results = ({ score, answers, onRestart }: ResultsProps) => {
  const level = getSecurityLevel(score);
  const correctCount = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((score / 100) * 100);

  const handleShare = async () => {
    const text = `🔐 Men axborot xavfsizligi testida ${score}/100 ball to'pladim va "${level.title}" darajasiga erishdim! ${level.icon}\n\nO'zingizni sinab ko'ring!`;
    const shareUrl = window.location.href;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Axborot Xavfsizligi Testi',
          text: text,
          url: shareUrl
        });
      } else {
        await navigator.clipboard.writeText(text + '\n' + shareUrl);
        alert('Natija clipboard\'ga nusxalandi!');
      }
    } catch (error) {
      // User cancelled or share failed, try clipboard
      try {
        await navigator.clipboard.writeText(text + '\n' + shareUrl);
        alert('Natija clipboard\'ga nusxalandi!');
      } catch {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text + '\n' + shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Natija clipboard\'ga nusxalandi!');
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Score Card */}
      <TerminalWindow title="results.sh">
        <div className="text-center space-y-6">
          {/* Status Message */}
          <div className="space-y-2">
            <div className="text-terminal-cyan font-medium">
              <span className="text-muted-foreground">$</span> ./analyze_results.sh
            </div>
            <div className="text-success">
              [SUCCESS] Tahlil yakunlandi
            </div>
          </div>

          {/* Level Badge */}
          <div className="py-8">
            <div className="text-6xl mb-4">{level.icon}</div>
            <h2 className="text-3xl font-bold text-primary glow-text mb-2">
              {level.title}
            </h2>
            <p className="text-muted-foreground">{level.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <Trophy className="w-6 h-6 text-terminal-yellow mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{score}</div>
              <div className="text-xs text-muted-foreground">Ball</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <Target className="w-6 h-6 text-terminal-cyan mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">{correctCount}/{questions.length}</div>
              <div className="text-xs text-muted-foreground">To'g'ri</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <Shield className="w-6 h-6 text-terminal-purple mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">{percentage}%</div>
              <div className="text-xs text-muted-foreground">Foiz</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="progress-bar h-4">
              <div 
                className="progress-bar-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Umumiy natija: <span className="text-primary">{percentage}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={onRestart}
              className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground font-medium rounded-lg transition-all duration-300 hover:bg-muted/80 border border-border"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qayta boshlash</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 glow-box"
            >
              <Share2 className="w-4 h-4" />
              <span>Natijani ulashish</span>
            </button>
          </div>
        </div>
      </TerminalWindow>

      {/* Detailed Analysis */}
      <TerminalWindow title="detailed_analysis.log">
        <div className="space-y-4">
          <div className="text-terminal-cyan">
            <span className="text-muted-foreground">$</span> cat detailed_analysis.log
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {answers.map((answer, index) => {
              const question = questions.find(q => q.id === answer.questionId);
              if (!question) return null;

              return (
                <div 
                  key={answer.questionId}
                  className={`p-4 rounded-lg border ${
                    answer.isCorrect 
                      ? 'border-success/30 bg-success/5' 
                      : 'border-destructive/30 bg-destructive/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      answer.isCorrect ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                    }`}>
                      {answer.isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-terminal-purple text-sm">#{index + 1}</span>
                        <span className="text-xs px-2 py-0.5 bg-muted rounded">
                          {answer.isCorrect ? '+5 ball' : '0 ball'}
                        </span>
                      </div>
                      <p className="text-sm text-foreground mb-2">{question.question}</p>
                      
                      <div className="space-y-1 text-xs">
                        <div className="flex gap-2">
                          <span className="text-muted-foreground">Sizning javob:</span>
                          <span className={answer.isCorrect ? 'text-success' : 'text-destructive'}>
                            {String(answer.userAnswer)}
                          </span>
                        </div>
                        {!answer.isCorrect && (
                          <div className="flex gap-2">
                            <span className="text-muted-foreground">To'g'ri javob:</span>
                            <span className="text-success">{String(question.correctAnswer)}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border/50">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Results;
