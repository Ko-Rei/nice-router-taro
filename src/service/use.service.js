import { useEffect, useRef, useState } from 'react'
import NavigationService from '@/nice-router/navigation.service'
import { LoadingType } from '@/nice-router/nice-router-util'
import Config from '@/utils/config'
import Taro, { usePullDownRefresh } from '@tarojs/taro'

// boolean类型的控制属性，show，close，toggle
export function useVisible(initial = false) {
  const [visible, setVisible] = useState(initial)
  const show = () => setVisible(true)
  const close = () => setVisible(false)
  const toggle = () => setVisible(!visible)
  return {
    visible,
    show,
    close,
    toggle,
  }
}

// 这只page的title
export function usePageTitle(title = Config.name) {
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: title,
    })
  }, [title])
}

// 下拉刷新, 应该传入ActionLike
export function useAjaxPullDown(action) {
  usePullDown(action, true)
}

export function usePullDown(action, statInPage = false) {
  console.log('pulldown refresh', action)
  usePullDownRefresh(() => {
    NavigationService.view(
      action,
      {},
      {
        statInPage,
        onSuccess: () => Taro.stopPullDownRefresh(),
        loading: LoadingType.modal,
      }
    )
  })
}

// 倒计时
export function useCountdown(maxCount = 60) {
  const [second, setSecond] = useState(maxCount)
  const [counting, setCounting] = useState(false)
  const interval = useRef()

  const startCount = () => setCounting(true)

  useEffect(() => {
    if (!counting) {
      return
    }
    setCounting(true)
    console.log('countdown....run')
    interval.current = setInterval(() => {
      setSecond((t) => {
        const result = t - 1
        console.log('countdown....run....', result)
        if (result === 0) {
          clearInterval(interval.current)
          setCounting(false)
          return maxCount
        }
        return result
      })
    }, 1000)
    return () => clearInterval(interval.current)
  }, [counting, maxCount])
  return {
    second,
    counting,
    startCount,
  }
}

// 纯粹因为IDE不能自动导入Taro的useState
export const useAsyncEffect = (callback, watch = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, watch)
}
export const useAsyncState = useState
