//

type Props = {
  condition: boolean;
  then: React.ReactNode;
  else: React.ReactNode;
};

const If = (props: Props) => {
  return props.condition ? props.then : props.else;
};

export { If };
