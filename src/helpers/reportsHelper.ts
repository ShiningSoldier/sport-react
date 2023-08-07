export const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const currentDate = new Date()

export const getCurrentMonth = () => {
    return currentDate.toLocaleString('default', { month: '2-digit' });
}
export const getCurrentYear = () => currentDate.getFullYear();

export const getCurrentDay = () => {
    return currentDate.toLocaleString('default', { day: '2-digit' });
}

export const years = (): Record<number, number> => {
    const years: Record<number, number> = {};
    let startYear = 2020;
    while (startYear <= getCurrentYear()) {
        years[startYear] = startYear;
        startYear++;
    }
    return years;
}