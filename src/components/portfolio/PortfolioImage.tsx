"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Modal, PortfolioModal } from "@/components";

type PortfolioImageProps = {
  image: string;
  index: number;
};

const PortfolioImage: FC<PortfolioImageProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);

  const showModalItem = (_index: number) => {
    setShowModal(true);
    setId(_index);
  };

  return (
    <>
      <div className="flex cursor-pointer md:w-5/12">
        <Image
          width={500}
          height={250}
          src={props.image}
          objectFit="cover"
          alt="portfolio"
          onClick={() => showModalItem(props.index)}
        />
      </div>
      <Modal show={showModal}>
        <PortfolioModal closeModal={() => setShowModal(false)} id={id} />
      </Modal>
    </>
  );
};

export default PortfolioImage;
