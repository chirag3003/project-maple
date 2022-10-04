import ProfileCard from "components/ProfileCard";
import TodoList from "components/TodoList";
import React, { useEffect } from "react";

function Profile() {
    return (
        <div className="profile w-1/4 h-full overflow-y-hidden py-2 p-4 flex flex-col ">
            <ProfileCard />
            <TodoList />
        </div>
    );
}

export default Profile;
