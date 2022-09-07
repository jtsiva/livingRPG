import {
  getAttributes,
  getAdjustedAttributes,
  normalizeActivityUnit,
} from "../src/getAttributes.js";
import { expect } from "chai";

describe("Test getAttributes", function () {
  it("Get attribute information for an activity (running)", function () {
    expect(getAttributes("running", 1).str).to.equal(1);
    expect(getAttributes("running", 1).dex).to.equal(0);
    expect(getAttributes("running", 1).foc).to.equal(0);
    expect(getAttributes("running", 1).vit).to.equal(2);
  });
});

describe("Test getAdjustedAttributes", function () {
  it("Get attributes for running", function () {
    expect(getAdjustedAttributes("running", 1).str).to.equal(1);
    expect(getAdjustedAttributes("running", 1).dex).to.equal(0);
    expect(getAdjustedAttributes("running", 1).foc).to.equal(0);
    expect(getAdjustedAttributes("running", 1).vit).to.equal(2);
  });

  it("Get attributes for running with unit=2", function () {
    expect(getAdjustedAttributes("running", 2).str).to.equal(2);
    expect(getAdjustedAttributes("running", 2).dex).to.equal(0);
    expect(getAdjustedAttributes("running", 2).foc).to.equal(0);
    expect(getAdjustedAttributes("running", 2).vit).to.equal(4);
  });

  it("Get attributes for running with unit=.5", function () {
    expect(getAdjustedAttributes("running", 0.5).str).to.equal(0.5);
    expect(getAdjustedAttributes("running", 0.5).dex).to.equal(0);
    expect(getAdjustedAttributes("running", 0.5).foc).to.equal(0);
    expect(getAdjustedAttributes("running", 0.5).vit).to.equal(1);
  });

  it("Get nonexistent activity", function () {
    expect(getAdjustedAttributes("swashbuckling", 1)).to.equal(undefined);
  });
});

describe("Test normalizeActivityUnit", function () {
  it("Normalize 30 min time unit to 1", function () {
    expect(normalizeActivityUnit("", "00:30:00")).to.equal(1);
  });
});
