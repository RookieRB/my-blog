const themeV2 = {
  font:{
      color: "#000000E0",
      fontSize: "2em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif",
      hoverColor: "#FE9600",
  },
  mixin: {
      boxShadow: `
          transition: box-shadow 200ms;
          &:hover{
              box-shadow: 0 0 10px 4px rgba(0,0,0,.18);
          }
      `
  }
}


export default themeV2