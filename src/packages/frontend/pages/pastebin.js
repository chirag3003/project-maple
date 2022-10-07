import React from "react";
import MainLayout from "components/layouts/MainLayout";

import PasteBin from "components/PasteBin/PasteBin";

function pastebin() {
  return (
    <>
      <MainLayout>
        <div>
          <PasteBin></PasteBin>
        </div>
      </MainLayout>
    </>
  );
}

export default pastebin;
