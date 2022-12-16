import { useState } from "react"
import { InputSearch } from "../Input"
import { RepoItem } from "../RepoItem";
import { Container } from "./styles"

export const SearchBox = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Container isSearching={isSearching}>
      <InputSearch setIsSearching={setIsSearching} isSearching={isSearching} />
      {/* <RepoItem /> */}
    </Container>
  )
}