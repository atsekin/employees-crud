import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from './apiClient';
import { Employee } from '../types/employees';

export const updateEmployee = async (employee: Employee): Promise<Employee> => {
  const { data } = await axiosInstance.put(`/users/${employee.id}`, {
    user: employee
  });
  return data;
};

export const useUpdateEmployeeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEmployee,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}