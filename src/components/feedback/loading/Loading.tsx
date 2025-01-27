import { TLoading } from "@customTypes/shared"

type LoadingProps = {
    loading: TLoading;
    error:null|string;
}
const Loading = ({loading, error}:LoadingProps) => {
  return (
    <div>Loading</div>
  )
}

export default Loading