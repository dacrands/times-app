class Trianglify{
    //This exists simply to satisfy the Trianglify does not exist warning. 
}
  
// function trianglify(){
//     const pattern = Trianglify({
//         width: window.innerWidth,
//         cell_size: 15,
//         variance: 60,
//         stroke_width: 5,
//         x_colors: ["#290238", "#421155", "#7A4A8D", "9A73A9"],
//         y_colors: "match_x"
//     });
// pattern.canvas(document.getElementById("myCanvas"));
// }
  
export default (`(function trianglify(){Trianglify({width:window.innerWidth,cell_size:15,variance:60,stroke_width:5,x_colors:["#290238","#421155","#7A4A8D","#9A73A9"],y_colors:"match_x"}).canvas(document.getElementById("myCanvas"))})();`);
