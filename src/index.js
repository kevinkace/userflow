"use strict";

const screens = [
        require("./screens/1"),
        require("./screens/2")
    ],
    state = {},

    css = require("./index.css");

m.mount(document.getElementById("mount"), {
    view : () =>
        screens.map((screen, idx) =>
            m("div", {
                    class : state.screen === idx ? css.screenFocused : css.screen
                },
                m("div", {
                    onclick : () => {
                        state.screen = state.screen === idx ? false : idx;
                        console.log(state);
                    },
                    class : state.screen === idx ? css.shutterOpen : css.shutter
                }),
                m(screen)
            )
        )
});
