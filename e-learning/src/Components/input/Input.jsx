import s from "./style.module.css";

const Input = (type, onChange) => {
  return (
    <input type="text" name="text" className={`${s.input}`} placeholder="type it" />

  );
};

export default Input;
