export type Player = "Human" | "Computer";
export type Difficulty = "Easy" | "Hard";

export type Move = {
    player: Player,
    num: number
}

export type RemoveMatchesFn = (num: number) => void;

export type HandleDifficultyFn = (str?: string) => void;
