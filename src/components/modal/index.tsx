import {
  Button,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { CarType } from '../../types/car';
import { ModalImg } from './component/modalImg';
import * as S from './styles';

export function ModalInfos({ car }: { car: CarType }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [imgSelected, setImgSelected] = useState('');

  return (
    <S.Container>
      <Button onPress={onOpen} size='lg' radius='none' variant='light'>
        <FcSearch size={18} />{' '}
        <span style={{ color: '#c4c4c4' }}>Mais informações</span>
      </Button>

      <ModalImg img={imgSelected} setImg={setImgSelected} />

      <Modal
        backdrop='blur'
        size='5xl'
        placement='top'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <S.Header>
                <h1>{car.marca}</h1>
                <h2>
                  {car.modelo} • <b>{car.ano}</b>
                </h2>
              </S.Header>
              <S.Body>
                <S.Infos>
                  <Table isStriped hideHeader>
                    <TableHeader>
                      <TableColumn>TITLE</TableColumn>
                      <TableColumn>VALUE</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key='preco'>
                        <TableCell>Preço</TableCell>
                        <TableCell>
                          {Number(car.preco).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </TableCell>
                      </TableRow>
                      <TableRow key='km'>
                        <TableCell>KM</TableCell>
                        <TableCell>
                          {car.km
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </TableCell>
                      </TableRow>
                      <TableRow key='motor'>
                        <TableCell>Motor</TableCell>
                        <TableCell>{car.motor}</TableCell>
                      </TableRow>
                      <TableRow key='cambio'>
                        <TableCell>Câmbio</TableCell>
                        <TableCell>{car.cambio}</TableCell>
                      </TableRow>
                      <TableRow key='combustivel'>
                        <TableCell>Combustível</TableCell>
                        <TableCell>{car.combustivel}</TableCell>
                      </TableRow>
                      <TableRow key='bluetooth'>
                        <TableCell>Bluetooth</TableCell>
                        <TableCell>{car.bluetooth ? 'Sim' : 'Não'}</TableCell>
                      </TableRow>
                      <TableRow key='sensor'>
                        <TableCell>Sensor de Estacionamento</TableCell>
                        <TableCell>{car.sensor}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p>
                    <b>Observações:</b>
                    <br />
                    {car.obs}
                  </p>
                </S.Infos>
                <S.Images>
                  {car.imgs.map((img) => (
                    <Image
                      onClick={() => setImgSelected(img)}
                      key={img}
                      src={img}
                      radius='sm'
                      isZoomed
                    />
                  ))}
                </S.Images>
              </S.Body>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </S.Container>
  );
}
