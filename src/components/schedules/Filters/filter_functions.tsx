import { day_hours, week } from "../../courses/interfaces";


function empty_days(data: week[]): week[] {
    let schedules: week[] = [];

    const days = Object.keys(data[0]) as string[];
    const hours = Object.keys(data[0]["saturday"]) as string[];

    const idx = days.indexOf("friday");
    if (idx > -1) { // only splice array when item is found
        days.splice(idx, 1); // 2nd parameter means remove one item only
    }


    for (const schedule of data) {
        for (const day of days) {
            let flag = true;
            const section = schedule[day as keyof week];

            for (const hour of hours) {
                section[hour as keyof day_hours]

                if (section[hour as keyof day_hours]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                schedules.push(schedule);
                break;
            }
        }
    }

    return schedules;
}




function no_early(data: week[]): week[] {
    let schedules: week[] = [];

    const days = Object.keys(data[0]) as string[];
    const hours = ["hour_1_section", "hour_2_section"];


    for (const schedule of data) {
        let flag = true;

        for (const day of days) {
            const section = schedule[day as keyof week];

            for (const hour of hours) {
                if (section[hour as keyof day_hours] !== null) {
                    flag = false;
                    break;
                }
            }
        }

        if (flag) {
            schedules.push(schedule);
        }
    }

    return schedules;
}





function no_late(data: week[]): week[] {
    let schedules: week[] = [];

    const days = Object.keys(data[0]) as string[];
    const hours = ["hour_10_section", "hour_11_section", "hour_12_section"];


    for (const schedule of data) {
        let flag = true;

        for (const day of days) {
            const section = schedule[day as keyof week];

            for (const hour of hours) {
                if (section[hour as keyof day_hours] !== null) {
                    flag = false;
                    break;
                }
            }
        }

        if (flag) {
            schedules.push(schedule);
        }
    }

    return schedules;
}


export {
    empty_days,
    no_early,
    no_late
}