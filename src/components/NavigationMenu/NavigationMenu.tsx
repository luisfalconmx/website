'use client'

import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@nextui-org/react'
import Image from 'next/image'
import facebookIcon from '@/assets/icons/facebook.svg'
import githubIcon from '@/assets/icons/github.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import twitterIcon from '@/assets/icons/twitter.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import platziIcon from '@/assets/icons/platzi.svg'

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">luisfalconmx.dev</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Certifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="items-center">
        <NavbarItem>
          <Link href="#">
            <Image
              src={githubIcon}
              alt="luisfalconmx - Github profile"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={linkedinIcon}
              alt="luisfalconmx - LinkedIn profile"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={platziIcon}
              alt="luisfalconmx - Platzi profile"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={twitterIcon}
              alt="luisfalconmx - Twitter profile"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={instagramIcon}
              alt="luisfalconmx - Instagram profile"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={facebookIcon}
              alt="luisfalconmx - Facebook page"
              width={24}
              height={24}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'secondary'
                    : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavigationMenu
