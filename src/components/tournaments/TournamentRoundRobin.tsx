
interface Team {
  id: string;
  name: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
}

interface GroupMatch {
  id: string;
  team1: string;
  team2: string;
  scores?: string;
  winner?: string;
  status: string;
}

interface Group {
  id: string;
  name: string;
  teams: Team[];
  matches: GroupMatch[];
}

interface TournamentRoundRobinProps {
  group: Group;
  onMatchClick: (matchId: string) => void;
}

export function TournamentRoundRobin({ group, onMatchClick }: TournamentRoundRobinProps) {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="text-left py-2 px-4 font-medium">Team</th>
              <th className="text-center py-2 px-4 font-medium">P</th>
              <th className="text-center py-2 px-4 font-medium">W</th>
              <th className="text-center py-2 px-4 font-medium">L</th>
              <th className="text-center py-2 px-4 font-medium">T</th>
            </tr>
          </thead>
          <tbody>
            {group.teams.map((team) => (
              <tr key={team.id} className="border-b">
                <td className="py-2 px-4 font-medium">{team.name}</td>
                <td className="text-center py-2 px-4">{team.played}</td>
                <td className="text-center py-2 px-4">{team.won}</td>
                <td className="text-center py-2 px-4">{team.lost}</td>
                <td className="text-center py-2 px-4">{team.tied}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="font-medium">Matches</h4>
      <div className="space-y-2">
        {group.matches.map((match) => (
          <div 
            key={match.id} 
            className="border rounded-md p-3 cursor-pointer hover:bg-muted/50"
            onClick={() => onMatchClick(match.id)}
          >
            <div className="flex justify-between">
              <div>
                <span className="font-medium">{match.team1}</span> vs <span className="font-medium">{match.team2}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {match.status === "Completed" && match.scores ? match.scores : match.status}
              </div>
            </div>
            {match.winner && (
              <div className="text-xs text-green-600 mt-1">
                {match.winner} won
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
