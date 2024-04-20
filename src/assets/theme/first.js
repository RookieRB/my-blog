const firstTheme = {
    font:{
        color: "#000000E0",
        fontSize: "2em",
        fontFamily: "AlibabaPuHuiTi,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji',sans-serif",
        HoverColor: "#F08080",
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


export default firstTheme