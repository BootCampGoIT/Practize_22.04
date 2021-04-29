import React, { useContext } from "react";
import { LangContext } from "../App";
// import { useLanguage } from "../../hooks/useLanguage";

const LanguageSelect = () => {
  const { language, list, setLanguage } = useContext(LangContext);
  const onHandleChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <select defaultValue={language.title} onChange={onHandleChange}>
      {list.map((item) => (
        <option value={item.title}>{item.name}</option>
      ))}
    </select>
  );
};

export default LanguageSelect;
