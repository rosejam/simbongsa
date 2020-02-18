import React, { ReactElement } from "react";
// import "assets/mycss";
import { Form } from "semantic-ui-react";

interface Props {
  value: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.FormEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  nametag?: string;
  type: string;
}
export default function Input({
  value,
  onChange,
  id,
  placeholder,
  type,
  onEnter
}: Props): ReactElement {
  return (
    <Form>
      <Form.Field>
        <input
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          type={type}
          onKeyDown={event => {
            if (event.key === "Enter" && onEnter !== undefined) {
              onEnter(event);
            }
          }}
        />
      </Form.Field>
    </Form>
  );
}
