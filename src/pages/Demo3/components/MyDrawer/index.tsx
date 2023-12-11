
import {
  App, Drawer,
  Form,
  Input,
  Modal,
} from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import React, { useEffect } from 'react';

const { TextArea } = Input;

interface Values {
  type: 'edit' | 'create' | 'view';
  formData?: any;
  onCreate?: (values: Values) => void;
  onChange: (values: any) => void;
}

const CreateFormDrawer: React.FC<Values & DrawerProps> = ({
  type,
  formData,
  onCreate,
  onChange,
  ...drawerProps
}) => {
  const { message, notification } = App.useApp();

  const [form] = Form.useForm();

  // 初始化挂载事件
  useEffect(() => {
    if (drawerProps.open) {

    }

    if (formData && Object.keys(formData).length && drawerProps.open) {
      const { ...restData } = formData;
      form.setFieldsValue(restData);
    }
  }, [drawerProps.open]);

  return (
    <Drawer
      {...drawerProps}
      title={type === 'edit' ? '编辑' : '创建'}
      width={680}
      styles={{
        body: { padding: 32 },
      }}
    >
      <Form
        form={form}
        name="form_mutex"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        initialValues={{
          syncAppList: [],
        }}
      >
        <Form.Item label="ID" name="groupId">
          <Input placeholder="提交成功后由系统自动生成" disabled />
        </Form.Item>
        <Form.Item label="名称" name="groupName" rules={[{ required: true }]}>
          <Input placeholder="请输入" maxLength={50} />
        </Form.Item>
        <Form.Item label="描述" name="groupDesc">
          <TextArea
            placeholder="请输入"
            maxLength={50}
            autoSize={{
              minRows: 4,
              maxRows: 4,
            }}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default CreateFormDrawer;
