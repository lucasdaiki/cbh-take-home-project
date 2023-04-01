const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const partitionKey = deterministicPartitionKey();
    expect(partitionKey).toBe("0");
  });

  it("Returns the partitionKey (string) when partition key is provided", () => {
    const event = { partitionKey: "testPartitionKey" };

    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("testPartitionKey");
  });

  it("Returns the partitionKey (json) when partition key is provided", () => {
    const event = { partitionKey: { test: "PartitionKey" } };

    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(JSON.stringify(event.partitionKey));
  });

  it("Returns a hash when partition key is not provided", () => {
    const event = { anotherField: { partition: "key" } };

    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toMatchSnapshot();
  });

  it("Returns a hash when candidate is bigger than the MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: new Array(300).fill('a').join('') };

    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toMatchSnapshot();
  });
});
