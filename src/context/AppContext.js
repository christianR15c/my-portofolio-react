import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [blogId, setBlogId] = useState(null);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();

  return (
    <StateContext.Provider
      value={{
        blogId,
        setBlogId,
        title,
        setTitle,
        date,
        setDate,
        content,
        setContent,
        image,
        setImage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
