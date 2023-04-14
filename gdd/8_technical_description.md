# Technical description

I'm using my own game engine that considers view as a function of state.
The UI is constructed from HTML and SVG elements styled with CSS.
Interactivity is handled with JavaScript.

Messages between players are exchanged using socket.io. I also plan a local
multiplayer using hot-seat. If time permits I might be able to look into
BlueTooth for exchanging messages.

Input can be anything from keyboard and mouse to game controller or HID.
