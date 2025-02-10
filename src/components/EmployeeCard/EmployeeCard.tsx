import { MenuItem, Stack, Typography } from '@mui/material';

import { EmployeeStatus } from '../../types/employees';
import { useUpdateEmployeeMutation } from '../../api/usePutEmployeeMutation';
import { statuses, iconsMap } from '../Employees/constants';

import { StyledCard, StyledCardContent, StyledAvatar, StyledBox, StyledSelect } from './styled';

type EmployeeCardProps = {
  id?: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}

export const EmployeeCard = ({
  id,
  name,
  status,
  img,
}: EmployeeCardProps) => {
  const { mutate: changeStatus } = useUpdateEmployeeMutation();

  const onStatusChange = (value: EmployeeStatus) => {
    changeStatus({
      id,
      name,
      img,
      status: value,
    })
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledAvatar src={img} />
        <StyledBox>
          <Typography variant="body1" fontWeight={600}>{name}</Typography>
          <StyledSelect
            fullWidth
            variant="standard"
            defaultValue={status}
            size="small"
            onChange={(event) => onStatusChange(event.target.value as EmployeeStatus)}
          >
            {statuses.map(({ label, value }) => {
              const Icon = iconsMap[value];
              return (
                <MenuItem key={value} value={value}>
                  <Stack direction="row" alignItems="center">
                    <Icon />
                    <Typography variant="body2" ml={1}>{label}</Typography>
                  </Stack>
                </MenuItem>
              )
            })}
          </StyledSelect>
        </StyledBox>
      </StyledCardContent>
    </StyledCard>
  )
}