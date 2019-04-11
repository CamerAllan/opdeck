import * as t from "../../../reducers/reducers";
import * as cards from "../../resources/cards";
import * as pillars from "../../resources/pillars";

describe("helper tests", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  describe("isPlayable tests", () => {
    it("should return invalid if card is not playable", () => {
      expect(t.isPlayable("tc1", pillars.tp1, cards.tcAll)).toBe(false);
    });
    it("should return invalid if card is not playable", () => {
      expect(t.isPlayable("tc2", pillars.tp2, cards.tcAll)).toBe(false);
    });
    it("should return valid if card is playable", () => {
      expect(t.isPlayable("tc1", pillars.tp2, cards.tcAll)).toBe(true);
    });
  });
  describe("removeCards tests", () => {
    it("should remove given strings from list", () => {
      expect(
        t.removeCards(["one", "two", "three", "four"], ["two", "three"])
      ).toEqual(["one", "four"]);
    });
  });
  describe("changePillar tests", () => {
    it("should return the set of pillars with value updated", () => {
      expect(t.changePillar(pillars.tp1, "Army", { Army: 2 }).Army.value).toBe(
        2
      );
    });
    it("should cap pillar value at max", () => {
      expect(
        t.changePillar(pillars.tp1, "Army", { Army: 100 }).Army.value
      ).toBe(10);
    });
    it("should cap pillar value at min", () => {
      expect(
        t.changePillar(pillars.tp1, "Army", { Army: -100 }).Army.value
      ).toBe(0);
    });
  });
});
