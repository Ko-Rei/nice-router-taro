import React from 'react'
import { useAsyncEffect, usePageTitle, usePullDown } from '@/service/use.service'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import NavigationService from '@/nice-router/navigation.service'
import Config from '@/utils/config'
import MockService from '@/nice-router/request/mock-service'
import ServerImage from '@/server-image/server-image'

import './home.scss'


function HomePage(props) {
  const root = useSelector((state) => state.home)
  const { pageTitle } = root
  usePageTitle(pageTitle)
  usePullDown(props)

  useAsyncEffect(() => {
    NavigationService.ajax(Config.api.FooterHome)
  })

  const { slideList = defaultSlideList } = root // 这样有问题，第二张开始，都没展示出来
  // const { slideList = [] } = root  // 这样写就没问题

  return (
    <View>
      <Swiper style={{ width: '100%' }}>
        {slideList.map((it) => (
          <SwiperItem key={it.id}>
            <ServerImage style={{ width: '100%', height: '100%' }} src={it.imageUrl} size='large' />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}

export default HomePage

const defaultSlideList = [
  { id: 1, imageUrl: MockService.randomImage() },
  { id: 2, imageUrl: MockService.randomImage() },
]
