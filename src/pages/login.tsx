import { GetServerSideProps } from "next"
import { getProviders, signIn } from "next-auth/react"
import Image from "next/image";
import Head from "next/head";

import { LoginContainer } from "@/styles/pages/login";

interface IProvider {
  callbackUrl: string,
  id: string,
  name: string,
  signinUrl: string,
  type: string
}
interface ILoginProps {
  providers: {
    [key: string]: IProvider
  }
}

export default function Login({ providers }:ILoginProps) {
  return (
    <>
    <Head>
      <title>DarkMetak | Login</title>
    </Head>
    
    <LoginContainer>
      <Image
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='spotify logo'
        width={360}
        height={108}
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/'})}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </LoginContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}
