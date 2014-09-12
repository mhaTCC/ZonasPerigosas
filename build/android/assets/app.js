var win = Ti.UI.createWindow({
  backgroundColor: 'black',
  layout: 'vertical',
  title: 'Ocorrências'
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '95%',
  width: '100%'
});

var label1 = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:48 },
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  text: 'A simple label',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#999',
  font: {fontSize:14},
  keyboardType: Ti.UI.KEYBOARD_DEFAULT_PAD,  
  returnKeyType: Ti.UI.RETURNKEY_GO,
  width: '100%', height : 80,
  hintText: 'Descrição da Ocorrência',
  top: 300
});

var button = Titanium.UI.createButton({
   title: 'Clique aqui para enviar',
   width: '100%',
   height: 50,
   top: 400
});
button.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});


win.add(scrollView);
scrollView.add(textArea);
scrollView.add(button);
win.open();