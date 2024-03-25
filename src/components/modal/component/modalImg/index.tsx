import { Image, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

export function ModalImg({
  img,
  setImg,
}: {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (img != "") {
      onOpen();
    }
  }, [img, onOpen]);

  return (
    <Modal
      backdrop="blur"
      size="2xl"
      placement="center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={() => setImg("")}
    >
      <ModalContent>
        {(onClose) => <Image onClick={onClose} radius={"none"} src={img} />}
      </ModalContent>
    </Modal>
  );
}
