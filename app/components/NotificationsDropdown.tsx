import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import {Badge} from "@nextui-org/badge";
import {User} from "@nextui-org/user";
import {Link} from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { NotificationIcon } from "./icons";

const NotificationsDropdown = () => {
  return (
    <Dropdown placement="bottom-end" offset={20}>
      <DropdownTrigger>
        <Button isIconOnly radius="full" size="lg" variant="light">
          <Badge content="" color="primary" shape="circle" size="sm">
            <NotificationIcon className="fill-current" size={30} />
          </Badge>
        </Button>  
      </DropdownTrigger>
      <DropdownMenu 
      className="w-80 p-3" aria-label="Profile Actions" variant="flat">
        <DropdownSection
          classNames={{
            heading: 'text-xl'
          }}
          title='Notifications'
        >
          <DropdownItem className="mt-2" key="account" description="1 minutes ago">
            <User   
              name="Junior Garcia"
              description='Mentioned you in a comment'
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
              }}
            />
          </DropdownItem>
          <DropdownItem className="mt-2" key="account" description="3 minutes ago">
            <User   
              name="Junior Garcia"
              description='Mentioned you in a comment'
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
              }}
            />
          </DropdownItem>
          <DropdownItem className="mt-2" key="account" description="8 minutes ago">
            <User   
              name="Junior Garcia"
              description='Mentioned you in a comment'
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
              }}
            />
          </DropdownItem>
        </DropdownSection>
          
      </DropdownMenu>
    </Dropdown>
  )
}

export default NotificationsDropdown