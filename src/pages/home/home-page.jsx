import { View } from '@tarojs/components'

import AMiddleBasePage from './a-middle-base-page'

// import './a-middle-base-page.scss'  //这里有问题！！

function HomePage() {
  return (
    <View>
      <AMiddleBasePage />
    </View>
  )
}

HomePage.options = {
  addGlobalClass: true,
}


export default HomePage
