interface TableProps<T> {
  data: T[];
  headers: string[];
  keyExtractor: keyof T;
  additionalCell?: (item: T) => React.ReactNode;
  onRowPress?: (key: string) => void;
}

export default TableProps;
