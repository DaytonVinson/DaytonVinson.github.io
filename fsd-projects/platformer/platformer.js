$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
    
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
createPlatform(200,720,50,10,"red")
createPlatform(50,720,50,10,"red")
createPlatform(100,100,10,400,"red")
createPlatform(0,100,100,10,"red")
createPlatform(400,720,50,10,"red")
createPlatform(600,640,50,10,"red")
createPlatform(700,100,10,620,"red")
createPlatform(400,500,50,10,"red")
createPlatform(200,400,50,10,"red")
createPlatform(400,300,50,10,"red")
createPlatform(600,200,50,10,"red")
createPlatform(700,200,600,10,"red")
createPlatform(800,300,700,10,"red", 700, 1300, 1, 300,300,300)
createPlatform(700,450,600,10,"red")
createPlatform(1200,600,200,10,"red")
createPlatform(200,200,50,10,"red")


    // TODO 3 - Create Collectables
createCollectable("diamond",50,50)
createCollectable("diamond",700,50)
createCollectable("diamond",200,360)
createCollectable("diamond",600,600)
createCollectable("kennedi",1000,650)
    
    // TODO 4 - Create Cannons
  createCannon("top",200,2500,20,20) 
  createCannon("right",620,3500,20,20) 
  createCannon("right",420,3500,20,20)
  createCannon("right",220,3000,20,20,100,750, 2)
  createCannon("right",220,3000,20,20)

createBadPlatform(0,720,1400,20,"red")
createBadPlatform(900,199,10,10,"red")
createBadPlatform(430,299,10,10,"red")   


    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
