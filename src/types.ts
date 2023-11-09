export type Player = 1 | 2;
export type Difficulty = 1 | 2;

export type Move = {
    player: Player,
    num: number
}

export type RemoveMatchesFn = (num: number) => void;

export type HandleDifficultyFn = (str?: string) => void;

export type ResetGameFn = () => void;

export type voidFunction = () => void;