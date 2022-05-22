import { ModalBackDrop, ModalContainer, ModalContentContainer, ModalTitle } from "./styledModal"

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <ModalContainer showModal={showModal}>
            <ModalBackDrop
                showModal={showModal}
                onClick={() => setShowModal(false)}
            />
            <ModalContentContainer>
                <ModalTitle>Modal</ModalTitle>
            </ModalContentContainer>
        </ModalContainer>
    )
}
