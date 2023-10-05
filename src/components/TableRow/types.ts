interface RowProps<T extends Record<string, unknown>> {
  data: T;
  onPress: () => void;
}

export default RowProps;
