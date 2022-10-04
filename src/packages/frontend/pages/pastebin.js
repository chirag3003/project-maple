import React from "react";
import MainLayout from "components/layouts/MainLayout";

import PasteBin from "components/PasteBin/PasteBin";

function pastebin() {
  return (
    <>
      <MainLayout>
        <div style={{ padding: "50px" }}>
          <PasteBin></PasteBin>
        </div>
      </MainLayout>
    </>
  );
}

export default pastebin;
