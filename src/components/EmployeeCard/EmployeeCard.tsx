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
  width: '320px',
  transition: '0.3s',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0px 6px 15px rgba(174, 174, 174, 0.5)',
  '&:hover': {
    boxShadow: '0px 6px 15px rgba(16, 156, 241, 0.5)',
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
      <CardContent sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', p: '24px 20px' }}>
        <Avatar src={img} sx={{ width: 120, height: 120 }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: '24px',
          width: '100%'
        }}>
          <Typography variant="body1" fontWeight={600}>{name}</Typography>
          <Select
            fullWidth
            variant="standard"
            defaultValue={status}
            size="small"
            sx={{ mt: 1, fontSize: 12 }}
            onChange={(event) => onStatusChange(event.target.value as EmployeeStatus)}
          >
            {statuses.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                <Typography variant="body2">{label}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
      </CardContent>
    </StyledCard>
  )
}