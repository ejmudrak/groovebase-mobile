export interface RecordsListOptionsProps {
  isLoggingOut: boolean;
  handleLogout: () => void;
}

export type BaseRecordsListOptionsProps = Pick<RecordsListOptionsProps>;
