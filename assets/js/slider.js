var draggables = Draggable.create(".knob", {type:"x",
bounds:"#container",
onDrag :updateSlider
});

function updateSlider (){
  var x1 = draggables[0].x;
  var x2 = draggables[1].x;
  var min = document.getElementById("min");
  var max = document.getElementById("max");
  if ( x1 < x2 ){
    TweenLite.set('.range',{x:x1, width:x2-x1})
    min.innerHTML = 'Min: '+ x1;
    max.innerHTML = 'Max: '+ x2;
  } else {
    TweenLite.set('.range',{x:x2, width:x1-x2})
    min.innerHTML = 'Min: '+ x2;
    max.innerHTML = 'Max: '+ x1;
  };
};
