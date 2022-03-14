import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "unauth-app";
import { useAsync } from "utils/use-async";
import { useDispatch } from "react-redux";

export const LoginScreen = ({ onError }: { onError: (err: Error) => void }) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const dispatch = useDispatch();

  const handleSubmit = async (valuse: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(valuse));
    } catch (e) {
      onError(e as Error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType="submit" type="primary">
          登陆
        </LongButton>
      </Form.Item>
    </Form>
  );
};
