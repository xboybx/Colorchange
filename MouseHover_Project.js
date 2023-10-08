let rectangle = document.querySelector("#rectangle")



rectangle.addEventListener("mousemove", (x_position) => {
    var rect_out_val = rectangle.getBoundingClientRect();
    var rect_inside_Xvalue = x_position.x;
    var rect_Xvalue_aftr_subtract = rect_inside_Xvalue - rect_out_val.left;

    if (rect_Xvalue_aftr_subtract < rect_out_val.width / 2) {
        
        console.log("left");

        var red = gsap.utils.mapRange(0, rect_out_val.width / 2, 255, 0, rect_Xvalue_aftr_subtract);
        // rectangle.style.backgroundColor=`rgb(${red}, 0  ,0)`;

        gsap.to(rectangle, {
            backgroundColor: `rgb(${red}, 0 ,0)`,
        });
    }


    else {
        console.log("right");
        var green = gsap.utils.mapRange(rect_out_val.width / 2, rect_out_val.width, 0, 255, rect_Xvalue_aftr_subtract);

        gsap.to(rectangle, {
            backgroundColor: `rgb(0 ,${green},0 )`,
        });

    }

});

rectangle.addEventListener("mouseleave", () => {
    gsap.to(rectangle, {
        backgroundColor: "white",
    });

});