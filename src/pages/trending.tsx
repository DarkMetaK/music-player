import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import SkeletonCard from '@/components/SkeletonCard';
import { CategoriesContainer, CategoryCard, TrendingContainer } from '@/styles/pages/trending';

import useSpotify from '@/hooks/useSpotify';

export default function Trending() {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()

  const [categories, setCategories] = useState<SpotifyApi.CategoryObject[]>([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getCategories().then((data) => {
        setCategories(data.body.categories.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <>
    <Head>
      <title>DarkMetak | Trending</title>
    </Head>
    <TrendingContainer>
      <h1>Trending</h1>
      <CategoriesContainer>
        {categories.length ? (
          categories.map(item => (
            <CategoryCard key={item.id}>
              <Image
                src={item.icons[0].url}
                alt=''
                width={200}
                height={200}
              />
              <h2>{item.name}</h2>
            </CategoryCard>
          ))
        ) : (
          <>
          {[...Array(10)].map((item, index) => <SkeletonCard key={index} height={200} width={200}/>)}
          </>
        )}
      </CategoriesContainer>
    </TrendingContainer>
    </>
  )
}
