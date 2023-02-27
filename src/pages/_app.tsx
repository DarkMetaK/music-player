import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { SidebarLayout } from '@/styles/layout'
import Sidebar from '@/components/Sidebar'
import { PlayerContextProvider } from '@/context/player'

export default function App({
  Component,
  pageProps : { session, ...pageProps},
  router
}: AppProps) {
  globalStyles()

  if (router.pathname.startsWith('/login')) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }

  return (
    <SessionProvider session={session}>
        <SidebarLayout>
          <Sidebar />
          <PlayerContextProvider>
            <Component {...pageProps} />
          </PlayerContextProvider>
        </SidebarLayout>
    </SessionProvider>
  )
}
