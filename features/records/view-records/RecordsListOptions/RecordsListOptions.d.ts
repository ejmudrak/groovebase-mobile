export interface RecordsListOptionsProps {
  handleDeleteAccount: () => void;
  handleLogout: () => void;
  isLoggingOut: boolean;
}

export type BaseRecordsListOptionsProps = Pick<RecordsListOptionsProps>;
