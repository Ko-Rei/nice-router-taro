import React from 'react'
import Taro from '@tarojs/taro'

import { Button, Text, View } from '@tarojs/components'
import './home.scss'


function HomePage() {

  return (
    <View className='home-page'>
      <Text className='home-page-txt'> h5 bug1：这个字你不应该看的见才对</Text>
      <Button
        type='primary'
        onClick={() => {
          Taro.navigateTo('/page/me/me-page').then(() => {
            console.log('Taro.navigateTo等方法没有then。。')
          })
        }}
      >
        h5bug2: 点这不应该报错
      </Button>
    </View>
  )
}

export default HomePage
