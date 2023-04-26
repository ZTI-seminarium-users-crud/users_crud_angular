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

export type Student = StudentUnsavedToDatabase & {
    id: number,
}

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
    semesters: [1,2,3,4,5,6,7]
}

export type PageSize = 5 | 10 | 20 | 100;

export const defaultPageSize: PageSize = 10;

export type QueryParams = {
    columnsStringified: string,
    specializationsStringified: string,
    degreesStringified: string,
    semestersStringified: string,
    pageSize: number,
    pageNumber: number
}

export function sleep(millis: number)
{
    var date: number = new Date().getTime();
    var curDate: number = new Date().getTime();
    do { curDate = new Date().getTime(); }
    while(curDate-date < millis);
}