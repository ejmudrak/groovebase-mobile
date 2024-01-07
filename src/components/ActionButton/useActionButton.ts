import { StackParamsList } from '@src/types';
import { useNavigation } from '@react-navigation/native';

export default function useActionButton() {
  const { navigate } = useNavigation();

  const handleNavigate = (page: keyof StackParamsList) => {
    navigate(page as never);
  };

  return { handleNavigate };
}
