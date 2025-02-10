import { MenuOption } from '../../types/common';
import { EmployeeStatus } from '../../types/employees';

import { GreenStatusIcon } from '../icons/GreenStatusIcon';
import { RedStatusIcon } from '../icons/RedStatusIcon';
import { YellowStatusIcon } from '../icons/YellowStatusIcon';
import { PurpleStatusIcon } from '../icons/PurpleStatusIcon';

export const statuses: MenuOption[] = [
  { label: 'Working', value: EmployeeStatus.WORKING, },
  { label: 'On Vacation', value: EmployeeStatus.ON_VACATION, },
  { label: 'Lunch Time', value: EmployeeStatus.LUNCH_TIME, },
  { label: 'Business Trip', value: EmployeeStatus.BUSINESS_TRIP, },
];

export const iconsMap = {
  [EmployeeStatus.WORKING]: () => <GreenStatusIcon />,
  [EmployeeStatus.ON_VACATION]: () => <RedStatusIcon />,
  [EmployeeStatus.LUNCH_TIME]: () => <YellowStatusIcon />,
  [EmployeeStatus.BUSINESS_TRIP]: () => <PurpleStatusIcon />,
};
