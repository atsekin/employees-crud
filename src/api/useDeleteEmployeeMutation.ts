import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// const API_URL = 'http://localhost:3001';
const API_URL = 'https://jsonplaceholder.typicode.com';

export const deleteEmployee = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/users/${id}`);
};

export const useDeleteEmployeeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}

