export interface CoursePartsProps {
    name: string;
    exerciseCount: number;
  }
  
export interface CourseProps {
    name: string;
    courseParts: CoursePartsProps[];
}

// new types
export interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

export interface CourseWithDescription extends CoursePartBase {
  description: string;
}

export interface CourseNormalPart extends CoursePartBase {
  type: "normal";
  description: string;
}
export interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  description: string;
  exerciseSubmissionLink: string;
}
export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseWithRequirements extends CourseWithDescription {
  requirements: string[],
  type: "special"
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseWithRequirements;
