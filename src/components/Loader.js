/** @jsxImportSource @emotion/react */
import { Spinner } from "../styles/components/Spinner";

export const Loader = () => {
  return (
    <div css={Spinner}>
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
