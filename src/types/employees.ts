export type Employee = {
  id?: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}

export enum EmployeeStatus {
  WORKING = 'Working',
  ON_VACATION = 'On Vacation',
  LUNCH_TIME = 'Lunch Time',
  BUSINESS_TRIP = 'Business Trip',
}