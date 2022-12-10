import { LoadingContainer, LoadingSpin } from "./styled"

type LoadingProps = {
  size: number
}

export const Loading = ({ size }: LoadingProps) => {
  return (
    <LoadingContainer size={size}>
      <LoadingSpin />
    </LoadingContainer>
  )
}