export enum COLUMN_NAMES {
    "first_name" = "first_name",
    "last_name" = "last_name",
    "specialization" = "specialization",
    "degree" = "degree",
    "semester" = "semester",
    "is_male" = "is_male",
    "average_grade" = "average_grade",
    "hair_color" = "hair_color",
    "height" = "height",
    "weight" = "weight",
}

export const columnNamesList = Object.values(COLUMN_NAMES);

export type StudentUnsavedToDatabase = {
    first_name: string,
    last_name: string,
    specialization: string,
    degree: number,
    semester: number,
    is_male: boolean,
    average_grade?: number,
    hair_color?: string,
    height?: number,
    weight?: number,
    age?: number
}

export type Student = StudentUnsavedToDatabase & { id: number }

export const placeholderStudentUnsavedToDatabase: StudentUnsavedToDatabase = {
    first_name: '',
    last_name: '',
    specialization: '',
    degree: 1,
    semester: 1,
    is_male: true,
    hair_color: 'Brown',
    age: 19
}

export type CheckboxFilter = {
    name: number | string,
    isChecked: boolean
}


export type Filters = {
    specializations: string[],
    degrees: number[]
    semesters: number[]
}

export const defaultFilters: Filters = {
    specializations: [],
    degrees: [],
    semesters: []
}

export const sampleFilters: Filters = {
    specializations: ['Physics', 'Political Science', 'Engineering'],
    degrees: [1, 2, 3],
    semesters: [1, 2, 3, 4, 5, 6, 7]
}

export type PageSize = 5 | 10 | 20 | 100;

export const defaultPageSize: PageSize = 10;


export const sampleStudents: Student[] = [
    {
        id: 1,
        first_name: 'Emma',
        last_name: 'Williams',
        specialization: 'Computer Science',
        degree: 1,
        semester: 2,
        is_male: false,
        average_grade: 3.8,
        hair_color: 'Blonde',
        height: 170,
        weight: 60,
        age: 20
    },
    {
        id: 2,
        first_name: 'Joshua',
        last_name: 'Taylor',
        specialization: 'Electrical Engineering',
        degree: 3,
        semester: 6,
        is_male: true,
        average_grade: 4.2,
        hair_color: 'Black',
        height: 180,
        weight: 80,
        age: 23
    },
    {
        id: 3,
        first_name: 'Ava',
        last_name: 'Martinez',
        specialization: 'Chemistry',
        degree: 2,
        semester: 4,
        is_male: false,
        average_grade: 3.9,
        hair_color: 'Brown',
        height: 165,
        weight: 55,
        age: 21
    },
    {
        id: 4,
        first_name: 'Ethan',
        last_name: 'Garcia',
        specialization: 'Mechanical Engineering',
        degree: 4,
        semester: 8,
        is_male: true,
        average_grade: 4.5,
        hair_color: 'Brown',
        height: 185,
        weight: 90,
        age: 24
    },
    {
        id: 5,
        first_name: 'Sophia',
        last_name: 'Smith',
        specialization: 'Psychology',
        degree: 1,
        semester: 2,
        is_male: false,
        average_grade: 3.6,
        hair_color: 'Blonde',
        height: 168,
        weight: 58,
        age: 19
    }

]




