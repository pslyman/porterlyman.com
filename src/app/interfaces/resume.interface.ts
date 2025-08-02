export interface JobHistory {
  id: number;
  title: string;
  dateRange: string;
}

export interface AllJobsHistory {
  [key: string]: JobHistory[];
}

export interface SkillsObject {
  [key: string]: string[];
}
