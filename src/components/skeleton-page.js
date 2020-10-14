import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const SkeletonStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  h2{
    font-size: 1.5em;
  }
  p{
    font-size: 1em;
  }
  img {
    height: 100%;
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: .5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`;
function LoadingSke () {
  return (
    <SkeletonStyled>
      <Skeleton width="100%" height="100%" />
      <div>
        <h2><Skeleton /></h2>
        <div className="grid">

          <div>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
          </div>

          <div>
            <p><Skeleton /></p>
            <p>
              <span><Skeleton /></span>
              <span><Skeleton /></span>
              <span><Skeleton /></span>
            </p>
            <p className="languages">
              <span><Skeleton /></span>
              <span><Skeleton /></span>
              <span><Skeleton /></span>
            </p>
          </div>
        </div>
        <strong className="borders"><Skeleton /></strong>
        <span className="border-item"><Skeleton /></span>
        <span className="border-item"><Skeleton /></span>
        <span className="border-item"><Skeleton /></span>
        <span className="border-item"><Skeleton /></span>
        <span className="border-item"><Skeleton /></span>
        <span className="border-item"><Skeleton /></span>
      </div>
    </SkeletonStyled>
  );
}
export default LoadingSke;
