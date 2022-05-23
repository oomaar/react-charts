import {
  ModalBackDrop,
  ModalBody,
  ModalContainer,
  ModalContentContainer,
  ModalHeader,
  ModalTitle,
} from "./styledModal";

export const Modal = ({ showModal, setShowModal, modalTitle }) => {
  return (
    <ModalContainer showModal={showModal}>
      <ModalBackDrop
        showModal={showModal}
        onClick={() => setShowModal(false)}
      />
      <ModalContentContainer>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
        </ModalHeader>
        <ModalBody>Modal Body</ModalBody>
      </ModalContentContainer>
    </ModalContainer>
  );
};
