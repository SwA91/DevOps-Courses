const { syncDB } = require("../../tasks/sync-db");

describe("pruebas de sync-db", () => {
  test("debe de ejecutar el proceso dos veces", () => {
    syncDB();
    const times = syncDB();

    // console.log("se llamo ", times);

    expect(times).toBe(2);
  });
});
