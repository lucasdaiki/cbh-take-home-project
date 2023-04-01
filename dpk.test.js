const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey (string) when partition key is provided", () => {
    const event = { partitionKey: "testPartitionKey" };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("testPartitionKey");
  });

  it("Returns the partitionKey (json) when partition key is provided", () => {
    const event = { partitionKey: { test: "PartitionKey" } };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });

  it("Returns a hash when partition key is not provided", () => {
    const event = { anotherField: { partition: "key" } };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('de8bb975b898b524a6dc641acac54df5dbbd84320e8d87bca24098f17c754a20d3d7b6d131969cef58be21577a5833debbe8f673303649ee44b34b26f119909b');
  });

  it("Returns a hash when candidate is bigger than the MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: new Array(300).fill('a').join('') };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302');
  });
});
