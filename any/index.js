//Generic classes
var KeyValue = /** @class */ (function () {
    function KeyValue(key) {
        this.key = key;
    }
    return KeyValue;
}());
var pair = new KeyValue(1);
var pair2 = new KeyValue("1");
// pair.key. we can use the string methods but with type of any not
