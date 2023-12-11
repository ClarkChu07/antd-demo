
import {
  App,
  Form,
  Input,
  Modal,
} from 'antd';
import { ModalProps } from 'antd/es/modal';
import React, { useEffect } from 'react';

const { TextArea } = Input;

interface Values {
  type: 'edit' | 'create' | 'view';
  formData?: any;
  onCreate?: (values: Values) => void;
  onChange: (values: any) => void;
}

const CreateFormModal: React.FC<Values & ModalProps> = ({
  type,
  formData,
  onCreate,
  onChange,
  ...modalProps
}) => {
  const { message, notification } = App.useApp();

  const [form] = Form.useForm();

  // 初始化挂载事件
  useEffect(() => {
    if (modalProps.open) {

    }

    if (formData && Object.keys(formData).length && modalProps.open) {
      const { ...restData } = formData;
      form.setFieldsValue(restData);
    }
  }, [modalProps.open]);

  return (
    <Modal
      {...modalProps}
      title={type === 'edit' ? '编辑' : '创建'}
      okText="提交"
      cancelText="取消"
      width={680}
      styles={{
        body: { padding: 32 },
      }}
      onOk={async (e) => {
        form.validateFields().then(async (values) => {
          // console.log(values);

        });
      }}
      okButtonProps={{ loading: true }}
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
    </Modal>
  );
};

export default CreateFormModal;
