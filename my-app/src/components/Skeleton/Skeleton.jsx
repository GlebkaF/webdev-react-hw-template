import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Style.css'
import { useEffect, useState } from "react";


function SkeletonSideBar() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (    
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        
          <Skeleton />
        
      </SkeletonTheme>  
  )
}
export default SkeletonSideBar;