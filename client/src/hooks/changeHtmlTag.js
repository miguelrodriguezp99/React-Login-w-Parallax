import {useEffect} from 'react'

export function useChangeHtmlTag(tag){
    useEffect(() => {
        document.documentElement.classList.add(tag)
        return () => {
            document.documentElement.classList.remove(tag)
        }
      }, [])
}