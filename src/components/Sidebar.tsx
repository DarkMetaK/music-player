import { useEffect, useState } from 'react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { MdSpaceDashboard, MdFavorite } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog';

import { DialogClose, DialogContent, DialogOverlay, SidebarContainer } from '@/styles/sidebar'
import { RealButtonContainer } from '@/styles/sidebarButton'
import SidebarButton from './SidebarButton'
import SkeletonCard from './SkeletonCard'

export default function Sidebar() {
  const { data: session, status } = useSession()

  const [userPictureUrl, setUserPictureUrl] = useState('')
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    session?.user.image && setUserPictureUrl(session.user.image)
  }, [session])

  return (
    <SidebarContainer>
      <div>
        {userPictureUrl ? (
          <Image
            src={userPictureUrl}
            alt='profile picture'
            width={50}
            height={50}
          />  
        ) : (
          <SkeletonCard width={50} height={50}/>
        )}
        

        <nav>
          <SidebarButton
            linkToRedirect='/'
            text='Feed'
            icon={<MdSpaceDashboard/>}
          />
          <SidebarButton
            linkToRedirect='/trending'
            text='Trending'
            icon={<FaGripfire/>}
          />
          <SidebarButton
            linkToRedirect='/player'
            text='Player'
            icon={<FaPlay/>}
          />
          <SidebarButton
            linkToRedirect='/favorites'
            text='Favoritos' 
            icon={<MdFavorite/>}
          />
          <SidebarButton
            linkToRedirect='/library'
            text='Biblioteca'
            icon={<IoLibrary/>}
          />
        </nav>

        <div className='signOut'>
          <RealButtonContainer onClick={() => signOut()}>
            <FaSignOutAlt size={24}/>
            <span>Sair</span>
          </RealButtonContainer>
        </div>

        <div className="dialog">
          <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
            <Dialog.Trigger asChild>
              <button>
                <GiHamburgerMenu size={24}/>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <DialogOverlay />
              <DialogContent>
                <DialogClose asChild>
                  <button>
                    <AiOutlineClose size={24}/>
                  </button>
                </DialogClose>
                <SidebarButton
                  linkToRedirect='/'
                  text='Feed'
                  icon={<MdSpaceDashboard/>}
                  onClick={() => setModalOpen(false)}
                />
                <SidebarButton
                  linkToRedirect='/trending'
                  text='Trending'
                  icon={<FaGripfire/>}
                  onClick={() => setModalOpen(false)}
                />
                <SidebarButton
                  linkToRedirect='/player'
                  text='Player'
                  icon={<FaPlay/>}
                  onClick={() => setModalOpen(false)}
                />
                <SidebarButton
                  linkToRedirect='/favorites'
                  text='Favoritos' 
                  icon={<MdFavorite/>}
                  onClick={() => setModalOpen(false)}
                />
                <SidebarButton
                  linkToRedirect='/library'
                  text='Biblioteca'
                  icon={<IoLibrary/>}
                  onClick={() => setModalOpen(false)}
                />
                <RealButtonContainer onClick={() => signOut()}>
                  <FaSignOutAlt size={24} onClick={() => setModalOpen(false)}/>
                  <span>Sair</span>
                </RealButtonContainer>
              </DialogContent>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </SidebarContainer>
  )
}