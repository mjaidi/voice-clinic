import styled from "styled-components"
import {
  dark,
  headerFont,
  accentMain,
  accentMainLight,
  background,
  shadowMain,
} from "../../Layout/variables"
export const Wrapper = styled.div`
  position: absolute;
  left: 7rem;
  a {
    color: ${dark};
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: ${headerFont};
    &:hover {
      color: ${accentMain};
    }
  }

  .active {
    color: ${accentMain};
  }

  .navbarLink {
    position: relative;
    display: inline-block;
  }

  ${({ desktop }) =>
    desktop
      ? `

			@media (max-width: 900px) {
					display: none;
			}

			.navbarLink {
					margin-right: 3rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
      position: absolute;
      left: 0rem;
      padding: 3rem 1rem 3rem 3rem;
      a {
        font-size: 18px;

      }

			display: flex;
			flex-direction: column;

			.navbarLink {
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;


					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

export const Menu = styled.ul`
  display: none;
  list-style: none;
  padding: 1rem;
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 20;
  min-width: 200px;
  background: ${background};
  box-shadow: ${shadowMain};
  a {
    font-size: 13px;
    text-transform: none;
    font-weight: 500;
  }

  &.active {
    display: block;
  }
  li {
    color: ${dark};
    padding: 0.5rem;
    a:hover {
      color: ${dark};
    }
    &:hover {
      background: ${accentMainLight};
    }
  }
  ${({ desktop }) =>
    desktop
      ? ``
      : `
      background: none;
      a {
        font-size: 15px;

      }
    &.active {
      position: relative;
      top: 0;
      left: 5px;

      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
            box-shadow: none;
    }
  `}
`
