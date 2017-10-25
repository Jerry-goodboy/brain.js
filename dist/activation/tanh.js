'use strict';

/**
 *
 * @param weight
 * @returns {number}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tanh = tanh;
exports.tanhDerivative = tanhDerivative;
function tanh(weight) {
  return Math.tanh(weight);
}

/**
 * @description grad for z = tanh(x) is (1 - z^2)
 * @param weight
 * @param error
 * @returns {number}
 */
function tanhDerivative(weight, error) {
  return (1 - weight * weight) * error;
}
//# sourceMappingURL=tanh.js.map