const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe(".succeed()", () => {
    test("returns items", () => {
      const items = {
        name: "weapon",
        enhancement: 15,
        durability: 88
      };
      const success = enhancer.succeed(items);
      expect(success).toBeTruthy();
    });

    test("increases enhancement by 1", () => {
      const items = {
        name: "weapon",
        enhancement: 15,
        durability: 50
      };

      const answer = {
        name: "weapon",
        enhancement: 16,
        durability: 50
      };
      const success = enhancer.succeed(items);
      expect(success).toEqual(answer);
    });

    test("enhancement caps at 20", () => {
      const items = {
        name: "weapon",
        enhancement: 20,
        durability: 88
      };

      const answer = {
        name: "weapon",
        enhancement: 20,
        durability: 88
      };

      const success = enhancer.succeed(items);
      expect(success).toEqual(answer);
    });
  });
  describe(".fail()", () => {
    test("returns items", () => {
      const items = {
        name: "weapon",
        enhancement: 15,
        durability: 88
      };
      const fail = enhancer.fail(items);
      expect(fail).toBeTruthy();
    });

    test("enhancement below 15 results in loss of 5 durability", () => {
      const items = {
        name: "weapon",
        enhancement: 10,
        durability: 85
      };

      const answer = {
        name: "weapon",
        enhancement: 10,
        durability: 80
      };

      const fail = enhancer.fail(items);
      expect(fail).toEqual(answer);
    });

    test("enhancement at 15 results in loss of 10 durability", () => {
      const items = {
        name: "weapon",
        enhancement: 15,
        durability: 85
      };

      const answer = {
        name: "weapon",
        enhancement: 15,
        durability: 75
      };

      const fail = enhancer.fail(items);
      expect(fail).toEqual(answer);
    });

    test("enhancement at 16 results in loss of 1 enhancement level and 10 durability", () => {
      const items = {
        name: "weapon",
        enhancement: 16,
        durability: 85
      };

      const answer = {
        name: "weapon",
        enhancement: 15,
        durability: 75
      };

      const fail = enhancer.fail(items);
      expect(fail).toEqual(answer);
    });
  });

  describe(".repair()", () => {
    test("returns items", () => {
      const items = {
        name: "weapon",
        enhancement: 15,
        durability: 88
      };
      const repair = enhancer.repair(items);
      expect(repair).toBeTruthy();
    });

    test("restores durability to 100", () => {
      const items = {
        name: "weapon",
        enhancement: 10,
        durability: 20
      };

      const answer = {
        name: "weapon",
        enhancement: 10,
        durability: 100
      };

      const repair = enhancer.repair(items);
      expect(repair).toEqual(answer);
    });
  });
});
