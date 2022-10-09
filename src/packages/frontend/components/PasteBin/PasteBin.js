import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { Button, InputField, TopBar, Wrapper } from "./PasteBin-styles";

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
        <span className="title">PasteBin</span>
        <TopBar className="mt-8">
          <Button>
            <text>Save</text>
            <BookmarkIcon className="w-5 h-5 " />
          </Button>
          <Button>
            <text>Share</text>
            <ShareIcon className="w-5 h-5 " />
          </Button>
        </TopBar>
        <InputField autoFocus ref={inputElement} />
      </Wrapper>
    </div>
  );
}

export default PasteBin;
