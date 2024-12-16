import {
  authenticateUser,
  product,
  usernameToLowerCase,
  UsernameToLowerCase,
} from "../app/BasicUtils";

describe("BasicUtils test suite", () => {
  it("returns the product of 3 and 2", () => {
    // arrange
    const sut = product;

    // acting
    const actual = sut(3, 2);

    //asserting
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(7);
    expect(actual).toBeGreaterThan(5);
    expect(actual).toBeLessThanOrEqual(6);
  });

  it("returns the product of 10 and 5", () => {
    // arrange
    const sut = product;

    // acting
    const actual = sut(10, 5);

    //asserting
    expect(actual).toBe(50);
    expect(actual).toEqual(50);
    expect(actual).toBeLessThan(60);
    expect(actual).toBeGreaterThan(40);
    expect(actual).toBeLessThanOrEqual(50);
  });

  // not repeating code for different parameters
  it.each([
    [2, 2, 4],
    [3, 5, 15],
  ])(
    "test!! should return the product of %i & %i as %i",
    (num1, num2, expected) => {
      const actual = product(num1, num2);
      expect(actual).toBe(expected);
    }
  );

  describe("username to lowercase test suite", () => {
    it.each([
      { input: "SoUrAV", expected: "sourav" },
      { input: "jhON", expected: "jhon" },
    ])(
      "test!! should return the username: $input as $expected ",
      ({ input, expected }) => {
        const actual = usernameToLowerCase(input);
        expect(actual).toEqual(expected);
      }
    );
  });

  describe("Authentication test suite", () => {
    it("return the lowercase username of a valid user", () => {
      // arrange
      const sut = authenticateUser;

      // act
      const actual = sut("deveLOPER", "dev");

      // assert
      expect(actual.usernameToLower).toBe("developer");
    });

    it("return the username characters of a valid user", () => {
      // arrange
      const sut = authenticateUser;

      // act
      const actual = sut("deveLOPER", "dev");

      // assert
      expect(actual.usernameCharacters).toEqual([
        "d",
        "e",
        "v",
        "e",
        "L",
        "O",
        "P",
        "E",
        "R",
      ]);
    });

    it("return the username jumbled characters of a valid user", () => {
      // arrange
      const sut = authenticateUser;

      // act
      const actual = sut("deveLOPER", "dev");

      // assert
      expect(actual.usernameCharacters).toEqual(
        expect.arrayContaining(["L", "e", "v", "e", "d", "O", "E", "P", "R"])
      );
    });

    it("return the user details of a valid user", () => {
      // arrange
      const sut = authenticateUser;

      // act
      const actual = sut("deveLOPER", "dev");

      // assert
      expect(actual.userDetails).toBeDefined();
      expect(actual.userDetails).not.toBeUndefined(); // use .not to turn false to true
      expect(actual.userDetails).toEqual({});
      expect(actual.isAuthenticated).toBeTruthy();
      expect(actual.isAuthenticated).not.toBeFalsy();
    });

    it("return true if isAuthenticated is true of a valid user", () => {
      // arrange
      const sut = authenticateUser;

      // act
      const actual = sut("deveLOPER", "dev");

      // assert
      expect(actual.isAuthenticated).toBeTruthy();
      expect(actual.isAuthenticated).not.toBeFalsy();
    });
  });
  // it.only("test-case name", () => { ... }); runs only this particular test
  //   it("User authentication", () => {
  //     // arrange
  //     const sut = authenticateUser;

  //     // acting
  //     const actual = sut("deveLOPER", "dev");
  //     console.log(actual);

  //     // assert
  //     expect(actual).toBeDefined();
  //     // toBe() works only with primitive type
  //     expect(actual.usernameToLower).toBe("developer");
  //     // toBe() does not work with arrays
  //     // expect(actual.usernameCharacters).toBe(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R']);
  //     expect(actual.usernameCharacters).toEqual([
  //       "d",
  //       "e",
  //       "v",
  //       "e",
  //       "L",
  //       "O",
  //       "P",
  //       "E",
  //       "R",
  //     ]);
  //     expect(actual.usernameCharacters).toContain("L");
  //     expect(actual.isAuthenticated).toBeTruthy();
  //   });

  describe.skip("UserNameToLowercase class test suite", () => {
    // setup
    let sut: UsernameToLowerCase;
    beforeEach(() => {
      console.log("setup from here");
      sut = new UsernameToLowerCase();
    });

    afterEach(() => {
      console.log("teardown from here");
    });

    it("returns the lowercase of a valid username", () => {
      const actual = sut.toLower("Dan");
      console.log(actual);
      expect(actual).toBe("dan");
    });
    /* The function that throws an exception 
    needs to be invoked within a wrapping function 
    otherwise the toThrow assertion will fail.*/
    it("throws an error for an invalid username", () => {
      expect(() => sut.toLower("")).toThrow();
      expect(() => sut.toLower("")).toThrowError("Invalid username!");
    });

    it.skip("throws an error for an invalid username", () => {
      function handleError() {
        const actual = sut.toLower("");
      }

      expect(handleError).toThrow();
    });

    it.todo("test for a valid password");
  });
});
