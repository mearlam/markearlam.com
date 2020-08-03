import styled from "styled-components";

export const AwesomeIcon = styled.div`
         span {text-decoration: none;
            border-bottom: none;
            position: relative;
            font-size: ${props => props.fontSize || "1em"};
          }
        
        span:before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            text-transform: none !important;
        }
        
        span > .label {
            display: none;
        }
`;

// put around an image for it to fade in on load
export const ImagePreviewContainer = styled.div`
	-moz-animation: gallery 0.75s ease-out 0.4s forwards;
	-webkit-animation: gallery 0.75s ease-out 0.4s forwards;
	-ms-animation: gallery 0.75s ease-out 0.4s forwards;
	animation: gallery 0.75s ease-out 0.4s forwards;
	margin-bottom: 0;
	overflow: hidden;
	opacity: 0;
	position: relative;
	text-align:center;
`;

export const ImagePreview = styled.div`
    text-align: center;
    margin-top: 20px;
        img {
            -moz-transition: -moz-transform 0.2s ease-in-out;
            -webkit-transition: -webkit-transform 0.2s ease-in-out;
            -ms-transition: -ms-transform 0.2s ease-in-out;
            transition: transform 0.2s ease-in-out;
            max-width: 100%;
            height: auto;
            vertical-align: middle;
        }
        
        img:hover {
           -moz-transform: scale(1.075);
            -webkit-transform: scale(1.075);
            -ms-transform: scale(1.075);
            transform: scale(1.075); 
        }
`;

export const BigButton = styled.a`
    font-size: 1.35em;
    padding: 0 2em;
    color: white;
    a {
        color: white;
    }
    -moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
	-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	background: #19B5FE;
	color: #FFF;
	border-radius: 4px;
	border: 0;
	cursor: pointer;
	display: inline-block;
	font-weight: 700;
	height: 2.85em;
	line-height: 2.95em;
	padding: 0 1.5em;
	text-align: center;
	text-decoration: none;
	white-space: nowrap;
    `;