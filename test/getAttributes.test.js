import { getAttributes, normalizeActivityUnit } from "../src/getAttributes.js";
import { expect } from "chai";

describe("Test getAttribute", function () {
  it("Get attributes for Running", function () {
    getAttributes("running", 1).str.should.equal(1);
    getAttributes("running", 1).dex.should.equal(0);
    getAttributes("running", 1).foc.should.equal(0);
    getAttributes("running", 1).vit.should.equal(2);
  });
});
