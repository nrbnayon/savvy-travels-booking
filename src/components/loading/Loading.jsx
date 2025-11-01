import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <PropagateLoader color="#7ED957" speedMultiplier={1} />
    </div>
  );
};

export default Loading;
