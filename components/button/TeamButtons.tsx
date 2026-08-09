"use client";

import Button from "./Button";

export default function TeamButton({
  onTeamSelect,
}: {
  onTeamSelect: (team: string) => void;
}) {
  const teams = [
  "Founding Members",
  "Core Members",
  "Tech Team",
  "Media Team",
  "Content Team",
  "Graphic Team",
  "PR Team",
  "Event Team",
];
  

  return (
    <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
      {teams.map((team, index) => (
        <Button key={index} text={team} onClick={() => onTeamSelect(team)} />
      ))}
    </div>
  );
}