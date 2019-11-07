import styled from "styled-components"
import { dark, headerFont, accentMain } from "../../Layout/variables"
export const Wrapper = styled.div`
  a {
    color: ${dark};
    text-decoration: none;
    font-size: 18px;
    font-weight: 300;
    font-family: ${headerFont};
    &:hover {
      color: ${accentMain};
    }
  }

  .active {
    color: ${accentMain};
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 3rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
