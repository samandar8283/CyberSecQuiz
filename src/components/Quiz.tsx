import { useState } from 'react';
import { questions, Question } from '@/data/questions';
import TerminalWindow from './TerminalWindow';
import { Check, X, ChevronRight } from 'lucide-react';

interface QuizProps {
  onComplete: (score: number, answers: { questionId: number; userAnswer: string | boolean; isCorrect: boolean }[]) => void;
}

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: number; userAnswer: string | boolean; isCorrect: boolean }[]>([]);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelectAnswer = (answer: string | boolean) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    const newScore = isCorrect ? score + 5 : score;
    
    const newAnswer = {
      questionId: question.id,
      userAnswer: selectedAnswer,
      isCorrect
    };

    setAnswers([...answers, newAnswer]);
    setScore(newScore);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      onComplete(score, answers);
    }
  };

  const getOptionClass = (option: string | boolean) => {
    let baseClass = "option-card";
    
    if (!showResult) {
      if (selectedAnswer === option) {
        baseClass += " selected";
      }
      return baseClass;
    }

    if (option === question.correctAnswer) {
      return baseClass + " correct";
    }
    
    if (selectedAnswer === option && option !== question.correctAnswer) {
      return baseClass + " incorrect";
    }

    return baseClass;
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            <span className="text-primary">&gt;_</span> Savol {currentQuestion + 1}/{questions.length}
          </span>
          <span className="text-terminal-cyan">{score} ball</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <TerminalWindow title={`question_${question.id}.sh`}>
        <div className="space-y-6">
          {/* Question Text */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-terminal-cyan">$</span>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {question.question}
              </p>
            </div>
            <span className="inline-block px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
              {question.type === 'multiple' ? '4 variant' : 'Ha/Yo\'q'}
            </span>
          </div>

          {/* Options */}
          <div className="grid gap-3">
            {question.type === 'multiple' ? (
              question.options?.map((option, index) => (
                <div
                  key={index}
                  className={getOptionClass(option)}
                  onClick={() => handleSelectAnswer(option)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-terminal-purple font-bold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && option === question.correctAnswer && (
                      <Check className="w-5 h-5 text-success" />
                    )}
                    {showResult && selectedAnswer === option && option !== question.correctAnswer && (
                      <X className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <>
                <div
                  className={getOptionClass(true)}
                  onClick={() => handleSelectAnswer(true)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-success font-bold">[✓]</span>
                    <span className="flex-1">Ha (True)</span>
                    {showResult && question.correctAnswer === true && (
                      <Check className="w-5 h-5 text-success" />
                    )}
                    {showResult && selectedAnswer === true && question.correctAnswer !== true && (
                      <X className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
                <div
                  className={getOptionClass(false)}
                  onClick={() => handleSelectAnswer(false)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-destructive font-bold">[✗]</span>
                    <span className="flex-1">Yo'q (False)</span>
                    {showResult && question.correctAnswer === false && (
                      <Check className="w-5 h-5 text-success" />
                    )}
                    {showResult && selectedAnswer === false && question.correctAnswer !== false && (
                      <X className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="p-4 bg-muted/30 border border-border rounded-lg animate-fade-in">
              <div className="flex items-start gap-2">
                <span className="text-terminal-yellow">[i]</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-end">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed glow-box"
              >
                <span>Tekshirish</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-secondary/90 glow-box"
              >
                <span>{currentQuestion < questions.length - 1 ? 'Keyingi savol' : 'Natijalarni ko\'rish'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Quiz;
