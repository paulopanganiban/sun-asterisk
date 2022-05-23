import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formState: { title: string | undefined; content: string | undefined };
}
const Form = ({ onSubmit, onChange, formState }: FormProps) => {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={formState?.title}
          onChange={onChange}
        />
        <label htmlFor="title">Content</label>
        <input
          name="content"
          type="text"
          value={formState?.content}
          onChange={onChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Form;
