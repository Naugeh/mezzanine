// Create the application helper and add its render target to the page
let app = new PIXI.Application({ resizeTo: window });
let appDiv = document.getElementById("app");
appDiv.appendChild(app.view);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from('/static/img/agnishikha.svg');
app.stage.addChild(sprite);

const gaonText = new PIXI.Text('गाव', {fontFamily : 'Arial', fontWeight: 'bold', fontSize: 54, fill : 0xff9a00});

gaonText.anchor.set(0.5);
gaonText.position.set(app.renderer.screen.width / 2 - 5, app.renderer.screen.height / 2  - 40);
gaonText.interactive = true;
gaonText.buttonMode = true;
gaonText.on('pointerdown', function () {
    window.location.href = '/blog';
});

app.stage.addChild(gaonText);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta;
	//sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});


resize();

function resize() {
    app.view.style.width = window.innerWidth + 'px';
    app.view.style.height = window.innerHeight + 'px';
    app.renderer.resize(window.innerWidth, window.innerHeight);
    sprite.width = window.innerWidth;
    sprite.height = window.innerHeight;
    gaonText.position.set(app.renderer.screen.width / 2 - 5, app.renderer.screen.height / 2 - 40);
}

window.onresize = resize;