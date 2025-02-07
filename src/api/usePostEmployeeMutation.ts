import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Employee } from '../types/employees.ts';

const API_URL = 'http://localhost:3000/api';

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const { data } = await axios.post(`${API_URL}/users/add`, {
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