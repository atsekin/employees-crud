import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Employee } from '../types/employees';

const API_URL = 'http://localhost:3000/api';

export const updateEmployee = async (employee: Employee): Promise<Employee> => {
  const { data } = await axios.put(`${API_URL}/users/${employee.id}`, {
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