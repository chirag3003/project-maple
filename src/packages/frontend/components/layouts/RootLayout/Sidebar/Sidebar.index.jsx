import {
    ArrowRightOnRectangleIcon,
    CircleStackIcon,
    ClipboardDocumentIcon,
    Cog8ToothIcon,
    PlusCircleIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/outline';
import Logo from 'components/common/Logo/Logo.index';
import ProfileImage from 'components/common/ProfileImage/ProfileImage.index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    StyledRootLayoutSidebarLogout,
    StyledRootLayoutSidebarMenu,
} from './Sidebar.styles';

const SideBarIcon = (props) => {
    const router = useRouter();
    const { pathname } = router;
    const menu = pathname.split('/');

    const propsData = {
        key: props.key,
        icon: props.icon,
        title: props.title,
        route: props.route,
        isOpen: props.isOpen,
    };

    const active = menu[1] === propsData.route || menu.length === 1;

    return (
        <StyledRootLayoutSidebarMenu>
            <Link
                href={`${propsData?.route === '' ? '/' : propsData?.route}`}
                key={propsData?.key}
            >
                <div
                    className={` flex w-min flex-row gap-4 ${
                        propsData?.isOpen && 'justify-center'
                    } items-center relative cursor-pointer group ${
                        active && 'active-button'
                    } `}
                >
                    <propsData.icon className='w-7 h-7 ' />
                    <text
                        className={` ${
                            propsData?.isOpen &&
                            'hidden group-hover:block group-hover:absolute left-12 shadow-lg text-black bg-white p-2 rounded-md'
                        }   text-xl whitespace-nowrap font-medium`}
                    >
                        {propsData?.title}
                    </text>
                </div>
            </Link>
        </StyledRootLayoutSidebarMenu>
    );
};

export default function RootLayoutSidebar(props) {
    const propsData = {
        isOpen: props?.data?.isOpen,
        setIsOpen: props?.data?.setIsOpen,
    };

    const SidebarMenu = [
        {
            title: 'Dashboard',
            route: '',
            icon: Squares2X2Icon,
        },
        {
            title: 'Store',
            route: 'store',
            icon: CircleStackIcon,
        },
        {
            title: 'Create',
            route: 'create',
            icon: PlusCircleIcon,
        },
        {
            title: 'Logs',
            route: 'logs',
            icon: ClipboardDocumentIcon,
        },
        {
            title: 'Services',
            route: 'services',
            icon: Cog8ToothIcon,
        },
    ];

    return (
        <div
            className={`h-full ${
                propsData?.isOpen ? 'lg:pr-2' : 'lg:pr-4'
            }  flex items-center justify-start`}
        >
            <div
                className={`h-full w-full ${
                    !propsData?.isOpen && 'lg:rounded-tr-3xl lg:rounded-br-3xl'
                }  bg-white`}
            >
                <div
                    className={`flex p-2 h-full flex-col items-center  lg:pt-16 gap-2 `}
                >
                    <div className='flex items-center justify-center w-full '>
                        <Logo
                            onClicks={{
                                root: () =>
                                    propsData?.setIsOpen(!propsData?.isOpen),
                            }}
                            classNames={{
                                root: !propsData?.isOpen && 'flex-col',
                            }}
                            isOpen={propsData?.isOpen}
                        />
                    </div>
                    <div
                        className={` w-full h-full gap-3 flex flex-col  my-10  ${
                            propsData?.isOpen ? 'hidden lg:block' : 'block '
                        }`}
                    >
                        {/* Only visible on MOBILE */}
                        <div
                            className={`lg:hidden flex flex-col gap-3  items-center justify-center`}
                        >
                            <ProfileImage
                                src='https://picsum.photos/500/500'
                                size='200px'
                                alt='Random-Image'
                            />
                            <text className={`text-3xl font-semibold`}>
                                Chirag Bhalotia
                            </text>
                            <text className={`font-semibold text-lg`}>
                                A Pro Developer
                            </text>
                            <div
                                className={`h-0.5 bg-black w-full rounded-full`}
                            />
                        </div>

                        {/* Only visible on DESKTOP */}
                        {/* <div className={` hidden lg:block`}>
                    Only Visible on Desktop
                </div> */}

                        <div
                            className={`flex flex-col p-2 h-full justify-between `}
                        >
                            <div
                                className={` flex flex-col gap-8 ${
                                    propsData?.isOpen && 'items-center'
                                } justify-center`}
                            >
                                {SidebarMenu?.map((_, i) => (
                                    <SideBarIcon
                                        key={i}
                                        isOpen={propsData?.isOpen}
                                        {..._}
                                    />
                                ))}
                            </div>

                            <StyledRootLayoutSidebarLogout
                                className={` w-full ${
                                    propsData?.isOpen &&
                                    ' shadow-none !bg-transparent p-0'
                                } shadow-lg flex items-center justify-center p-2 rounded-md cursor-pointer`}
                            >
                                <SideBarIcon
                                    key={'Log-out'}
                                    isOpen={propsData?.isOpen}
                                    title='Log-out'
                                    route='/'
                                    icon={ArrowRightOnRectangleIcon}
                                />
                            </StyledRootLayoutSidebarLogout>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
