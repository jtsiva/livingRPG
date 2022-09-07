import { getAttributes, normalizeActivityUnit } from "../src/getAttributes.js";
import { expect } from "chai";

describe("Test getAttribute", function () {
  it("Get attributes for Running", function () {
    expect(getAttributes("running", 1).str).to.equal(1);
    expect(getAttributes("running", 1).dex).to.equal(0);
    expect(getAttributes("running", 1).foc).to.equal(0);
    expect(getAttributes("running", 1).vit).to.equal(2);
  });
});
