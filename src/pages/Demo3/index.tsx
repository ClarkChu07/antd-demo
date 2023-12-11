import React from "react";
import MyDrawer from "./components/MyDrawer";
import DrawerPanel from "@/components/DrawerPanel";
import { Button, Col, Row } from "antd";

// 弹窗封装
const Demo2: React.FC = () => {

  return (
    <Row justify={'center'} style={{ marginTop: 200 }}>
      <Col>
        <DrawerPanel
          destroyOnClose
          drawer={
            <MyDrawer
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
            创建抽屉表单
          </Button>
        </DrawerPanel>
      </Col>
    </Row>
  );
};

export default Demo2;
