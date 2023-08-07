import {ActivityLevelKeys, GoalKeys} from "../types/user.ts";
export const userGoalDescriptionMapper = (goal: GoalKeys): string => {
    const goalDescriptions = {
        'LOSE': 'You want to reduce body fat',
        'MAINTAIN': 'You want to maintain your current weight',
        'GAIN': 'You want to gain muscle mass'
    }

    return goalDescriptions[goal];
}

export const userActivityLevelDescriptionMapper = (activityLevel: ActivityLevelKeys): string => {
    const activityLevelDescriptions = {
        'SEDENTARY': 'You do not exercise, and your life style doesn\'t require much movement',
        'LIGHT': 'You exercise 1-2 days a week or walk 5-7 thousand steps a day',
        'MODERATE': 'You exercise 3-4 days a week or walk 8-10 thousand steps a day',
        'ACTIVE': 'You spend a lot of time exercising or walking',
        'VERY_ACTIVE': 'You\'re an athlete'
    }

    return activityLevelDescriptions[activityLevel];
}