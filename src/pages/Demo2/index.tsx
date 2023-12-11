import React from "react";
import MyModal from "./components/MyModal";
import ModalHandler from "@/components/ModalHandler";
import { Button, Col, Row } from "antd";

// 弹窗封装
const Demo2: React.FC = () => {

  return (
    <Row justify={'center'} style={{ marginTop: 200 }}>
      <Col>
        <ModalHandler
          destroyOnClose
          modal={
            <MyModal
              type="edit"
              formData={null}
              onChange={(val) => {
                // TODO
                // 刷新列表
              }}
            />
          }
        >
          <Button size="large" type="primary">
            创建弹窗表单
          </Button>
        </ModalHandler>
      </Col>
    </Row>
  );
};

export default Demo2;
