import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Employee } from '../types/employees.ts';

const API_URL = 'http://localhost:3000/api';

export const fetchEmployees = async (): Promise<Employee[]> => {
  const { data: { users } } = await axios.get(`${API_URL}/users/all`);
  return users;
};

export const useEmployeesQuery = () => useQuery<Employee[]>({
  queryKey: ['employees'],
  queryFn: fetchEmployees,
});