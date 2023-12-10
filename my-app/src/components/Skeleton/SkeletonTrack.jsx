import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Style.css'
import {styled} from "styled-components"

const StyledSkeleton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 20px;
`

function SkeletonTrack() {
  return (
    <SkeletonTheme
      baseColor="#bbb4b4"
      highlightColor="#444"
      className="skeleton"
    >
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
      <StyledSkeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </StyledSkeleton>
    </SkeletonTheme>
  )
}

export default SkeletonTrack;