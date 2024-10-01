let image_section = document.querySelector(".image-section img");
let choose_img_btn = document.querySelector(".upload-btn");
let upload_btn = document.querySelector(".upload input");
let filter_btn = document.querySelectorAll(".F-icon button");
let slider = document.querySelector(".range input");
let slider_Name = document.querySelector(".range .RName");
let slider_Length = document.querySelector(".Rlength");
let Rotate_btn = document.querySelectorAll(".R-icon button");
let reset_btn = document.querySelector(".reset");
let save_btn = document.querySelector(".save");
let brightness = 100,
    contrast = 100, 
    saturate = 100,
    invert = 0,
    blured=0,
    opacity = 100,
    rotate = 0,
    flip_x = 1,
    flip_y = 1;

// blur = 0; invert = 0; opacity = 100;

choose_img_btn.addEventListener("click",() => upload_btn.click());
upload_btn.addEventListener("change",()=> {
    // console.log(upload_btn.files[0]);
    let file = upload_btn.files[0];
    let Url = URL.createObjectURL(file);
    image_section.src= Url;
    // image_section.src = URL.createObjectURL(file);
    image_section.addEventListener("load",()=>{
        document.querySelector(".allsection").classList.remove("disabled");
    });
});

filter_btn.forEach((element) => {
    element.addEventListener("click", ()=>{
        // console.log(element);
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
        // slider_Length.innerHTML = `${brightness}`;
        slider_Name.innerHTML = element.id;
        if(element.id == "brightness"){
            slider.max = 200;
            slider.value = brightness;
            slider_Length.innerHTML = `${brightness}`;
            // console.log("bright");
            // document.querySelector(".image-section img").style.filter = "brightness(100%)";
        }
        else if(element.id == "contrast"){
            // console.log("contrast");
            slider.max = 200;
            slider.value = contrast;
            slider_Length.innerHTML = `${contrast}`;
        }
        else if(element.id =="saturate"){
            slider.max = 200;
            slider.value = saturate;
            slider_Length.innerHTML = `${saturate}`;
        }
        else if(element.id == "blured"){
            slider.max = 100;
            slider.value = blured;
            slider_Length.innerHTML = `${blured}`;
            // console.log("blur");
        }
        else if(element.id == "invert"){
            // console.log("invert");
            slider.max = 100;
            slider.value = invert;
            slider_Length.innerHTML = `${invert}`;
        }
        else if(element.id == "opacity"){
            // console.log("opacity");opacity
            slider.max = 200;
            slider.value = opacity;
            slider_Length.innerHTML = `${opacity}`;

        }

    })});

slider.addEventListener("input", ()=>{
    // brightness = slider.value;
    slider_Length.innerHTML = `${slider.value}%`;
    let sliderState = document.querySelector(".F-icon .active");
    if(sliderState.id === "brightness"){
        brightness = slider.value;
    }
    else if(sliderState.id === "contrast"){
        contrast = slider.value;
    }
    else if(sliderState.id === "saturate"){
        saturate = slider.value;
    }
    else if(sliderState.id ==="invert"){
        invert = slider.value;
    }
    else if(sliderState.id === "opacity"){
        opacity = slider.value;
    }
    else if(sliderState.id === "blured"){
        blured = slider.value;
    }
    image_section.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blured}px) opacity(${opacity}%)`;
})


Rotate_btn.forEach((element) => {
    element.addEventListener("click", ()=>{
        // console.log(element);
        if(element.id == "rotate-left"){
             rotate -= 90;
            
            // if(image_section.style.transform == "rotate(-90deg)"){
            // image_section.style.transform = "rotate(-180deg)";
            // // console.log("rotate-left");
            // console.log("-180");
            // }
            // else{
            //     console.log("-90");
            //     image_section.style.transform = "rotate(-90deg)";
            // }
        
        }
        else if(element.id == "rotate-right"){
            rotate +=90;
            // console.log("rotate-right");
            // if(image_section.style.transform == "rotate(0deg)"){
            //     image_section.style.transform = "scaleX(-1)";
            //     // console.log("rotate-left");
            //     }
            //     else{
            //         image_section.style.transform = "scaleX(-1)";
            //     }
            // image_section.style.transform = "rotate(180deg)";
        }
        else if(element.id == "flip_x"){
            flip_x= flip_x == 1 ?  -1 :1;
            // rotate += 180;
            // if(image_section.style.transform == "rotate(0deg)"){
            //     image_section.style.transform = "rotate(180deg)";
            //     // console.log("rotate-left");
            //     }
            //     else{
            //         image_section.style.transform = "rotate(0deg)";
            //     }
        }
        else if(element.id == "flip_y"){
            flip_y = flip_y == 1 ? -1:1;
            // if(image_section.style.transform == "rotate(0deg)"){
            //     image_section.style.transform = "rotate(180deg)";
            //     // console.log("rotate-left");
            //     }
            //     else{
            //         image_section.style.transform = "rotate(0deg)";
            //     }
        }
        image_section.style.transform =`rotate(${rotate}deg) scale(${flip_x} , ${flip_y})`;
    })  
})

reset_btn.addEventListener("click", ()=>{
    brightness = 100,
    contrast = 100, 
    saturate = 100,
    invert = 0,
    blured=0,
    opacity = 100,
    rotate = 0,
    flip_x = 1,
    flip_y = 1;
    image_section.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blured}px) opacity(${opacity}%)`;
    image_section.style.transform =`rotate(${rotate}deg) scale(${flip_x} , ${flip_y})`;
})

// save_btn.addEventListener("click", ()=>{
//     let canvas = document.createElement("canvas");
//     let ctx = canvas.getContext("2d");
//     // console.log(ctx);
//     // console.log(image_section.naturalWidth);
//     // console.log(image_section.naturalHeight);
//     canvas.width = image_section.naturalWidth;
//     canvas.height = image_section.naturalHeight;
//     ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blured}px) opacity(${opacity}%)`;
//     ctx.transform =`rotate(${rotate}deg) scale(${flip_x} , ${flip_y})`;
//     //  ctx.translate = `rotate(${rotate}deg) ctx.scale(${flip_x} , ${flip_y})`;
//     // ctx.translate(canvas.width/2,canvas.height/2);
//     // ctx.scale(flip_x,flip_y);
//     ctx.drawImage(image_section,0,0,canvas.width,canvas.height);
    
//     let link = document.createElement("a");
//     link.download = "image.png";
//     link.href = canvas.toDataURL();
//     link.click();
// })

save_btn.addEventListener("click", ()=>{
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image_section.naturalWidth;
    canvas.height = image_section.naturalHeight;
    
    // Apply the transformations for rotation and flipping
    ctx.translate(canvas.width / 2, canvas.height / 2); // Move to the center of the canvas
    ctx.scale(flip_x, flip_y); // Flip the canvas if needed
    ctx.rotate(rotate * Math.PI / 180); // Rotate the canvas
    
    // Apply the filter settings
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blured}px) opacity(${opacity}%)`;
    
    // Draw the image on the canvas
    ctx.drawImage(image_section, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    // Create a link to download the image
    let link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();
});
