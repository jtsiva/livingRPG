import { getAttributes, normalizeActivityUnit } from "../src/getAttributes.js";
import { expect } from "chai";

describe("Test getAttribute", function () {
  it("Get attributes for running", function () {
    expect(getAttributes("running", 1).str).to.equal(1);
    expect(getAttributes("running", 1).dex).to.equal(0);
    expect(getAttributes("running", 1).foc).to.equal(0);
    expect(getAttributes("running", 1).vit).to.equal(2);
  });

  it("Get attributes for running with unit=2", function () {
    expect(getAttributes("running", 2).str).to.equal(2);
    expect(getAttributes("running", 2).dex).to.equal(0);
    expect(getAttributes("running", 2).foc).to.equal(0);
    expect(getAttributes("running", 2).vit).to.equal(4);
  });

  it("Get attributes for running with unit=.5", function () {
    expect(getAttributes("running", 0.5).str).to.equal(0.5);
    expect(getAttributes("running", 0.5).dex).to.equal(0);
    expect(getAttributes("running", 0.5).foc).to.equal(0);
    expect(getAttributes("running", 0.5).vit).to.equal(1);
  });

  it("Get nonexistent activity", function () {
    expect(getAttributes("swashbuckling", 1)).to.equal(undefined);
  });
});
