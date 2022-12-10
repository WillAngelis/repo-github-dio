import { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import { Loading } from "../Loading";
import { Button, Container, Input } from "./styles";

export const InputSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      {
        searchValue ?
          <Loading size={20} /> :
          <BiSearch  size={28} color={searchValue ? "#222222" : "gray"} />}

      <Input
        type="text"
        placeholder="Search for a repo name or username"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button onClick={() => setSearchValue('')}>Clear</Button>
    </Container>
  )
}