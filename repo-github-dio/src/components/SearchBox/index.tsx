import { InputSearch } from "../Input"
import { Container } from "./styles"

export const SearchBox = () => {
  return (
    <Container hasResponse={true}>
      <InputSearch />
    </Container>
  )
}