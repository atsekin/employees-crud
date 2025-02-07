import { MenuOption } from '../../types/common';
import { EmployeeStatus } from '../../types/employees';

export const statuses: MenuOption[] = [
  { label: 'Working', value: EmployeeStatus.WORKING, },
  { label: 'On Vacation', value: EmployeeStatus.ON_VACATION, },
  { label: 'Lunch Time', value: EmployeeStatus.LUNCH_TIME, },
  { label: 'Business Trip', value: EmployeeStatus.BUSINESS_TRIP, },
];