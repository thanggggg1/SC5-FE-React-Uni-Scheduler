interface Course {course_code: string, course_name: string};


interface Obj{
    [key: string]: any;
}

interface hour_section {
    course_code: string,
    instructor_username: string,
    section_day: string,
    section_from: string,
    section_id: string,
    section_name: string,
    section_to: string,
    section_type: string,
}

interface day_hours{
    hour_1_section: hour_section | null,
    hour_2_section: hour_section | null,
    hour_3_section: hour_section | null,
    hour_4_section: hour_section | null,
    hour_5_section: hour_section | null,
    hour_6_section: hour_section | null,
    hour_7_section: hour_section | null,
    hour_8_section: hour_section | null,
    hour_9_section: hour_section | null,
    hour_10_section: hour_section | null,
    hour_11_section: hour_section | null,
    hour_12_section: hour_section | null,
};


interface week {
    friday: day_hours,
    saturday: day_hours,
    sunday: day_hours,
    monday: day_hours,
    tuseday: day_hours,
    wednesday: day_hours,
    thursday: day_hours,
}


interface ScheduleAPI{
    pagination: {
        limit: string,
        pageNo: string,
        totalNumber: string,
    }

    results: [week]
}


export type {
    Course,
    Obj,
    ScheduleAPI,
    hour_section,
    day_hours,
    week
}