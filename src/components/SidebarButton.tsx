import { AnchorHTMLAttributes, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { ButtonContainer } from '@/styles/sidebarButton'
import { IconContext } from 'react-icons'

interface ISidebarButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkToRedirect: string,
  icon: ReactNode,
  text: string
}

export default function SidebarButton({linkToRedirect, icon, text, ...rest}: ISidebarButton) {
  const location = useRouter()

  const isThisLocationActive = location.asPath === linkToRedirect

  return (
    <ButtonContainer
      href={linkToRedirect}
      className={isThisLocationActive ? 'active' : ''}
      {...rest}
    >
      <IconContext.Provider value={{size: '24px'}}>
        {icon}
        <span>{text}</span>        
      </IconContext.Provider>
    </ButtonContainer>
  )
}