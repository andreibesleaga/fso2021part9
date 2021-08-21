export enum Gender {
  Male = "male",
  Female = "female",
}

export interface DiagnosisEntry {
    code: string;
    name: string;
    latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnosisEntry['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}
export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export interface DischargeEntry {
  date: string;
  criteria: string;
}
export interface SickLeave {
  startDate: string;
  endDate: string;
}
export interface HospitalEntry extends BaseEntry {
  type: 'Hospital';
  discharge: DischargeEntry;
}
export interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare';
  employerName: string;
  sickLeave?: SickLeave;
}

export type Entry = | HospitalEntry | OccupationalHealthcareEntry  | HealthCheckEntry;

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries' >;

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >