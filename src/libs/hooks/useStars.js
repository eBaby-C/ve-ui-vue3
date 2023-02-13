import { ref } from "vue"

export function useStars (n, cb) {

  const starNum = ref(n)

  const setStarNum = (n) => {
    starNum.value = n
    cb()
  }

  return [
    starNum,
    setStarNum
  ]
}