import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from './apiClient';
import { Employee } from '../types/employees';

export const fetchEmployees = async (): Promise<Employee[]> => {
  const { data: { users } } = await axiosInstance.get(`/users/all`);
  return users;
};

export const useEmployeesQuery = () => useQuery<Employee[]>({
  queryKey: ['employees'],
  queryFn: fetchEmployees,
});