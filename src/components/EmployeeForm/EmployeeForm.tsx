import { useForm, Controller } from 'react-hook-form';
import { TextField, MenuItem, Button, Select, InputLabel, FormControl, Box, Avatar } from '@mui/material';

import { EmployeeStatus } from '../../types/employees';
import { statuses } from '../Employees/constants';
import { usePostEmployeeMutation } from '../../api/usePostEmployeeMutation';

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
    console.log('Data:', data);
    if (!data.id) {
      createEmployee(data, {
        onSuccess
      })
    }
    reset();
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
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
              {statuses.map(({ label, value }) => (
                <MenuItem key={value} value={value}>{label}</MenuItem>
              ))}
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Avatar src={imgURL} sx={{ width: 80, height: 80 }} />
        </Box>
      )}

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Box>
  );
};

export default EmployeeForm;
