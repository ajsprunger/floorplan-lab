import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
  <>
    <h3>Kitchen</h3>
    <div>
      <Oven />
    </div>
    <div>
      <Sink />
    </div>
  </>
  );
}

export default Kitchen