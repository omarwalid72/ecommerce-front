import { TLoading } from "@customTypes/shared";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <p>{error}</p>
      </div>
    );
  }
  return <>{children}</>;
};

export default Loading;
