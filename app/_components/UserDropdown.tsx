import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import {User} from "@nextui-org/user";
import {Link} from "@nextui-org/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { UserCircleIcon, ClipboardIcon, BookmarkIcon, ArrowRightOnRectangleIcon, MoonIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

type Props = {
  setIsLoggedIn: any
}

const UserDropdown = (props: Props) => {
  return (
    <Dropdown placement="bottom-end" offset={20}>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform ml-4"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu className="w-64" aria-label="Profile Actions" variant="flat">
        <DropdownSection showDivider>
          <DropdownItem key="profile" className="h-14 gap-2">
          <User   
            name="Junior Garcia"
            description={(
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                @jrgarciadev
              </Link>
            )}
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider>
          <DropdownItem
            key="account"
            startContent={<UserCircleIcon className="h-6 w-6" />}
          >
            My Account
          </DropdownItem>
          <DropdownItem
            key="team_settings"
            startContent={<ClipboardIcon className="h-6 w-6" />}
          >
            My Posts
          </DropdownItem>
          <DropdownItem
            key="analytics"
            startContent={<BookmarkIcon className="h-6 w-6" />}
          >
            Saved
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="system"
            closeOnSelect={false}
            startContent={<Cog6ToothIcon className="h-6 w-6" />}
          >
            System
          </DropdownItem>
          <DropdownItem
            key="configurations"
            endContent={<ThemeSwitcher />}
            closeOnSelect={false}
            startContent={<MoonIcon className="h-6 w-6" />}
          >
            Dark mode
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            className="text-danger"
            startContent={<ArrowRightOnRectangleIcon className="h-6 w-6" />}
            onPress={() => props.setIsLoggedIn(false)}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown