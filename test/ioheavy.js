var IOheavy = artifacts.require("./IOheavy.sol");
var globalInstance;
contract('IOheavy', function (accounts) {
  it("should delpoy contract", function () {
    return IOheavy.deployed().then(function (instance) {
      assert.notEqual(instance.address, null, "address is null");
    })
  });

  it("should Insert `k` tuples", function () {
    return IOheavy.deployed().then(function (instance) {
      var len = 500;
      var k = 0;
      var keys = new Array(len);
      var values = new Array(len);
      for (var i = 0; i < len; i++) {
        keys[i] = "accounts_" + k;
        values[i] = k;
        k++;
      }
      return instance.seedMap(keys, values).then(function (res) {
        return { instance, k };
      })
    }).then(function (object) {
      return object.instance.get('accounts_' + (object.k - 1));
    }).then(function (balance) {
      console.log('\x1b[33m%s\x1b[0m', balance.valueOf());
      assert.notEqual(balance.valueOf(), 0, "value shouldn't be zero")
    })
  });

  it("should Insert `k`+500 tuples", function () {
    return IOheavy.deployed().then(function (instance) {
      var len = 500;
      var k = 500;
      var keys = new Array(len);
      var values = new Array(len);
      for (var i = 0; i < len; i++) {
        keys[i] = "accounts_" + k;
        values[i] = k;
        k++;
      }
      return instance.seedMap(keys, values).then(function (res) {
        return { instance, k };
      })
    }).then(function (object) {
      return object.instance.get('accounts_' + (object.k - 1));
    }).then(function (balance) {
      console.log('\x1b[33m%s\x1b[0m', balance.valueOf());
      assert.notEqual(balance.valueOf(), 0, "value shouldn't be zero")
    })
  });

  it("should Insert `k`+500+500 tuples", function () {
    return IOheavy.deployed().then(function (instance) {
      var len = 500;
      var k = 1000;
      var keys = new Array(len);
      var values = new Array(len);
      for (var i = 0; i < len; i++) {
        keys[i] = "accounts_" + k;
        values[i] = k;
        k++;
      }
      return instance.seedMap(keys, values).then(function (res) {
        return { instance, k };
      })
    }).then(function (object) {
      return object.instance.get('accounts_' + (object.k - 1));
    }).then(function (balance) {
      console.log('\x1b[33m%s\x1b[0m', balance.valueOf());
      assert.notEqual(balance.valueOf(), 0, "value shouldn't be zero")
    })
  });

});
