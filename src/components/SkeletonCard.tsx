import React from 'react'
import { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { SkeletonCardContainer } from '@/styles/skeletonCard'

export default function SkeletonCard(props: SkeletonProps) {
  return (
    <SkeletonCardContainer {...props}/>
  )
}
