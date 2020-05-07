/*
 * Copyright(c) 2020 nice-router
 *    Date: 2020/5/7 下午2:47
 *    Author: Kala
 */

import EleCarousel from '@/components/elements/ele-carousel'
import './a-middle-base-page.scss'

function AMiddleBasePage() {
  return (
    <View className='a-middle-base-page'>
      <EleCarousel
        className='detail-carousel'
        items={[{ id: 1, imageUrl: 'https://nice-router.oss-cn-chengdu.aliyuncs.com/news-1.jpeg' }]}
      />
    </View>

  )
}

AMiddleBasePage.options = {
  addGlobalClass: true,
}

export default AMiddleBasePage
