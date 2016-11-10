Code.play = function(game){
var background;
var filter;
};
Code.play.prototype = {        
	preload: function () {
    this.load.image('s', 'assets/pics/undersea.jpg');
    //this.load.image('sch', 'assets/sprites/phaser.png');
    this.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/CheckerWave.js');
        this.load.bitmapFont('gem', 'assets/fonts/bitmapFonts/gem.png', 'assets/fonts/bitmapFonts/gem.xml');
        },
    create: function () {
    	music.destroy();
        this.cache.removeSound('wizball');
        
        this.add.sprite(0, 0, 's');
        background = this.add.sprite(0, 0);
        background.width = 800;
        background.height = 600;
        filter = this.add.filter('CheckerWave', 800, 600);
        filter.alpha = 0.2;
        background.filters = [filter];
        // var logo = this.add.sprite(this.world.centerX, 100, 'sch');
        //      logo.anchor.setTo(0.3, 0.5);
        var bmpText;
        var text = "\n\n\nWhat is the element called \nthat formsa search pattern \nout of a sequence of characters?";
    var choices = "\na. Event \nb. Conditional Argument\nc. Regular Expression\nd. Boolean Variable";
    var style = { font: "38px Arial", fill: "#01075b", align: "right" };
    var style1 = { font: "34px Arial", fill: "#01075b", align: "left" };
    //bmpText = this.add.bitmapText(32, 32, 'gem', text, 48);
    //bmpText.maxWidth = 600;
    var t = this.add.text(this.world.centerX-300, 0, text, style);
    var t1 = this.add.text(this.world.centerX, this.world.centerY, choices, style1);
        },
        update: function () {
                filter.update();
                if (this.input.keyboard.isDown(Phaser.Keyboard.C)) {
                        this.state.end();
        } 
//         else if ((this.input.keyboard.isDown(Phaser.Keyboard.1) || 
//                      this.input.keyboard.isDown(Phaser.Keyboard.3)||
//                      this.input.keyboard.isDown(Phaser.Keyboard.4)) {
//             console.log('is pressed');
//         }
        }
};