import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const SkeletonStyled = styled.div`

  display: grid;
  grid-row-gap: 2.3em;
  row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;

.mainDiv{
    text-align: left;
    border-radius: 5px;
  }
  
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0px 0px;
  }
  .detailss{
  padding: 1.5em;
  border-radius: 0 0 5px 5px;
  border: 1px solid transparent;
  border-top: none;
  transition: .3s border;
  background: var(--white);
  }
  h2{
  margin: 0;
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 700;
  }
  p{
      font-size: 0.9em;
      margin-bottom: 0.5rem;
  }
`;

function LoadingSke () {
  const auxFlags = (
    <div className="mainDiv">
      <Skeleton width="100%" height="160px" />
      <div loading="lazy" className="detailss">
        <h2><Skeleton /></h2>
        <p><Skeleton /></p>
        <p><Skeleton /></p>
        <p><Skeleton /></p>
      </div>
    </div>
  );

  return (
    <SkeletonStyled>
      {auxFlags}
      {auxFlags}
      {auxFlags}
      {auxFlags}
      {auxFlags}
      {auxFlags}
      {auxFlags}
      {auxFlags}
    </SkeletonStyled>
  );
}

export default LoadingSke;
