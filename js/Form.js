class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz game");
      title.position(325, 0);

      var title2 = createElement('h3')
      title2.html("Q1 what is the depth of the 'CHALLENGER DEEP' below the see level");
      title2.position(130, 50);

      var option1 = createElement('h3')
      option1.html("a)  10924m")
      option1.position(130,100);

      var option2 = createElement('h3')
      option2.html("b)  10126m")
      option2.position(130,150);

      var option3 = createElement('h3')
      option3.html("c)  1592m")
      option3.position(130,200);

      var option4 = createElement('h3')
      option4.html("d)  11090")
      option4.position(130,250);
      
      var input = createInput("name");
      var input2 = createInput("Correct option");
      var button = createButton('Submit');
      
      input.position(130, 160);
      input2.position(200,200);
      button.position(250, 200);
  
      button.mousePressed(function(){
        input.hide();
        input2.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
       // greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }