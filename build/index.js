"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_js_1 = require("./server/Server.js");
Server_js_1.server.listen(process.env.PORT || 3333, () => console.log(`app rodando ${process.env.PORT || 3333}`));
//# sourceMappingURL=index.js.map