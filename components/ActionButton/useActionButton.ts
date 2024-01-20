import { router } from 'expo-router';

export default function useActionButton() {
  const handleNavigate = (page: string) => {
    router.replace(page);
  };

  return { handleNavigate };
}
