import styled from 'styled-components';





const styles = {}


styles.Li = styled.li`


  height: 100%;
  float: left;

  text-align: center;
  padding: 0 14px;
  margin: 0;
  border:0px;
  font-size: 13px;
  

  `;
styles.Ul = styled.ul`

  height: 100%;
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border:0;
  `;
styles.Banner = styled.div`

  height: 5px;
  border: 0;
  padding: 0;
  margin: 0;
  position: relative;

  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  `;
styles.Img = styled.img`
  height: 100%;
  width: auto;
  border:0px;margin:0px;float:left;
  `;
styles.UlRight = styled(styles.Ul)`
  float: right;
  `;
styles.BannerOptions = styled(styles.Banner)`

height: 28px;
background-color: #f7f7f7;
border-bottom: none;
font-size: 13px;
`;
styles.BannerTitle = styled(styles.Banner)`

height: 57px;
`;
styles.BannerLocation = styled(styles.Banner)`
border-top: 1px solid rgba(0,0,0,.1);
border-bottom: 1px solid rgba(0,0,0,.1);
height: 32px;
`;
styles.BannerImages = styled(styles.Banner)`
height: 288px;
width: 1600px;
`;
styles.Line = styled.div`
content: "";
background: rgba(0,0,0,.06);
width: 1px;
position: absolute;
top: 0;
height: 100%;
`;
styles.LiArrow = styled(styles.Li)`
padding: 0px 0px;
`
styles.ArrowGray = styled.div`
position:relative;
left: 5px;


border-top: 1rem solid transparent;
border-bottom: 1rem solid transparent;
border-left: .6rem solid rgba(0,0,0,.2);
`
styles.ArrowWhite = styled.div`
position:relative;
right: 5px;


border-top: 1rem solid transparent;
border-bottom: 1rem solid transparent;
border-left: .6rem solid #fff;
`



styles.Test = styled.div`
width: 150px;
height: 171.38px;
background: #fff;
box-shadow: 0 0 0 1px rgba(0,0,0,.1);
margin: 2px;
border-radius: 3px;
`;

styles.CenterContainer = styled.div`
height: 100%;

&:before {
  content: '';
  margin-left: -0.25em; 
  display: inline-block;
  height: 100%; 
  vertical-align: middle;
 }
`;
styles.Center = styled.div`

display: inline;
vertical-align: middle;
`;
styles.CenterClick = styled(styles.Center)`

cursor: pointer;
`;
styles.CenterClickBlue = styled(styles.CenterClick)`
color: #237b98;
`;
styles.CenterBold = styled(styles.Center)`
font-weight: bold;
`;
styles.LiClick = styled(styles.Li)`

cursor: pointer;
`;

styles.PopUpContainer = styled.span`
position: relative;

display: inline-block;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

`;
styles.PopUpShow = styled.div`

visibility: visible;
width: 146px;
height: 160px;
background-color: white;
color: black;
text-align: left;
border: 1px solid rgba(0,0,0,.06);
border-radius: 6px;
padding: 8px 0;
position: absolute;
top: 1px;
z-index: 100;
bottom: 0;
right: 100%;
margin-left: 0;
`;

styles.PopUpHide = styled(styles.PopUpShow)`
visibility: hidden;
`;

styles.PopUpItem = styled.div`
height: 38.59px;
`;
styles.SignUpButton = styled.button`
width: 76.83px;
height: 32px;
padding: 0 1rem;
line-height: 2rem;
font-size: .875rem;
margin: .6875rem 0 0;
background-color: #237b98;
border-color: #1c627a;
color: #fff;
outline: none;
border-radius: 3px;
white-space: nowrap;

&:before {
  content: '';
  margin-left: -0.25em; 
  display: inline-block;
  height: 100%; 
  vertical-align: middle;
 }
`;


styles.Grid = styled.div`
display: grid;
width: 244px
grid-template-columns: 368px 368px 368px 244px;
background-color: #2d333f;
grid-gap: 2px;
`;

styles.GridSingles = styled(styles.Grid)`
grid-template-columns: auto auto auto auto auto auto;
`
//width: 244px
//grid-template-columns: 244px 244px 244px 244px 244px 244px;


styles.GridTriple = styled.div`
display: inline-grid;
grid-template-areas:
'pair three'
'pair three';
grid-gap: 2px;
background-color: #2d333f;
`;
styles.GridPair = styled(styles.GridTriple)`
height: 244px;
width: 122px;
grid-template-areas:
'one'
'two';
grid-area: pair;
`;

styles.Image1 = styled.img`
  grid-area: one;
  height: 100%
`;
styles.Image2 = styled(styles.Image1)`
  grid-area: two;
`;
styles.Image3 = styled(styles.Image1)`
  grid-area: three;
`;

styles.SingleImage = styled.img`
  height: 244px;
  width: 244px;
`
styles.ImageLast = styled(styles.SingleImage)`
`





export default styles;

// points: 66.67px 200.00px,133.33px 315.47px,266.67px 315.47px,333.33px 200.00px,266.67px 84.53px,133.33px 84.53px);
// style: fill: red;
// var test = styles.BannerOptions.componentStyle.rules[0];
// var center = (parent, child) => {
//   parent = parent.split(";");
//   var convertToObj = (style) => {
//     var obj = {};
//     for (var i = 0; i < style.length; i++) {
//       var keyVal = style[i].split(": ");
//       // console.log(keyVal)
//       var key = keyVal[0];
//       key = key.split("\n").join("").split(" ").join("");
//       var val = keyVal[1];
//       obj[key] = val;
//     }
//     return obj;
//   }
//   var parentHeight = convertToObj(parent).height;
//   parentHeight = parentHeight.split("px").join("");

//   console.log(parentHeight)
//   return parentHeight;

// }
// center(test);