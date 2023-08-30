'use client'
import {  Navbar as NextUINavbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import {Input} from "@nextui-org/input";
import Link from "next/link";

import { SearchIcon } from "./icons";
import UserDropdown from "./UserDropdown";
import NotificationsDropdown from "./NotificationsDropdown";

const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" height='80px' className="z-[9999]">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/categories">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarItem>
        <NavbarItem>
          <NotificationsDropdown />
        </NavbarItem>
        <NavbarItem>
          <UserDropdown />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}

export default Navbar