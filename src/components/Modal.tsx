import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as CloseImg } from '../assets/img/svg/closeImg.svg' //Uppercase!!

interface Props {
  OnModalClose: () => void;
  openModal: any;
  setopenModal: any;
  children: React.ReactElement;
}

const Modal = (props: Props) => {
  const handleClick = () => {
    props.OnModalClose();
  }

  return (
    <motion.div onClick={handleClick} className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
      {props.children}
      <div className="CloseImg" onClick={handleClick}>
        <CloseImg />
      </div>
    </motion.div>
  )
}

export default Modal;