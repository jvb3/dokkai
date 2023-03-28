import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Box sizing rule that affects all elements */
*,
*::before,
*::after {
  box-sizing: border-box;
}


/* Remove margin and padding from all elements */
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
img,
ul,
ol,
li,
a,
form,
label,
input,
textarea,
button {
  margin: 0;
  padding: 0;
}

/* Remove border from all elements */
* {
  border: 0;
  border-radius: 0;
  
}

* {
  font-family: 'Montserrat', sans-serif;
}


/* Remove list styles from ul and ol elements */
ul,
ol {
  list-style: none;
}

/* Set font size to 100% on the html element */
html {
  font-size: 100%;

}

/* Make sure images and other embedded objects are not resizable */
img,
embed,
object,
video {
  max-width: 100%;
}

/* Remove text decoration on links */
a {
  text-decoration: none;
}

/* Set default cursor for links and buttons */
a,
button {
  cursor: pointer;
}


`;

export default GlobalStyle;
