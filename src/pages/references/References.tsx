import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FirstReference from "../../components/reference/FirstReference";
import SecondReference from "../../components/reference/SecondReference";

const References: FC = () => {
  const activeReference = useSelector(
    (state: RootState) => state.referenceActive.activeReference
  );
  return (
    <div
      style={{
        paddingTop: "90px",
      }}
    >
      {activeReference === "first" && <FirstReference />}
      {activeReference === "second" && <SecondReference />}
    </div>
  );
};

export default References;
