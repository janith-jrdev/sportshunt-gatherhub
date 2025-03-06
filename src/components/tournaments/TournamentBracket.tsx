
import { useState } from "react";

interface Match {
  id: string;
  round: string;
  player1: string;
  player2: string;
  scores?: string;
  winner?: string;
  status: string;
}

interface TournamentBracketProps {
  matches: Match[];
  onMatchClick: (matchId: string) => void;
}

export function TournamentBracket({ matches, onMatchClick }: TournamentBracketProps) {
  const rounds = ["Semi Finals", "Final"];
  const roundMatches = rounds.map(round => 
    matches.filter(match => match.round === round)
  );

  return (
    <div className="tournament-bracket">
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-4 md:gap-10 p-4">
          {rounds.map((round, roundIndex) => (
            <div key={round} className="flex flex-col">
              <div className="text-center mb-4 font-semibold">
                {round}
              </div>
              <div className="flex flex-col justify-around" style={{ height: `${120 * Math.pow(2, rounds.length - roundIndex - 1)}px` }}>
                {roundMatches[roundIndex].map((match) => (
                  <div 
                    key={match.id} 
                    className="relative"
                  >
                    <div 
                      className="bg-white border rounded-md p-2 w-48 cursor-pointer hover:bg-muted/50"
                      onClick={() => onMatchClick(match.id)}
                    >
                      <div className="flex justify-between mb-1">
                        <div className={`font-medium ${match.winner === match.player1 ? 'text-green-600' : ''}`}>
                          {match.player1}
                        </div>
                        {match.status === "Completed" && (
                          <div className="text-xs bg-muted px-1 rounded">
                            {match.scores?.split(',')[0].trim()}
                          </div>
                        )}
                      </div>
                      <div className="border-t pt-1"></div>
                      <div className="flex justify-between">
                        <div className={`font-medium ${match.winner === match.player2 ? 'text-green-600' : ''}`}>
                          {match.player2}
                        </div>
                        {match.status === "Completed" && (
                          <div className="text-xs bg-muted px-1 rounded">
                            {match.scores?.split(',')[1].trim()}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Draw connector lines for brackets */}
                    {roundIndex < rounds.length - 1 && (
                      <div className="absolute top-1/2 right-0 w-10 border-t border-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
