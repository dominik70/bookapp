import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Resource } from '../types';
import { findBookUri } from '../utils/helpers';

interface Props {
  title: string;
  resources: Resource[];
  isOpen: boolean;
  onClose: () => void;
}

export const BookModal = ({ title, resources, isOpen, onClose }: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: '95%', lg: '5xl' }}
        height='95vh'
        px={{ base: 2, md: 8 }}
        pb={{ base: 2, md: 8 }}
        bg='gray.100'
        m='auto 0'
      >
        <ModalHeader pl={0} pr={8} pt={{ base: 2, md: 6 }}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          padding={0}
          borderRadius={5}
          bg='white'
          border='2px solid black'
        >
          <iframe
            title={title}
            src={findBookUri(resources)}
            style={{ width: '100%', height: '100%' }}
          />
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
