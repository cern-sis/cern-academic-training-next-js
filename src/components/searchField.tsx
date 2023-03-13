import { Form, Input } from "antd";
import Router from "next/router";

const { Item } = Form;
export const SearchField = () => {
  return (
    <Form
      onFinish={({ searchValue }) =>
        Router.push(`search?search=${searchValue}?`)
      }
    >
      <Item name="searchValue">
        <Input id="searchField" placeholder="Search...." />
      </Item>
    </Form>
  );
};
