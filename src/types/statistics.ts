export const Periods = ["week", "month", "year"] as const

export type StatisticsPeriod = typeof Periods[number]