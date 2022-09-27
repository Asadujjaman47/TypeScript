"use strict";
// ENUMS
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
;
const response1 = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: {
        name: 'Test',
        something: 300
    }
};
console.log(response1);
