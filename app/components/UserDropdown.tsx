import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import {User} from "@nextui-org/user";
import {Link} from "@nextui-org/link";

const UserDropdown = () => {
  return (
    <Dropdown placement="bottom-end" offset={20}>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
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
          <DropdownItem key="account">My Account</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown