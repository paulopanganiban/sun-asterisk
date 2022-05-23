import React from "react";
import styled from "styled-components";

interface GenericListProps<T> {
  /* 
  data: will be our array that will be taking a generic type T!

  renderItem: is a function that will be returning a react element of type T as well.

  keyExtractor: is a function to extract our key.
  */
  data: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
}
function GenericList<T>({ data, keyExtractor, render }: GenericListProps<T>) {
  return (
    <S.GenericListContainer>
      {data.map((item) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </S.GenericListContainer>
  );
}

export default GenericList;
const S = {
  GenericListContainer: styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  `,
};
