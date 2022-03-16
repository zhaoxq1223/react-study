import React from "react";
import { Button, Drawer } from "antd";
import { usePorjectModal } from "./util";

export const ProjectModal = () => {
  const { projectModalOpen, close } = usePorjectModal();

  return (
    <Drawer onClose={close} visible={projectModalOpen} width={"100%"}>
      <h1>Project Modal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};
