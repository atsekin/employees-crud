import { useForm, Controller } from 'react-hook-form';
import { TextField, MenuItem, Select, InputLabel, FormControl, Stack, Typography } from '@mui/material';

import { EmployeeStatus } from '../../types/employees';
import { iconsMap, statuses } from '../Employees/constants';
import { usePostEmployeeMutation } from '../../api/usePostEmployeeMutation';

import { StyledBox, StyledImgBox, StyledAvatar, StyledSubmitButton } from './styled';

type EmployeeFormData = {
  id?: number;
  name: string;
  status: EmployeeStatus
  img: string;
}

type EmployeeFormProps = {
  onSuccess: () => void;
}

const EmployeeForm = ({
  onSuccess,
}: EmployeeFormProps) => {
  const { mutate: createEmployee } = usePostEmployeeMutation();

  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<EmployeeFormData>({
    defaultValues: {
      name: '',
      status: EmployeeStatus.WORKING,
      img: '',
    },
  });

  const imgURL = watch('img');

  const onSubmit = (data: EmployeeFormData) => {
    createEmployee(data, {
      onSuccess
    });
    reset();
  };

  return (
    <StyledBox>
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        rules={{ required: 'Choose status' }}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select {...field} label="Status">
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
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="img"
        control={control}
        rules={{
          pattern: {
            value: /^(.*\.(?:png|jpg|jpeg|gif|svg))$/i,
            message: 'Please enter the image',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Avatar URL"
            error={!!errors.img}
            helperText={errors.img?.message}
            sx={{ mb: 2 }}
          />
        )}
      />

      {imgURL && (
        <StyledImgBox>
          <StyledAvatar src={imgURL} />
        </StyledImgBox>
      )}

      <StyledSubmitButton variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </StyledSubmitButton>
    </StyledBox>
  );
};

export default EmployeeForm;
