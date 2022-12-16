import { Container, RepoImg, RepoInfo } from "./styles";

interface RepoItemProps {
  name?: string;
  link?: string;
  image?: string;
}

export const RepoItem = ({ name, link, image }: RepoItemProps) => {
  return (
    <>
      <Container>
        <RepoImg src={image} />
        <RepoInfo>
          <h2>{name}</h2>
          <p>{link}</p>
        </RepoInfo>
      </Container>
    </>
  )
};