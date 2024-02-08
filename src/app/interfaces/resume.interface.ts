export interface JobHistory {
  id: number;
  title: string;
  location: string;
  dateRange: string;
  description: string;
  of?: boolean;
}

export interface AllJobsHistory {
  [key: string]: JobHistory[];
}

export interface SkillsObject {
  [key: string]: string[];
}
