import Lottie from "lottie-react";

import fixingBugs from "../../../../assets/lottie/fixingBugs.json";

function FixingBugs() {
  return (
    <>
      <Lottie animationData={fixingBugs} />
      <p>We are facing technical issues, please try after sometime.</p>
    </>
  );
}

export default FixingBugs;
