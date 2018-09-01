import React, { Component } from "react";
import styled from "styled-components";
import "./Nav.css";
const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 90px;
  background-color: white;
  position: sticky;
`;

const Letters = styled.section`
  width: 35%;
  /* align-items: center; */
  color: black;
  display: flex;
  margin: auto;

  font-size: 100%;

  justify-content: space-around;
`;

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Letters>
            <div class="nav">MENS</div>
            {/* <li>new arrivals</li>
            <li>sale</li> */}
            <div>WOMANS</div>
            <div>FOOTWEAR</div>
            <div>AREA51</div>
            <div>BRANDS</div>
            <div>STORES</div>
            <div>CONTACT</div>
          </Letters>
        </Wrapper>
      </div>
    );
  }
}
