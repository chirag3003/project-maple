import React, { useEffect, useRef } from "react";
import { Wrapper, TopBar, Button, InputField } from "./PasteBin-styles";

function PasteBin() {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  return (
    <div>
      <Wrapper>
        <TopBar>
          <Button>Save</Button>
          <Button>Share</Button>
        </TopBar>
        <InputField autoFocus ref={inputElement} />
      </Wrapper>
    </div>
  );
}

export default PasteBin;
