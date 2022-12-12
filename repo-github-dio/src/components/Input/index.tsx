import { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import { Loading } from "../Loading";
import { Button, Container, Input } from "./styles";

interface InputSearchProps {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching: boolean;
}

export const InputSearch = ({ isSearching, setIsSearching }: InputSearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsSearching(true);
  }

  const handleReset = () => {
    setSearchValue('');
    setIsSearching(false);
  }


  return (
    <Container>
      {
        searchValue
          ? <Loading size={20} />
          : <BiSearch size={28} color={searchValue ? "#222222" : "gray"} />
      }

      <Input
        type="text"
        placeholder="Search for a repo name or username"
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleReset}>Clear</Button>
    </Container>
  )
}