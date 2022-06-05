import { Badge, Text } from '@chakra-ui/react';

interface Props {
  label: string;
  featureList: string[];
}

export const BookFeature = ({ label, featureList }: Props) => {
  if (featureList.length === 0) {
    return null;
  }

  return (
    <Text>
      {label}:{' '}
      {featureList.map((feature) => (
        <Badge
          colorScheme='teal'
          fontSize='sm'
          px='1.5'
          py='0.5'
          m={0.5}
          key={feature}
          whiteSpace='break-spaces'
        >
          {feature}
        </Badge>
      ))}
    </Text>
  );
};
