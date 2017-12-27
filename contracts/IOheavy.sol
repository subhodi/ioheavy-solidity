pragma solidity ^0.4.15;
contract IOheavy {

    mapping(bytes32 => uint) public map;

    function seedMap(bytes32[] _keys, uint[] _values) public {
        uint len=_values.length;
        for(uint i=0;i<len;i++) {
            map[_keys[i]] = _values[i];
        }
    }

    function get(bytes32 _key) constant returns(uint) {
        return map[_key];
    }
}