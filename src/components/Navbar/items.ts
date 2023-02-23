import HomeIcon from '@mui/icons-material/Home'
import React from 'react'
import CallIcon from '@mui/icons-material/Call'
import scrollBack from '@/utils/scroll'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

export const items = [
  {
    icon: React.createElement(HomeIcon, null),
    title: 'Home',
    onClick: () => scrollBack()
  },
  {
    icon: React.createElement(CallIcon, null),
    title: 'Contact',
    onClick: () => alert("Please stand-by. I'm still growing")
  },
  {
    icon: React.createElement(MenuBookIcon, null),
    title: 'Biography',
    onClick: () => alert("Please stand-by. I'm still growing")
  },
  {
    icon: React.createElement(VolunteerActivismIcon, null),
    title: 'Donate',
    onClick: () => alert("Please stand-by. I'm still growing")
  }
]
