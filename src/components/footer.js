import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from './wrapper';

const FooterStyled = styled.div`
    background: var(--white);
    margin-bottom: 1em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
    font-family: "Nunito Sans",sans-serif;
    .content{
      height: 80px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    }
    h1{
      margin: 0 ;
      font-size: 14px;
    }
    a{
      text-decoration: none;
      color: var(--dark);
      font-weight: 700;
    }
    .dark-mode{
      cursor:pointer;
      .moon{
        display: inline-block;
        transform: rotate(340deg);
        margin-right: 10px;
      }
      p{
        font-size: 12px;
        font-weight: 600;
      }
    }
    @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
    }
`;

function Footer (props) {
  function handleClick () {
    props.setDarkMode (!props.darkMode);
  }
  return (
    <FooterStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {props.darkMode
                  ? <i className="fas fa-moon" />
                  : <i className="far fa-moon" />}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  );
}

export default Footer;
