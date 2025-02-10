import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from './apiClient';
import { Employee } from '../types/employees';

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const { data } = await axiosInstance.post(`/users`, {
    user: {
      ...employee,
      id: -1,
    }
  });
  return data;
};

export const usePostEmployeeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}