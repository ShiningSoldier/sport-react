export type UserType = {
    id?: number;
    name: string;
    email: string;
    height: number;
    birth_date: string;
    goal: GoalKeys;
    activity_level: ActivityLevelKeys;
}

export enum Goal {
    LOSE = "lose",
    MAINTAIN = "maintain",
    GAIN = "gain"
}

export enum ActivityLevel {
    SEDENTARY = "sedentary",
    LIGHT = "light",
    MODERATE = "moderate",
    ACTIVE = "active",
    VERY_ACTIVE = "very active"
}

export type GoalKeys = keyof typeof Goal;
export type ActivityLevelKeys = keyof typeof ActivityLevel;