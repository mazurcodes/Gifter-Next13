import UserButton from "./UserButton";

const TopMenu = () => {
    return (
        <div className="flex justify-end items-center p-6" role="menubar">
            <UserButton />
        </div>
    );
}

export default TopMenu;