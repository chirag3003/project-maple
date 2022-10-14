import ProfileImage from 'components/common/ProfileImage/ProfileImage.index';
import TodoList from 'components/TodoList';
import { StyledRootLayoutBodySidebar } from './Sidebar.styles';

export default function RootLayoutBodySideBar() {
    return (
        <StyledRootLayoutBodySidebar
            className={` flex flex-col gap-3 p-4 bg-red-200 h-full`}
        >
            <div className={` flex flex-col gap-3 items-center justify-center`}>
                <ProfileImage
                    src='https://picsum.photos/500/500'
                    size='200px'
                    alt='Random-Image'
                />
                <text className={`text-3xl font-semibold`}>
                    Chirag Bhalotia
                </text>
                <text className={`font-semibold text-lg`}>A Pro Developer</text>
                <div className={`h-0.5 bg-black w-full rounded-full`} />
            </div>

            <div className={`  flex flex-col `}>
                <text className={`font-semibold text-lg`}>Todo List</text>
                <TodoList />
            </div>
        </StyledRootLayoutBodySidebar>
    );
}
