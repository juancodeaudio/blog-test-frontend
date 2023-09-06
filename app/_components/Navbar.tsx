'use client'
import {  Navbar as NextUINavbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@nextui-org/navbar";
import { useDisclosure } from "@nextui-org/use-disclosure";
import SearchModal from "./SearchModal";
import Link from "next/link";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserDropdown from "./UserDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Navbar = () => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [isLoggenIn, setIsLoggedIn] = useState(false)

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
          <Button isIconOnly radius="full" size="lg" variant="light" onPress={onOpen} startContent={<MagnifyingGlassIcon className="h-5 w-5" />}></Button>
          <SearchModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}/>
        </NavbarItem>
        <NavbarItem>
          <NotificationsDropdown />
        </NavbarItem>
        <NavbarItem>
          {
            isLoggenIn
            ? <UserDropdown setIsLoggedIn={setIsLoggedIn} />
            : <>
                <Button onClick={() => setIsLoggedIn(true)}>Log In</Button>
                <Button variant="bordered" className="ml-3">Sign Up</Button>
              </>
          }
          
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}

export default Navbar