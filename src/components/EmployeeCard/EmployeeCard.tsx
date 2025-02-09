import { Avatar, Box, Card, CardContent, MenuItem, Select, styled, Typography } from '@mui/material';
import { statuses } from '../Employees/constants.ts';
import { EmployeeStatus } from '../../types/employees.ts';
import { useUpdateEmployeeMutation } from '../../api/usePutEmployeeMutation.ts';

type EmployeeCardProps = {
  id?: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}

const StyledCard = styled(Card)({
  transition: '0.3s',
  borderRadius: '10px',
  '&:hover': {
    border: '2px solid',
    borderImage: 'linear-gradient(90deg, #109CF1, #76C1F3) 1',
  },
});

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
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Avatar src={img} sx={{ width: 60, height: 60, mb: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">{name}</Typography>
          <Select
            defaultValue={status}
            size="small"
            sx={{ mt: 1, width: '80%' }}
            onChange={(event) => onStatusChange(event.target.value as EmployeeStatus)}
          >
            {statuses.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </CardContent>
    </StyledCard>
  )
}