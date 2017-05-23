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
                    class : css.screen
                },
                m("div", {
                    onclick : () => {
                        state.screen = idx;
                        console.log(state);
                    },
                    class : css.layer
                }),
                m(screen)
            )
        )
});
