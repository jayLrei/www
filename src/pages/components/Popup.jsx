import Modal from "react-modal";
import React, { useEffect, useState } from "react";

const Popup = (props) => {
  const [currentPositionInfo, setCurrentPositionInfo] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!props.currentPositionInfo) return;
    setModalOpen(true);
    setCurrentPositionInfo(props.currentPositionInfo);
  }, [props.currentPositionInfo]);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 border-4 border-black rounded-lg ${currentPositionInfo.customColor}`}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div>
        <div className="text-6xl font-bold ">{currentPositionInfo.rule}</div>
      </div>
    </Modal>
  );
};

export default Popup;
