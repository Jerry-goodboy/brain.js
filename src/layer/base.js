'use strict';

export default class Base {
  static get defaults() {
    return {
      width: 1,
      height: 1,
      depth: 1
    };
  }

  static get jsonKeys() {
    return [
      'width',
      'height',
      'depth',
      'outputs',
      'errors',
      'weights'
    ];
  }

  constructor(settings = {}) {
    //layers
    this.inputLayer = null;
    this.inputLayers = null;

    //size
    this.width = null;
    this.height = null;
    this.depth = null;

    //methods
    this.predictKernel = null;
    this.compareKernel = null;
    this.learnKernel = null;

    //what matters :P
    this.outputs = null;
    this.errors = null;
    this.deltas = null;
    this.weights = null;
    this.changes = null;

    const defaults = this.constructor.defaults;
    for (let p in defaults) {
      if (!defaults.hasOwnProperty(p)) continue;
      this[p] = settings.hasOwnProperty(p)
        ? settings[p]
        : defaults[p];
    }
  }

  setupKernels() {
    throw new Error('setupKernels not implemented on BaseLayer');
  }

  predict() {
    throw new Error('predict not implemented on BaseLayer');
  }

  compare() {
    throw new Error('compare not implemented on BaseLayer');
  }

  learn() {
    throw new Error('learn not implemented on BaseLayer');
  }

  toArray() {
    return this.outputs.toArray();
  }
}