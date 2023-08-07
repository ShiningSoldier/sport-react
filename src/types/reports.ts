export type ReportType = {
    id: number;
    user_id?: number;
    date: string;
    weight: number;
    leg: number;
    waist: number;
    chest: number;
    arm: number;
    photo_front: string;
    photo_back: string;
}

export type ReportFilterDates = {
    year: number;
    month: string;
}