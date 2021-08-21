
export interface CoursePartsProps {
    name: string;
    exerciseCount: number;
  }
  
export interface CourseProps {
    name: string;
    courseParts: CoursePartsProps[];
}
